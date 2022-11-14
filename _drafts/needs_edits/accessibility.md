---
layout: post
title: "Accessibility in the Assembly Line Project" 
tags: accessibility civic a2j equity software standards
#date: 2022-01-16 08:12:49 -0500
---

Over the past 6 months or so, I've been leading a lot of work to make [docassemble](https://docassemble.org) and [our e-filing guided interviews](https://courtformsonline.org) more accessible. To do it I had to read a lot of different specs, which was really confusing at first. Here are the tools I used, and some summaries of the standards, because standards suck.

<aside>
Big disclaimer here: I am not an accessibility expert. I've long been an observer of accessibility, but have only gotten deep into it in the past year. I am still building my knowledge on the subject. If anything I say here goes against what disabled people or accessibility experts say about accessibility, listen to them (and let me know so I can correct anything here).
</aside>

## What is accessibility?

Pretty much everyone uses the digital technology now. And that means _everyone_: people with low vision and blindness, people who are hard of hearing or deaf, people with ADHD or dyslexia, and [many others](https://www.w3.org/WAI/people-use-web/user-stories/). Notably, if you can name some way people can interact with technology (seeing at a screen, using a mouse, etc.) there is a group
of people (who's population size would likely surprise you) that _can't_ interact in that way with technology.

Accessibility [^1] is making technology flexible enough to be interacted with many different ways. That's it. The hard part is in the details of what that means though.

![Illustration with labeled graphics of boxes, content, and people. At the top center is a pie chart, an image, a form, and text, labeled “content”. From the bottom left, a line connects “developers” through “authoring tools” and “evaluation tools” to “content” at the top. From the bottom right, a line connects “users” to “browsers, media players” and “assistive technologies” to “content” at the top.](/assets/blogs/accessibility/relate.png)

Web accessibility is a bit more focused; to view web content (say, this blog post), you're probably using a web browser like Chrome or Firefox. However people also use other software, called assistive technologies or "user agents" in the standards, to help them view the content. Those technologies range from things like screen readers, Braille displays, and [auto-captioning tools](https://blog.google/products/android/live-caption/), to eye trackers, voice recognition, and on-screen keyboards.
These assistive technologies use the accessibility interface exposed by operating systems
and browsers to transform web page content into something that can be perceivable and operable by those tools' target audience.

Given the varying technologies interacting with the same content (authors, web tech, browsers, and assistive technologies), the best way for all of them to work together is [by using standards](https://www.w3.org/WAI/fundamentals/components/). When we're talking about web accessibility in this post, we're talking about web accessibility standards.
However, don't forget about the root purpose of those standards: the users. Standards are the result of general accessibility user testing over lots of different types of web apps.
However, your website can still be perfectly coded to web accessibility standards, but not really be usable to a specific group of people.
Specific user testing with your specific web app is the only way to find and fix those gaps.

### What are all the acronyms?

In my experience, acronyms and all of the different overlapping documents, standards, and pages were the hardest part about of trying to understand web accessibility. Here are some you'll see often:

* [WCAG](#WCAG): Web Content Accessibility Guidelines. These are the web accessibility standards themselves.
* WCAG-EM: WCAG Evaluation Methodology
* [ARIA](#ARIA): Accessible Rich Internet Applications, a set of features that you can use to more directly control the accessibility experience of a web page.
* W3C: The World Wide Web Consortium: the group that develops our accessibility standards, like WCAG and ARIA, and other web standards, like CSS.
* WAI: Web Accessibility Initiative: The group responsible for developing all of the W3C's accessibility standards and documents.
* [WHATWG](https://wtatwg.org/faq#what-is-the-whatwg): Web Hypertext Application Technology Working Group: a separate group that makes just the standard on HTML
* [TR](https://www.w3.org/2015/Process-20150901/#requirements-and-definitions): Technical Reports: it's in most of the URLs of the web standards you'll see
* [ATAG](https://www.w3.org/WAI/standards-guidelines/atag/): Authoring Tool Accessibility Guidelines: this is the standard for authoring tools generating accessible
  content, which includes any tool that helps you, the author, generate web content, from what-you-see-is-what-you-get HTML editors, to social media post editors.

## Accessibility Standards

### WCAG

WCAG are the standards themselves, the bible. It is broken up into individual testable statements, called success criteria.
Each criterion is something about the website that can be true, e.g.
<q>Labels or instructions are provided when content requires user input</q>.
If you are a developer interested in making accessible web content however, you probably shouldn't focus on it. The issue is mentioned right in the first paragraph of WCAG 2.1:

> WCAG 2.1 success criteria are written as testable statements that are not technology-specific. Guidance about satisfying the success criteria in specific technologies, as well as general information about interpreting the success criteria, is provided in separate documents.

I.e., reading WCAG doesn't really help you _write_ accessible web content; it tells you what your final website should do, but not how to get there. You have to read the "other documents" for that, which we'll get to soon.

There are several versions of WCAG. You should probably use the latest, but it helps to understand that each version expanded to incorporate the technologies of the time it was written and new groups of people with disabilities. For example, WCAG 2.0 came out in 2008 (think early Youtube and Facebook years), so it emphasizes "dynamic Web pages... including 'pages' that can present entire virtual interactive communities." WCAG 2.1 came out in 2018, so the technical focus is on mobile devices, but also emphasizes cognitive disabilities and low vision. There's some ongoing (as of November 2022) work on a WCAG 2.2, which includes additional parts on focus and authentication, and a much more redical change in WCAG 3.0, which focuses much more on user-centered research and testing, but isn't quite finished yet.

Each succcess criterion also has a conformance level, either A, AA, and AAA. The conformance levels are how hard it's considered to do what those statements say: A for the easiest statements, and AAA for the more difficult statements. WCAG itself says that <q>it is not possible to satisfy all Level AAA Success Criteria for some content</q>.

I like to think of conformance levels as mission rankings in Sonic. 

![A screenshot of a sonic level, with an "A" rank](/assets/blogs/accessibility/SonicAdventure2_DC_ResultsScreen.png)

The documents about satisfying and interpreting the success criteria, i.e. the ones that you actually end up referencing a lot as a developer and tester of WCAG are:

* [How to Meet WCAG (Quick Reference)](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&showtechniques=111)
* [Techniques for WCAG 2.1](https://www.w3.org/WAI/WCAG21/Techniques/)

<aside>
If you're in the US, you may also come across Section 508. Section 508 is a law for federal orgs and orgs receiving federal funding. While WCAG is only a "recommendation" from
W3C, i.e. "if you create content on the web, you should do this", Section 508 is a law, and specifically requires you to conform or face consequences.
However, a recent update to Section 508 <a href="https://www.access-board.gov/ict/#E207.2">explicitly links the two together</a>:

<blockquote cite="https://www.access-board.gov/ict/#E207.2">User interface components, as well as the content of platforms and applications, shall
conform to Level A and Level AA Success Criteria and Conformance requirements in WCAG 2.0</blockquote>

In my non-expert opinion, parts of section 508 (<a href="https://www.access-board.gov/ict/#501.1">501.1 specifically</a>) seem to imply that there are additional
requirements for software in the law beyond WCAG 2.0, but it's not clear, i.e. WCAG is necessary but might not be sufficient.
</aside>

### The DOM

To understand accessibility, you need to have a good understanding of the DOM and the accessibility tree.

The DOM stands for "Domain object model", which in my opinion is a garbage name. It's a way to describe, access, and modify XML and HTML documents.
It's a tree of nodes, which for HTML directly map to HTML elements like `<body>` or `<div>`. 
(TODO(brycew): describe in a little bit more detail, give a visual example, and maybe a bit more about what it's used for in accessibility.)
The HTML DOM narrows down DOM things a little bit,
giving specific meaning to some attributes (`class`, `id`, etc.), and defining what's valid DOM, like requiring all children of an unordered list, `<ul>`,
to be list items, `<li>`.

### ARIA

Accessible rich internet applications (ARIA) occupy a strange place in accessibility technologies. ARIA is a standard that essentially gives you full control over how accessibility technologies read and understand a web page. 
It gives you so much control that in several places in the ARIA standard itself,
you are warned against using it: <a href="https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/"><q>no ARIA is better than bad ARIA</q></a>. However, given how much web development is a series of `div`s and `span`s,
it's still necessary if you are writing anything interactive.

ARIA gets it's strength by directly influncing the accessibility tree. The accessibility tree is a parallel copy of the HTML DOM. By using [ARIA](#ARIA, this copy of the tree can be modified to 
assist with accessibility of certain features and widges. For example, an element with `role="presentation"`, or `aria-hidden="true"` won't be available to the accessibility API and thus aren't visible to screen readers and keyboard users.

ARIA has 3 key parts: roles, states and properties.

Roles apply HTML element semantics to completely different elements. For example, you can include `<div role="paragraph">` in a
page, and the accessibility interface to the page will treat it like it was a `<p>` instead. Sometimes there are ARIA roles that don't exist as HTML elements, like `role="tree"`, or TODO(brycew). They work the same as native HTML elements though. In fact, the existence of ARIA is supposed to encourage the development
of new, more semantic host language features. Once a role is assigned to an element, it cannot be changed; you have to delete the element (and all of it's children) from the DOM and create a new element with the role that you want it to have.

State and properties both let people know what elements might change or be updated on the page.
The standard itself mentions that states and properties are a bit difficult to distinguish, but
the main idea is that states are expected to change often, and properties are expected to change less often. 
However, in practice, properties can change more than states, so the distinction is sometimes ignored.

An important aspect of properties is that they set the accessible names for elements, using `aria-label`, `aria-labelledby`, and `aria-describedby`.
TODO(brycew): more description here.

If you aren't writing full widgets yourself, the most useful things to know about ARIA are the general idea and its terms. 
You'll likely run into ARIA in the wild when doing automated accessibility audits if another developer didn't follow the rules for roles and states correctly. For example, using the aXe automated accessibility checker
can send you to the Deque University site for an [issues with the presentation role](https://dequeuniversity.com/rules/axe/4.4/presentation-role-conflict), or an
[issue with the accessible name for a progress bar](https://dequeuniversity.com/rules/axe/4.4/aria-progressbar-name).
You'd need to know what a role is, what the presentation and progressbar roles are, and how to properly name an accessible element.
That's the most practical way to learn the details of ARIA.

### Real-life Example: Comboboxes in Docassemble

Since my biggest obstacle when learning about accessibility standards was actually figuring out how to apply them when writing
web pages, I thought I'd give an example of when I used them often: improving the built-in combobox widget in docassemble.

Comboboxes are a combination of a text box and a drop down. It looks like a text box, but when you start typing into the box, a list of possible options that match what you've typed so far appears below it. You can select one of those options, or you can type your own option that isn't available in the textbox, and submit a different value. This aspect is important in docassemble, because you 
otherwise need to implement such a feature with two separate fields, a dropdown with an "other" option, and a text box that appears only if "other" is selected. It also adds additional complexity to the docassemble code on the backend.

Such a widget would need focus on a few accessibility key points:
* keyboard controls would need to be consistent
* accessibility tools would need to be alerted when the list of matching items first appears and when it's contents change

Docassemble uses a modified version of [this jquery plugin](), that unfortunately lacked attention to both of those accessibility
key points. It didn't use much ARIA at all, and completely inaccessible to screen readers. The example at [The ARIA site]() goes a long way to remedying these issues. Before, the generated HTML of a combo box would look like this:

```html

```

Now, after fixing some of the accessibily issues, the HTML looks like

```html
```

### Techniques and Failures

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

[^1]: Asseccisibilty is sometimes shortened to `a11y`, because there are 11 letters between the starting 'a' and ending 'y'. You might see a similar shortening of internationalization to `i18n`.