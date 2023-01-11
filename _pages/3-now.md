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

Last updated January 10th, 2023.

## Professional

### Work Stuff

Still at [Suffolk Law School's Legal Innovation and Technology (LIT) Lab](https://suffolklitlab.org/), working on court form software, particularly [e-filing](https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/#our-work).
Last month I released an [e-fileable Appearance form](https://github.com/SuffolkLITLab/docassemble-AppearanceEfile) in Illinois, working with [Illinois Legal Aid Online](https://www.illinoislegalaid.org/)! It's the result of a lot of work over the past 2 years, and I'm really happy
to see it out in the world.
I'm also pushing hard to have our other [Motion to Stay Eviction](https://github.com/SuffolkLITLab/docassemble-MotionToStayEviction/tree/new_efiling) for the Massachusetts Appeals Court go live, gotta wait on bureaucracy now though.

I just did a conference talk at [eCourts 2022](https://vimeo.com/780581207/3fda6a41a3?embedded=true&source=vimeo_logo&owner=11964368) (we got [an article in GovTech](https://www.govtech.com/gov-experience/how-tech-court-teamed-up-to-fight-evictions-via-smartphone) too), with my colleague [Quinten Steenhuis](https://www.nonprofittechy.com/) and our partner in the Massachusetts Appeals Court, [Paul Tuttle](https://www.linkedin.com/in/paul-tuttle-0b211914a), on the work we've done together. I had hoped to have the e-filing app live by the time the talk happened, but eh <span aria-label="shruggie emoticon">¯\\_(ツ)\_/¯</span>.


I've also done some more [accessibility work]({% post_url 2022-11-25-accessibility %}): I improved the [accessibility of docassemble's combobox](https://github.com/jhpyle/docassemble/pull/581), and I've also started guiding some [Suffolk Law students](https://suffolklitlab.org/courses/fellows/) in putting together a full WCAG 2.1 audit of our docassemble systems, which is exciting.

<!--There's nothing between us and the release, so I'm trying to make sure these webapps are polished and [helpful to users](https://suffolklitlab.org/legal-tech-class/docs/legal-tech-overview/maturity-model/#quick-summary) before they get put out into the real world.-->

<!--Trying to find time to start implementing our "LIT Styler" tool, which will put into effect a lot of thinking I've already done about form "completion ease" and readability.-->

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

Planning a wedding and house-hunting takes up most of my free time. I've moved my mastodon account to the new [public interest instance](https://mastodon.publicinterest.town/@brycew), which I recommend. It's a bit small now, but the community is growing, and I'm seeing lots of interesting new people.

I'm also reading about and playing around with [live coding](https://livecodingbook.toplap.org/). I've on and off tried [Sonic-pi](https://sonic-pi.net) for a while ,but I'm taking the idea of starting with nothing and trying to implement something in a small time frame more seriously (15-30 minutes, a "live coding set" in that I am coding the whole time, even if I spend 10 minutes debugging). I'm also trying to learn [SuperCollider](https://supercollider/github.io/) and [Tidal Cycles](https://tidalcycles.org/) (in the form of [Strudel](https://strudel.tidalcycles.org/learn/getting-started/)), and I am reading [The Theory and Techniques of Electronic Music](http://msp.ucsd.edu/techniques.htm).

### Listening To

Last month was my favorite time of year: Spotify wrapped. I absolutely love seeing what all of my friends have been listening to, and breaking out of my own musical bubble. I have a [Spotify playlist](https://open.spotify.com/playlist/6NxH6L5jNfwMRThWiPI85E?si=14c89550af4d4742) that has a song or two from all of the wrapped posts that I saw. I'll list some of my favorites from it below.

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
    {% song_table --song="Sister Sister" --album="Sister Sister" --artist="Mtbrd" --img_id=ab67616d000048515340a2d93cee5436c54cc3f1 %}
    {% song_table --song="Universal Sound" --artist="Tyler Childers" --album="Purgatory" --img_id=ab67616d000048515a38bd36056b909ed607689d %}
    {% song_table --song="Angel" --artist="Placid Angles" --album="First Blue Sky" --img_id=ab67616d00004851ca46b2cae57b6e6e4074e62c %}
    {% song_table --song="Everything's Electric" --artist="Liam Gallagher" --img_id=ab67616d00004851042e36a10bb80151ed47d7af %}
    {% song_table --song="Unholy (feat. Kim Petras)" --artist="Sam Smith, Kim Petras"  --img_id=ab67616d00004851a935e4689f15953311772cc4 %}
    {% song_table --song="Slumber Party (feat. Princess Nokia)" --artist="Ashnikko, Princess Nokia" --album="DEMIDEVIL" --img_id=ab67616d0000485111b63834a1a557cc77403458 %}
  </tbody>
</table>

### Gaming

I finished Bloodborne, which is my first From Software game. I absolutely loved it, 100% would recommend.

I started and stopped playing Horizon: Zero Dawn. I have mixed feelings about it; at times I liked the combat and the world building, but then I'd get tired of having to fight 20 robots every 5 feet, and just got to the point where I played all of the story that I could. I wasn't impressed with the writing, though the vocal performances were fine.

I'm about 1/2 way through Uncharted 4: Thieves End. Really liking revisiting the characters after playing through the first 3 games in high school. The writing, the little one liners and the character arcs are great so far.

### Watching

Re-watched [Knives Out](https://en.wikipedia.org/wiki/Knives_Out), and despite the fact that it is very in the moment of 2019, it's aged very well, and still is funny and riveting. I also watched the sequel, [Glass Onion](https://en.wikipedia-org/wiki/Glass_Onion:_A_Knives_Out_Mystery), which is great in different ways; it's not really a mystery in the same way, but it's just as funny IMO.
