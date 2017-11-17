---
layout: page
title: Dog Pictures
permalink: /barc-dogs/
headerImg: /assets/headers/Melody.jpg
---

A gallery of dogs that I've photographed from [BARC](http://www.houstontx.gov/barc/), the Houston City animal shelter.

<div class="gallery-wrap">
  {% for image in site.static_files %}
    {% if image.path contains 'assets/BARC' %}
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
