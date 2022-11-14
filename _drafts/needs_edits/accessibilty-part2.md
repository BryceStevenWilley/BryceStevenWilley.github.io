
TL;DR: a full audit is much more intensive than automated checks, and involve going through each of WCAG's 77 success criteria manually over most of the site.

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

### Start Manually

A thing that I did when starting out (and that I'd recommend) is to use a browser extension to check for accessibility issues.
I suggest it because it gets you more intimately familiar with WCAG violations than an automated tool; you get the error (and most tools will
point out the element to you on the screen as well), you can see and interact with
the element and page right in front of you, and you can also inspect element to try out fixes quickly without having to reload the page.

I started out with [HTML CodeSniffer](https://squizlabs.github.io/HTML_CodeSniffer/), a very lightweight bookmarklet (meaning you don't have to install an extension, you just click on a browser bookmark while on a page). However, I ran into several issues where CodeSniffer was wrong; it didn't recognize that CSS like `display: none` takes elements out of the accessibility tree.
I haven't used [WAVE](https://wave.webaim.org/) as much but it's very snazzy and seems to not fall for the same fall positives that Code Sniffer does.

### Move to an automated checker

For automated choices, there might be some other base libraries, but much of what I used ended up using `axe-core` under the hood. Deque Labs open sourced
their core a11y checking library, calling it aXe. It has an NPM package, which is great. Docassemble however, has some other issues with navigation: most tools
take a list of pages and an option to crawl each page for other links. Docassemble is a linear single page application (SPA) and isn't really build like a standard site, as the interviews are much more linear, and a crawl will think it's a single page. Luckily, we already have a way of navigating interviews: the
testing ALKiln framework already knows how to progress through a docassemble interview, and all we need to do is to add a step that says to "check the page for accessibility issues".

### A full audit

Full audits are more intensive than automated checks

The one thing that we are still working on is a full audit. Obivously, full audits are more intensive than automated checks. I'm working with several [LIT Fellows](TODO) on doing a full audit of [courtformsonline](https://courtformsonline.org) and eventually, more of the court intake process. Stay tuned (likely for a new blog post) on that progress.

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
