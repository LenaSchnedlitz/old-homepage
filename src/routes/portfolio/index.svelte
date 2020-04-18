<script context="module">
  export function preload({params, query}) {
    return this.fetch('portfolio.json').then(r => r.json()).then(posts => {
      return {posts};
    });
  }
</script>

<script>
  export let posts;

  let width;
  let small;

  $: small = width && width < 800;
</script>

<svelte:head>
  <title>Lena Schnedlitz - Portfolio</title>
</svelte:head>

<style>
  section {
    display: flex;
    flex-wrap: wrap;
  }

  .link-wrapper {
    flex: 1 1 min-content;
    min-width: 220px;
    max-width: 354px;
    padding: 9px;
    box-sizing: border-box;
  }

  .link-wrapper > a {
    display: block;
    padding: 0;
  }

  .square {
    padding: 0;
    width: 100%;
  }

  @media (min-width: 800px) {
    section {
      margin-top: 121px;
      flex-direction: row-reverse;
      justify-content: left;
    }

    .link-wrapper {
      flex: 0 0 auto;
      min-width: initial;
      max-width: initial;
      padding: 0 40px 40px 0;
    }

    .link-wrapper .square {
      width: 354px;
    }

    .link-wrapper .rectangle {
      width: auto;
    }

    .link-wrapper:first-child {
      padding-right: 0;
    }

    .link-wrapper:nth-child(odd) {
      margin-top: -191px;
    }
  }
</style>

<svelte:window bind:innerWidth={width}/>

<h1>Projects</h1>

<section>
  {#each posts as post, i}
    <div class="link-wrapper">
      <a rel="prefetch" href="portfolio/{post.slug}" title="{post.title}">
        {#if small || i === 0}
          <img class="square" alt="{post.title}" src="portfolio/{post.slug}-square.png"/>
        {:else}
          <img class="rectangle" alt="{post.title}" src="portfolio/{post.slug}.png"/>
        {/if}
      </a>
    </div>
  {/each}
</section>
