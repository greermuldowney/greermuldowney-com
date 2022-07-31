---
title: Curatorial & Projects
body-class: curatorial
custom-css: tiles
---

<div id="grid">
{% for post in site.categories.curatorial %}
    {% include tile.html post=post %}
{% endfor %}
</div>
