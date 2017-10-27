---
layout: page
title: Projects
permalink: /projects/
---

Here are some of my past projects: hope you can learn something from them or just enjoy them!
## Bodhi

[Bodhi](bodhi-repo) is a 2D platformer inspired by the Chinese novel, "Journey to the West". I handled
coding for the entire game using [cocos2d-x](https://github.com/cocos2d/cocos2d-x), and
co-designed some of the levels with Mei Tan.  

## Forest

[Forest](forest-repo) is a procedurally-generated VR 'game' that a [friend](https://github.com/pjh5) and 
I coded for the Oculus Rift at HackRice 6 ([original vesion](https://github.com/BryceStevenWilley/oculus-hackrice16)).  It's working title was called "No Man's Forest", 
and was pretty much just a chance for us to make a VR game, It ended up being a blast. 
However, since I don't own a Rift, I had to port the game to Mac, which you can find
[here](forest-repo)! The installation isn't general yet (library locations are hardcoded to my machine, etc),
but feel free to open a Github issue if you want me to fix it/ a PR if you anything about CMake. 

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

* [Pacer](pacer-repo), an app that chooses music based on your running pace at the moment.
* [Pandora's Pantry](pandora-repo), an app that gives you recipes you can make based off 
  ingredients that you have in your fridge. The app was one of the finalists at HackRice 4.

## Web Things

Just some neat drawing demos written in Angular2 and Dart.

* [circle drawer](/personal-website/#/circles)
* [Fractals with the Logo Turtle](/personal-website/#/logo)

[bodhi-repo]: https://github.com/BryceStevenWilley/JTTW
[forest-repo]: https://github.com/BryceStevenWilley/forest_game
[pacer-repo]: https://github.com/jemitk/Pacer
[pandora-repo]: https://github.com/BryceStevenWilley/PandorasPantry
