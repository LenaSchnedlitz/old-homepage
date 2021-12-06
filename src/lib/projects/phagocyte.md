---
slug: 'phagocyte'
rank: 3
title: 'Phagocyte'
teaser: 'Hide articles about COVID-19 in Firefox.'
previewType: 'png'
---

<script>
import Figure from '$lib/components/Figure.svelte';
</script>

We all take the current pandemic very seriously and have adapted our lifestyles accordingly.
Shouldn't we focus on our physical and mental well-being instead of spending a whole afternoon tracking death statistics?  
To help with that, I made a simple Firefox add-on that hides *most* articles about COVID-19.
The tool uses basic text matching to identify posts about SARS-CoV-2 and its consequences.
It gained some traction on [Hacker News.](https://news.ycombinator.com/item?id=22781113)

<Figure src="/projects/phagocyte/demo.png">Phagocyte <strong>Demo</strong></Figure>

<section class="meta-links">
<a href="https://addons.mozilla.org/firefox/addon/phagocyte/">
Try it out!
<svg viewBox="0 0 24 24" class="icon"><use xlink:href="/icons/sprite.svg#arrow-right"/></svg>
</a>

<a href="https://github.com/LenaSchnedlitz/phagocyte">
<svg viewBox="0 0 24 24" class="icon"><use xlink:href="/icons/sprite.svg#github"/></svg>
Fork me on GitHub
<svg viewBox="0 0 24 24" class="icon"><use xlink:href="/icons/sprite.svg#arrow-right"/></svg>
</a>
</section>
