---
layout: page
title: Image Gallery
front-page: true
permalink: /image-gallery
headerImg:
  src: /assets/headers/Melody-header.jpg
  narrow: /assets/headers/Melody-header.jpg
  width: "538px"
  height: "404px"
  alt: A picture of Melody, a dog from the BARC animal shelter in Houston
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
              <img src="{{ site.baseurl }}{{ image.path }}" alt="Some art made with Blender">
            </a>
        </div>
      </div>
    {% endif %}
  {% endfor %}
</div>

<div class="gallery-wrap">
  {% for image in site.static_files %}
    {% if image.path contains 'blender' and image.extname == '.mp4' %}
        <video muted loop controls width="720" height="480">
            <source src="{{ site.baseurl }}{{ image.path }}" type="video/mp4" alt="a video made with Blender"/>
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
              <img src="{{ site.baseurl }}{{ image.path }}" alt="a dog, once at BARC">
            </a>
        </div>
      </div>
    {% endif %}
  {% endfor %}
</div>

Please please please, if you are living in the Houston area, and are considering adopting a dog, go give the
good pups a BARC a chance. [Check them out!](http://barcly.houstonbarcfoundation.org/#!/home)
