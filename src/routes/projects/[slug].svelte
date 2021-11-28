<script context="module">
  export async function load({page, fetch}) {
    const res = await fetch(`${page.path}.json`);
    const post = await res.json();

    return {
      props: {post}
    };
  }
</script>

<script>
  export let post;
</script>

<style>
  .portfolio {
    position: relative;
    min-height: 100vh;
    padding-bottom: 9rem;
  }

  .portfolio > :global(*:not(h1)) {
    animation: appear 0.8s ease-in-out both;
  }
</style>

<svelte:head>
  <title>Lena Schnedlitz - {post.title}</title>
</svelte:head>

<article class="portfolio">
  <h1>{post.title}</h1>
  <p><strong class="teaser">{post.teaser}</strong></p>

  {@html post.html}
</article>
