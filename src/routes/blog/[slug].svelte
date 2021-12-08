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
  import Illustration from '$lib/components/Illustration.svelte';
  import ProjectNotFound from '$lib/illustrations/404.svelte';
  import { stripTags } from '$lib/utils';

  export let post;
</script>

<svelte:head>
  <title>Lena Schnedlitz - {stripTags(post.title) || 'Ooops!'}</title>
</svelte:head>

<!-- workaround for svelte bug;
see https://github.com/sveltejs/svelte/issues/6325 -->
{#if false}
  <slot />
{/if}

{#if post && post.title}
  <article class="blog">
    <h1>{@html post.title}</h1>
    <Illustration {...post} customClass="illustration" />

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
        <a href="/blog">Click here!</a>
      </p>
    </section>
    <ProjectNotFound />
  </article>
{/if}

<style>
  .blog {
    position: relative;
    min-height: 100vh;
    padding-bottom: 9rem;
  }

  .blog :global(.illustration) {
    aspect-ratio: 16 / 10;
    margin-bottom: 1rem;
  }

  article.blog :global(em) {
    color: var(--grey-500);
    font-size: 14px;
    display: inline-block; /* TODO use class/component for this */
  }

  @media all and (min-width: 768px) {
    article.blog > :global(*:not(h1)) {
      grid-column-end: 3;
    }

    article.blog :global(em) {
      margin-bottom: 1rem;
    }
  }

  @media all and (min-width: 1366px) {
    article.blog > :global(*:not(h1)) {
      grid-column-end: 5;
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
