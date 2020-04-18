<style>
  article {
    position: absolute;
    top: calc(50% + 68px);
    width: 250px;
    margin: 0 0 0 -32px;
    padding: 0 32px 32px;
    box-sizing: border-box;
  }

  h1 {
    font-size: 44px;
    text-transform: none;
  }

  p {
    font-size: 17px;
    line-height: 22px;
  }

  #portrait {
    position: absolute;
    height: 36%;
    width: calc(100% - 64px);
    background-size: contain;
    background-image: url('../../me/optimized/me-s-min.jpg');
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: bottom;
    box-shadow: 0 20px 20px -25px rgba(0, 0, 0, .3);
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
  }

  @media (min-width: 2000px) {
    #portrait {
      background-image: url('../../me/optimized/me-l-min.jpg');
    }
  }

  @media (min-width: 3000px) {
    #portrait {
      background-image: url('../../me/optimized/me-xl-min.jpg');
    }
  }


  @media (prefers-color-scheme: dark) {
    @media (min-width: 700px) {
      #portrait {
        background-image: url('../../me/optimized/me-dark-m-min.jpg');
      }
    }

    @media (min-width: 2000px) {
      #portrait {
        background-image: url('../../me/optimized/me-dark-l-min.jpg');
      }
    }

    @media (min-width: 3000px) {
      #portrait {
        background-image: url('../../me/optimized/me-dark-xl-min.jpg');
      }
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
    I’m a <span class="emph">software engineer</span> from Vienna, Austria.
  </p>
</article>
