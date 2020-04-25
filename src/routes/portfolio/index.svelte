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

  .square > img {
    width: 180px;
    margin-bottom: -1rem;
    box-shadow: 5px 10px 20px 0 rgba(0, 0, 0, .5);
    border-radius: 15px 15px 0 0;
  }

  .project-name {
    margin: 2rem;
    font-family: var(--sans-serif);
  }

  .project-title {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    font-weight: 800;
  }

  .project-subtitle {
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

    .rectangle {
      width: 256px;
      height: 354px;
    }

    .rectangle > img {
      margin-bottom: 3rem;
      max-width: 206px;
      box-shadow: 5px 10px 20px 0 rgba(0, 0, 0, .5);
    }

    .preview-left {
      align-self: flex-start;
      border-radius: 0 15px 15px 0;
    }

    .preview-right {
      align-self: flex-end;
      border-radius: 15px 0 0 15px;
    }

    .square {
      width: 354px;
      height: 354px;
    }

    .square > img {
      width: auto;
      max-width: 230px;
    }

    .square .project-name {
      margin-left: 3rem;
      margin-right: 3rem;
    }

    .square .project-title {
      font-size: 1.4rem;
      margin-bottom: 0.6rem;
    }

    .square .project-subtitle {
      font-size: 15px;
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
          <article class="portfolio-card square {post.background}">
            <div class="project-name">
              <h3 class="project-title">{post.title}</h3>
              <span class="project-subtitle">{post.teaser}</span>
            </div>
            <img alt="{post.title}" src="portfolio/{post.slug}.png"/>
          </article>
        {:else if i === 0}
          <article class="portfolio-card square {post.background}">
            <div class="project-name">
              <h3 class="project-title">{post.title}</h3>
              <span class="project-subtitle">{post.teaser}</span>
            </div>
            <img alt="{post.title}" src="portfolio/{post.slug}.png"/>
          </article>
        {:else}
          <article class="portfolio-card rectangle {post.background}">
            <div class="project-name">
              <h3 class="project-title">{post.title}</h3>
              <span class="project-subtitle">{post.teaser}</span>
            </div>
            <img alt="{post.title}" src="portfolio/{post.slug}.png" class="preview-{post.align}"/>
          </article>
        {/if}
      </a>
    </div>
  {/each}
</section>
