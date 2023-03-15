---
layout: post
title: Why Architecture Decision Records (ADRs) are Good
tags: civic software project management architecture rough
date: 2023-03-14 20:00:00 -0500
---

I'm coming up on 2 years of working on my [EfileProxyServer project](https://github.com/SuffolkLITLab/EfileProxyServer),
a large project in Java, a language that I knew but hadn't actively worked with for about 5 years
before starting this project [^1].
One good decision that I made fairly early on in the project was to make Architecture Decision Records (ADRs).

## What are ADRs?

I first heard about ADRs from [an 18F blog post](https://18f.gsa.gov/2021/07/06/architecture_decision_records_helpful_now_invaluable_later/)[^2].
The general idea is that you have a folder of text files stored with the source code of a project. Each file focuses on one
particular change or choice that needed to be made for your project, and covers:

* the background leading up to the change or choice, and why it needed to be made
* the particular options and their pros and cons
* the final choice made and why that particular option won out
* the status

That's really it. It's a simple idea, and not too complicated to do. It's probably a bit easier
that I'm the only major contributor to the EfileProxyServer project. Even on a bigger project though,
it'd be easy to write one up after a group discussion, and link to the GitHub issue or
internal recording where the longer discussion was had.

## Why ADRs?

Even though ADRs are so simple, there are a few reasons why I love them.

### Historical documentation

There's a ton of different types of documentation that your projects can have. You need user facing documentation, developer documentation (CONTRIBUTING.md), and roadmap or project level documentation, which is less documentation and more just issue tracking and future oriented stuff.

There's also a fourth secret thing: historical documentation. Historical documentation lets you go back to a point in time
and ask "why did this happen now"? Pretty much all projects have version control (i.e. `git`) that can serve as historical
documentation.
Git commits are great places to revisit a project's history, especially if they're
[good git commits](https://meedan.com/post/how-to-write-longform-git-commits-for-better-software-development).
But usually, commits are a bit more detail oriented, and
for long-lived, larger projects, they pile up very quickly; going through all of them is difficult.

### Alternatives

Something that is often missing from git commits are alternatives; you might list a few things that you
tried and didn't work out in a commit message, but you aren't going to list every single thing that you could have done.
It would be confusing to burden future readers of the code about other potential choices that could have made as well.

Documentation of the alternatives is a killer feature for ADRs. Writing out your alternatives is a great way to [make sure you are doing the right thing](https://youtu.be/jog3gxZc090?t=1241), and it's great to be able to see alternatives and why you avoided them for all of the choices you've made in a single place.
For EfileProxyServer, ADRs have definitely helped me have self confidence that I made the right decision at the time [^3].
My latest ADR for the project was a [long comparison
of alternatives for making a documentation site for the REST API](https://github.com/SuffolkLITLab/EfileProxyServer/blob/main/docs/adr/008-choice-of-documentation-site.md), and the most important ADR I've probably written for the project
[explains why we wrote the whole thing in Java in the first place](https://github.com/SuffolkLITLab/EfileProxyServer/blob/main/docs/adr/001-java-cxf-for-soap.md).
I'm hoping in the future it will prevent re-writes of the same code, or at least help folks know what they're getting into and the reasoning behind certain decisions.

### Choices too obvious to write down

Another example of an ADR that I wrote was [which database to use](https://github.com/SuffolkLITLab/EfileProxyServer/blob/main/docs/adr/003-use-postgres-as-database.md).
Choosing a database could have been a simple undocumented choice, but our conversation forced us
to try to estimate our database usage, and illuminated some other potential benefits from choosing
PostgreSQL, like that it's also the database used by Docassemble. Future
maintainers of the Efile Proxy Server will also likely have docassemble experience,
so they would have fewer pieces of software to deal with.

## Difficulties

Most of the ADRs I've written are comparisons of dependencies to use, and not about the architecture of the project.
The architecture of the project has been forced to be be in flux for most of the project while we tried to scope out
the project while struggling with the underlying technology, creating an working prototype, and trying to design for
the future as well. I don't think it's issue with ADRs, just me as a still-learning developer.

## Conclusions

In the grand scheme of things, ADRs are minor compared to having solid in-code and developer documentation, but they're a great foundation for longevity and forward thinking in a project, and really don't take too long to write on our small team.


[^1]: And that previous experience with Java was at Google, which had a very
    non-standard way of building and deploying java projects.

[^2]: I wrote a whole first draft of this post, and only when I was editing and added the
    link to the 18F blog post did I realize that they make most of the same points.
    So, maybe think of this post as independently verified proof of those points.

[^3]: When working by yourself with a new technology, you do need a little bit of self confidence,
    otherwise you'll never get anything done and constantly be questioning yourself.
