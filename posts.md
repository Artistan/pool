---
layout: page
title: Posts
permalink: /posts/
pagination:
  enabled: true
  collection: posts
  per_page: 10
  permalink: '/posts/:num/'
collection: posts
---

{% assign posts_list = paginator.posts | default: site.posts %}

<h2>Most Recent Posts</h2>

<ul class="post-list">
  {% for post in posts_list %}
  <li>
    <span class="post-meta">{{ post.date | date: site.minima.date_format | default: "%b %-d, %Y" }}</span>
    <h3>
      <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
    </h3>
    {% if post.excerpt %}
      <p>{{ post.excerpt | strip_html | truncate: 180 }}</p>
    {% endif %}
  </li>
  {% endfor %}
  {% if posts_list == empty %}
    <li>No posts yet.</li>
  {% endif %}
  </ul>

{%- if paginator and paginator.total_pages > 1 -%}
<nav class="pagination" role="navigation" aria-label="Pagination Navigation">
  <span class="page-number">Page {{ paginator.page }} of {{ paginator.total_pages }}</span>
  <div class="pager-links">
    {%- if paginator.previous_page -%}
      <a class="previous-page" href="{{ paginator.previous_page_path | relative_url }}">« Newer</a>
    {%- endif -%}

    {%- for page in (1..paginator.total_pages) -%}
      {%- if page == paginator.page -%}
        <span class="page current">{{ page }}</span>
      {%- elsif page == 1 -%}
        <a class="page" href="{{ '/posts/' | relative_url }}">{{ page }}</a>
      {%- else -%}
        <a class="page" href="{{ '/posts/' | append: page | append: '/' | relative_url }}">{{ page }}</a>
      {%- endif -%}
    {%- endfor -%}

    {%- if paginator.next_page -%}
      <a class="next-page" href="{{ paginator.next_page_path | relative_url }}">Older »</a>
    {%- endif -%}
  </div>
</nav>
{%- endif -%}

<p class="last-updated">Last updated: {{ "now" | date: "%Y-%m-%d %H:%M %Z" }}</p>
