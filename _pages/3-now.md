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

Last updated October 29th, 2022.

## Professional

### Work Stuff

Still at [Suffolk Law School's Legal Innovation and Technology (LIT) Lab](https://suffolklitlab.org/), working on court form software.
I'm pushing hard to make three user-facing [guided legal forms](https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/#our-work) e-fileable:
* an [Appearance form in Illinois](https://github.com/SuffolkLITLab/docassemble-AppearanceEfile), working with [Illinois Legal Aid Online](https://www.illinoislegalaid.org/),
* a [Motion to Stay Eviction](https://github.com/SuffolkLITLab/docassemble-MotionToStayEviction/tree/new_efiling) for the Massachusetts Appeals Court, and
* the Massachusetts [Affidavit of Indigency Supplement](https://github.com/SuffolkLITLab/docassemble-AffidavitOfIndigencySupplement/pull/46)
  * this form also has me working a lot with our [income question library](https://github.com/SuffolkLITLab/docassemble-ALToolbox/blob/main/docassemble/ALToolbox/al_income.py), improving our API and reusable questions there

I've also done some more accessibility work: I improved the [accessibility of docassemble's combobox](https://github.com/jhpyle/docassemble/pull/581), and I've also started guiding some [Suffolk Law students](https://suffolklitlab.org/courses/fellows/) in putting together a full WCAG 2.1 audit of our docassemble systems, which is exciting.

<!--There's nothing between us and the release, so I'm trying to make sure these webapps are polished and [helpful to users](https://suffolklitlab.org/legal-tech-class/docs/legal-tech-overview/maturity-model/#quick-summary) before they get put out into the real world.-->

<!--Trying to find time to start implementing our "LIT Styler" tool, which will put into effect a lot of thinking I've already done about form "completion ease" and readability.-->

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

Planning a wedding and holiday traveling takes up most of my free time. I did play around with docsets a bit, and [made one for docassemble](https://brycewilley.xyz/assets/Docassemble.xml). I also [tweeted about it](https://twitter.com/wowitisbryce/status/1579576617198059520) because Personal Branding.

### Listening To

Listening to whatever I want to, nothing directed really.
In a spooky mood, because I'm playing [Bloodborne](#gaming).

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
    <tr>
      <td><img src="https://open.spotify.com/album/5nRwiGsiEtrFN847UULpzL?si=8aeb26c2dd674b14" alt="The album cover for SIE Sound Team's Bloodborne Original Soundtrack" height="71" width="71"></td>
      <td>Cleric Beast</td>
      <td><a href="https://open.spotify.com/album/5nRwiGsiEtrFN847UULpzL?si=8aeb26c2dd674b14">SIE Sound Team</a></td>
    </tr>
    <tr>
      <td><img src="https://open.spotify.com/album/5nRwiGsiEtrFN847UULpzL?si=8aeb26c2dd674b14" alt="The album cover for SIE Sound Team's Bloodborne Original Soundtrack" height="71" width="71"></td>
      <td>Darkbeast</td>
      <td><a href="https://open.spotify.com/album/5nRwiGsiEtrFN847UULpzL?si=8aeb26c2dd674b14">SIE Sound Team</a></td>
    </tr>
    <tr>
      <td><img src="https://i.scdn.co/image/ab67616d00004851912cc8fe2e9a53d328757a41" alt="The album cover for Nujabes's Modal Soul" height="71" width="71"></td>
      <td>World's end Rhapsody</td>
      <td><a href="https://open.spotify.com/album/6nVACH6a27eOWiumAJhDWS?si=f51f44a9275141e0">Nujabes</a></td>
    </tr>
    <tr>
      <td><img src="https://i.scdn.co/image/ab67616d00004851b0a48655a55e6d5b499e3d92" alt="The album cover for Alvvays's Antisocialites" height="71" width="71"></td>
      <td>Saved By A Waif</td>
      <td><a href="https://open.spotify.com/album/7CCwkPweMxKq8yWkVerH6T?si=f2be9f43744e4c6a">Alvvays</a></td>
    </tr>
    <tr>
      <td><img src="https://i.scdn.co/image/ab67616d00004851fda889bb57058a4a1b88edcd" alt="The album cover for the Gorillaz' New Gold Single" height="71" width="71"></td>
      <td>New Gold (feat. Tame Impala and Bootie Brown)</td>
      <td><a href="https://open.spotify.com/track/64dLd6rVqDLtkXFYrEUHIU?si=2a60f1cf0e304bb5">Gorillaz, Tame Impala, Bootie Brown</a></td>
    </tr>
    <tr>
      <td><img src="https://i.scdn.co/image/ab67616d00004851d29b9ead409a2ce8833831a1" alt="Album cover for King Gizzard & the Lizzard Wizard's Ice, Death, Planets, Lungs, Mushrooms and Lava" height="71" width="71"></td>
      <td>Ice V</td>
      <td><a href="https://open.spotify.com/album/2nPbslvl01lfELsFHTKp0s?si=fdb34d3ab44a412c">King Gizzard & the Lizard Wizard</a></td>
    </tr>
  </tbody>
</table>

### Gaming

Pretty far into Bloodbourne now, which is my first From Software game. I absolutely love it, the boss and enemy design is amazing, challenging, but not frustrating, and I've gotten to the point where I understand you are rewarded for being persistent against difficult bosses and sections of levels. The world is super interesting too, super weird, in a good way (trying to avoid spoilers, lol).

### Watching

Lots of spooky movies.

* Last Night in Soho: worth a watch, not my favorite though
* Beetlejuice: holds up good
* Hocus Pocus 2: eh, not really worth it
* Clue: incredible, it's a perfect farce
* The Witch: also very good, great October movie
* Origin: SPirits of the Past: wishes it was Princess Mononoke, but the story definitely wasn't