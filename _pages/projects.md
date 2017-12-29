---
layout: page
title: Projects
front-page: true
permalink: /projects/
---

Here are some of my current and past personal projects, both software and nonsoftware: hope you can learn something from them or just enjoy them!

# Software Projects

## Bodhi

[Bodhi][bodhi-repo] is a 2D platformer inspired by the Chinese novel, "Journey to the West". I handled
coding for the entire game using [cocos2d-x](https://github.com/cocos2d/cocos2d-x), and
co-designed some of the levels with Mei Tan.  

## Forest

[Forest][forest-repo] is a procedurally-generated VR 'game' that a [friend](https://github.com/pjh5) and 
I made for the Oculus Rift at HackRice 6 ([original vesion](https://github.com/BryceStevenWilley/oculus-hackrice16)).  The working title was "No Man's Forest", 
and was just a chance for us to make a VR game, It ended up being a blast. 
However, since I don't own a Rift, I had to port the game to Mac, which you can find
[here][forest-repo]! The installation isn't general yet (library locations are hardcoded to my machine, etc),
but feel free to open a Github issue if you want me to fix it, or a pull request if you know anything about CMake. 

<div class="gallery-wrap">
  {% for image in site.static_files %}
    {% if image.path contains 'assets/Forest' %}
        <div class="pictureBox">
            <div class="innerBox">
                <img src="{{ site.baseurl }}{{ image.path }}">
                <!--div class="titleBox">Image 1</div-->
            </div>
        </div>
     {% endif %}
  {% endfor %}
</div>


## Android Apps

For earlier Hackathons, my teams and I made several android apps. They're all a little old,
so I don't know if they build for versions of android newer than L.

* [Pacer][pacer-repo], an app that chooses music based on your running pace at the moment.
* [Pandora's Pantry][pandora-repo], an app that gives you recipes you can make based off 
  ingredients that you have in your fridge. The app was one of the finalists at HackRice 4
  and our resulting business proposal based on the app idea won 2nd place at the 2015
  Owl Open Startup Competition at Rice.

## Web Things

Just some neat drawing demos written in Angular2 and Dart.

* [circle drawer](/dart-projects/#/circles)
* [Fractals with the Logo Turtle](/dart-projects/#/logo)

[bodhi-repo]: https://github.com/BryceStevenWilley/JTTW
[forest-repo]: https://github.com/BryceStevenWilley/forest_game
[pacer-repo]: https://github.com/jemitk/Pacer
[pandora-repo]: https://github.com/BryceStevenWilley/PandorasPantry

# Personal Projects

## Photography

I'm a volunteer photographer at BARC, and I've gathered a ton of beautiful pictures of some gourgeous pups while
doing so. Some of my favorites are here, and the entire collection can be found [here](/barc-dogs). 

<div class="gallery-wrap">
  {% for image in site.static_files %}
    {% if image.path contains 'assets/BARC/projects_subset' %}
      <div class="pictureBox">
        <div class="innerBox">
            <img src="{{ site.baseurl }}{{ image.path }}">
        </div>
      </div>
    {% endif %}
  {% endfor %}
</div>

Please please please, if you are live in the Houston area, and are considering adapting a dog, go give the
good pups a BARC a chance. [Check them out!](http://barcly.houstonbarcfoundation.org/#!/home)
