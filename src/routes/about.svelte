<svelte:head>
  <title>Lena Schnedlitz - About</title>
</svelte:head>

<script>
  let src = '../../me/optimized/me-s-min.jpg';
</script>

<style>
  img {
    width: 100%;
    box-shadow: 0 1.25rem 1.25rem -25px rgba(0, 0, 0, .3);
  }

  @media (min-width: 700px) {
    img {
      width: 80%;
      margin-left: 10%;
    }
  }

  @media (min-width: 800px) {
    img {
      box-shadow: none;
      margin-top: 2rem;
      margin-bottom: -2.5rem;
    }
  }
</style>

<article>
  <h1>About Me</h1>

  <p>
    My name is <mark>Lena Schnedlitz</mark> and I’m a <em>software engineer</em>
    from Vienna, Austria.
  </p>
  <p>
    I enjoy implementing and optimizing things. You can find most of my stuff on
    <a href="https://github.com/LenaSchnedlitz">GitHub</a>.
  </p>
  <br>
  <p>
    This website is about my personal projects and opinions. There might be a slight bias towards
    content related to programming, but I also post about topics like math puzzles,
    origami, and video games.
  </p>

  <img {src} alt="That's me"/>
</article>
