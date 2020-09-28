---
layout: page
title: Image Gallery
front-page: true
permalink: /image-gallery
headerImg: /assets/headers/Melody-header.jpg
---

Click on the images to see them in full resolution.

## 3d Art

<div id="#blender"></div>

<div class="gallery-wrap">
  {% for image in site.static_files %}
    {% if image.path contains 'blender' and image.extname == '.jpg' %}
      <div class="pictureBox">
        <div class="innerBox">
            <a href="{{site.baseurl}}/assets/full_res/blender/{{image.basename}}.png">
              <img src="{{ site.baseurl }}{{ image.path }}">
            </a>
        </div>
      </div>
    {% endif %}
  {% endfor %}
</div>

<div class="gallery-wrap">
  {% for image in site.static_files %}
    {% if image.path contains 'blender' and image.extname == '.mp4' %}
        <video muted autoplay loop width="720" height="480">
            <source src="{{ site.baseurl }}{{ image.path }}" type="video/mp4"/>
        </video>
    {% endif %}
  {% endfor %}
</div>

<br/>

## Dog Pictures

<div id="#dog-pictures"></div>

A gallery of dogs that I've photographed from [BARC](http://www.houstontx.gov/barc/), the Houston City animal shelter.

<div class="gallery-wrap">
  {% for image in site.static_files %}
    {% if image.path contains 'assets/BARC' %}
      <div class="pictureBox">
        <div class="innerBox">
            <a href="{{site.baseurl}}{{image.path }}">
              <img src="{{ site.baseurl }}{{ image.path }}">
            </a>
        </div>
      </div>
    {% endif %}
  {% endfor %}
</div>

Please please please, if you are living in the Houston area, and are considering adopting a dog, go give the
good pups a BARC a chance. [Check them out!](http://barcly.houstonbarcfoundation.org/#!/home)