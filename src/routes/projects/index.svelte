<script context="module">
  export async function load({ fetch }) {
    const url = '/projects.json';
    const res = await fetch(url);
    const posts = await res.json();
    posts.sort((a, b) => b.rank - a.rank);

    return {
      props: { posts },
    };
  }
</script>

<script>
  import ProjectCardPic from '$lib/components/ProjectCardPic.svelte';
  import ProjectCardText from '$lib/components/ProjectCardText.svelte';

  export let posts;
</script>

<svelte:head>
  <title>Lena Schnedlitz - Projects</title>
</svelte:head>

<!-- workaround for svelte bug;
see https://github.com/sveltejs/svelte/issues/6325 -->
{#if false}<slot />{/if}

<article>
  <h1 class="huge">Projects</h1>

  {#each posts as post, i}
    <section class="appear variant-{(i % 4) + 1}">
      <ProjectCardPic {post} />
      <ProjectCardText {post} />
    </section>
  {/each}
</article>

<style>
  section {
    margin-bottom: 3rem;
  }

  @media all and (min-width: 768px) {
    h1 {
      margin-bottom: 1.3em;
    }

    section {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      grid-gap: 0;
      grid-auto-flow: dense;
      margin-bottom: 6rem;
    }

    section > :global(:first-child) {
      grid-column-start: 2;
    }

    section > :global(:first-child):hover {
      transform: translate3d(1rem, -0.5rem, 0) scale(1.01, 1.01);
      transition: all ease-out 0.5s;
    }

    section.variant-1 > :global(:first-child),
    section.variant-3 > :global(:first-child) {
      grid-column-start: 1;
    }

    section.variant-1 > :global(:first-child):hover,
    section.variant-3 > :global(:first-child):hover {
      transform: translate3d(-1rem, -0.5rem, 0) scale(1.01, 1.01);
      transition: all ease-out 0.5s;
    }

    section.variant-2 > :global(:first-child) {
      grid-column-start: 3;
    }

    section > :global(:last-child) {
      grid-column-start: 2;
    }

    section.variant-1 > :global(:last-child) {
      align-self: start;
    }

    section.variant-2 > :global(:last-child) {
      text-align: right;
    }

    section.variant-4 > :global(:last-child) {
      grid-column-start: 3;
    }
  }

  @media all and (min-width: 1366px) {
    section {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      margin-bottom: 16rem;
    }

    section > :global(:first-child) {
      grid-column-start: 3;
    }

    section > :global(:first-child):hover {
      transform: translate3d(-3rem, -1rem, 0) scale(1.01, 1.01);
    }

    section.variant-1 > :global(:first-child),
    section.variant-3 > :global(:first-child) {
      grid-column-start: 1;
    }

    section.variant-1 > :global(:first-child):hover,
    section.variant-3 > :global(:first-child):hover {
      transform: translate3d(3rem, -1rem, 0) scale(1.01, 1.01);
    }

    section.variant-4 > :global(:first-child) {
      grid-column-end: span 1;
      height: 16vw;
    }

    section > :global(:last-child) {
      grid-column-start: 1;
    }

    section.variant-1 > :global(:last-child) {
      align-self: start;
      grid-column-start: 3;
    }

    section.variant-2 > :global(:last-child) {
      text-align: right;
    }

    section.variant-3 > :global(:last-child) {
      grid-column-start: 3;
    }

    section.variant-4 > :global(:last-child) {
      grid-column-end: span 1;
      grid-column-start: 4;
    }
  }
</style>
