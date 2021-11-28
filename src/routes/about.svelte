<svelte:head>
  <title>Lena Schnedlitz - About</title>
</svelte:head>

<script>
  import SelfPortrait from '$lib/components/SelfPortrait.svelte';
</script>

<!-- workaround for svelte bug;
see https://github.com/sveltejs/svelte/issues/6325 -->
{#if false}<slot/>{/if}

<article>
  <h1 class="huge">About <span class="large-screen-only"><br/>&nbsp; &nbsp; </span>Me</h1>

  <section class="text appear">
    <p>
      Welcome! My name is Lena Schnedlitz
      and I'm a full stack software engineer from Vienna.
      You can find me on
      <a href="https://github.com/LenaSchnedlitz">GitHub</a>,
      <a href="https://gitlab.com/LenaSchnedlitz">GitLab</a>,
      <a href="https://twitter.com/LenaSchnedlitz">Twitter</a>,
      <a href="https://codepen.io/LenaSchnedlitz">CodePen</a>, and
      <a href="https://www.linkedin.com/in/lenaschnedlitz">LinkedIn</a>.
    </p>
    <p>
      This website is about my personal projects and opinions.<br>
      I like to write about
      <mark>software development and web design</mark>, but sometimes also about
      <mark>math
        puzzles
      </mark>
      ,
      <mark>origami</mark>
      , and
      <mark>video games</mark>
      .
    </p>
  </section>
  <div class="svg-wrapper pic appear">
    <SelfPortrait/>
  </div>
</article>

<style>
  .svg-wrapper :global(svg) {
    max-width: 100%;
    height: auto;
    margin: 2rem 0;
  }

  @media all and (min-width: 768px) {
    .svg-wrapper :global(svg) {
      margin: 0 0 8rem;
      transition: all ease-out .2s;
    }

    .svg-wrapper :global(svg):hover {
      transform: translate3d(-1rem, -.5rem, 0) scale(1.01, 1.01);
      transition: all ease-out .5s;
    }
  }

  @media all and (min-width: 1366px) {
    .svg-wrapper :global(svg):hover {
      transform: translate3d(-3rem, -1rem, 0) scale(1.01, 1.01);
    }
  }

  @media not screen and (min-width: 1366px) {
    .large-screen-only {
      display: none;
    }
  }
</style>
