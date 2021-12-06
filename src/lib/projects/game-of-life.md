---
slug: 'game-of-life'
rank: 5
title: 'Game of Life'
teaser: "Conway's famous game implemented on a hexagonal grid."
previewType: 'gif'
---

<script>
import Figure from '$lib/components/Figure.svelte';
import Icon from '$lib/components/Icon.svelte';
import ProjectLinks from '$lib/components/ProjectLinks.svelte';
</script>

I implemented a variant of the famous [Game of Life](https://en.wikipedia.org/wiki/Conway's_Game_of_Life)
on a hexagonal grid. Pretty much all parameters of the game can be configured:
rules for birth and survival, start configuration, duration, and color palette.

While researching for this project, I stumbled upon a very
informative [article](https://davidsiaw.github.io/blog/2014/11/21/hexlife) that
recommends the rule set <mark>B2/S34</mark>, which means that cells are born if surrounded by
exactly 2 living cells and they survive if surrounded by 3 or 4 other live cells. This configuration
produces some nice oscillators, like the one in figure 1.

<Figure src="/projects/game-of-life.gif">Figure 1: B2/S34 <strong>Oscillator</strong></Figure>

I experimented with the rules configuration a bit and found another interesting set of rules: <mark>
B1/S12</mark>. This configuration allows for very fast growth and often results in mesmerizing
evolutions like in figure 2.

<Figure src="/projects/game-of-life/expansion.gif">Figure 2: B1/S12 <strong>Expansion</strong></Figure>

Feel free to play around as well!

<ProjectLinks>
    <a href="https://github.com/LenaSchnedlitz/hexagonal-game-of-life">
        <Icon name='github'></Icon>
        Fork me on GitHub
        <Icon name='arrow-right'></Icon>
    </a>
</ProjectLinks>
