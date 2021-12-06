---
slug: 'satvis'
rank: 1
title: 'SatVis'
teaser: 'Visualize Vampire saturation runs.'
previewType: 'png'
---

<script>
import Figure from '$lib/components/Figure.svelte';
import Icon from '$lib/components/Icon.svelte';
import ProjectLinks from '$lib/components/ProjectLinks.svelte';
</script>

[Vampire](https://vprover.github.io/) is a theorem prover for first order logic 
that is able to produce detailed proofs in a short time. However, debugging failed proof attempts can be
quite cumbersome. SatVis attempts to change this by providing features such as *derivation visualization,*
*clause reformatting,* *common parent and/or consequence search,* and many more.

Check out the official [SatVis paper](https://link.springer.com/chapter/10.1007%2F978-3-030-34968-4_28) to learn more.

<Figure src="/projects/satvis/visualization.png">SatVis <strong>Graph</strong></Figure>

<ProjectLinks>
    <a href="https://github.com/gleiss/saturation-visualization">
        <Icon name='github'></Icon>
        Fork me on GitHub
        <Icon name='arrow-right'></Icon>
    </a>
</ProjectLinks>
