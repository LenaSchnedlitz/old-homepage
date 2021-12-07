<script context="module">
  export async function load({ fetch }) {
    const url = '/blog.json';
    const res = await fetch(url);
    const posts = await res.json();
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    return {
      props: { featured: posts[0], posts: posts.slice(1) },
    };
  }
</script>

<script>
  import Illustration from '$lib/components/Illustration.svelte';

  export let featured;
  export let posts;
</script>

<svelte:head>
  <title>Lena Schnedlitz - Blog</title>
</svelte:head>

<!-- workaround for svelte bug;
see https://github.com/sveltejs/svelte/issues/6325 -->
{#if false}<slot />{/if}

<article>
  <h1 class="huge">Blog</h1>

  <section class="featured appear">
    <Illustration {...featured} customClass="illustration" />
    <div>
      <h3>{featured.title}</h3>
      <p>{featured.teaser}</p>
    </div>
  </section>

  {#each posts as post, i}
    <section class="post variant-{i % 2} appear">
      <Illustration {...post} />
      <h3>{post.title}</h3>
      <p>{post.teaser}</p>
    </section>
  {/each}
</article>

<style>
  section {
    margin-bottom: 3rem;
  }

  .featured h3,
  .post h3 {
    margin-top: 0.75rem;
  }

  @media all and (min-width: 768px) {
    article {
      grid-gap: 3rem;
    }

    .featured {
      display: grid;
      grid-gap: 3rem;
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .featured > :global(.illustration) {
      grid-column-end: span 2;
      height: 400px;
    }

    .featured > div {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    .post {
      margin-bottom: 0;
      grid-column-start: initial;
      grid-column-end: span 1;
    }
  }

  @media all and (min-width: 1366px) {
    .featured {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    .featured > :global(.illustration) {
      grid-column-end: span 2;
      height: 300px;
    }

    .post.variant-0 {
      grid-column: 2 / span 2;
    }

    .post.variant-1 {
      grid-column: 4 / span 2;
    }
  }
</style>
