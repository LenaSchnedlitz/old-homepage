<script>
  import SelfPortrait from '../components/SelfPortrait.svelte';
</script>

<style>
  article {
    width: 250px;
    margin: 0 0 -2rem -2rem;
    padding: 2rem 2rem 0;
    box-sizing: border-box;
  }

  h1 {
    font-size: 2.75rem;
    text-transform: none;
  }

  p {
    font-size: 17px;
    line-height: 22px;
  }

  #portrait :global(svg.self-portrait) {
    width: 100%;
    border-radius: 100%;
  }

  @media (min-width: 700px) {
    article {
      position: absolute;
      top: 166px;
    }

    #portrait :global(svg.self-portrait) {
      position: absolute;
      right: 4rem;
      bottom: 2rem;
      width: 70%;
      height: 70%;
    }
  }

  @media (min-width: 800px) {
    #portrait :global(svg.self-portrait) {
      right: 0;
      width: 80%;
      height: 80%;
    }
  }

  @media (min-width: 1200px) {
    #portrait :global(svg.self-portrait) {
      bottom: 4rem;
    }
  }
</style>

<svelte:head>
  <title>Lena Schnedlitz</title>
</svelte:head>

<section id="portrait">
  <SelfPortrait/>
</section>

<article>
  <h1>Hi.</h1>

  <p>
    My name is <em>Lena.</em><br>
    I’m a
    <mark>software engineer</mark>
    from Vienna, Austria.
  </p>
</article>
