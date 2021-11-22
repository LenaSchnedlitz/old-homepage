<script context="module">
  export async function preload({params, query}) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`projects/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return {post: data};
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;
</script>

<style>
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
