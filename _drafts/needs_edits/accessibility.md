---
layout: post
title: "Accessibility in the Assembly Line Project" 
tags: accessibility civic a2j equity software standards
#date: 2022-01-16 08:12:49 -0500
---

I recently made docassemble and our e-filing guided interviews more accessible. To do it I had to read a lot of different specs, which was really confusing at first. Here are the tools I used, and some summaries of the standards, because standards suck.

<aside>
Big disclaimer here: I am not an accessibility expert. I've long been an observer of accessibility and have only gotten deep into it in the past year.
But I am still building my knowledge on the subject. If anything I say here goes against what accessibility experts (or disabled people) say about accessibility, listen to them.
</aside>

## What is accessibility?

Pretty much everyone uses the digital technology now. And that means _everyone_: people with low vision and blindness, people who are hard of hearing or deaf, people with ADHD or dyslexia, and [many others](https://www.w3.org/WAI/people-use-web/user-stories/). Notably, if you can name some way people can interact with technology (seeing at a screen, using a mouse, etc.) there is a group
of people (who's population size would likely surprise you) that _can't_ interact in that way with technology.

Accessibility, sometimes shortened to a11y (because there are 11 letters between the starting 'a' and ending 'y'), is making technology flexible enough to be interacted with any way. That's it. The hard part is in the details of what that means though.

![Illustration with labeled graphics of boxes, content, and people. At the top center is a pie chart, an image, a form, and text, labeled “content”. coming up from the bottom left, a line connects “developers” through “authoring tools” and “evaluation tools” to “content” at the top. coming up from the bottom right, a line connects “users” to “browsers, media players” and “assistive technologies” to “content” at the top.](/assets/blogs/accessibility/relate.png)

Web accessibility is a bit more focused; to view web content (say, this blog post), you're probably using a web browser like Chrome or Firefox. However people also use other software, called assistive technologies or "user agents" in the standards, to help them view the content. Those technologies range from things like screen readers, Braille displays, and [auto-captioning tools](https://blog.google/products/android/live-caption/), to eye trackers, voice recognition, and on-screen keyboards.
These assistive technologies use the accessibility interface exposed by operating systems
and browsers to transform web page content into something that can be perceivable and operable by those tools' target audience.

Given the varying technologies interacting with the same content (authors, web tech, browsers, and assistive technologies), the best way for all of them to work together is [by using standards](https://www.w3.org/WAI/fundamentals/components/). When we're talking about web accessibility in this post, we're talking about web accessibility standards.
However, don't forget about the root purpose of those standards: the users. Standards are the result of general accessibility user testing over lots of different types of web apps.
However, your website can still be perfectly coded to web accessibility standards, but not really be usable to a specific group of people.
Specific user testing with your specific web app is the only way to find and fix those gaps.

### But what are all the acronyms?

In my experience, acronyms and all of the different overlapping documents, standards, and pages were the hardest part about of trying to understand web accessibility. Here are some you'll see often:

* W3C: The World Wide Web Consortium: the group that develops web standards, like CSS.
* WHATWG: Web Hypertext Application Technology Working Group: a [separate group](https://whatwg.org/faq#what-is-the-whatwg) that makes the standard on HTML specifically.
* TR: [Technical reports](https://www.w3.org/2015/Process-20150901/#requirements-and-definitions): it's in most of the URLs of the web standards you'll see
* WAI: Web Accessibility Initiative: The group responsible for developing all of the W3C's accessibility standards and documents.
* WCAG: Web Content Accessibility Guidelines. These are the standards themselves. I'll explain in [more details in a later section](#WCAG).
* ATAG: [Authoring Tool Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/atag/): this is the standard for authoring tools generating accessible
  content, which includes any tool that helps you, the author, generate web content, from what-you-see-is-what-you-get HTML editors, to social media post editors.
* ARIA: Accessible Rich Internet Applications, a set of features that you can use to more directly control the accessibility experience of a web page.
* WCAG-EM: WCAG Evaluation Methodology

## Practical Accessibility

### WCAG

WCAG are the standards themselves, the bible. Though, you probably shouldn't start with it. The issue, which is mentioned right in the first paragraph of WCAG 2.1, is that <boxquote>WCAG 2.1 success criteria are written as testable statements that are not technology-specific. Guidance about satisfying the success criteria in specific technologies, as well as general information about interpreting the success criteria, is provided in separate documents.</boxquote>. I.e., reading WCAG doesn't really help you _write_ accessible web content: it tells you what your final website should do, but not how to get there. You have to read the "other documents" for that, which we'll get to soon.

There are several versions of WCAG. You should probably use the latest, but it helps to understand that each version expanded to incorporate the technologies of the time it was written and new groups of people with disabilities. For example, WCAG 2.0 came out in 2008 (think early Youtube and Facebook years), so it emphasizes "dynamic Web pages... including 'pages' that can present entire virtual interactive communities." WCAG 2.1 came out in 2018, so the technical focus is on mobile devices, but also emphasizes cognitive disabilities and low vision. There's some ongoing (as of May 2022) work on a WCAG 3.0, which focuses much more on user-centered research and testing, but isn't quite finished yet.

You'll also see A, AA, and AAA. These are conformance levels. I like to think of them as mission rankings in Sonic.

![A screenshot of a sonic level, with an "A" rank](/assets/blogs/accessibility/SonicAdventure2_DC_ResultsScreen.png)

Essentially, WCAG is broken up into individual testable statements, and how hard it's considered to do what those statements say is the grade: A for the easiest, and AAA for the more difficult ones. WCAG itself says that <q>it is not possible to satisfy all Level AAA Success Criteria for some content</q>.

The documents that you'll be referencing a lot are:

* [How to Meet WCAG (Quick Reference)](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&showtechniques=111)
* [Techniques for WCAG 2.1](https://www.w3.org/WAI/WCAG21/Techniques/)

<aside>
If you're in the US, you may also come across Section 508. Section 508 is a law for federal orgs and orgs receiving federal funding. While WCAG is only a "recommendation" from
W3C, i.e. "if you create content on the web, you should do this", Section 508 is a law, and specifically requires you to conform or face consequences.
However, a recent update to Section 508 <a href="https://www.access-board.gov/ict/#E207.2">explicitly links the two together</a>:
<boxquote cite="https://www.access-board.gov/ict/#E207.2">User interface components, as well as the content of platforms and applications, shall
conform to Level A and Level AA Success Criteria and Conformance requirements in WCAG 2.0</boxquote>
In my non expert opinion, parts of section 508 (<a href="https://www.access-board.gov/ict/#501.1">501.1 specifically</a> ) seem to imply that there are additional
requirements for software in the law beyond WCAG 2.0, but it's not clear, i.e. WCAG is necessary but might not sufficient.
</aside>

### Techniques and Failures

### ARIA

ARIA (accessible rich internet applications) occupies a strange place in accessibility technologies. It essentially gives you full control over what
the accessibility tree looks like and what information it contains. It gives you so much control that in several places in the ARIA standard itself,
you are warned against using it: <a href="https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/"><q>no ARIA is better than bad ARIA</q></a>. However, given how much web development is just a series of `div`s and `span`s,
it's still necessary.

ARIA has 3 key parts: roles, states and properties.

Roles let you literally apply HTML element semantics to completely different elements. For example, you can include `<div role="paragraph">` in a
page, and the accessibility interface to the page will treat it like it was a `<p>` instead. Sometimes ARIA roles lets you be more specific than existing
HTML elements (like with `role="tree"`, or TODO(brycew)), but the idea is the same. In fact, the existence of ARIA is supposed to encourage the development
of new, more semantic host language features. Once a role is assigned to an element, it cannot be changed: you have to instead delete the whole element
from the DOM and create a new one with the role that you want it to have.

States and properties are the other side of ARIA. They let people know what might change or updated on the page, through things like Ajax.
The standard itself mentions that states and properties a bit difficult to distinguish, but
the main idea is that states are things that are expected to change often, and properties are expected to change less often. However, in practice,
properties can change more than states, so the distinction is sometimes ignored.

An important aspect of properties is that they set the accessible names for elements, using `aria-label`, `aria-labelledby`, and `aria-describedby`.
TODO(brycew): more description here.

If you aren't writing full widgets yourself, the most useful thing to know about ARIA is just the terms and general idea. You'll likely run into it when doing automated a11y audits, if another developer didn't follow the rules for roles and states correctly. For example, if an automated accessibility checker
sends you to the Deque University site for an [issues with the presentation role](https://dequeuniversity.com/rules/axe/4.4/presentation-role-conflict), or an
[issue with the accessible name for a progress bar](https://dequeuniversity.com/rules/axe/4.4/aria-progressbar-name), you need to know what a role is, what the progressbar role is, and how to properly name an accessible element.
That's the most practical way to learn the details of ARIA (and how I did myself)

### DOM and The Accessibility Tree

To understand accessibility, you need to have a good understanding of the DOM, and the accessibility tree.

The DOM stands for "Domain object model", which in my opinion is a garbage name. It's just a way to describe, access and modify XML and HTML documents.
It's a tree of nodes, which for HTML directly map to HTML elements like `<body>` or `<div>`. HTML DOM specifically narrows down DOM things a little bit,
giving specific meaning to attributes like `class`, and defining rules about what's allowed, like requiring all children of an unordered list, `<ul>`,
to be list items, `<li>`.

The accessibility tree is just a parallel copy of the HTML DOM, with specific nodes excluded based on certain ARIA values, like `role="presentation"`,
or `aria-hidden="true"`. As a result, those nodes are not available to the accessibility API and thus aren't visible to screen readers and keyboard users.

## Our situation

At my day job at the [Suffolk LIT Lab](http://suffolklitlab.org), we make web apps that guide people through filling out a court form, and, if possible, [send it directly to the court for them](). This project started as an emergency volunteer effort to make sure people had access to courts when they were physically closed during COVID. We know that making things accessible is important, so we're trying to make all of our interviews accessible.

Our main project, the Assembly Line, builds on top of the guided interview framework [docassemble](docassemble.org), which already has a [great foundation for making accessible content](https://docassemble.org/docs/accessibility.html). However, the process by which we build our interviews has several parts that make accessibility difficult.

* Assembly Line interviews are written by volunteers, students, and legal aid professionals and lawyers. These interview authors have such varied backgrounds and are generally learning docassemble and python for the first time when they write their interviews. While accessibility is important, it is another thing for authors to remember, and can be forgotten or applied incorrectly.
* docassemble has a lot of different features, and not all of them are used in every interview. The Assembly Line project also has it's own HTML components that we use.
* both docassemble and the Assembly Line are adding new features and fixing bugs, so we keep both up to date. These changes could cause unexpected accessibility issues in interview later.
* the Assembly Line project is a small team mostly made of volunteers. Multiplying people power is on of our main goals, so a solution that, once off to a good start, doesn't require constant re-reviews and maintenance.

Keeping all of this in mind, we wanted our accessibility solution to be primarily automated, and for it to be easy for experts to review.

A key thing to note is that automated checks don't catch all accessibility issues, and can't by design; software can't make semantic judgments, like if your alt text correctly describes the image in the article. The process we're going for takes a lot of the burden of slogging through HTML standards to know if they
did something wrong off authors, but doesn't remove the need for a person to make sure that everything is accessible to start with.

[//]: (and no, [large language model don't "understand" things](https://medium.com/@emilymenonbender/no-llms-arent-like-people-with-disabilities-and-it-s-problematic-to-argue-that-they-are-a2ac0df0e435))

## Start Manually

A thing that I did when starting out (and that I'd recommend) is to use a browser extension to check for accessibility issues.
I suggest it because it gets you more intimately familiar with WCAG violations than an automated tool; you get the error (and most tools will
point out the element to you on the screen as well), you can see and interact with
the element and page right in front of you, and you can also inspect element to try out fixes quickly without having to reload the page.

I started out with [HTML CodeSniffer](https://squizlabs.github.io/HTML_CodeSniffer/), a very lightweight bookmarklet (meaning you don't have to install an extension, you just click on a browser bookmark while on a page). However, I ran into several issues where CodeSniffer was wrong; it didn't recognize that CSS like `display: none` takes elements out of the accessibility tree.
I haven't used [WAVE](https://wave.webaim.org/) as much but it's very snazzy and seems to not fall for the same fall positives that Code Sniffer does.

## Move to an automated checker

For automated choices, there might be some other base libraries, but much of what I used ended up using `axe-core` under the hood. Deque Labs open sourced
their core a11y checking library, calling it aXe. It has an NPM package, which is great. Docassemble however, has some other issues with navigation: most tools
take a list of pages and an option to crawl each page for other links. Docassemble is a linear single page application (SPA) and isn't really build like a standard site, as the interviews are much more linear, and a crawl will think it's a single page. Luckily, we already have a way of navigating interviews: the
testing ALKiln framework already knows how to progress through a docassemble interview, and all we need to do is to add a step that says to "check the page for accessibility issues".

## A full audit

TL;DR: a full audit is much more intensive than automated checks, and involve going through each of WCAG's 77 success criteria manually over most of the site.

### WCAG-EM

Guess what? There's a full standard for the processing evaluating sites to the WCAG standard too! It's WCAG-EM (WCAG-Evaluation Methodology).

Five main steps:

1. Define the evaluation scope
2. Explore the website
3. Select a representative sample
4. Audit the selected sample
5. Report the findings

#### Define the evaluation scope

Includes what part of the website to eval (the whole thing? Just a subset? Just a single page application?)

Also includes what WCAG level (2.0 or 2.1, A, AA, AAA)

Also includes what web browsers and assistive technologies to check. For example, check Firefox and Chrome on Windows using NVDA,
Safari and Chrome on Mac using Voice over, Safari on iPhone using VoiceOver, and Chrome on Android using Android's TalkBack.

#### Explore

You should get the types of web pages, their functionality, and web technologies used.

#### Select a representative sample

TODO(brycew): continue [here](https://www.w3.org/TR/WCAG-EM/#expertise).


### Actually Doing the Audit

You have several options here:

* [WAI Report generating tool](https://www.w3.org/WAI/eval/report-tool/)
* [The A11y Project's checklist](https://www.a11yproject.com/checklist/)
* [Web.dev's how to do an accessibility review document](https://web.dev/how-to-review/)
* [An accessibility 'Not-Checklist'](https://not-checklist.intopia.digital/)

## Writing resources

* [Parsing](https://www.w3.org/TR/WCAG21/#parsing)
* [Quickref](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&showtechniques=111)
* [Accessible Names](https://www.w3.org/TR/accname/)
* [ARIA Practices: Intro](https://www.w3.org/TR/2019/NOTE-wai-aria-practices-1.1-20190814/#intro)
* [ARIA Practices: examples](https://www.w3.org/TR/2019/NOTE-wai-aria-practices-1.1-20190814/examples/)
* [Timing Adjustable](https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable)

### WCAG Techinques

* [F3 Failure](https://www.w3.org/WAI/WCAG21/Techniques/failures/F3.html)
* [H32](https://www.w3.org/WAI/WCAG21/Techniques/html/H32)
* [H91](https://www.w3.org/WAI/WCAG21/Techniques/html/H91)
* [G164](https://www.w3.org/WAI/WCAG21/Techniques/general/G164.html)
* [Failure F40](https://www.w3.org/WAI/WCAG21/Techniques/failures/F40)
* [ARIA4](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA4)
* [Failure F92](https://www.w3.org/WAI/WCAG21/Techniques/failures/F92)