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

  .rectangle {
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .project-name {
    margin: 2rem;
    font-family: var(--sans-serif);
  }

  .project-name h3 {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    font-weight: 800;
  }

  .project-name span {
    line-height: 1.5;
  }

  @media (min-width: 800px) {
    section {
      margin-top: 121px;
      flex-direction: row-reverse;
      justify-content: flex-end;
    }

    .link-wrapper {
      flex: 0 0 auto;
      min-width: initial;
      max-width: initial;
      padding: 0 40px 40px 0;
    }

    .link-wrapper:first-child {
      padding-right: 0;
    }

    .link-wrapper:nth-child(odd) {
      margin-top: -191px;
    }

    .link-wrapper .square {
      width: 354px;
      height: 354px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }

    .link-wrapper .rectangle {
      width: 256px;
      height: 354px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }

    .link-wrapper .left {
      align-self: flex-start;
      margin-bottom: 2rem;
    }

    .link-wrapper .right {
      align-self: flex-end;
      margin-bottom: 2rem;
    }
  }
</style>

<svelte:window bind:innerWidth={width}/>

<h1>Projects</h1>

<section>
  {#each posts as post, i}
    <div class="link-wrapper">
      <a rel="prefetch" href="portfolio/{post.slug}" title="{post.title}">
        {#if small}
          <article class="rectangle" style="background-color: {post.bg}">
            <div class="project-name">
              <h3>{post.title}</h3>
              <span>{post.teaser}</span>
            </div>
            <img alt="{post.title}" src="portfolio/{post.slug}-square.png"/>
          </article>
        {:else if i === 0}
          <article class="square" style="background-color: {post.bg}">
            <div class="project-name">
              <h3>{post.title}</h3>
              <span>{post.teaser}</span>
            </div>
            <img alt="{post.title}" src="portfolio/{post.slug}-square.png"/>
          </article>
        {:else}
          <article class="rectangle" style="background-color: {post.bg}">
            <div class="project-name">
              <h3>{post.title}</h3>
              <span>{post.teaser}</span>
            </div>
            <img alt="{post.title}" src="portfolio/{post.slug}.png" class="{post.align}"/>
          </article>
        {/if}
      </a>
    </div>
  {/each}
</section>
