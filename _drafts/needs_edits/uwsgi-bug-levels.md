---
layout: post
title: "Levels of timesink bugs"
categories: uwsgi python pip bugs
---

TODO: make the code font stand out a bit more.

## The levels

3 types of gradients while fixing bugs. You can take a step back (am I changing code in the right place, is there somewhere else up the stack that I could just avoid the problem I'm having?), you can change the code where you are now, or you can reach down and figure out your system more.

This works best in combination with some other advice about debugging: https://jvns.ca/blog/2019/06/23/a-few-debugging-resources/, https://jvns.ca/blog/2021/06/08/reasons-why-bugs-might-feel-impossible/.
This way of thinking is useful but might not be concrete enough to help you in your current problem. It's mostly just another example of exploitation vs exploration that appears in a lot of different places.

### OLD

Bugs are solved in either 2 ways: you've either seen it before and know how to fix it, or you slowly drill down each level of your stack
until you've found the actual issue. The latter can be an absolute timesuck, and it's difficult to know when to just stop looking and try another solution.

Reflecting on a recent bug I fixed, I've noticed myself using a particular pattern to delineate the stages of how I understood the bug, and how the solutions I came up with changed when I discovered more and more about it. Those stages were "random walks", "mechanical fix", and "systems fix". 

I use the term "bug" here a lot but these stages apply to lots of different software tasks. For a feature that involve a bit of algorithmic work, you can think instead of "naive / brute force algorithm", "specialized algorithm", and "parameter-tweaked / novel algorithm". If you are writing a brand new product, those could be "prototype", "slim user-tested product", and "polished experience". Even though you can just take any task of split it up to different amount of expertise, I think there's a shared approach to how the amount of knowledge you have about a problem changes how you approach it. It's hard to be sure what level you are at for complex problems (TODO: read the https://www.ribbonfarm.com/2010/07/26/a-big-little-idea-called-legibility/, it might apply here), but for concrete bugs, it's usually pretty clear.

## Bug Intro

I'll use the same example throughout this post, a recent bug that I ran into involving python and uWSGI. 

For context, I work with guided interviews on [docassemble](docassemble.org), a platform that uses python and YAML to ask a user questions, screen by screen. The team I'm on, the Suffolk LIT Lab, is trying to make writing those interviews easier by automatically generating them from input PDFs that someone might have to fill out to go to court. 
We've been improving the automatic generation part, and recently started work on the [FormFyxer](https://github.com/SuffolkLITLab/FormFyxer), which ingests PDFs and uses some NLP to predict what semantically each field in the PDF is supposed to be, like a litigant's name, their address, the court name, etc. 

FormFyxer uses `spacy`, a common NLP package for python. However, to use spacy, it needs some extra model files that aren't installed with the standard `pip install spacy`. The docs suggest that you run [`spacy download`](https://spacy.io/usage/models#download), but that's not desirable for a few reasons:
1. it'd would be annoying to have to login to the AWS lightsail server and manually run the `spacy download` command inside of the running docker container to actually install it.
2. for non-technical people (a lot of whom do run docassemble servers), the above step is extremely difficult, if not impossible to do. You have to know ssh, how to enter a running docker container, how to source a python environment, and then the exact `spacy` command to run.

The most reliable way to make sure those extra files get installed is to attempt to load them, catch any errors thrown, hardcode in a download command and try to download the files through python, then try to load the files again. Since `spacy download ...` just calls a function in the spacy library, we can call [that function too](https://github.com/SuffolkLITLab/FormFyxer/blob/0b2ed81ac958b35ee4acc5972a6f6bc24b1138d6/formfyxer/lit_explorer.py#L38).

Things work fine locally, I can make a new virtual env, only install the FormFyxer package, try to run the code, and it won't fail, it'll download the spacy files when trying to run. Great!

Uploading that to Docassemble seemed to work well as well, but trying to start the interview session results in a 502 error.

## Bug Level 1: random walk fix

This is generally just a rollback, or, if you're unlucky, randomly changing things about the inputs and environment until it work consistently. It rarely works, but when it does' it's very likely for things to stop there.

However, this is the first point my assumptions about things were wrong: I knew that docassemble loaded certain files on a server restart. https://docassemble.org/docs/packages.html#autoloading However, files marked as pre-load don't actually load on the restart, they load at the beginning of every interview session. 

We eventually figured out that just reverting to the previous, more hacky looking solution of `subprocess.run("python -m pip install ...")` worked. My best guess for why this worked at the time was that maybe running it in a new process left enough time for the server to respond in the main thread.

This is how this stage of understanding usually works, lots of conjectures and guesses, some correct, in my case most incorrect. But given how precarious the whole thing seemed, I didn't feel like it was the right answer, and was afraid that a small change somewhere else could still cause problems. So I decided to continue to the next stage of understanding.

## Bug Level 2: understanding fix

What could be going wrong? The log files complain about postgres a ton! (In fact, my collegue found that before he realized that it was this package causing it). Those errors show up in the docassemble logs. However, that's not what actually caused things. UWSGI logs are in a different file, and in there are two key lines:
```
localhost [pid: 35527|app: 0|req: 3/3] 172.17.0.1 () {56 vars in 1412 bytes} [Fri Feb 25 17:01:24 2022] GET /updatepackage => generated 105167 bytes in 398 msecs (HTTP/1.1 200) 8 headers in 413 bytes (1 switches on core 1)
Downloading word2vec model en_core_web_lg
unable to load configuration from pip
DAMN ! worker 1 (pid: 35527) died :( trying respawn ...
```

There it is! Trying to download the word2vec model, and then dying! Why is it dying? And what is `unable to load configuration from pip`? 

The only (literally only one!) google result from this was a unanswered (at the time: I have since answered it) Stack overflow question https://stackoverflow.com/questions/59766493/cannot-install-external-package-insde-python-when-uwsgi-run. 

Hm. Well, we know that Docassemble uses both flask and uwsgi. Lets search for that exact string in both projects. There it is, in uwsgi! https://github.com/unbit/uwsgi/blob/ffced3256e6de7e841e4ca038620437f3c8042c0/core/uwsgi.c#L4835 It looks like it's trying to load something? Why would it be trying to do that?

In hindsight, it's very clear at this point that `python` is not being started, and uwsgi is. However, my mental model still had uwsgi running from the beginning: why would it be starting now, we're starting a new python process! My next step was to understand uwsgi a bit better: I knew close to nothing about it.

After some of the tutorials, I recreated the error in the simplest uwsgi app that I could:

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

Now, again, I was so close, but couldn't see it. "Just print `sys.executable`!!!" But I did know a bit more about the problem I was looking at: it was specifically about uwsgi and running Popen (or run, they're the same thing essentially). Thus with that, I had the right search term: "uwsgi and subprocess". Brought me to https://dev-qa.com/146753/what-is-happening-in-uwsgi-with-subprocess-popen, which had the answer right there: `sys.executable` isn't python, it's uwsgi!

Assumptions were what made this problem take longer that I expected. There were a few that are useful to unpack.

One assumption that I was making about the spacy code was that it would be doing something other than a pip command, given that the documentation doesn't give any such pip commands itself. The hacky way to go about things I guess would be to add the generated pip commands directly to the requirements.txt / setup.py (those point directly to [the github repo releases page](https://github.com/explosion/spaCy/blob/master/spacy/about.py#L4)). But then if anything changes about how spacy installs those extra commands, it wouldn't work.


Should look more into `sys.executable`:
https://docs.python.org/3/library/sys.html#sys.executable just says "a string giving the absolute path of the excetublae binary for this python interpreter, on systems where this makes sense."

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

For any sense of the word, it does seem like uwsgi doesn't handle this nicely. However, after a little digging, I found https://github.com/unbit/uwsgi/issues/670, which shows that other have been running into the same problem! The fix seems to just have been released as https://uwsgi-docs.readthedocs.io/en/latest/Changelog-2.0.20.html?highlight=sys.executable#changes too, which is very convient.

Part of the complication is mentioned in that issue: uwsgi is technically a python interepreter, as it links libpython.so. However, there's no direct link to a separate python interpreter outside of uwsgi if you aren't using something like a venv with it (where there is a separate python executable, and you can point straight to it).

## Bug Level 3: fixing the root

Think back to the beginning of this problem though. We wanted to download a model so we have it to use. Our solution is okay, but not great:
* the download happens on your first run, meaning the first run of our software would hang for ~30 seconds as the model downloads for the first time
* if we used this in any other module files, we'd have to add the exact some code, or specifically import spacy and the model from that python module

And most importantly (and why I have this section at all), our solution would still break in strange ways on other people's machines.

TODO(brycew): this breaks the whole idea here: I'm back to square one, flailing around. There's a lot more to understand / dive into, but it's docassemble BS that's almost impossible to understand. There are no distinct stages, it's just the same two again and again: I have no idea what's happening, and I think I've got it!, back to I have no idea what's happening when it turns out the previous solution doesn't work.

## The stages overall

It might seem like the stages are better as you go further in depth. Having full knowledge about a system is always great! But the issue is with how long it takes to get there; in my case I was lucky and getting to the second stage only took 1 day. It could have taken much longer if I hadn't been lucky and found the exact answer online. Getting to the 3rd stage was lucky as well, as the fix might not have been already merged, or worse, it could have been rejected as a won't fix, leaving now real way to patch it.

Ideally, if you have a set of bugs or technical problems, you would do a BFS down to the 3rd stage for each, not a DFS where you get to the 3rd stage for the 1st problem, then all the way to the 3rd stage for the 2nd problem, etc. That would take a long time for you to get relatively little work done. It's something I need to improve on, as I usually feel the draw of at least the 2nd stage, and my curiousity gets the better of me.