---
slug: 'origamicons'
rank: 7
title: 'Origamicons'
teaser: 'Identicons inspired by folded paper.'
previewType: 'png'
---

<script>
import Figure from '$lib/components/Figure.svelte';
import FigureRow from '$lib/components/FigureRow.svelte';
import Icon from '$lib/components/Icon.svelte';
import ProjectLinks from '$lib/components/ProjectLinks.svelte';
</script>

After a long and slow demise, [SHA-1](https://shattered.io/) is finally dead.
What can you do with broken cryptographic functions? Create identicons, of course.

The origamicon generator uses SHA-1 hashes to create _almost_ unique pictures that slightly resemble
folded paper. It can be accessed via [web interface](https://origamicons.herokuapp.com/) or used offline as a command line tool.

**<mark>Examples:</mark>**

<FigureRow>
<Figure src="/projects/origamicons/origamicon_Alice.png">Origamicons <strong>Alice</strong></Figure>
<Figure src="/projects/origamicons/origamicon_Bob.png">Origamicons <strong>Bob</strong></Figure>
<Figure src="/projects/origamicons/origamicon_origamicons.png">Origamicons <strong>origamicons</strong></Figure>
<Figure src="/projects/origamicons/origamicon_SHA-1 Origamicons.png">Origamicons <strong>SHA-1 Origamicons</strong></Figure>
<Figure src="/projects/origamicons/origamicon_SHA-1 Origamicon.png">Origamicons <strong>SHA-1 Origamicon</strong></Figure>
<Figure src="/projects/origamicons/origamicon_lena.png">Origamicons <strong>lena</strong></Figure>
</FigureRow>

<ProjectLinks>
<a href="https://origamicons.herokuapp.com/" class="meta link">
    Try it out!
        <Icon name='arrow-right'></Icon>
</a>

<a href="https://github.com/LenaSchnedlitz/origamicons">
        <Icon name='github'></Icon>
        Fork me on GitHub
        <Icon name='arrow-right'></Icon>
</a>
</ProjectLinks>
