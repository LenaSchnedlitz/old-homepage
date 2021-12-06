---
slug: 'skycalc'
rank: 4
title: 'SkyCalc'
teaser: 'A small tool for character progress optimization in Skyrim.'
previewType: 'png'
---

<script>
import Figure from '$lib/components/Figure.svelte';
import FigureGroup from '$lib/components/FigureGroup.svelte';
import Icon from '$lib/components/Icon.svelte';
import ProjectLinks from '$lib/components/ProjectLinks.svelte';
</script>

In my opinion, Skyrim is one of the best games ever made.
As a completionist, I spent ages trying to unlock all perks.
However, at higher levels, it gets difficult to plan ahead and figure out 
how much training will be needed to reach a long-yearned-for level up.
That’s why I decided to make a tool for character progress optimization.

<Figure src="/projects/skycalc/landing.png">SkyCalc <strong>Landing Page</strong></Figure>

SkyCalc uses level information to predict how much training of user-selected skills is needed to 
reach a certain goal level. 
The tool also offers guidance which skills to choose for role-playing.
Results can be exported as a text file.

<FigureGroup>
    <Figure src="/projects/skycalc/level.png">SkyCalc <strong>Level Selection</strong></Figure>
    <Figure src="/projects/skycalc/skill.png">SkyCalc <strong>Skill Selection</strong></Figure>
    <Figure src="/projects/skycalc/results.png">SkyCalc <strong>Results</strong></Figure>
</FigureGroup>

<ProjectLinks>
    <a href="https://github.com/LenaSchnedlitz/skycalc">
        <Icon name='github'></Icon>
        Fork me on GitHub
        <Icon name='arrow-right'></Icon>
    </a>
</ProjectLinks>
