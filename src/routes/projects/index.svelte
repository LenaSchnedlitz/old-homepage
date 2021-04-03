<script context="module">
  function sortPostsByRankDescendingly(postA, postB) {
    if (postA.rank > postB.rank) {
      return -1;
    } else if (postB.rank > postA.rank) {
      return 1;
    }
    return 0;
  }

  export function preload({params, query}) {
    return this.fetch('projects.json').then(r => r.json()).then(posts => {
      posts.sort(sortPostsByRankDescendingly);
      return {posts};
    });
  }
</script>

<script>
  import GrowingCard from '../../components/GrowingCard.svelte';
  import RectangleCard from '../../components/RectangleCard.svelte';

  export let posts;

  let width;
  let small;

  $: small = width && width < 800;
</script>

<svelte:head>
  <title>Lena Schnedlitz - Projects</title>
</svelte:head>

<style>
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .wrapper {
    flex: 1 1 0;
    min-width: 220px;
    max-width: 354px;
    padding: 9px;
    box-sizing: border-box;
  }

  .wrapper > a {
    display: block;
    height: 100%;
    padding: 0;
  }

  @media (min-width: 800px) {
    section {
      margin-top: 121px;
      flex-direction: row-reverse;
      justify-content: flex-end;
    }

    .wrapper {
      flex: 0 0 auto;
      min-width: initial;
      max-width: initial;
      padding: 0 40px 40px 0;
    }

    .wrapper > a {
      height: auto;
    }

    .wrapper:first-child {
      padding-right: 0;
    }

    .wrapper:nth-child(odd) {
      margin-top: -191px;
    }

    .wrapper:nth-child(odd):not(:nth-child(7)):last-child {
      margin-left: 296px;
    }

    .wrapper:nth-child(4):not(:nth-child(8)) {
      margin-left: -40px;
      margin-right: 40px;
    }

    .wrapper:nth-child(7) {
      margin-left: 336px;
    }
  }
</style>

<svelte:window bind:innerWidth={width}/>

<h1>Projects</h1>

<section>
  {#each posts as post, i}
    <div class="wrapper">
      <a href="projects/{post.slug}" rel="prefetch" title={post.title}>
        {#if small || i === 0}
          <GrowingCard content={post} previewFile="projects/{post.slug}.{post.previewType}"/>
        {:else}
          <RectangleCard content={post} previewFile="projects/{post.slug}.{post.previewType}"/>
        {/if}
      </a>
    </div>
  {/each}
</section>
