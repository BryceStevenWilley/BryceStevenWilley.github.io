---
layout: post
title: PDF Forms
tags: civic career pdf documents polished
---

I've done a lot of stuff with PDFs in the past few years. Our entire operation is essentially
filling them in, and sending them to courts, via email, printing, or e-filing.

Filling them in generally has worked. But when we started our FormFyxer tasks,
I needed a lot more knowledge about what actually happens inside a PDF.

Enter forms: chapter 12.7 of the PDF spec. It's only about 30-40 pages, but in my job, it's the
most important spec out there. And surprisingly, I never read all of it until recently. It's
one of the few specs that does actually describe things okay, compared to NIEM or SOAP mess.

## PDF background

The best official PDF source out there is PDF spec 1.7, which is described in ISO 32000-1. You could buy this
spec for ~$200, or you could go to the web archive and find where Adobe used to host the spec for free. (maybe
the latter).

Sections you should probably read:

* 7: 7-1 -> 7.3, then 7.7
  * data types, specifically dictionaries
  * data layout, objects

* 8: have a general idea of how graphics work. Out of scope for now
* ignore 9-11
* 12: 12.5
  * Annotations

That's it!

### What is a PDF?

A PDF is at the highest level, a series of instructions with something to draw, and where to draw it.
That's it. It's good at what it does, which is displaying paper sized documents exactly[^1] the same as they would
look printed out.

Looking inside, PDFs are a mix of ASCII text, and the occasional byte stream. Technically, any PDF can be written using only
ASCII text (if you need arbitrary bytes, you can use Filters (7.4.1) like the ASCIIHexDecode or ASCII85Decode filters to convert
this ASCII only text to the arbitrary bytes). However, most of the time, PDFs just write bytes instead, because it's more efficient.
We'll be writing things in all ASCII here, just to make things a bit easier.

We can also add comments to our PDF, which is mostly only useful for explaining things, as most PDF editors (which need to be automated)
ignore comments.

## General Interactive forms (12.7.1)

## Interactive forms dictionary

## Field dictionaries

Field dictionaries also have info from Name dictionaries and annotation dictionaries
as well.

## Field Types

### General

### Button

### Text

### Choice

### Signature

* 12.8?

## Form Actions

## Named Pages

## Forms Data Format (FDF)



[^1]: Not exactly, but we might not get to that in this post.