---
layout: post
title: "How to (kinda?) learn a language with Advent of Code"
tags: advent-of-code ruby programming rough
date: 2023-02-18 20:00:00 -0500
headerImg: 
  src: /assets/headers/ruby-tree.png
  narrow: /assets/headers/ruby-tree.png
  width: "200px"
  height: "250px"
  class: no-radius
  alt: "Hacker-terminal green-text on black background ASCII art of a christmas tree, with copies of the Ruby project logo image hanging on the tree as ornaments"
---

[Advent of Code](https://adventofcode.com) is series of 25 different programming challenges,
released one a day from December 1st to 25th.
I got through 16 this year, which is the farthest I've gotten [^1].
I'm not letting it stop me from writing about it though, because I accomplished what I wanted out of it: to become "conversational" in Ruby.

By conversational, I mean I want to:
* be able to write quick scripts in it. Not that I'll end up writing a lot of scripts in Ruby, but for me it's a good metric of if I know enough.
* know the basic structures and their general rules, i.e. what makes Ruby unique? I knew nothing about blocks or procs going in, and had only read a little bit about features like symbols.
* be able to read a local bit of code and understand it. This is the most useful criteria, since it's what you end up doing a lot when you program, but (spoiler for the rest of the post) it's a bit harder to measure with Advent of Code, since you don't read a lot of code.

## Why Ruby?

My ultimate goal is to be able to contribute to ruby open source projects more. I've slowly started using a lot of ruby projects in my free time, like:

* [Jekyll](https://github.com/jekyll/jekyll): what this blog uses as a static site generator
* [Kramdown](https://github.com/gettalong/kramdown): a markdown to HTML converter, used by Jekyll
* [Sonic Pi](https://sonic-pi.net/): as a live coding music software that uses a "ruby-like" syntax
* [Mastodon](https://github.com/mastodon/mastodon) / [Hometown](https://github.com/hometown-fork/hometown): for social networking

I'll occasionally look at issues and skim through those repos, but if I ever actually need to add features, it takes me a really long time and I get stumped by seemingly simple things. I made [a PR on Kramdown](https://github.com/gettalong/kramdown/pull/774), before I started officially trying to learn Ruby; it took me about a day to write, and in [just this one line](https://github.com/gettalong/kramdown/pull/774/files#diff-9a6c95beceb992461ad367f6f4e7554189cf0a1ee385046457806c5ccc2c8929R297), I had to figure out that `@` was for class variables and that symbols just work, no special initialization needed.

## How did it go?

Eh. At the time, I was happy, but a few months out I'm a little disappointed.
You can [look at my solutions](https://github.com/BryceStevenWilley/advent_of_code_2022/) and judge for yourself. My general workflow was:

1. Write the template stuff I've memorized (`if__file__ == $0`, `lines = File.read("day1.txt")`)
2. Us a mixture of maps, for-loops, and functional stuff to solve the problem
3. Run and realize that I made 5 syntax errors, fix them
4. Add a lot of print statements to debug logic errors
5. Done! Don't touch the solution again

I wrote down how long it took me to complete each, until I realized I was never gonna really be fast enough to hit the leaderboard, so I stopped that.

**The most important step** in my opinion was that around day 10, I looked back at [all of my previous solutions with a critical eye](https://github.com/BryceStevenWilley/advent_of_code_2022/commit/73e78d3417bc911a8d1d8e3eabe1d1fce99c04c9)
and noted what I could do to improve things, or just different approaches that used different parts of Ruby.
I tried (with a little success) to integrate those approaches going forward as well. Thanks a ton to
[ahorner](https://github.com/ahorner/advent-of-code/tree/main/lib/2022) for also posting their solutions,
which I learned a lot from.

## Did Advent of Code help?

Short answer: kinda! It's definitely a great way to kickstart using a language. Advent of code goes so fast that it forces you to use it, with actual programming problems. It's great a post-tutorial practice, once you know basic syntax.

There are many Ruby things that are ingrained in me now that would make it a lot easier to write Ruby again:
* `__FILE__ == $0` for scripts, as the equivalent to python's `__name__ == "__main__"`
* `arr.each{|val| ...}` are quick and easy to use
* symbols are by far the most useful feature in a language that I've seen; there have been many times that I'm hesitant to add strings for things
  that should be enums or just a hard-coded value in python.
* Might be a bit hacky, but I did use `attr_accessor :my_attr` on the classes that I wrote all of the time, mostly for debugging.
* Ruby regexes are pretty useful. There was definitely a lot more on them than I could absorb, but I got to use them [pretty effectively
  by the end](https://github.com/BryceStevenWilley/advent_of_code_2022/blob/be72bc4e04b876110cf1754ad41d6318fabae7d9/day15.rb#L138).

Overall, using the language gets rid of a key blocker if I want to learn more: I write a program that runs without too much friction. Debugging gets easier too, since I'm not at the ignorance part of the Dunning-Kruger curve; I know what I don't know, and can stop to look that stuff up.

### How did Advent of Code not help?

However, Advent of Code wasn't really the right tool to hit some of my main goals:
* being able to navigate full projects /modules better
* know common libraries better: rails, etc.

Advent of Code just isn't good for those goals. It might be okay for learning a library or framework, but not at the same time as the language.

I did want to avoid a problem that I'd describe as "using 5 langs like one lang"; i.e. writing every language like you would python. It's easy to do when learning a language shallowly, and the time pressure of Advent doesn't help there. You don't have a ton of time to reflect and improve, but the few times I was able to, I felt myself actually understand a lot more.

Is there a better way to use advent of code? idk. I've seen several really interesting projects in advent of code, but I didn't feel like I would get much out of them:

* Matt Might did [one language a day](https://matt.might.net/articles/26-languages-part1/), similar to mine, but much more ambitious. I definitely couldn't pull that off without "using 26 languages like on lang", if I could do it at all.
* Ben Visness did [the challenges in Dreams](https://bvisness.me/advent-of-dreams/), a Playstation game-making game. Definitely more a fun, light-hearted challenge

Advent of code is great, since there are so many older years that I could go back and do in other languages for some coding practice if I wanted to. If I do it this year, I might go for a more fun challenge, something not really practical, but would be really interesting, like:

* writing it in assembly, x86 or [uxn](https://100r.co/site/uxn.html)
* doing it by hand. Would definitely take forever, but would be an incredible flex
* just doing my normal language, python, so I could focus on getting to the end easily

[^1]: As much as I like the idea, December is just never a good month for me, as the timing of traveling and spending time with family always gets in the way.
