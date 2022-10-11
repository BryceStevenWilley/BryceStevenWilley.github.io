---
layout: post
title: PDF Field Finding
categories: civic pdf documents fields CV
---

I made a thing! It's a tool that given a PDF without fields, finds where fields could be on the PDF and makes them!
It's like the ____ tool in adobe, but open source (MIT license) and free! You can try it out at < web version here>.

I'm going to walk us through how I did it, and a little bit if why.

## What is a PDF anyway

PDFs are weird. They're absolutely everywhere, and as close to a universal document as there can be. however PDFs are entirely: 
• a stream of characters and their placements
• lines and other types of drawings
• annotations, like fields and such

That's it. while there are some accessibility features, they aren't required, and given the state I've seen many other PDFs in, aren't frequently used (through they should be).

It's also worthwhile to note that there aren't any strings in PDF: each character is placed individually at its location. Much of that we can get around using pdfminer, which plots the characters and attempts to guess (using some very good heuristics) which letters are close enough to be in the same word, in the same line, and in the same text block. It does a pretty good job.


## the how, or when and when not to use Computer Vision

I started off with the most important part: text boxes. thanks to a few stackoverflow answers.


## The why

So, it's pretty good, but definitely not better than a person. An expert in Acrobat could definitely make an equivalent version from scratch in about 10 minutes and a good version on 20 depending on the length of the form. However, we have 1000s of court forms, ~8000,  about. While most have fields, about 2000 of them didn't. That means this tool has already saved us 320hours of work (8 weeks of one FTE) so far, which is pretty good.