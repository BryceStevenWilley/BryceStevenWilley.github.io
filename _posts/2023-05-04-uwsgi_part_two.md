---
layout: post
title: "Bug Solving 2: uWSGI boogaloo"
tags: software programming debugging rough
date: 2023-05-04 19:00:00 -0500
headerImg:
  src: /assets/headers/man-dancing_ahhhh.png
  narrow: /assets/headers/man-dancing_ahhhh.png
  width: "150"
  height: "200"
  class: no-radius
  alt: "The man-dancing emoji, with the python logo poorly photoshopped as the dancer's head."

---

Just another fun bug romp. I don't have any overarching morals this time (unlike [my last bug solving session]({% post_url 2022-03-22-uwsgi-bug-levels %})),
just straight describing the bug process. This one jumps around a lot, so I won't quite explain everything here, though I hope to link to enough
outside sources that it's still helpful.

## ALWeaver performance issues

At the beginning of April, we hosted [LIT Con](https://suffolklitlab.org/LITCon/2023/about/), the Suffolk LIT Lab
legal tech conference. One of the talks we had showed off the [Weaver](https://github.com/SuffolkLITLab/docassemble-ALWeaver),
a tool that helps make prototype docassemble interviews quickly.

However, earlier in March, my colleague had mentioned that the Weaver had crashed a few times when he tried to have the students in his class
access it all at once. If it happened then, it's likely to happen when we do that with ~75 people. We had a few
ideas about what was causing the issue:
* we had recently added `spacy` to one of the libraries we were using, which loaded a huge (~1GB) NLP model into RAM. Maybe the RAM usage was skyrocketing?
* maybe the server just couldn't handle that many people, and the CPU would get locked up?
* something completely different?

The first step was to reproduce the crash; by running Weaver with a lot of simultaneous users.

To start, I did the tests manually:
* I opened 4 browser windows to the locally running copy of the Weaver and tried to run everything.
* Went through once while watching cpu usage with `top`. `pdftoppm` does seem to take up some cpu time, but not a ton.
* Went through again 4 times, and 3 of them got a 502 error from nginx immediately. There's this in the logs:

```txt
terminate called after throwing an instance of 'std::runtime_error'
  what():  pybind11_object_dealloc(): Tried to deallocate unregistered instance!
DAMN ! worker 1 (pid: 570254) died, killed by signal 6 :( trying respawn ...
Respawned uWSGI worker 1 (new pid: 573197)
```

That doesn't seem like I'd be able to find and fix it. Hopefully it's a one-off thing (spoiler alert: it was not).

`top` now shows this at rest:

```txt
    PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
 570184 www-data  20   0 1382508 722812  67940 S   0.0   2.9   0:06.79 celery
 570185 www-data  20   0 1382512 722736  67924 S   0.0   2.9   0:06.91 celery
 570183 www-data  20   0 1382508 722628  67936 S   0.0   2.9   0:06.90 celery
 127112 www-data  20   0 1481444 641084  83916 S   0.0   2.6   6:23.12 uwsgi
 573197 www-data  20   0 1748708 585700  14924 S   0.3   2.4   0:02.07 uwsgi
 570151 www-data  20   0  711112 262160  44092 S   0.0   1.1   0:06.08 celery
 570238 www-data  20   0  799316 149492  49956 S   0.0   0.6   0:05.17 python
 570188 www-data  20   0  619076 128828  32628 S   0.3   0.5   0:05.00 celery
 570075 rabbitmq  20   0 2652672 120676  60900 S   0.0   0.5   0:06.93 beam.smp
```

Meaning there are now 5 processes with > 500MB in RAM, most of them celery, the background processing task that docassemble uses. I assumed this was because
of the `spacy` model being loaded. That's a descent amount of memory pressure on a server with only 4GB of memory. So, I did a bit of refactoring to
remove that dependency, and move it to a different server, where it would only be loaded once. After all the refactoring, the celery workers
all use 220MB RAM each; this seems to be normal, as importing other docassemble python modules (`docassemble_pattern.en`) can take up 190MB.

The main downside; it still crashes at the same place! I ran 4 windows through once, then started over, then once more, and all 4 windows got an immediate 502, same as before.

At this point, I decided to make a quick script that would use our integration tester, [ALKiln](https://github.com/SuffolkLITLab/ALKiln) to run puppeteer (really just a Chrome window) and run the Weaver. That script was pretty simple, and made it much simpler to start 6 of those, and wait until everything crashed:

```bash
#!/usr/bin/bash
mydir=$RANDOM;
echo $mydir
mkdir $mydir;
cd $mydir; 
cp /home/brycew/Developer/LITLab/code/runtime_config.json .
alkiln-run --sources /home/brycew/Developer/LITLab/code/docassemble-ALWeaver/docassemble/ALWeaver/data/sources/ > bash_console.txt &
cd ..
```

At this point I saw something in the logs that I thought was useful:

```txt
  Traceback (most recent call last):
  ...
  File "/usr/share/docassemble/local3.10/lib/python3.10/site-packages/sqlalchemy/engine/default.py", line 747, in do_execute
    cursor.execute(statement, parameters)
sqlalchemy.exc.OperationalError: (psycopg2.OperationalError) SSL error: decryption failed or bad record mac
[SQL: SELECT "user".id AS user_id, ... FROM "user" LEFT OUTER JOIN ... WHERE "user".id = %(pk_1)s]
[parameters: {'pk_1': 1}]
(Background on this error at: https://sqlalche.me/e/20/e3q8)
During handling of the above exception, another exception occurred:
Traceback (most recent call last):
  ...
  File "/usr/share/docassemble/local3.10/lib/python3.10/site-packages/sqlalchemy/engine/base.py", line 666, in _revalidate_connection
    self._invalid_transaction()
  File "/usr/share/docassemble/local3.10/lib/python3.10/site-packages/sqlalchemy/engine/base.py", line 656, in _invalid_transaction
    raise exc.PendingRollbackError(
sqlalchemy.exc.PendingRollbackError: Can't reconnect until invalid transaction is rolled back.  Please rollback() fully before proceeding (Background on this error at: https://sqlalche.me/e/20/8s2b)
```

I'd seen an error like this before, and Googling led to [a blogs post](https://virtualandy.wordpress.com/2019/09/04/a-fix-for-operationalerror-psycopg2-operationalerror-ssl-error-decryption-failed-or-bad-record-mac/) that matched our problem, but not exactly. The post describes UWSGI with more than one process; there's only [one uwsgi process in docassemble](https://github.com/jhpyle/docassemble/blob/master/Docker/config/docassemblelog-expose-uwsgi.ini). So how is there a second process getting the connection?

Looking around a bit more, this line appears right before the above stack trace:

```txt
terminate called after throwing an instance of 'std::runtime_error'
  what():  pybind11_object_dealloc(): Tried to deallocate unregistered instance!
DAMN ! worker 1 (pid: 666329) died, killed by signal 6 :( trying respawn ...
Respawned uWSGI worker 1 (new pid: 683455)
```

So the new theory of what's happening is that:
* docassemble creates SQL alchemy connections in the main app
* something is throwing a `std:runtime_error`. It has to be from C++, the only language with that syntax and runtime error.
* after respawning, the new uWSGI worker is reusing the same SQL alchemy connection, which causes the above error, and crashes until docassemble can recover

I tried with no avail to try to track down where the C++ error could be coming from; I couldn't find where pybind was being used in uWSGI at all.

After sleeping on it, I realized that it might not be in uWSGI! I looked through our interview code, seeing what docassemble operations are being performed and what external libraries, if any, that we or docassemble were calling that would use some C++ code that used `pybind`. The only external library that we were using was `pikepdf`, in [`pdf_concatenate`](https://github.com/jhpyle/docassemble/blob/36991c45378250766274a7a8145a89799616931b/docassemble_base/docassemble/base/pandoc.py#L713-L758).

I got stuck for a bit, looking around in [the pybind11 source code](https://github.com/search?q=repo%3Apybind%2Fpybind11%20Tried%20to%20deallocate%20unregistered%20instance!&type=code) and the `pikepdf` source, until I realized the other obvious part; `pybind11_object_dealloc` isn't being called manually! It's happening automatically when the [object's deconstructor is called](https://en.cppreference.com/w/cpp/language/destructor)!

I happened to look through the `pikepdf` documentation, and it [suggests to close the PDF objects](https://pikepdf.readthedocs.io/en/latest/api/main.html#pikepdf.Pdf.close). This should have been obvious, but it wasn't; our code and quite a bit of code in docassemble never closed the `pikepdf` objects. Even though the documentation didn't mention anything other than issues with references and copying pages around, I made [a patch to close all of the PDF files](https://github.com/jhpyle/docassemble/pull/631) after use. With that patch, it actually works much better now! Pre-patch with 6 browser windows I could consistently cause the error, but after the patch I can run up to 10 browsers, and they all complete safely (though a bit slowly).
