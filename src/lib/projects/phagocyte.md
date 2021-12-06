---
slug: 'phagocyte'
rank: 3
title: 'Phagocyte'
teaser: 'Hide articles about COVID-19 in Firefox.'
previewType: 'png'
---

<script>
import Figure from '$lib/components/Figure.svelte';
import Icon from '$lib/components/Icon.svelte';
import ProjectLinks from '$lib/components/ProjectLinks.svelte';
</script>

We all take the current pandemic very seriously and have adapted our lifestyles accordingly.
Shouldn't we focus on our physical and mental well-being instead of spending a whole afternoon tracking death statistics?  
To help with that, I made a simple Firefox add-on that hides _most_ articles about COVID-19.
The tool uses basic text matching to identify posts about SARS-CoV-2 and its consequences.
It gained some traction on [Hacker News.](https://news.ycombinator.com/item?id=22781113)

<Figure src="/projects/phagocyte/demo.png">Phagocyte <strong>Demo</strong></Figure>

<ProjectLinks>
<a href="https://addons.mozilla.org/firefox/addon/phagocyte/">
Try it out!
        <Icon name='arrow-right'></Icon>
</a>

<a href="https://github.com/LenaSchnedlitz/phagocyte">
        <Icon name='github'></Icon>
        Fork me on GitHub
        <Icon name='arrow-right'></Icon>
</a>
</ProjectLinks>
