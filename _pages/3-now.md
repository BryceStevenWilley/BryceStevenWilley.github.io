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
Trying to keep it updated at least monthly.

Last updated September 19th, 2022.

## Professional

### Work Stuff

Still at [Suffolk Law School's Legal Innovation and Technology (LIT) Lab](https://suffolklitlab.org/), working on court form software.
I'm pushing hard to make three user-facing [guided legal forms](https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/#our-work) e-fileable:
* an [Appearance form in Illinois](https://github.com/SuffolkLITLab/docassemble-AppearanceEfile), working with [Illinois Legal Aid Online](https://www.illinoislegalaid.org/),
* a [Motion to Stay Eviction](https://github.com/SuffolkLITLab/docassemble-MotionToStayEviction/tree/new_efiling) for the Massachusetts Appeals Court, and
* the Massachusetts [Affidavit of Indigency Supplement](https://github.com/SuffolkLITLab/docassemble-AffidavitOfIndigencySupplement/pull/46)
  * this form also has me working a lot with our [income question library](https://github.com/SuffolkLITLab/docassemble-ALToolbox/blob/main/docassemble/ALToolbox/al_income.py), improving our API and reusable questions there

There's nothing between us and the release, so I'm trying to make sure these webapps are polished and [helpful to users](https://suffolklitlab.org/legal-tech-class/docs/legal-tech-overview/maturity-model/#quick-summary) before they get put out into the real world.

Trying to find time to start implementing our "LIT Styler" tool, which will put into effect a lot of thinking I've already done about form "completion ease" and readability.

<!-- It also means making sure that [docassemble](https://docassemble.org) and our guided interviews built on top of it are accessible. I've done a lot of work there, and will likely do a full (non-expert) audit myself soon, and hopefully can finish my blog post about that experience. -->

### Latest Github Activity

<span id="if-updated"><span>

<script type="text/javascript" src="/assets/js/now.js"></script>

<ul>
<li>
<p><span id="event-title">Made a pull request</span> in the <a id="event-repo" href="https://github.com/SuffolkLITLab/docassemble-ALToolbox">SuffolkLITLab/docassemble-ALToolbox</a> repo.</p>

<blockquote id="event-desc"><p>Correct `aria-controls` to refernce correct id</p><p></p><p>Issue was caught by aXe-core testing: https://dequeuniversity.com/rules/axe/4.4/aria-valid-attr-value?application=axe-puppeteer
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

Planning a wedding and unpacking my new apartment takes up most of my free time. Starting to run, training for
a half-marathon for the first time in ~5 or so years.

Have been playing around with Stable Diffusion locally, using the 16 bit floating point model (I don't have a big
enough GPU for the full sized thing). Not sure what my ultimate goal is, but likely just for personal use.
My favorite image generated so far: 

> Mario and Luigi dancing in High School Musical 2. Photograph

<img alt="An AI-generated image of a human-sized Mario in green overalls dancing on what seems to be a high school theatre set, with extras in the background. Legs and hands point in clearly the wrong directions" src="../assets/1008.jpeg">

### Listening To

Listening to whatever I want to, nothing directed really.

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
    <tr>Lets Play
      <td><img src="https://f4.bcbits.com/img/a1046494527_7.jpg" alt="The album cover for 8-bit & The Single Player's " height="71" width="71"></td>
      <td>Crashed Ship Frigate Orpheon (from "Metroid Prime")</td>
      <td><a href="https://8bitmt.bandcamp.com/track/crashed-ship-frigate-orpheon-from-metroid-prime">8-bit & The Single Players</a></td>
    </tr>
    <tr>
      <td><img src="https://f4.bcbits.com/img/a2759567734_16.jpg" alt="The album cover for Scruffy's Animal Crossing: Taking Root" height="71" width="71"></td>
      <td>11 AM</td>
      <td><a href="https://scruffymusic.bandcamp.com/track/11-am">Scruffy</a></td>
    </tr>
    <tr>
      <td><img src="https://i.scdn.co/image/ab67616d00001e02ae2b34857b6576ed82dcb1b8" alt="The album cover for Pond's 9 (Deluxe Edition)" height="71" width="71"></td>
      <td>Hang a Cross on Me</td>
      <td><a href="https://open.spotify.com/album/1OPNyMf1xQGDLE1PEwdkgs">Pond, Cowboy John</a></td>
    </tr>
    <tr>
      <td><img src="https://i.scdn.co/image/ab67616d00001e028364d54057a38c8a10a95a57" alt="Ugly Side Up's This is a Robbery" height="71" width="71"></td>
      <td>Does Everyone Always Feel Like This?</td>
      <td><a href="https://open.spotify.com/album/3UtNxdx6R4pd75O5XjRF0f">Ugly Side Up</a></td>
    </tr>
    <tr>
      <td><img src="https://i.scdn.co/image/ab67616d000048516d0a13a643d83342430c07da" alt="The album cover for the Mumford & Sons' Sigh No More" height="71" width="71"></td>
      <td>Little Lion Man</td>
      <td><a href="https://open.spotify.com/album/6w5W6ZGTvDsppKUOiGMuMo">Mumford & Sons</a></td>
    </tr>
    <tr>
      <td><img src="https://i.scdn.co/image/ab67616d0000485180c6db47e75d58e25b72f2ca" alt="Album cover for King Gizzard & the Lizzard Wizard's Omnium Gatherum" height="71" width="71"></td>
      <td>Magenta Mountain</td>
      <td><a href="https://open.spotify.com/album/4tuqA7qbVsPukqsYPPrcF7">King Gizzard & the Lizard Wizard</a></td>
    </tr>
  </tbody>
</table>

### Gaming

Replayed some of Hades while I was mid-move and had most of my consoles packed up. It's just as fun to replay every now and then IMO.

Making my way through Bloodbourne, which is my first From Software game. Very hard, but very rewarding, and loving the aesthetics and lore so far.

### Watching

Slowly continuing The West Wing, it's super well written and funny, but the serious parts are just
too pompous and make me laugh every time.

Started High School Musical: The Musical: The Series. To prepare, I had to watch all 3 High School Musicals, and while the first two are
pretty good for what they are, 3 didn't bother to add a script, it's just some good songs and dances.

HMSTMTS is surprisingly funny though, and (dare I say) more cleverly written than its predecessors.
