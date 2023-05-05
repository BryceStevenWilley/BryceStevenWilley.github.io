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

Last updated May 4th, 2023.

## Professional

### Work Stuff

Still at [Suffolk Law School's Legal Innovation and Technology (LIT) Lab](https://suffolklitlab.org/), working on court form software.

Only update here is that we have published our paper about Form complexity! ["Beyond Readability with RateMyPDF: a combined rule-based and machine learning approach to improving court forms"](https://suffolklitlab.org/docassemble-AssemblyLine-documentation/assets/files/Beyond%20Readability%20with%20RateMyPDF-96e42df12b1b4fce13d6a9c059cd0fbf.pdf) is a paper written by my colleague Quinten Steenhuis, myself, and David Colarusso about our work on [ratemypdf.com](https://ratemypdf.com/), a tool that we created to evaluate court PDF forms, attempting to estimate how long it takes to
fill them out, and how complex they are. Check it out!

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

### Long Term Career Stuff

My position at the LIT Lab is grant funded, and ends in Q3 2023, so I'll be
looking for a new gig around then! I have a variety of different tech skill sets,
and am not concerned about developing a few more. But I am more interested in making sure
that I work at a place [helps under-served communities help themselves]({% post_url 2021-06-20-new_job %}),
and developing the skills to do that well (like partnership building).

## Personal

### Doing

Planning a wedding and unpacking takes up most of my free time. When I get some free time, it's been spent building up my federal resume. I've moved my mastodon account to the new [public interest instance](https://mastodon.publicinterest.town/@brycew), which I recommend.

### Listening To

Bunch of random stuff. Prepping for going to Boston Calling in a few weeks.

[//]: steps for gathering: next time, just copy the album links (ctrl-shift-right click to inspect) and type info directly, lolW

<table class="listening-to">
  <thead>
    <tr>
      <th>&nbsp;</th>
      <th>Song</th>
      <th>Artist</th>
    </tr>
  </thead>
  <tbody>
    {% song_table --song="Northern Attitude" --album="Stick Season" --artist="Noah Kahan" --img_id=ab67616d00001e026ee35072df1af802cca09918 %}
    {% song_table --song="ISLAND" --artist="JIMSAKU" --album="DISPENSATION" --img_id=ab67616d00001e02fdee033379f7781f013f15a4 %}
    {% song_table --song="Everybody Knows That You're Insane" --artist="Queens of the Stone Age" --album="Lullabies to Paralyze" --img_id=ab67616d00001e029fbc395aa3944da173e69fda %}
    {% song_table --bandcamp --song="Sunset Skating" --artist="Louie Zong" --album="Cartoon Funk" --song_url=https://louiezong.bandcamp.com/track/sunset-skating  --img_id=https://f4.bcbits.com/img/a1689585732_10.jpg %}
    {% song_table --bandcamp --song="Late Afternoon" --artist="ann annie" --album="By Morning" --song_url=https://annannie.bandcamp.com/album/by-morning --img_id=https://f4.bcbits.com/img/a3664421650_16.jpg %}
    {% song_table --bandcamp --song="Gondii" --artist="King Gizzard & The Lizard Wizard" --album="Changes" --song_url=https://kinggizzard.bandcamp.com/track/gondii --img_id=https://f4.bcbits.com/img/a1890146474_16.jpg %}
  </tbody>
</table>

### Gaming

I about 50 hours in Elden Ring, and really liking it. The core game loop is really fun; it's engaging and challenging in the same way that Bloodborne was for me, but I haven't (yet, though I heard the last 3rd of the game is grindy) had to get stuck at a single boss; if I lose more than 5 times, I just go do something else, get stronger, comeback and have a much better time. The story IMO isn't as engaging as Bloodborne's was, but the exploration is really fascinating, both for the same reason: the world is just so big. It's great to get lost in all of the corners and get a sense of something larger, but it makes for a weaker narrative, since everything is so spread out. I've never been the biggest fan of NPC interactions in From Software games, and Elden Ring has the same sort of stiff NPCs that don't seem to do anything, so it can feel big, but a bit hollow.
