---
layout: post
title: Docassemble and Algebraic Effects
tags: docassemble python algebraic-effects rough
date: 2024-07-04 16:00:00 -0500
use_highlight: true
---

I recently read [a blog post by Dan Abramov about Algebraic Effects](https://overreacted.io/algebraic-effects-for-the-rest-of-us/) (don't go off and read it yet! there's some context that I want to plant in your brain first). It's the most excited I've ever been to read a blog post, since it explains something that I've been struggling with for the past 4 years; what actually is Docassemble's programming paradigm? And how can we improve it? [^1]

## What is Docassemble?

[Docassemble](https://docassemble.org/) is a web platform for creating and hosting forms. It's gotten a lot of uptake in the legal community (I used it at my previous position at the [Suffolk LIT Lab](https://suffolklitlab.org/)), where it's used for generating documents like PDFs, aka document assembly (hence the name). An example usage of Docassemble is asking a user their contact information to make a letterhead, and then some questions about their legal issue. At the end, they'll get a customized DOCX or PDF of legal forms to help with that issue.

Docassemble has a lot of features that make it unique and appealing to this community, But what I want to talk about here is its model of computing. 

### The programming part

Here's a quick and dirty intro to Docassemble. There are two main aspects of a Docassemble program:

* the blocks, which are either chunks of Python code, or markdown-formatted, yaml-structured content shown to the user called a question block.
* the control flow: the two types of flow that we care about now are mandatory blocks and dependency satisfaction 
    * You can mark both types of blocks as mandatory. When running a program, the first thing Docassemble does is look for Mandatory blocks, and executes them. It executes question blocks be showing them to the user, and executes code blocks by just executing the Python code within.
    * Anytime Docassemble comes across an undefined variable, it stops execution and tries to find a block that defines that variable.

At this point a Hello World might help.

```yaml
---
# (1), (4)
mandatory: true
code: |
    # (2)
    title_and_name = title + " " + name
    # (6)
    final_screen
---
# (3)
code: |
    title = "Lord"
---
# (5)
question: What is your first name?
fields:
  - First name: name
    datatype: text
---
# (7)
event: final_screen
question: Hello, ${ title_and_name }!
---
```

When you run this program in Docassemble, the following will occur:

1. Docassemble will find the first mandatory block and execute it. Ours is the code block.
2. To execute the code block, Docassemble tries to run the contents as a python script. It runs the first line, but it fails, because `title` isn't defined yet.
4. Docassemble will actually catch the exception raised by the lack of a variable definition and will try to fix it. It starts from the bottom of the file and looks for blocks that define the variable that caused the exception. The second code block defines `title`, so Docassemble runs it and sets the value of the variable globally.[^2]
5. Docassemble then starts the whole process over from the beginning. It executes the first code block again and throws an exception on `name` this time.
6. The "What is your first name" question defines the variable `name` (as a field on the screen), so Docassemble shows that screen to the user. The user enters their name into a field on the screen, and clicks continue at the bottom of the page.
7. Docassemble starts the process over once again, and is able to execute the first line of the first code block. But it then throws an exception on the second line because `final_screen` isn't defined.
8. Docassemble looks for blocks that will define `final_screen`, and shows the user the event screen. At this point, the ending screen doesn't have a "continue" button, so the user doesn't go any further.

You know all the basics now! The main way Docassemble asks for information from users is by throwing exceptions, running other code blocks or showing a webform to the user, and then trying to recover from the original error by re-running everything. It's a unique method of writing and running code; re-trying code blocks is novel to me, and one that I was struggling to compare to different paradigms.

## What are Algebraic Effects

Now you should go and read [Dan's post](https://overreacted.io/algebraic-effects-for-the-rest-of-us/). We'll include our own example of effects below, using a made-up variant of python with effect syntax that mirrors the Docassemble example above.

```python
title = None
name = None
try:
    if title is None:
        title = perform "ask_title"
    if name is None:
        name = perform "ask_name"
    title_and_name = title + " " + name
handle Effect as eff:
    if eff == "ask_title":
        resume with "Lord"
    elif eff == "ask_name":
        resume with "Phobos"
print("Hello, " + title_and_name)   
```

To summarize Dan's post, algebraic effects are a way of recovering from errors, like a try-catch, but with a mechanism to recover from those errors and continue execution. In the example above, instead of raising an exception and letting the catch block clean up the mess, we can `perform` an effect (just a string in this case), `handle` it later, and, most importantly, `resume with` the new value to directly continue in the try block.

Hey, that sounds kinda similar to Docassemble. 

In fact, it's very similar. The simple act of attempting to recover from and resume computation after an exception makes Docassemble almost equivalent to algebraic effects. The Docassemble phrases I use here that match the official algebraic effect terms are [^3]:

* "Raise an exception" is `perform`
* "Finding the block that defines a variable" is for `handle`
* the thrown exception is the `Effect`
* re-running a block is `resume with`

I find the algebraic effect terms a bit more concise, so I'll try to stick to them for the rest of this post.

## How does Docassemble use Effects?

I'm new to algebraic effects, but from what I can tell, Docassemble uses them to a further extent than I've seen anywhere else. This makes it very useful as an example of how effects are used in production systems.

* Earlier, I said Docassemble almost used effects, because Docassemble isn't using _true_ algebraic effects; when doing its `resume with`, Docassemble re-executes a block from the beginning, not from where the exception occurred. If your code block isn't idempotent, i.e. if running it multiple times might get different results, then you're likely to run into bugs. This ends up encouraging developers to break many parts of the program into 1 or 2 line code blocks that set only a single variable. In algebraic terms, that would be like setting almost every variable with a handler and `resume with`. Certainly burdensome when done in standard procedural code, but Docassemble does make writing code blocks as handlers very easy and dynamic.
* Docassemble only handles `NameError`s, `AttributeError`s, and `KeyError`s. Other exceptions are propagated as normal through your code, and if the exception exits a code block, it'll error out the program. The ability to catch `AttributeError`s and `KeyError`s means that Docassemble can use information about the attribute's object or the key's dictionary to handle similar effects in different ways. For example, there can be two different code blocks that set the value of `person.name`, depending on if `person` is of type `Lawyer` or type `Client`, or depending on the value of `person.new_to_case`.
* Another side effect of Docassemble's blocks is that you can easily nest effects; a block that is handling an effect can then perform another effect that gets handled elsewhere. While this flexibility could lead to infinite loops between two blocks that depend on each other, DA will recognize the situation and show the developer an error.
* If two blocks can both be used to handle an effect, Docassemble chooses the one that appears later in the file[^4]. Algebraic effects would handle this through nesting one handler closer to the origin of an effect, but that's something Docassemble loses with its implicit handling. Trying to determine what is later on in the file does get difficult as your interviews grow to be multiple thousands of lines.
* Docassemble does let you define a [`DACatchAll` block](https://docassemble.org/docs/fields.html#catchall), which can be used to answer any type of exception/effect that isn't handled by any other block. An equivalent would be a try-catch that wraps around the top level of a program and hides all of the errors from the user, and it's just as error prone.

## So what now?

Now, I finally have a shared term with the rest of the world on a topic that could help Docassemble programmers. All 4 years, there's been certain parts of Docassemble programming that I've struggled with using and organizing that would be nice to improve:

* If Docassemble worked a bit more like algebraic effects, it could resume a block right where we left off instead of restarting from the beginning. Knowing how other libraries implement effects could be a stepping stool to improving Docassemble's implementation.
* Since it uses python, a dynamic language, Docassemble mostly relies on runtime effects and much less on any static analysis[^5]. A more extensive static analysis to make sure that Docassemble does handle all of the effects that could be performed would be extremely valuable. 
* Writing a framework for Docassemble is also difficult. At Suffolk we did our best with [the AssemblyLine](https://github.com/SuffolkLITLab/docassemble-AssemblyLine), but it requires developers to use global variables with the exact variable names that we expect. If they also want to change something small about how a question is shown or a code block is run, they have to copy out all of the code block to override our code and adjust it as they need. You can sometimes customize the behavior of the framework by using "magic variables", that are easy to miss and difficult to document and use. Imagine if a regular python library only worked through globals and copying and slightly modifying entire functions? I imagine that frameworks or libraries in the algebraic community might have some novel ideas in this area.
* How do algebraic effect libraries organize their code? Docassemble stores everything in only a few YAML files, with no namespacing for all of the variables defined.
* The given blog mentions that effect handlers can easily be async without affecting the performing code. Docassemble by default executes all code synchronously, started by an HTTP request that can (and does often) time out. Its background task system can be cumbersome to use and set up, and rearchitecting Docassemble to be async by default would be a great way to improve its resiliency.

So now, I'm gonna go off and read a bunch of papers about Algebraic Effects, and hopefully, learn some better ways to organize DA programs.

[^1]: Thanks to plocket, a fellow docassemble programming enthusiast, for reading and giving feedback on a draft of this post.
[^2]: The new value is stored in a dictionary that acts like the globals() dictionary in python, mapping from the variable's name to it's value.
[^3]: Docassemble doesn't quite have official terms for these concepts, at least they aren't widely used. The documentation seems to have "dependency satisfaction" for the act of finding which block to run or ask to define a variable, "rules" for `handle`, and "gathering" for effects that happen for lists and other collections.
[^4]: CSS has a similar manner of determining precedance, and IMO it's just as confusing. Certainly powerful, but makes for easy spaghetti code, especially combined with arbitrary procedural code like Docassemble does.
[^5]: Docassemble does automatically detect what variables are defined in a block, but it doesn't have a nuanced idea of scope (it doesn't yet handle the scoped variables, like `with` clauses or `try-except` very well). Docassemble's IDE, the playground, can also show you if you are using a variable that isn't handled in another block. But this is done by just running the entire interview, and showing Docassemble's internal engine information, and not as a separate compilation step.