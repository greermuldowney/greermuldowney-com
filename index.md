---
layout: default
meta-description: Greer Muldowney is an artist, photography professor and independent curator based in Boston, Massachusetts.
custom-css: home
random-images:
    - monetary-violence/Muldowney_MonetaryViolence_15.jpg
    - 6426-per-km2/arch_05.jpg
    - small-run-books/Growth_image_01.jpg
    - Rockaway-Beach/Rockaway_01.jpg
---
<div id="background">
</div>
<div id="overlay">
</div>

<style>
#background {
    background-image: url("{{ '/assets/series/monetary-violence/Assembly_Row_06.jpg' | relative_url }}");
}
</style>
<script type="text/javascript">
let element = document.getElementById("background");
let possibleImages = [
{% for random-image in page.random-images %}
"{{ '/assets/series/' | append: random-image | relative_url }}",
{% endfor %}
];
element.style.backgroundImage = `url("${possibleImages[Math.floor(Math.random() * possibleImages.length)]}")`;
</script>