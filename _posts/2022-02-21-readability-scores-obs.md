---
layout: post
title: "Readability Scores Pt 2: Observations"
description: "Asking about what readability scores are actually good for"
categories: civic a2j equity nlp
date: 2022-02-21 10:00:00 -0500
---

This is the second post in a series. If you want more background on what readability scores are or detailed write ups on individual scores, check out the [first piece]({% post_url 2022-01-16-readability-scores-reference %}) in this series. 

So now that we know about many readability scores, what should we do with them? Which ones should we use, and which ones should we avoid?
This post is a bit more wishy-washy than the last one; most of the info here is just my observations and insights into readability.

## Why are there so many?

One question that I wanted to answer when I started looking into readability scores: why are there so many different scores? 
A quote from Edward Fry [when talking about the Fry Reading Graph score]({% post_url 2022-01-16-readability-scores-reference %}#fry-readability-graph) helps us answer this question:

> Though readability formulas are used by some
 teachers, some librarians, and some publishers, their number is all
 too few. Perhaps the sheer time it takes to apply these formulas
 causes them mostly to languish in term papers and occasional magazine articles.

This is a key point to me; in the 60's, most readability scores were trying
to do the exact same thing, just with slightly more efficient algorithms. Which makes sense in a way.

For example, lets see how long it takes someone to actually calculate a reading grade by hand.
I started at a random point in a paper I was reading, and timed myself to see how long it took me to count 100 words, and the number of syllables and sentences in those 100 words [^1].
It took me a 4 minutes and 22 seconds to count out 100 words and then to count the 5 sentences and 177 syllables in that 100 words.
By far the longest part was counting the words and sounding out and counting the syllables.
I then timed myself on the on-paper math calculations for Fry's readability graph and Flesch-Kincaid. 
* Fry's graph took 15 seconds to locate the point (off the chart, lol).
* Flesch-Kincaid took me 2 minutes 42 seconds to calculate a grade level of 13.

This very much proves Fry's point: the by-hand math calculations still took about ~40% of the time. I am a bit out of practice at calculation by-hand, but I'd guess that with some practice, about 20% of the time to calculate the Flesch-Kincaid grade would still be the math.
Coming up with a new score that didn't need exact calculations and saved 20% of the time to take to make the score would be a big improvement.

But now, we have computers. All of the counting and calculations that I just did happens essentially instantaneously. 
Slightly faster scores like Fry's or SMOG don't have advantage of being that much faster anymore. 

There is a different reason why new readability scores are still being developed today though; different groups of people think and read differently. 
Diversity has always been a good thing, and some of the research done on how [English-as-an-additional-Language learners]({% post_url 2022-01-16-readability-scores-reference %}#multi-feature-scores-for-efl-learners) or [people with intellectual disabilities]({% post_url 2022-01-16-readability-scores-reference %}#intellectual-disabilities) read shows that we all think and process the written word differently.
Obviously a single formula that takes into account 2 shallow pieces of info about the text aren't going to be great predictors when it comes to these different populations. 


## What's missing from the standard readability scores?

By standard readability scores, I mean the [simple counts]({% post_url 2022-01-16-readability-scores-reference %}#simple-counts) and the [word list]({% post_url 2022-01-16-readability-scores-reference %}#word-lists) scores. 90% of the time, when someone is talking about readability
scores, they're talking about one of those.

As the previous paragraph shows, most readability scores were designed to be easier to compute; the fewer things to count and calculate, the better.
Arguably, they are much too simple. While McLaughlin is right that "It is not essential that the variables in a prediction formula should have direct causal connection with the quantity that is being predicted," if you're trying to use a readability score to improve writing, it is almost always true that your method of improvement should have a causal connection.

Another things that is lacking from standard readability scores is that they are validated on novel or article-like text. Those types of text miss a huge type of writing that many of do nowadays: website and social media writing. For example, readability of websites was the main goal of [Collins-Thompson and Callan](#Collins-Thompson-Callan-Score) when they introduced their unigram model. We can get a bit more qualitative data on real users from [Jacob and Uitdenborgerd (2019)](https://aclanthology.org/U19-1003/). They looked at the readability of tweets on Twitter. On twitter, it's difficult to grade short content as readable or not, partially because of the social media and
conversationality ("Slang, wrongly written and uncommon words seem to lower the readability"), and partially because of Twitter's exceptionally short length.
They also hint that there seems to be only so much you can do to increase readability in short form text, given that readability is more dependent of demographics. Also that familiarity to the medium is important: all your efforts to make something readable will be in vain if that person has never used a modern website before.

## More specific validations 

The grade levels of readability scores are kinda made up. 
Yes, some of the scores are validated based on the grade level of their readers; if more than 50% of a sample of 4th graders
could read a text, that text is considered to be 4th grade level. 
However, there are a lot of issues with the actual labeling of a text as "4th grade".

* they were validated on 4th graders in 1975 (or whenever the score was last updated), not 4th graders today.
* it implies that you need to write like you're talking to a 9 year old, which implies that you need to dumb it down. You don't need to dumb down your writing! 
  A great point that my colleague [Caroline Robinson](https://www.mlri.org/staff-member/caroline-robinson/) has made is that **a reading grade level isn't a thinking grade level**: an adult who reads at a lower than average grade level can talk about complicated topics and ideas. 
  Additionally, people are often able to read above their average readability ! The [original Flesch score]({% post_url 2022-01-16-readability-scores-reference %}#flesch-reading-ease) tried to consider interest and appeal in the article topic into account in the score. 
* it implies that everyone who does read above a 4th grade level will be able to read the text. 
  People also often read below their readability score. Not everything that a college reading grade level person reads will be at a 13th grade level. 
  They'll generally want to read easier text most of the time, since reading difficult texts is hard for everyone. 
  Even if you read at a higher grade level, easier readability [improves comprehension and reading speed](https://en.wikipedia.org/wiki/Readability#Readability_and_newspaper_readership).

I think that readability scores could be split into two things:

* a score that is just a percentage of the population (maybe targeted to your specific population!) that could read your text. It's judgement free, and you aren't dumbing your content down. It could be actually validated as well: instead of only looking at 4th graders and seeing what percentage of them pass the comprehension tests, just sample 
the general population, and give a range of the percentage of the population that could read it. Many of the techniques that are used in electoral polling might be useful here.
* a score that shows how difficult it is to read your text. It might be accessible to 75% of the general population, but if it's exhausting for 90% of the population to read, then that's going to determine how many people read and comprehend your article more than the other score.

## What readability score should I use?

If you want my (pretty amateur opinion), I'd lean towards some mix / weighted average of Flesh, Dale-Chall, and SMOG. Mostly given that all of them have their draw backs, and I like word-list methods a lot. 

However, given all of the above, I have a potential hot take: when writing yourself, or if you are developing tools to help people improve their writing, (like I am right now), you shouldn't show the author the readability scores of their text directly. If you do show a readability score, show it to some final gatekeeper who isn't the author.

## Readability Tools and Plain Language

This might over-complicate things, but hear me out: you can think of writing a readable text as an optimization problem.
In optimization, you have a problem space, some constraints, a starting point, and some optimal solution, and some objective function to measure that optimal solution. 
For example, you have a car factory, and you want to optimize the process of assembling a car. The problem space is all of the different
ways you can put together a car. The constraints are that you want to end up with a working, high quality car. The starting point is the current way
you are putting together the car, and the optimal solution is a faster way to put together the car. The objective function is time: faster is better.
You also have these 5 things with our readability problem: the problem space is the space of all english texts, the constraints are that you want to communicate a particular set of ideas and concepts, you have a first draft, and you have your goal text, that explains the same ideas but with a lower difficultly grade. Our objective function here is readability. 

In optimization, there's generally two ways of improving your current point: 
* you can use information about your current point to try to improve it slightly, known as hill-climbing (you want to go up the hill from where you are).
* you can jump to a random point to see if it's better than your last guess.

In combination these two ideas are very powerful. In readability, these are the same as making slight phrase or sentence edits to your text, and just rewriting the whole thing.
I'd argue that most of editing is the hill-climbing part, as you aren't going to be constantly rewriting your whole article.
However, for hill-climbing, you need some way to narrow your focus in on a problem. Despite the fact that our objective function is a readability score, readability scores are not good at hill-climbing at all.
Pretty much every author of a readability score has said that scores are approximations that happen to correlate with readability.
Scores do **not** measure causation. Specifically, scores correlate well with naturally written text, but they likely do not correlate well with
edited text that was guided by said readability scores.
You can't just take an existing text, shorten the sentences by replacing ", and" with a period or automatically swap
words with shorter synonyms, and expect it to actually read easier.

> If the read­ing level is too high, the easiest fix is to divide long sentences into shorter ones. 
> This kind of chopping will indeed lower the readability level, but it's often counter­ productive.
>
> - [Dr. J Peter Kincaid](https://www.semanticscholar.org/paper/Readability-formulas%3A-Useful-or-useless-McClure/7c5a5c88214ead4552eded309ec26995013faac9)

So, for the majority of your writing effort, you likely don't want a readability score; you want a readability tool.

My best suggestion here is to use something like the [Hemingway editor](https://hemingwayapp.com/), or to learn about (and use) [plain language](https://www.plainlanguage.gov/).
Plain language is essentially a list of guidelines that encourage you to write simpler. It's not about dumbing down your writing, just about being clearer.
If you work for the US federal government, you are [literally required](https://www.plainlanguage.gov/law/) use plain language to improve readability. 

It's possible that more modern readability scores ([multi-feature methods]({% post_url 2022-01-16-readability-scores-reference %}#multi-feature-methods)) are better suited as objective functions and for hill-climbing. 
But I'd need to see some research on it before I believe it.

[^1]: Here's the paragraph: "Measuring the usability of these IVIS as early as possible during the development cycle plays a key role when designing for the automotive context (Harvey & Stanton, 2013). On the one hand, poor customer experience can be the result if usability is neglected in the development. Beyond the tasks performed using the IVIS, the driver of a car must always concentrate on the actual driving task. From a usability perspective this dual-task scenario represents a special challenge during the evaluation of an HMI. However, most car manufacturers are facing strict confidentiality guidelines in early development stages."
