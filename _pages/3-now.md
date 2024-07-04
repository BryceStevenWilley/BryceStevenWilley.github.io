---
layout: page
title: Now
front-page: true
permalink: /now/
---

## What is this?

It's a now page: what I'm focused on at the moment, both professionally and personally.
It's what I'd tell on old co-worker if we met up for a 30 minute lunch.
Inspired by [Derek Sivers](https://sive.rs/nowff).
Trying to keep it updated every 3 months or so.

Last updated July 4th, 2024.

## Professional

### Work Stuff

I'm working at the IRS now! I'm in the Taxpayer Experience Integration Office, which is a brand new team
working on improving common services for the IRS, streamlining efforts and improving code quality.

For the first time in a while, I feel fairly stable in my career. I feel like have some amount of control over how well I do at my job
and that I can actually improve things. Working in such a big organization has been a shift, but I'm starting to feel a bit better now.

I'm still trying to figure out [what exactly I can talk about](/about#dontsueme). I think I'll keep quite about most of it for the moment.
But I still plan on posting here, it'll just be about more of what I do in my free time outside the IRS. Still technical content, but
might mix in some fun posts now and then.

### Latest Github Activity

<span id="if-updated"><span>

<script type="text/javascript" src="/assets/js/now.js"></script>

<ul>
<li>
<p><span id="event-title">Made a pull request</span> in the <a id="event-repo" href="https://github.com/SuffolkLITLab/docassemble-ALToolbox">SuffolkLITLab/docassemble-ALToolbox</a> repo.</p>

<blockquote id="event-desc"><p>Correct `aria-controls` to reference correct id</p><p></p><p>Issue was caught by aXe-core testing: https://dequeuniversity.com/rules/axe/4.4/aria-valid-attr-value?application=axe-puppeteer
</p><p>
</p><p>The issue happened because `tag_group_name` was added to the beginning of each id / href, but not to aria-controls.
</p><p>The `tab_id` was never used individually, so I just updated it to include both `tab_group_name` and `tab_id`,
</p><p>and then replaced its used in the tabs and tab panels.</p></blockquote>
</li>
</ul>

## Personal

### Doing

Started using PopOS! after being on Ubuntu 20.04 for 3 or so years. Playing saxophone mostly, since I finally got it repaired after 9 months of owning it.

Also started playing DnD again with my old group, and it's fun again.

### Listening To

* Really loving BRAT. Never been much of a Charli girlie, but I might be now. 
* The Challenger's soundtrack is my new trance / working music
* Ginger Root is my new favorite funk artist

[//]: steps for gathering: next time, just copy the album links (ctrl-shift-right click to inspect) and type info directly, lolW

<table class="listening">
  <thead>
    <tr>
      <th style="width: 10%">&nbsp;</th>
      <th style="width: 40%">Song</th>
      <th style="width: 50%">Artist</th>
    </tr>
  </thead>
  <tbody>
    {% song_table --song="Von dutch" --album="BRAT" --artist="Charli xcx" --img_id=ab67616d00001e0288e3822cccfb8f2832c70c2e %}
    {% song_table --song="Neverender" --artist="Justice" --album="Hyperdrama" --img_id=ab67616d00001e028f4b5df3a6ee2abb733080a9 %}
    {% song_table --song="I Look to You" --artist="Miami Horror" --album="Illumination" --img_id=ab67616d00001e02b16108afdbe9285b9eaa00e7 %}
    {% song_table --song="Better Than Monday" --artist="Ginger Root" --img_id=ab67616d00001e02447b19c8cda2e280844a6f64 %}
    {% song_table --song="Challengers: Match Point" --artist="Trent Reznor and Atticus Ross" --album="Challengers (Original Score)" --img_id=ab67616d00001e02b08b724b35455ddf8e385546 %}
    {% song_table --bandcamp --song="Cavalry" --artist="Patricia Taxxon" --album="Bicycle" --song_url=https://patriciataxxon.bandcamp.com/album/bicycle --img_id=https://f4.bcbits.com/img/a3557864768_16.jpg %}
  </tbody>
</table>

### Gaming

* Elden Ring, again. I'm slow, but trying to get far enough to start the DLC.

### Reading

* A Philosophy of Software Design: a very good way of actually focusing on complexity. Comparing it to Clean Code (don't get me started) and Refactoring (which is okay, but a lot of "I just think this way is better"), I think it'll be much more useful in the long term.
* The Penguin Book of Dragons: pretty interesting read through a lot of historical stuff.
* The Elements of Typographic Style
* Dracula, just because. Actually pretty good. Ending seems a little rushed, but overall a good story. Somehow I'd never seen any adaptions of the whole story, just the stage play, which leave out the ending chase.

