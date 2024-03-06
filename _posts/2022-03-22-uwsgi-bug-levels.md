---
layout: post
title: "Phases of Bug Solving"
tags: python uwsgi docassemble pip software bug-hunt rough
date: 2022-03-22 17:00:0 -0500
---

Bugs are solved in either 2 ways:
1. you've seen it before and know how to fix it, or
2. you slowly drill down each level of your stack until you've found the actual issue.

The second can be an absolute timesuck, and it's difficult to know when to just stop looking and try another solution.

When fixing a recent bug[^1], I realized there
there are a few things that I do when fixing the second type of bug:

* You can make random changes to your code where you are now (random walk)
* You can stop changing code, and read the library or system you are using (understand)
* With understanding, you can either:
  * patch the bug in your code
  * fix the bug at the root cause in it's library

While this isn't everything you can do when fixing bugs, they are steps I find myself most repeating, and worth reflecting on.

This process works best in combination with some other advice about debugging, including [some debugging resources](https://jvns.ca/blog/2019/06/23/a-few-debugging-resources/), and [advice](https://jvns.ca/blog/2021/06/08/reasons-why-bugs-might-feel-impossible/) from [Julia Evans](https://jvns.ca).

## Bug Intro

I'll use the same example throughout this post, a recent bug that I ran into involving python and uWSGI.

For context, I work with guided interviews on [docassemble](docassemble.org), a platform that uses python and YAML to ask a user questions, screen by screen. The team I'm on, the Suffolk LIT Lab, is trying to make writing those interviews easier by automatically generating them from input PDFs that someone might have to fill out to go to court.
We've been improving the automatic generation part, and recently started work on the [FormFyxer](https://github.com/SuffolkLITLab/FormFyxer), which ingests PDFs and uses some natural language processing (NLP) to predict what each field in the PDF is supposed to be semantically, like a litigant's name, their address, the court name, etc.

FormFyxer uses `spacy`, a common NLP package for python. However, to use `spacy`, it needs some extra model files that aren't installed with the standard `pip install spacy`. The docs suggest that you run [`spacy download`](https://spacy.io/usage/models#download), but that's not desirable because you would have to  login to the AWS lightsail server and manually run the `spacy download` command inside of the running docker container to actually install it. This is bad because:
1. it's just annoying to do
2. for non-technical people (a lot of whom do run docassemble servers), the above step is extremely difficult, if not impossible to do. You have to know ssh, how to enter a running docker container, how to source a python environment, and then the exact `spacy` command to run.

The most reliable way to make sure those extra files get installed is to attempt to load them, catch any errors thrown, hardcode in a download command and try to download the files through python, then try to load the files again. Since `spacy download ...` just calls a function in the spacy library, we can call [that function too](https://github.com/SuffolkLITLab/FormFyxer/blob/0b2ed81ac958b35ee4acc5972a6f6bc24b1138d6/formfyxer/lit_explorer.py#L38).

Things work fine locally, I can make a new virtual env, only install the FormFyxer package, try to run the code, and it won't fail, it'll download the spacy files when trying to run. Great!

Uploading that to Docassemble seemed to work well as well, but trying to start the interview session results in a 502 error. The debugging starts!

## The random walk fix

This is generally just a rollback, or, if you're unlucky, randomly changing things about the inputs and environment until it work consistently. It rarely works, but when it does' it's very likely for things to stop there.

However, this is the first point my assumptions about things were wrong: I knew that docassemble [loaded certain files on a server restart](https://docassemble.org/docs/packages.html#autoloading). However, files marked as pre-load don't actually load on the restart, they load at the beginning of every interview session.

We eventually figured out that just reverting to the previous, more hacky looking solution of `subprocess.run("python -m pip install ...")` worked. My best guess for why this worked at the time was that maybe running it in a new process left enough time for the server to respond in the main thread.

This is how this stage of understanding usually works, lots of conjectures and guesses, some correct, but most incorrect. But given how precarious the whole thing seemed, I didn't feel like it was the right answer, and was afraid that a small change somewhere else could still cause problems. So I decided to continue to the next stage of understanding.

## Stopping to understand

What could be going wrong? The log files complain about postgres a ton! (In fact, my colleague found that before he realized that it was this package causing it). Those errors show up in the docassemble logs. However, that's not what actually caused things. uWSGI logs are in a different file, and in there are two key lines:

```txt
localhost [pid: 35527|app: 0|req: 3/3] 172.17.0.1 () {56 vars in 1412 bytes} [Fri Feb 25 17:01:24 2022] GET /updatepackage => generated 105167 bytes in 398 msecs (HTTP/1.1 200) 8 headers in 413 bytes (1 switches on core 1)
Downloading word2vec model en_core_web_lg
unable to load configuration from pip
DAMN ! worker 1 (pid: 35527) died :( trying respawn ...
```

There it is! Trying to download the word2vec model, and then dying! Why is it dying? And what is `unable to load configuration from pip`?

The only (literally only one!) google result from this was [an unanswered Stack Overflow question](https://stackoverflow.com/questions/59766493/cannot-install-external-package-insde-python-when-uwsgi-run) (I have since answered it).

Hm. Well, we know that Docassemble uses both flask and uWSGI. Lets search for that exact string in both projects. [There it is, in uWSGI](https://github.com/unbit/uwsgi/blob/ffced3256e6de7e841e4ca038620437f3c8042c0/core/uwsgi.c#L4835)! It looks like it's trying to load something? Why would it be trying to do that?

In hindsight, it's very clear at this point that `python` is not being started, and uWSGI is. However, my mental model still had uWSGI running from the beginning: why would it be starting now, we're starting a new python process! My next step was to understand uWSGI a bit better: I knew close to nothing about it.

After some of the tutorials, I recreated the error in the simplest uWSGI app that I could:

```python
import subprocess
import sys

def application(env, start_response):
    start_response('200 OK', [('Content-Type', 'text/html')])
    print(sys.executable)
    subprocess.run(["python3", "-m", "pip", "install", "numpy"])
    #output, error = p.communicate()
    output = None
    return [output.encode() if output else b'Hello']

```

Now, again, I was so close, but couldn't see it. "Just print `sys.executable`!" But I did know a bit more about the problem I was looking at: it was specifically about uWSGI and running `subprocess.Popen` (or `subprocess.run`, they're the same thing essentially). With that, I had the right search term: "uWSGI and subprocess", which brought me to straight to the answer [`sys.executable` isn't python, it's uWSGI](https://dev-qa.com/146753/what-is-happening-in-uwsgi-with-subprocess-popen) (unfortunately that link died, and wasn't archived :/ )

My assumptions were what made this problem take longer that I expected. There were a few that are useful to unpack.

One assumption that I was making about the spacy code was that it would be doing something other than a pip command, given that the documentation doesn't give any such pip commands itself. The hacky way to go about things I guess would be to add the generated pip commands directly to the requirements.txt / setup.py (those point directly to [the github repo releases page](https://github.com/explosion/spaCy/blob/master/spacy/about.py#L4)). But then if anything changes about how spacy installs those extra commands, it wouldn't work.

## Trying to fix the root cause

At this point I could have taken the option to patch the bug in my own code: the hacky looking solution of `subprocess.run("python -m pip install ...")` would worked just fine. However, I wanted to see if it would be possible to fix the root cause in uWSGI.

I started to look more into `sys.executable`. [It's python documentation](https://docs.python.org/3/library/sys.html#sys.executable) just says "a string giving the absolute path of the executable binary for this python interpreter, on systems where this makes sense", which wasn't helpful, so I put together a handful of experiments.

Ubuntu's default python (python2.7 :o)

```bash
$ python -c "import sys; print sys.executable"
/usr/bin/python
```

My python3 gives:

```bash
$ python3 -c "import sys; print(f'sys.executable: {sys.executable}')"
sys.executable: /usr/bin/python3
```

From a virtual env, it's this:

```bash
(litlab_venv) $ python3 -c "import sys; print(f'sys.executable: {sys.executable}')"
sys.executable: /home/brycew/Developer/LITLab/litlab_venv/bin/python3
```

For any sense of the word, it does seem like uWSGI doesn't handle this nicely. However, after a little digging, I found [this issue on uWSGI's GitHub](https://github.com/unbit/uwsgi/issues/670), which shows that other have been running into the same problem! The fix seems to just have been released as [in uWSGI 2.0.20](https://uwsgi-docs.readthedocs.io/en/latest/Changelog-2.0.20.html?highlight=sys.executable#changes) too, which is very convenient.

Part of the complication is mentioned in that issue: uWSGI is technically a python interpreter, as it links libpython.so. However, there's no direct link to a separate python interpreter outside of uWSGI if you aren't using something like a venv with it (where there is a separate python executable, and you can point straight to it).

## A secret third thing: avoid the bug entirely

Think back to the beginning of this problem though. We wanted to download a model so we have it to use. Our solution is okay, but not great:
* the download happens on your first run, meaning the first run of our software would hang for ~30 seconds as the model downloads for the first time
* if we used this in any other module files, we'd have to add the exact some code, or specifically import spacy and the model from that python module

And most importantly (and why I have this section at all), our solution would still break in strange ways on other people's machines.

Eventually, I got to the point where I needed to focus on a different part of the stack: python packaging. Eventually I setup FormFyxer so that [it installed the spacy models on install](https://github.com/SuffolkLITLab/FormFyxer/blob/main/setup.py#L7-L12), using not-so-great `setup.py` arbitrary code execution. That was another completely different system to learn, but the point was we avoided the above issues entirely, and would have avoided all that debugging.

## The stages overall

It might seem that the root fix is always the best. Having full knowledge about a system is always great! But the issue is with how long it takes to get there; in my case I was lucky and finding the root cause only took 1 day. It could have taken much longer if I hadn't been lucky and found the exact answer online. Actually fixing the root cause was lucky as well, as the fix might not have been already merged, or worse, it could have been rejected as a won't fix, leaving no real way to patch it.

Ideally, if you have a set of bugs or technical problems, don't go down the rabbit hole for each, and just fix them as locally as you can. Rabbit holes take a long time, while getting relatively little work done. It's something I need to improve on, as I usually feel the draw of understanding, and my curiosity gets the better of me.

[^1]: I originally wrote this back in March of 2022. However, it sat in drafts because I didn't really know what to do with it. Since deciding to [publish more writing without as much polish]({% post_url 2022-12-06-on-blog-posts %}), I've started going back through older stuff that I've written, editing for like an hour and then posting it. While was edited in February 2023, I've kept the original date since personally, I use posts like this to understand what I was working on at different points in time.
