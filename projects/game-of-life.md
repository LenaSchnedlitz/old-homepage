---
slug: 'game-of-life'
rank: 2
title: 'Game of Life'
teaser: 'Conway''s famous game implemented on a hexagonal grid.'
previewType: 'gif'
background: 'gray-dark'
align: 'right'
---

I implemented a variant of the 
famous <a href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life">Game of Life</a> on 
a hexagonal grid.
Pretty much all parameters of the game can be configured: rules for birth and survival,
start configuration, duration, and color palette.  

While researching for this project, I stumbled upon a very 
informative <a href="https://davidsiaw.github.io/blog/2014/11/21/hexlife">article</a> that
recommends the rule set <mark>B2/S34</mark>, which means that cells are born if surrounded 
by exactly 2 living cells and they survive if surrounded by 3 or 4 other live cells. This configuration 
produces some nice oscillators, e.g. this one:

<figure class="center">
<figcaption>B2/S34 <strong>Oscillator</strong></figcaption>
<img src="projects/game-of-life.gif" alt="B2/S34 - Oscillator"/>
</figure>

  
I experimented with the rules configuration a bit and found another interesting 
set of rules: <mark>B1/S12</mark>.
This configuration allows for very fast growth and often results in mesmerizing evolutions like the one below:


<figure>
<figcaption>B1/S12 <strong>Expansion</strong></figcaption>
<img src="projects/game-of-life/expansion.gif" alt="B1/S12 - Expansion"/>
</figure>

Feel free to play around as well!


<p>
<a href="https://github.com/LenaSchnedlitz/hexagonal-game-of-life" class="meta link">Source Code&nbsp;
<svg viewBox="0 0 24 24" class="icon icon-inline"><use xlink:href="icons/sprite.svg#link"/></svg>
</a>
</p>

<br>
<br>