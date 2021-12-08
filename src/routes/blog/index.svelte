<script context="module">
  const extractDate = (slug) => new Date(slug.split('_')[0]);

  export async function load({ fetch }) {
    const url = '/blog.json';
    const res = await fetch(url);
    const posts = await res.json();
    posts.sort((a, b) => extractDate(b.slug) - extractDate(a.slug));

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
  <title>Lena Schnedlitz · Blog</title>
</svelte:head>

<!-- workaround for svelte bug;
see https://github.com/sveltejs/svelte/issues/6325 -->
{#if false}<slot />{/if}

<article class="blog">
  <h1 class="huge">Blog</h1>

  <a class="featured appear" href="/blog/{featured.slug}">
    <Illustration {...featured} customClass="illustration" featured />
    <section class="text">
      <h3>{@html featured.title}</h3>
      <p>{featured.teaser}</p>
    </section>
  </a>

  {#each posts as post, i}
    <a class="post variant-{i % 2} appear" href="/blog/{post.slug}">
      <Illustration {...post} customClass="illustration" featured />
      <h3>{@html post.title}</h3>
      <p>{post.teaser}</p>
    </a>
  {/each}
</article>

<style>
  .blog {
    min-height: 100vh;
  }

  a {
    margin-bottom: 3rem;
    height: max-content;
  }

  .featured h3,
  .post h3 {
    margin-top: 1rem;
  }

  .featured > :global(.illustration),
  .post > :global(.illustration) {
    aspect-ratio: 16 / 10;
  }

  h3 > :global(*) {
    padding-right: 0.5rem;
  }

  h3 > :global(br) {
    content: ' ';
    display: none;
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
    }

    .featured .text {
      height: max-content;
      align-self: end;
      padding-bottom: 1rem;
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
    }

    .post > :global(.illustration) {
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
