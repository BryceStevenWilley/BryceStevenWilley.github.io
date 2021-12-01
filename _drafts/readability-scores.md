---
layout: post
title: "Readability Scores: A Brief Overview"
categories: civic a2j equity nlp
---

If you do any sort of writing that has needs to be understood by a diverse audience (as opposed to a niche group of people, where you know what most of them are like), you should probably be thinking about plain language, and more specifically, readability. 
If you do work for the US federal government, you are [literally required](https://www.plainlanguage.gov/law/) use plain language to improve readability. 
It's beneficial to everyone; more people will be able to understand your writing, and even if you read at a higher level, readability still [improves comprehension and reading speed](https://en.wikipedia.org/wiki/Readability#Readability_and_newspaper_readership).
It's kinda hard to argue against readability at all, unless the argument is just that "we don't have time to edit our writing".
However, there's a big step between knowing you should write readable documents in plain language, and actually doing it.
This blog will take a look at one tool in our tool belt, _readability scores_, and see how to best use them.

Readability scores rate how difficult (or easy) some text is to read, "text" being pretty much anything: a chapter from a novel, an instruction manual, a series of tweets, etc. It takes as input some number of sentences, and uses some linguistic features (for examples, the average number of words per sentence, the average number of syllables per word) to output a continuous number, sometimes rounded to the closest whole number. 
There are a lot of readability scores out there. My go-to for good implementations is the [`textstat` python package](https://github.com/shivam5992/textstat), which includes most of the more popular scores that count certain simple text features. 
of the popular ones. 

Taking a step back though, what do the reading scores actually mean? Why do some output weird numbers, and others output grade levels? What are their assumptions about the input text and about the audience reading them? And most importantly,
are they actually any good or experimentally verified? Let's see.

If you want more specific write ups on each individual score, check out the [companion piece](readability-scores-reference). This post will stay pretty general, and focus on the take-aways of learning all the nitty-gritty details.

:: Broad type groupings, and what they look at ::

## The simple counts

Focus mostly on syllables per word, words per sentence, some way. Some
only specically count words with certain number of syllables (a square function as opposed to a discrete step). Sometimes, it'd be characters per word instead of syllables (ARI)

Honestly, work pretty well: they _correlate_ to readability. Most specifically,
they correlate to readability on the texts on which they were originally verified on. For some, those texts were Navy manuals, and others were specifically children's books. All of them were longer form texts (not short sentences or phrases, much like you'd see in a website or some computer program UI) Moreover, the scores themselves are pretty shallowly analyzing the texts, and it's hard to get actionable
ideas from the scores. 

Dale-Chall is a specifically interesting case, as it uses a list of commonly used (known?) words to a fourth grader, and rates based on their percentage of usage. It's still a simple count, and simple to implement in an algorithm, but it's very actionable: to improve readability, use more readable words! It's not perfect, but IMO
it's a large step towards actionability in readability scores.

## Specific Target Audiences

The main difference here is that these scores are verified on specific audiences.
* english as an additional language
* children
* intelectual disabilities

https://strainindex.wordpress.com/2009/04/30/mcalpine-eflaw-readability-score/

Made specifically for "Global English for Global Business". Based on the idea that learners of English
are have more trouble with clusters of shorter words, called miniwords. 
\( (words + miniwords) / sentences \)

[^2] https://www.semanticscholar.org/paper/Readability-formulas%3A-Useful-or-useless-McClure/7c5a5c88214ead4552eded309ec26995013faac9



## Features (Intellectual Disabilities)

https://aclanthology.org/E09-1027/


https://aclanthology.org/W10-0409.pdf

"Entity density" is important: the number of things mentioned in a sentence, and how many times they were mentioned. Working memory of entities as well. The hypathes was based on experimental determinations of the ID population, specifically that "these users are better at decoding words than at comprehending text meaning. So reading longer words isn't super hard, but trying to create a "cohesive representation of discourse" can be. Also found was that "texts designed for children may not always lead to accurate models of the readability of texts for other groups of low-literacy users. Which is important for readability scores in general: most were made specifically for children grade levels!


## Observations

One question that we can answer: why are there so many different scores? A quote from
Fry when talking about the Fry Reading Graph score:

> Though readability formulas are used by some
 teachers, some librarians, and some publishers, their number is all
 too few. Perhaps the sheer time it takes to apply these formulas
 causes them mostly to languish in term papers and occasional maga-
 zine articles.

 This is a key point to me; that even in the 60's most readability scores were trying
 to do the exact same thing, just with slightly more efficient algorithms. Which makes sense, if you think about humans as having a 0.5-1HZ processor when it comes to calculating numeric and statistical counts. A constant time improvement on an
 algorithm in that case would be extremely useful! But now that essentially all of
 these algorithms happen instantaneously, those slight improvements are essentially useless.

 Another reason there are some many score becomes clear by the later scores; different groups of people think and read differently. Diversity has always been a
 good thing, and some of the research done on how English-as-an-Additional-Language learners read vs how low-literacy populations or people with intellectual disabilities shows that we do all think and process the written word differently.
 Obiviously a single formula that takes into account 2 shallow pieces of info about the text aren't going to be great predictors when it comes to these different populations. 

:: What's missing from the core set (most talked about): ::
  :: modern day processing power: older ones were designed to be easy to compute by hand ::


What's interesting is that most readability scores consider how easy it is to compute them, not in a difficulty to setup, but specifically
how many things to compute. A lot of these scores were developed before the personal computer, and much more before text editors were wide spread. Arguably, they are much too simple. While McLaughlin is right that "It is not essential that the variables in a prediction formula should have direct causal connection with the quantity that is being predicted", if you're trying to use a readability score to improve writing, it is almost always true that your method of improvement should have a causal connection.

  :: shorter segments, non-novel text :: 
https://aclanthology.org/U19-1003.pdf 

When looking at Twitter specifically, it's difficult to grade short content as readable or not, partially because of the social media and
conversationality ("Slang, wrongly written and uncommon words seem to lower the readability"), and partially because of Twitter's exceptionally short length.
They also hint that there seems to be only so much you can do to increase readability in short form text, given that readability is more dependent of demographics. Also that familiarity to the medium is important: can't make something readable if people have never used a website.

  :: the optimization problem ::

This might confuse more people, but you can think of writing a readable text as an optimization problem: you generally start from some first draft, which has a difficulty grade of X, and you want to optimize this draft to have (ideally) the lowest difficultly grade, while still explaining the same ideas and concepts. Ideas and concepts restrict the dimensionality of the space by a lot (you can't just change any word at random to achieve a better grade). However, if your only way of measuring the gradient of the difficulty is one of the above reading grades, it's not going to be very useful. As pretty much every designer of the above grades has stated, they are approximations and happen to correlate well, they are _not_ causations. Yes, looking at an existing text and giving it a grade works, but applying a readability formula as an approximate objective function in our opmitization problem, and specifically, trying to use it to get the gradient (how to best change the existing draft to get a better score), is counter-productive.

So, you likely don't want a readability grade, you want a readability tool.

Most "validations" I could find were just comparing a lot of text. 
Interesting idea: not based on grade level, but just general population %. No judgement, etc, 
you're not dumbing it down. Obiviously you can aim for 100%, but feasibly you can only get maybe 70-80.

:: What are readability score good at then? ::

:: What you as the writer should look at ::


