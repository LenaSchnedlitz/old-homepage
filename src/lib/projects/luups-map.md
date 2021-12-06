---
slug: 'luups-map'
rank: 6
title: 'LUUPS Map'
teaser: 'An interactive, filterable voucher map.'
previewType: 'png'
---

<script>
import Figure from '$lib/components/Figure.svelte';
</script>

[LUUPS](https://www.luups.net/) is a city guide with vouchers that is
published annually. I've been using the booklet for some years now and can strongly recommend
it, but it lacks one important feature: *an interactive, filterable map.*

I teamed up with another Viennese software engineer, [Hans Schnedlitz](https://github.com/hschne) (the name is no coincidence),
to develop exactly this.

<Figure src="/projects/luups-map/map.png">LUUPS Map <strong>Screenshot</strong></Figure>

Our tool consists of a map with a marker for each voucher location. Clicking on a marker reveals
additional details about the location, e.g. homepage and opening hours. Locations can also be filtered
by voucher type and/or tag.

<Figure src="/projects/luups-map/filter.png">LUUPS Map <strong>Filter</strong></Figure>

*Note:* A year after the development of LUUPS Map, LUUPS added an official map to their homepage. As a result,
this project will not be updated any more.


<section class="meta-links">
    <a href="https://github.com/Team-LANS/luups-map">
    <svg viewBox="0 0 24 24" class="icon"><use xlink:href="/icons/sprite.svg#github"/></svg>
    Fork me on GitHub
    <svg viewBox="0 0 24 24" class="icon"><use xlink:href="/icons/sprite.svg#arrow-right"/></svg>
    </a>
</section>
