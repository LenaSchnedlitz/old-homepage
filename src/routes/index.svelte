<style>
  article {
    position: absolute;
    top: calc(50% + 4.25rem);
    width: 250px;
    margin: 0 0 0 -2rem;
    padding: 0 2rem 2rem;
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

  #portrait {
    position: absolute;
    height: 36%;
    width: calc(100% - 4rem);
    background-size: contain;
    background-image: url('../../me/optimized/me-s-min.jpg');
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: bottom;
    box-shadow: 0 1.25rem 1.25rem -25px rgba(0, 0, 0, .3);
  }

  @media (min-width: 700px) {
    article {
      top: 166px;
    }

    #portrait {
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-image: url('../../me/optimized/me-m-min.jpg');
      box-shadow: none;
      z-index: -1;
    }

    :global(body.dark-mode) #portrait {
      background-image: url('../../me/optimized/me-dark-m-min.jpg');
    }
  }

  @media (min-width: 2000px) {
    #portrait {
      background-image: url('../../me/optimized/me-l-min.jpg');
    }

    :global(body.dark-mode) #portrait {
      background-image: url('../../me/optimized/me-dark-l-min.jpg');
    }
  }

  @media (min-width: 3000px) {
    #portrait {
      background-image: url('../../me/optimized/me-xl-min.jpg');
    }

    :global(body.dark-mode) #portrait {
      background-image: url('../../me/optimized/me-dark-xl-min.jpg');
    }
  }
</style>

<svelte:head>
  <title>Lena Schnedlitz</title>
</svelte:head>

<div id="portrait"></div>

<article>
  <h1>Hi.</h1>

  <p>
    My name is <em>Lena.</em><br>
    I’m a <mark>software engineer</mark> from Vienna, Austria.
  </p>
</article>
