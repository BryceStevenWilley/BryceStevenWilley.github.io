---
# layout: page
# title: Stats
# front-page: true
# permalink: /stats/
---

Shamelessly copied from [Luke Harris's Stats page](https://www.lkhrs.com/stats/) ([source  on github]((https://github.com/lkhrs/hugo-cactus-theme/blob/main/layouts/_default/stats.html)).

In progress. Will publish (uncomment the front-matter) when ready.

<table>
  <tr>
    <td>Total post count</td>
    <td></td>
  </tr>
  <tr>
    <td>Total word count</td>
    <td>{% posts_word_count total %}</td>
  </tr>
  <tr>
    <td>Average word per post</td>
    <td>{% posts_word_count average %}</td>
  </tr>
  <tr>
    <td>Longest Post</td>
    <td><a href="{% posts_word_count longest_post_url %}">{% posts_word_count longest_post_title %}</a> (at {% posts_word_count longest %} words)</td>
  </tr>
  <!-- TODO: add x novellas, maybe x tweets (for longest post) -->
  <!-- TODO: add graph of per year, time between posts -->
</table>
