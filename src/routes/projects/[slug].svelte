<svelte:head>
  <title>Lena Schnedlitz - {post.title || 'Ooops!'}</title>
</svelte:head>

<script context="module">
  export async function load({page, fetch}) {
    const res = await fetch(`${page.path}.json`);

    if (res.ok) {
      const post = await res.json();

      return {
        props: {post}
      };
    }

    return {
      props: {post: {}}
    }
  }
</script>

<script>
  export let post;

  import ProjectNotFound from '$lib/illustrations/project-not-found.svelte'
</script>

<!-- workaround for svelte bug;
see https://github.com/sveltejs/svelte/issues/6325 -->
{#if false}
  <slot/>
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
        Seems this content is hiding and doesn't want to be found. Wanna try something else instead?
        <br/>
        <a href="/projects">Click here!</a>
      </p>
    </section>
    <ProjectNotFound/>
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

  .error {
    width: 100vw;
    min-height: 100vh;
    background: var(--bg-article);
    display: flex;
    flex-direction: column;
  }

  .error a {
    margin-top: .6rem;
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
