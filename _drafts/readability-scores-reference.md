---
layout: post
title: "Readability Scores: Reference Guide"
categories: civic a2j equity nlp
use_math: true
---

This is a companion piece to a more opinionated blog post (still in progress). When reading paper and researching stuff, I always try to write something
close to a background or previous work section of an academic paper. It forces me to try to understand what I'm writing about from 
different angles, and to do my best (in my free time, lol) to cover the field I'm writing about. But, a lot of that info
doesn't really fit in the final article written, so I decided to try to summarize it somewhere else as well. This is that "somewhere else".

While this is the more research based paper, the first thing that I realized when starting this is that there are arguably too many reading formulas. 
They almost all do the same thing, and most of them were developed in the same way, by comparing to other formulas to see if they concurred on reading levels for popular books.
For completion, I'll listing formulas that I didn't think needed to be explained in detail at the end of each section under "Misc". 

## The criteria

This is going to be more of a qualitative view of these score, _not_ a hardcore evaluation on real data.

 Things that we'll be looking at for each score include:
* what features of the text does each score consider?
* how easy is it to _use_ each [^1]?  For example, a score that uses only regexs, word counts, and sentence counts is going to be easier to setup than something that requires a trained machine learning model.
* what types of texts the scores are made for? Quite a few only work well for large blocks of text. Scoring shorter bursts of text (like you see on individual screens of a guided interview, for example) might not give standardized scores. 
* who made it, and what was it originally used for?
* who is the target audience? Some scores are made specifically for children, some for people learning english as an additional language, and some for general low literacy. 
* Were any studies made using members of the target audiences? Scores that try to target a wider range of people will have a harder time here

Some commonly used variables:
* $ words $ is the total number of words in the whole text
* $ sents $ is the total number of sentences in the whole text
* $ sylls $ is the total number of syllables in the whole text

## Simple Counts

### Flesch Reading Ease 

The Flesch reading ease score is based on the average numbers of words per sentence and syllables per word.
These are actually two distinct tests. The Flesch reading ease was developed first, by Dr. Rudolf Flesch in the [1940's](https://web.archive.org/web/20160712094308/http://www.mang.canterbury.ac.nz/writing_guide/writing/flesch.shtml).

The Flesch reading ease's formula is: 

$$ score = 206.835 - 1.015 ( \frac{words}{sents} ) - 84.6 ( \frac{sylls}{words} ) $$

Broadly, Flesch developed his formula to be used for adults as opposed to children (which most of the exisiting tests were made for at the time), and tested it using the [McCall Crabbs Standard Test Lessons in Reading](https://www.google.com/books/edition/Standard_Test_Lessons_in_Reading/DdCgAAAAMAAJ?hl=en&gbpv=1&printsec=frontcover), which were passages graded based on a comprehension questions at the end of each passage. 
Interestingly, he had once considered using the number of personal pronouns (I, you, etc.) and the number of affixes to words ("anti-" in "antitoxen" and "-able" and "-ity" in "readability") to compute the score. But when human users of the formula focused primarily on sentence length, he split the formula into two parts, the one known today, and another one known as the "human interest" formula, which focused on the personal pronouns. 
It's worth reading [Mary Ann Vienh's MA thesis](https://lib.dr.iastate.edu/cgi/viewcontent.cgi?article=1077&context=rtd) that gives a great overview to Flesch's development of the reading ease formula, and the academic context at the time.

### Flesch-Kincaid Grade Level Evaluation

Like the reading ease, the Flesch-Kincaid Grade level evaluation is based on the average numbers of words per sentence and syllables per word.
It was co-developed by Flesch and J. Peter Kincaid in the 70's for the US Navy.

The Flesch-Kincaid Grade Level Evaluation's formula is:

$$ grade = -15.59 + 0.39 ( \frac{words}{sents}) + 11.8 (\frac{sylls}{words}) $$

The output is specifically the expected grade level of the text, which is why this formula looks to be the inverse of the reading ease formula.

The grade level evaluation has more of an emphasis on shorter words, penalizing texts with more syllables per word 2.75 more than the reading ease. The Wikipedia user Cmglee made a good way to visualize this, shown below.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flesch_Kincaid_readability_tests.svg/1920px-Flesch_Kincaid_readability_tests.svg.png"
  alt="A 2 dimensional plot that shows how the reading ease score scales on it's 2 inputs compared to the grade level evaluation"/>

A key part was estimating the personnel's actual reading level with the Gates-MacGinitie Reading test.

Kincaid himself has some interesting thoughts on readability scores, particularly that they shouldn't be over applied by writers, given how easy it is to game most of them. 

> If the read­ing level is too high, the easiest fix is to divide long sentences into shorter ones. 
> This kind of chopping will indeed lower the readability level, but it's often counter­ productive.
> - Dr. J Peter Kincaid [^2]

### Gunning Fog index

Made by Robert Gunning in 1952, an American businessman who was in newspaper publishing. His word to describe reading difficulty is "Fog", thus, the Gunning Fog index [^3]
It requires a minimum of 100 words, and the score is calculated with the following: 

$$
0.4 \frac{words}{sents} + 100 \frac{complex words}{sents}
$$

The output is the grade level of the text. 
Complex words are words that have more than 3 syllables, not including several common syllables such as -ing, etc.


### SMOG (Simple Measure of Gobbledegook)

G. Harry McLaughlin, the Editor at the Mirror newspaper and Doctor of psycholingistics at University of London, published his SMOG formula at the 
University of Syracuse, in 1969. Sold as a simpler version of the [Fry Readability Graph](#Fry-Readability-Graph), it consists of three steps:

1. Count sentences (at least 30)
2. Count polysyllables (>=3 syllables)
3. $$ 1.0430 \sqrt{polysyllables * (30 / sents)} + 3.1291 $$ gets you the grade level.

An even simpler approximation of the last step is to take the square root of the nearest perfect square of the number of polysyllables. So if there are 95 polysyllables in the sample, you round to 100, and take the square root, which means the text is at a 10th grade level.

### Fry Readability Graph

The Fry Readability Graph, cited by McLaughlin in SMOG in the first sentence of McLaughlin's paper, is pretty straight forward.

1. Sample several 100 word groups from the text, calculate the number of syllables and sentences in those groups, and uses those calculations to place a point on a "graph" (aka a plot). 

![The Fry Readability Graph itself](/assets/blogs/readability/fry_readability.png)

The lack of an actual formula, deferring to the more flexible but looser graph,
probably didn't lend itself well to it's usage.

Fry says the following in his "Readability Graph" paper, which is very illuminating on why readability formulas were developed in the 1950s - early 80's:

> Though readability formulas are used by some
 teachers, some librarians, and some publishers, their number is all
 too few. Perhaps the sheer time it takes to apply these formulas
 causes them mostly to languish in term papers and occasional magazine articles.

Also of note, was how Fry mentioned the readability levels were graded. The
main ways of validating were either:
* teachers and librarians judging reading material difficulty by their expectations 
* Seeing if "relative rankings", scoring and ordering books according to each formula, ends up with the same ordering of material 
* mean comprehension scores of the class that's read it. The "Most objective" according to Fry, but difficult to do.

### ARI (Automatic Readability Index)

The Automatic Readability Index is unique in this list because it was
created in mind with real time type-writer readability monitoring.
To do that in the 60's, they decided to use characters per word instead of the
usual syllables per word. 

$$ 4.71 \frac{characters}{words} + 0.5 \frac{words}{sents} - 21.43 $$

### Misc Counting Methods

* [Coleman-Liau](https://en.wikipedia.org/wiki/Coleman%E2%80%93Liau_index)
* [Linsear Write](https://en.wikipedia.org/wiki/Linsear_Write)
* [LIX (Läsbarhetsindex)](https://www.readabilityformulas.com/the-LIX-readability-formula.php), one of the few tests developed outside of the US, in Sweeden

## Word Lists

All of the formulas above tend to reduce text to two, maybe three numerical features such as syllable or word counts, not considering any of the actual content of the text.
Word lists do the opposite. They still reduce the text to some numeric, but this time if you [ROT13'd](https://en.wikipedia.org/wiki/ROT13) the entire text, it would make a difference to the readability score. 

These methods were generally used _before_ the counting methods, and besides for Dale-Chall, they aren't talked about much anymore.
Some of the most leveraged criticism of them included:
* that the lists were too long to use by hand, which is a valid argument in 1940. Reading through an 8 page list for every word in the text is very tiresome. However, it's unclear how long some of those word lists got to be. Nowadays, this argument is less useful, as there's not a meaningful difference to the human eye between doing O(N) list searches vs simple counts. 
* that the lists were very influenced on what materials the words were counted from. This is a valid point, and one that should still be considered today. 
* that the lists only show familiarity with the word, as words can still be abstract, ambiguous, or vague, depending on the context in which they're used.

The two methods worth listing here are Thorndike's word list, and the Dale-Chall readability formula. 

[Thorndike's word list](https://www.jstor.org/stable/1471167), first publish in 1921, has about 20,000 words now, and isn't exactly a readability measure on it's own, but
forms the basis of other readability scores based on word lists. Thorndike's word list is mainly ordered by frequency of words in texts, and by assumption, familiarity.

The [Dale-Chall](https://en.wikipedia.org/wiki/Dale%E2%80%93Chall_readability_formula) was developed by Edgar Dale and Jeanne Chall in 1948. It used a list of 763 words that 4th grader were familiar with, and in 1995, was updated to include 3000 familiar words.
Assuming that any word not on the list is considered hard, the formula is:

$$ 0.1579 (\frac{hardwords}{words} * 100) + 0.0496 (\frac{words}{sents}) $$

## Specific Target Audiences

All of the above scores, both the count scores and the lists, try to target the widest population to gauge readability. However, not everyone struggles to comprehension for the same reasons. People for whom English is an additional language
have different struggles with reading than people who have spoken English their entire lives. People with intellectual disabilities have different difficulties than
children, and lumping all of these groups together to try to predict a single readability score isn't going to be the most accurate for all of these groups.

The next few scores try to target specific subpopulations more, from people learning English to specific language speakers such as Korean.

### McAlpine EFLAW Readability Score

TODO(brycew): pick up here

The [McAlpine EFLAW score](https://web.archive.org/web/20050217042336/www.webpagecontent.com/arc_archive/139/5/) was made specifically for "Global English for Global Business".
It's based on the idea that English learners have more trouble with clusters of shorter words of 1-3 letters, called miniwords. A miniword cluster example would be "In relation to the date of a new time" has 7 miniwords.

The score itself isn't normalized to grade level, but still increases as its difficulty does.

$$ (words + miniwords) / sents $$ 

<!--   Also 
  https://strainindex.wordpress.com/2009/04/30/mcalpine-eflaw-readability-score/
-->

### LXPER Index (Korean)

https://aclanthology.org/2020.nlptea-1.3/ 

also https://aclanthology.org/W16-0502/ 

### Features (Intellectual Disabilities)

Some more advanced scores attempt to find more features that are directly correlated
to readability, like [Feng, Elhadad, and Huenerfauth](https://aclanthology.org/E09-1027/). Those authors focused on readability for people with intellectual disabilities, which gives some valuable insights into the actual process of readability that most readers subconsciously work with each time they read.

Notable from the above paper is that "Entity density" is important: the number of things mentioned in a sentence, and how many times they were mentioned. Working memory of entities as well. The hypothesis was based on experimental determinations of the ID population, specifically that "these users are better at decoding words than at comprehending text meaning. So reading longer words isn't super hard, but trying to create a "cohesive representation of discourse" can be. Also found was that "texts designed for children may not always lead to accurate models of the readability of texts for other groups of low-literacy users. Which is important for readability scores in general: most were made specifically for children grade levels!

https://aclanthology.org/W10-0409.pdf

[^1]: Specifically using, _not_ implementing. You should probably just use some standard implementation, like `textstat`. There are definitely some details about the implementations you use though, like how they split sentences.

[^2]: Quoted from https://www.semanticscholar.org/paper/Readability-formulas%3A-Useful-or-useless-McClure/7c5a5c88214ead4552eded309ec26995013faac9

[^3]: https://web.archive.org/web/20180912145342/http://journals.sagepub.com/doi/abs/10.1177/108056998504800203