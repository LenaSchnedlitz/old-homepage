<script context="module">
  export async function load({ page, fetch }) {
    const res = await fetch(`${page.path}.json`);

    if (res.ok) {
      const post = await res.json();

      return {
        props: { post },
      };
    }

    return {
      props: { post: {} },
    };
  }
</script>

<script>
  export let post;

  import ProjectNotFound from '$lib/illustrations/404.svelte';

  // Those are necessary to make CSS modules work
  import Figure from '$lib/components/Figure.svelte';
  import FigureGroup from '$lib/components/FigureGroup.svelte';
  import FigureRow from '$lib/components/FigureRow.svelte';
  import ProjectLinks from '$lib/components/ProjectLinks.svelte';
</script>

<svelte:head>
  <title>Lena Schnedlitz · Projects · {post.title || 'Ooops!'}</title>
</svelte:head>

<!-- workaround for svelte bug;
see https://github.com/sveltejs/svelte/issues/6325 -->
{#if false}
  <slot />
{/if}

{#if post && post.title}
  <article class="portfolio">
    <h1>{post.title}</h1>
    <p><strong class="teaser">{post.teaser}</strong></p>

    {@html post.html}
  </article>
{:else}
  <article class="error">
    <section>
      <h1>Ooops!</h1>
      <p>
        Seems this content is hiding and doesn't want to be found. Wanna try
        something else instead?
        <br />
        <a href="/projects">Click here!</a>
      </p>
    </section>
    <ProjectNotFound />
  </article>
{/if}

<style>
  .portfolio {
    position: relative;
    min-height: 100vh;
    padding-bottom: 9rem;
  }

  .portfolio > :global(*:not(h1)) {
    animation: appear 0.8s ease-in-out both;
  }

  @media all and (min-width: 768px) {
    article.portfolio > :global(p) {
      grid-column-end: 3;
    }
  }

  @media all and (min-width: 1366px) {
    article.portfolio > :global(p) {
      grid-column-end: 4;
    }
  }

  .error {
    width: 100vw;
    min-height: 100vh;
    background: var(--bg-article);
    display: flex;
    flex-direction: column;
  }

  .error a {
    margin-top: 0.6rem;
    display: inline-block;
  }

  .error > :global(svg) {
    max-height: 50vh;
    max-width: 80vw;
    align-self: center;
    margin: auto auto 4vh;
  }

  @media all and (orientation: landscape) {
    .error {
      flex-direction: row;
    }

    .error > :global(svg) {
      margin: auto;
    }
  }
</style>
