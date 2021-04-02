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
  h2.teaser {
    font-family: var(--sans-serif);
    font-style: normal;
    font-weight: normal;
    margin: -1rem 0 2rem;
  }
</style>

<svelte:head>
  <title>Lena Schnedlitz - {post.title}</title>
</svelte:head>

<article>
  <h1>{post.title}</h1>
  <h2 class="teaser">{post.teaser}</h2>

  {@html post.html}
</article>
