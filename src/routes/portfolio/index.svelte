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
    return this.fetch('portfolio.json').then(r => r.json()).then(posts => {
      posts.sort(sortPostsByRankDescendingly);
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
  <title>Lena Schnedlitz - Projects</title>
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
    min-height: calc(1rem + 4px);
    width: 180px;
    margin-bottom: -1rem;
    box-shadow: 5px 10px 1.25rem 0 rgba(0, 0, 0, .2);
    border-radius: 15px 15px 0 0;
  }

  .project-name {
    margin: 2rem 2.4rem 2rem 2rem;
    font-family: var(--sans-serif);
  }

  .project-title {
    margin-top: 1rem;
    margin-bottom: .5rem;
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

    .link-wrapper:nth-child(odd):not(:nth-child(7)):last-child {
      margin-left: 296px;
    }

    .link-wrapper:nth-child(4):not(:nth-child(8)) {
      margin-left: -40px;
      margin-right: 40px;
    }

    .link-wrapper:nth-child(7) {
      margin-left: 336px;
    }

    .rectangle {
      width: 256px;
      height: 354px;
    }

    .rectangle .tiny {
      margin-bottom: 6rem;
    }

    .rectangle > img {
      margin-bottom: 3rem;
      width: 206px;
      box-shadow: 5px 10px 1.25rem 0 rgba(0, 0, 0, .2);
    }

    .rectangle .project-name {
      margin-bottom: 1.3rem;
    }

    .rectangle .project-subtitle {
      font-size: calc(1rem - 2px);
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
      margin-right: auto;
      padding-right: 3rem;
    }

    .square .project-title {
      font-size: 1.4rem;
      margin-bottom: .6rem;
    }

    .square .project-subtitle {
      font-size: calc(1rem - 1px);
    }

    .portfolio-card {
      animation-duration: .2s;
      animation-name: appear;
      transition: all cubic-bezier(.18,.89,.32,1.28) .5s;
    }

    .portfolio-card:hover {
      transform: scale(.9);
    }
  }

  @keyframes appear {
    from {
      opacity: 0;
    }

    90% {
      opacity: 0;
    }

    to {
      opacity: 1;
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
            <img alt="{post.title}" src="portfolio/{post.slug}.{post.previewType}"/>
          </article>
        {:else if i === 0}
          <article class="portfolio-card square {post.background}">
            <div class="project-name">
              <h3 class="project-title">{post.title}</h3>
              <span class="project-subtitle">{post.teaser}</span>
            </div>
            <img alt="{post.title}" src="portfolio/{post.slug}.{post.previewType}"/>
          </article>
        {:else}
          <article class="portfolio-card rectangle {post.background}">
            <div class="project-name">
              <h3 class="project-title">{post.title}</h3>
              <span class="project-subtitle">{post.teaser}</span>
            </div>
            <img alt="{post.title}" src="portfolio/{post.slug}.{post.previewType}"
                 class="preview-{post.align} {post.tiny ? 'tiny' : ''}"/>
          </article>
        {/if}
      </a>
    </div>
  {/each}
</section>
