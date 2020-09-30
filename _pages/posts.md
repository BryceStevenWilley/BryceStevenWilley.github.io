---
layout: page
title: Blogs 
front-page: false 
permalink: /blogs/
---
<ul class="post-list">
  {% for post in site.posts %}
  <li>
    {% assign date_format = site.date_format | default: "%b %-d, %Y" %}
    <span class="post-meta">{{ post.date | date: date_format }}</span>
    <h2>
      <a class="post-link" href="{{ post.url | relative_url }}">{{post.title | escape }}</a>
    </h2>
  </li>
  {% endfor %}
</ul>


