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

  #picture {
    position: absolute;
    height: 36%;
    width: calc(100% - 64px);
    background-size: contain;
    background-image: url('../../me/me-s.jpg');
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: bottom;
    box-shadow: 0 20px 20px -25px rgba(0,0,0,.3);
  }

  @media (min-width: 700px) {
    article {
      top: 166px;
    }

    #picture {
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-image: url('../../me/me-m.jpg');
      box-shadow: none;
      z-index: -1;
    }
  }

  @media (min-width: 2000px) {
    #picture {
      background-image: url('../../me/me-l.jpg');
    }
  }

  @media (min-width: 3000px) {
    #picture {
      background-image: url('../../me/me-xl.jpg');
    }
  }
</style>

<svelte:head>
  <title>Lena Schnedlitz</title>
</svelte:head>

<div id="picture"></div>

<article>
  <h1>Hi.</h1>

  <p>
    My name is Lena. I’m a <i>software engineer</i> from Vienna, Austria.
  </p>
</article>
