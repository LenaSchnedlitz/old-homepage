<script context="module">
  export function preload({params, query}) {
    return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
      return {posts};
    });
  }
</script>

<script>
  export let posts;
</script>

<svelte:head>
  <title>Lena Schnedlitz - Blog</title>
</svelte:head>

<style>
  p {
    font-size: 12px;
  }
</style>

<h1>Posts</h1>

{#each posts as post}
  <article>
    <a rel='prefetch' href='blog/{post.slug}'>
      <h2>{post.title}</h2>
      <p>{post.teaser}...</p>
    </a>
  </article>
{/each}
