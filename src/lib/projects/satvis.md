---
slug: 'satvis'
rank: 1
title: 'SatVis'
teaser: 'Visualize Vampire saturation runs.'
previewType: 'png'
---

<script>
import Figure from '$lib/components/Figure.svelte';
</script>

[Vampire](https://vprover.github.io/) is a theorem prover for first order logic 
that is able to produce detailed proofs in a short time. However, debugging failed proof attempts can be
quite cumbersome. SatVis attempts to change this by providing features such as *derivation visualization,*
*clause reformatting,* *common parent and/or consequence search,* and many more.

Check out the official [SatVis paper](https://link.springer.com/chapter/10.1007%2F978-3-030-34968-4_28) to learn more.

<Figure src="/projects/satvis/visualization.png">SatVis <strong>Graph</strong></Figure>

<section class="meta-links">
    <a href="https://github.com/gleiss/saturation-visualization">
        <svg viewBox="0 0 24 24" class="icon"><use xlink:href="/icons/sprite.svg#github"/></svg>
        Fork me on GitHub
        <svg viewBox="0 0 24 24" class="icon"><use xlink:href="/icons/sprite.svg#arrow-right"/></svg>
    </a>
</section>
