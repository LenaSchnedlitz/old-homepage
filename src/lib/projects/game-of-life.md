---
slug: 'game-of-life'
rank: 5
title: 'Game of Life'
teaser: 'Conway''s famous game implemented on a hexagonal grid.'
previewType: 'gif'
background: 'gray-dark'
align: 'right'
---

I implemented a variant of the famous <a href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life">
Game of Life</a> on a hexagonal grid. Pretty much all parameters of the game can be configured:
rules for birth and survival, start configuration, duration, and color palette.

While researching for this project, I stumbled upon a very
informative <a href="https://davidsiaw.github.io/blog/2014/11/21/hexlife">article</a> that
recommends the rule set <mark>B2/S34</mark>, which means that cells are born if surrounded by
exactly 2 living cells and they survive if surrounded by 3 or 4 other live cells. This configuration
produces some nice oscillators, like the one in figure 1.

<figure>
<img src="/game-of-life.gif" alt=""/>
<figcaption>Figure 1: B2/S34 <strong>Oscillator</strong></figcaption>
</figure>


I experimented with the rules configuration a bit and found another interesting set of rules: <mark>
B1/S12</mark>. This configuration allows for very fast growth and often results in mesmerizing
evolutions like in figure 2.


<figure class="no-margin">
<img src="/game-of-life/expansion.gif" alt=""/>
<figcaption>Figure 2: B1/S12 <strong>Expansion</strong></figcaption>
</figure>

Feel free to play around as well!

<section class="meta-links">
    <a href="https://github.com/LenaSchnedlitz/hexagonal-game-of-life">
    <svg viewBox="0 0 24 24" class="icon"><use xlink:href="/icons/sprite.svg#github"/></svg>
    Fork me on GitHub
    <svg viewBox="0 0 24 24" class="icon"><use xlink:href="/icons/sprite.svg#arrow-right"/></svg>
    </a>
</section>
