---
layout: page
title: Blogs 
front-page: true 
permalink: /blogs/
---
  {% assign date_format = site.date_format | default: "%Y %b %-d" %}
  <h2>Polished posts</h2>
  <p>These posts are what I'd consider my professional output. Throughly researched and edited.
  </p>
  {% assign polished = site.posts | where_exp: "item", "item.tags contains 'polished'" %}
<ul class="post-list">
  {% for post in polished %}
  <li>
    <a class="post-link" href="{{ post.url | relative_url }}">
    {{post.title | escape }}</a>
    <span class="post-meta">({{ post.date | date: date_format }})</span>
  </li>
  {% endfor %}
</ul>
  <h2>Sketch posts</h2>
  <p>These posts are generally shorter and a bit less focused.</p>
  {% assign sketch_date_format = site.date_format | default: "%Y %b" %}
  {% assign unpolished = site.posts | where_exp: "item", "item.tags contains 'rough'" %}
  <ul>
  {% for post in unpolished %}
  <li>
    <a class="post-link" href="{{ post.url | relative_url }}">{{post.title | escape }}</a>
    <span class="post-meta">({{ post.date | date: sketch_date_format }})</span>
  </li>
  {% endfor %}
  </ul>
