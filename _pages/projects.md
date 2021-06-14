---
layout: page
title: Projects
front-page: true
permalink: /projects/
headerImg:
  src: /assets/headers/projects.png
  narrow: /assets/headers/projects-narrow.jpg
  width: "500px"
  height: "314px"
  alt: A collection of the different projects Bryce has made
---

Here are some of my current and past personal projects, both software and nonsoftware: hope you can learn something from them or just enjoy them!

## Software Projects

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

For earlier Hackathons, my teams and I made several android apps. They're all a little old,
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
[visioning_texts_page]: https://BryceWilley.xyz/visioning_texts
[forest-repo]: https://github.com/BryceStevenWilley/forest_game
[pacer-repo]: https://github.com/jemitk/Pacer
[pandora-repo]: https://github.com/BryceStevenWilley/PandorasPantry

## Personal Projects

### 3d Art

In my free time, I play around with the 3d animation software, Blender. When I make something good, I'll post it here in [my gallery](/image-gallery) and on [my Instagram](https://www.instagram.com/newbmakingart/).

![A low-poly scene of a desert](/assets/blender/desert_low_poly.jpg)

### Photography

I used to be a volunteer photographer at [BARC](https://www.houstontx.gov/barc/), the City of Houston animal shelter, and I gathered a ton of beautiful pictures of some gorgeous pups.
Some of my favorites are below, and you can also view the [entire collection](/image-gallery#dog-pictures).

<div class="gallery-wrap">
  {% for image in site.static_files %}
    {% if image.path contains 'assets/BARC/projects_subset' %}
      <div class="pictureBox">
        <div class="innerBox">
          <a href="{{ site.baseurl }}{{ image.path }}">
            <img src="{{ site.baseurl }}{{ image.path }}" alt="some dogs that were in BARC">
          </a>
        </div>
      </div>
    {% endif %}
  {% endfor %}
</div>

Please please please, if you are living in the Houston area and are considering adopting a dog, go give the
good pups at BARC a chance. [Check them out!](http://barcly.houstonbarcfoundation.org/#!/home)

[//]: # (TODO: Add Theatre to personal projects: Put key points from Theatre resume here: Sound Design, Projection, etc)
