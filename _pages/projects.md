---
layout: page
title: Projects
front-page: true
has_gallery: true
permalink: /projects/
headerImg:
  src: /assets/headers/projects.png
  narrow: /assets/headers/projects-narrow.jpg
  width: "500"
  height: "314"
  alt: A collection of the different projects Bryce has made
---

Here are some of my current and past personal projects, both software and non-software: hope you can learn something from them or just enjoy them!

## Talks

<table class="talks">
  <thead>
    <tr>
      <th style="width:17%">Venue</th>
      <th style="width:32%">Summary</th>
      <th style="width:27%">Partners</th>
      <th style="width:17%">Links</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td><a href="https://docacon.com/">Docacon 2023</a></td>
    <td>How to <span class="hacker">hack</span> on Docassemble's internal code</td>
    <td>Solo</td>
    <td><a href="/docacon23-slides">slides</a>, <a href="https://www.youtube.com/watch?v=TcLFA9a1bHs&t=1390s">video</a>
    </td>
  </tr>
  <tr>
    <td><a href="https://www.lsc.gov/events/events/lscs-innovations-technology-conference">ITC 23</a></td>
    <td>Evaluating completion ease of forms, and tips to improve them</td>
    <td>Quinten Steenhuis, Margaret Hagan, and Laurie Garber</td>
    <td><a href="https://docs.google.com/presentation/d/1dMKzyFIWJ_ILFJxhatGFx9lwtWE4OFSeSpb1ZItDbrQ/edit?usp=sharing">slides</a>
    </td>
  </tr>
  <tr>
    <td><a href="https://e-courts.org/conference-info/">eCourts 2022</a></td>
    <td>
    How the Appeals Court and Suffolk worked together for access to justice
    </td>
    <td>Quinten Steenhuis and Paul Tuttle</td>
    <td><a href="https://docs.google.com/presentation/d/1tJ74Ip_fSNEIYu6Xu18j4ljYP4S1XBj83TloQ0cMd64/edit?usp=sharing">slides</a>, <a href="https://vimeo.com/780581207/3fda6a41a3?embedded=true&source=vimeo_logo&owner=11964368">video</a></td>
  </tr>
  <tr>
    <td><a href="https://suffolklitlab.org/events/lookahead/">LIT Lookahead (2022)</a></td>
    <td>Summary of the LIT Lab's work from 2020-2022</td>
    <td>Solo</td>
    <td><a href="/litlookahead-slides">slides</a>, <a href="https://youtu.be/jog3gxZc090?t=2322">video</a></td>
  </tr>
  <tr>
    <td><a href="https://www.lsc.gov/events/events/lscs-innovations-technology-conference">ITC 22</a></td>
    <td>
    E-filing with Open Source Tools
    </td>
    <td>Quinten Steenhuis, Matt Newsted, and Amanda Brown</td>
    <td><a href="https://docs.google.com/presentation/d/1RrYLfxn9rCMbTI5KIfOysaVtidAaSrMt2-aQ_stJzA8/edit?usp=sharing">slides</a></td>
  </tr>
  <tr>
    <td><a href="https://docacon.com/2021/index.html">docacon 2021</a></td>
    <td>
    E-filing in Docassemble
    </td>
    <td>Solo</td>
    <td><a href="/docacon-slides">slides</a>, <a href="https://youtu.be/YB-e-MGtLgI?t=2165">video</a></td>
  </tr>
</tbody>
</table>

For presentations I've made about my previous robotics work, see [my academic work](/academic).


## Software Projects

These are in reverse-chronological order (newest to oldest).

### Misc Smaller Projects

<!-- ([Tweet-thread](https://twitter.com/wowitisbryce/status/1432094270224220172)) -->
* A [python script](https://gist.github.com/BryceStevenWilley/15782cdb064991d383df076cf947dd92) to find the furthest location within a given area from a Dunkin Donuts
* A [python script](https://gist.github.com/BryceStevenWilley/45570af2138b744e8e28ec0fd7421345) that emails all of the participants of a Murder Mystery party who is guilty and who is innocent, so that
  everyone can play without someone knowing secret identity of the murder! Keeps a record of the emails sent later. It's useful for anything that needs to randomly and secretly assign roles to a group
  of people, without anyone knowing any one else's role.

### Visioning Texts

[Visioning Texts][visioning_texts_page] is a data visualization tool for your conversations. It runs locally in your browser, giving you power over your information. It works with Signal, WhatsApp, and Facebook Messenger. You can [extract your own data](/visioning_texts/setup_instructions.html), and if you're too busy to try it yourself, you can [view an example image](/assets/visioning_texts_full.png).

![Visioning Texts Screenshot](/assets/visioning_texts.png)

### Bodhi

[Bodhi][bodhi-repo] is a 2D platformer inspired by the Chinese novel, "Journey to the West". I handled
coding for the entire game using [cocos2d-x](https://github.com/cocos2d/cocos2d-x), and
co-designed some of the levels with [Mei Tan](https://www.linkedin.com/in/meiflwr).

![Bodhi's Main Menu](/assets/bodhi_menu.png)

[//]: # (TODO: add gifs of gameplay.)

### Forest

[Forest][forest-repo] is a procedurally-generated VR 'game' that a [friend](https://github.com/pjh4) and
I made for the Oculus Rift at HackRice 6 ([original version](https://github.com/BryceStevenWilley/oculus-hackrice16)).  The working title was "No Man's Forest",
and was just a chance for us to make a VR game, It ended up being a blast.
However, since I don't own a Rift, I had to [port the game to Mac][forest-repo]! It also builds on Linux (Ubuntu 16.04, feel free to open an issue if it doesn't build on your machine).

<div class="gallery-wrap">
  {% for image in site.static_files %}
    {% if image.path contains 'assets/Forest' %}
        <div class="pictureBox">
            <div class="innerBox">
              <a href="{{ site.baseurl }}{{ image.path }}">
                <img src="{{ site.baseurl }}{{ image.path }}" alt="A picture of the Forest game">
              </a>
            </div>
        </div>
     {% endif %}
  {% endfor %}
</div>

[//]: # (TODO: add gif of admittedly boring gameplay)

### Android Apps

For earlier hackathons, my teams and I made several android apps. They're all a little old,
so I don't know if they build for versions of android newer than L.

* [Pacer][pacer-repo], an app that chooses music based on your running pace at the moment.
* [Pandora's Pantry][pandora-repo], an app that gives you recipes you can make based off
  ingredients that you have in your refrigerator. The app was one of the finalists at HackRice 4
  and our resulting business proposal based on the app idea won 2nd place at the 2015
  Owl Open Startup Competition at Rice.

### Web Things

Just some neat web-based drawing demos written in Angular2 and Dart.

* [Circle drawer](/dart-projects/#/circles)
* [Fractals with the Logo Turtle](/dart-projects/#/logo)

[bodhi-repo]: https://github.com/BryceStevenWilley/JTTW
[visioning_texts_page]: [/visioning_texts](/visioning_texts)
[forest-repo]: https://github.com/BryceStevenWilley/forest_game
[pacer-repo]: https://github.com/jemitk/Pacer
[pandora-repo]: https://github.com/BryceStevenWilley/PandorasPantry

## Personal Projects

### 3d Art

I used to play around with [Blender](https://www.blender.org/), a 3D modeling software. When I make something good, I'll post it here in [my gallery](/image-gallery.html).

![A low-poly scene of a desert](/assets/blender/desert_low_poly.jpg)

### Photography

I used to be a volunteer photographer at [BARC](https://www.houstontx.gov/barc/), the City of Houston animal shelter, and I gathered a ton of beautiful pictures of some gorgeous pups.
Some of my favorites are below, and you can also view the [entire collection](/image-gallery.html#dog-pictures).

<div class="gallery-wrap">
  {% for image in site.static_files %}
    {% if image.path contains 'assets/BARC/projects_subset' %}
      <div class="pictureBox">
        <div class="innerBox">
          <a href="{{ site.baseurl }}{{ image.path }}">
            <img src="{{ site.baseurl }}{{ image.path }}" alt="a picture of a dogs from BARC">
          </a>
        </div>
      </div>
    {% endif %}
  {% endfor %}
</div>

Please please please, if you are living in the Houston area and are considering adopting a dog, go give the
good pups at BARC a chance. [Check them out!](https://www.houstontx.gov/barc/)

[//]: # (TODO: Add Theatre to personal projects: Put key points from Theatre resume here: Sound Design, Projection, etc)
