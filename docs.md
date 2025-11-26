---
layout: page
title: Documentation
permalink: /docs/
collection: docs
---


## Table of contents

{%- comment -%}
Build a nested table of contents for all pages under /docs/.
Group by the first path segment after /docs/ (i.e., by route),
and show the page title, a short description, and a link.

Rules:
- Include only real docs pages under /docs/ (exclude this index page).
- Description priority: page.description > page.excerpt > first paragraph of content (plain text), truncated.
{%- endcomment -%}

{%- assign all_docs = site.pages | where_exp: "p", "p.url != page.url" | where_exp: "p", "p.url contains '/docs/'" -%}
{%- assign docs_sorted = all_docs | sort: "url" -%}

{% if docs_sorted and docs_sorted.size > 0 %}
  <ul class="docs-toc">
  {%- assign current_group = nil -%}
  {%- for p in docs_sorted -%}
    {%- assign segs = p.url | split: '/' -%}
    {%- comment -%}
      URL like "/docs/foo/bar/" splits to ["", "docs", "foo", "bar", ""]
      First segment after docs is index 2 when present; otherwise fallback to the filename.
    {%- endcomment -%}
    {%- assign first_after_docs = segs[2] -%}
    {%- if first_after_docs == nil or first_after_docs == '' -%}
      {%- assign first_after_docs = p.url -%}
    {%- endif -%}

    {%- if current_group != first_after_docs -%}
      {%- if current_group != nil -%}
        </ul></li>
      {%- endif -%}
      {%- assign group_label = first_after_docs | replace: '-', ' ' | capitalize -%}
      <li class="docs-group"><strong>{{ group_label }}</strong>
        <ul>
      {%- assign current_group = first_after_docs -%}
    {%- endif -%}

    {%- comment -%} Build a short description fallback {%- endcomment -%}
    {%- assign descr = p.description -%}
    {%- if descr == nil or descr == '' -%}
      {%- if p.excerpt and p.excerpt != '' -%}
        {%- assign descr = p.excerpt | strip_html | strip -%}
      {%- else -%}
        {%- assign first_para = p.content | markdownify | strip | split: '\n' | first -%}
        {%- assign descr = first_para | strip_html | strip -%}
      {%- endif -%}
    {%- endif -%}
    {%- assign descr_short = descr | default: '' | truncatewords: 28 -%}

    <li>
      <a href="{{ p.url }}">{{ p.title | default: p.name }}</a>
      {%- if descr_short != '' -%}
        <div class="doc-desc">{{ descr_short }}</div>
      {%- endif -%}
    </li>
  {%- endfor -%}
  {%- if current_group != nil -%}
    </ul></li>
  {%- endif -%}
  </ul>
{% else %}
  <p>No docs found yet.</p>
{% endif %}

<p class="last-updated">Last updated: {{ "now" | date: "%Y-%m-%d %H:%M %Z" }}</p>
