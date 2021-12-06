---
slug: 'progress-badges'
rank: 2
title: 'Progress Badges'
teaser: 'Progress bars for your README files.'
previewType: 'svg'
---

<script>
import Figure from '$lib/components/Figure.svelte';
import FigureRow from '$lib/components/FigureRow.svelte';
import Icon from '$lib/components/Icon.svelte';
import ProjectLinks from '$lib/components/ProjectLinks.svelte';
</script>

This web app was inspired by <a href="https://shields.io/">shields.io</a> and offers an API 
for adding progress bars to markdown files.

<Figure src="/projects/progress-badges/default.svg">Default Theme</Figure>

<FigureRow spaced>
    <Figure src="/projects/progress-badges/badge_low.svg">Badge Theme - <strong>Low</strong></Figure>
    <Figure src="/projects/progress-badges/badge_medium.svg">Badge Theme - <strong>Medium</strong></Figure>
    <Figure src="/projects/progress-badges/badge_medium_high.svg">Badge Theme - <strong>Medium-High</strong></Figure>
    <Figure src="/projects/progress-badges/badge_high.svg">Badge Theme - <strong>High</strong></Figure>
</FigureRow>

<br>
<br>
&nbsp;

<ProjectLinks>
    <a href="https://progressbadges.herokuapp.com/">
    Try it out!
        <Icon name='arrow-right'></Icon>
    </a>
    <a href="https://github.com/LenaSchnedlitz/progress">
        <Icon name='github'></Icon>
        Fork me on GitHub
        <Icon name='arrow-right'></Icon>
    </a>
</ProjectLinks>
