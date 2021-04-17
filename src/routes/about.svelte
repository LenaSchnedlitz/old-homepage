<svelte:head>
  <title>Lena Schnedlitz - About</title>
</svelte:head>

<script>
  let src = '../../me/optimized/me-s-min.jpg';
</script>

<style>
  img {
    width: 100%;
    margin-bottom: -1.5rem;
  }

  @media (min-width: 700px) {
    img {
      width: 80%;
      margin-left: 10%;
    }
  }

  @media (min-width: 800px) {
    img {
      margin-top: 2rem;
      margin-bottom: -2.5rem;
    }
  }
</style>

<article>
  <h1>About Me</h1>

  <p>
    Hi! I'm <mark>Lena Schnedlitz</mark>, a full stack software engineer from Vienna.
    You can find me on
    <a href="https://github.com/LenaSchnedlitz">GitHub</a>,
    <a href="https://gitlab.com/LenaSchnedlitz">GitLab</a>,
    <a href="https://twitter.com/LenaSchnedlitz">Twitter</a>, and
    <a href="https://www.linkedin.com/in/lenaschnedlitz">LinkedIn</a>.
  </p>
  <p>
    This website is about my personal projects and opinions.<br>
    I usually write about software development and web design, but sometimes also about math puzzles,
    origami, and video games.
  </p>

  <img {src} alt="That's me"/>
</article>
