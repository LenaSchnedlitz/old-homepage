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
  export let posts;
</script>

<svelte:head>
  <title>Lena Schnedlitz - Projects</title>
</svelte:head>

<article>
  <h1 class="huge">Projects</h1>

  {#each posts as post, i}
    <section class={post.slug}>
      <a class="pic-wrapper" href="projects/{post.slug}" rel="prefetch" title={post.title}>
        <img alt="{post.title}" src="projects/{post.slug}.{post.previewType}"
             class:tiny={post.tiny}/>
      </a>
      <div class="text-wrapper" href="projects/{post.slug}" rel="prefetch" title={post.title}>
        <a href="projects/{post.slug}" rel="prefetch" title={post.title} tabindex="-1">
          <h3>{post.title}</h3>
          <span>{post.teaser}</span>
        </a>
      </div>
    </section>
  {/each}
</article>


<style>
  section {
    margin-bottom: 3rem;
  }

  .pic-wrapper img {
    width: 100%;
    height: 62vw;
    object-fit: cover;
  }

  .text-wrapper {
    padding: .25rem .5rem;
  }

  .game-of-life .pic-wrapper {
    background: #d8dee9;
    filter: grayscale(70%);
  }

  .game-of-life img {
    object-fit: contain;
  }

  .luups-map img {
    object-position: top;
  }

  .satvis img {
    object-position: top;
  }

  .progress-badges img {
    object-fit: contain;
    padding: 20%;
    background: var(--grey-025);
  }

  .phagocyte img {
    object-position: right;
  }

  @media all and (min-width: 768px) {
    section {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      grid-gap: 0;
      grid-auto-flow: dense;
      margin-bottom: 6rem;
    }

    .pic-wrapper, .text-wrapper {
      grid-column-end: span 1;
    }

    .pic-wrapper {
      height: 20vw;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .pic-wrapper img {
      height: 100%;
    }

    .text-wrapper {
      padding: 1rem 2rem;
      align-self: end;
    }

    .text-wrapper h3 {
      margin-top: 0;
    }

    section:nth-child(even) .pic-wrapper {
      grid-column-start: 1;
    }

    section:nth-child(odd) .text-wrapper {
      grid-column-start: 2;
    }

    section:nth-child(even) .text-wrapper,
    section:nth-child(odd) .pic-wrapper {
      grid-column-start: 2;
    }

    section:nth-child(4n - 2) .text-wrapper {
      align-self: start;
    }

    section:nth-child(4n - 1) .text-wrapper {
      text-align: right;
    }

    section:nth-child(4n - 1) .pic-wrapper {
      grid-column-start: 3;
    }

    section:nth-child(4n + 1) .text-wrapper {
      grid-column-start: 3;
    }
  }

  @media all and (min-width: 1366px) {
    section {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      margin-bottom: 9rem;
    }

    .pic-wrapper, .text-wrapper {
      grid-column-end: span 2;
    }

    .pic-wrapper {
      height: 16vw;
    }

    section:nth-child(even) .pic-wrapper,
    section:nth-child(odd) .text-wrapper {
      grid-column-start: 1;
    }

    section:nth-child(even) .text-wrapper,
    section:nth-child(odd) .pic-wrapper {
      grid-column-start: 3;
    }

    section:nth-child(4n + 1) .pic-wrapper {
      grid-column-end: span 1;
    }

    section:nth-child(4n - 2) .text-wrapper {
      align-self: start;
    }

    section:nth-child(4n - 1) .text-wrapper {
      text-align: right;
    }

    section:nth-child(4n + 1) .text-wrapper {
      grid-column-end: span 1;
      grid-column-start: 4;
    }
  }

</style>
