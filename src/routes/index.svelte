<script>
</script>

<style>
  section {
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20vw 16vh;
    text-transform: uppercase;
    text-shadow: 0 0 256px var(--grey-000), 0 0 128px var(--grey-000);

    animation: slide-up 0.8s ease-in-out both;
  }

  h1 small {
    padding: 0 0.5em 0 2em;
    font-size: .1618em;
    font-weight: 300;
    line-height: 1.5;
  }

  @media all and (min-width: 1024px) {
    h1 small {
      padding: 0 0.75em 0 0.25em;
    }
  }

  h1 small.left {
    align-self: flex-start;
    font-style: italic;

    animation: slide-up 0.8s ease-in-out both;
    animation-delay: .2s;
  }

  h1 small.right {
    align-self: flex-end;
    text-align: right;
    font-style: italic;

    animation: slide-up 0.8s ease-in-out both;
    animation-delay: .3s;
  }

  h1 small.right::first-line {
    animation-delay: .1s;
  }

  h1 em {
    font-style: normal;
    font-weight: 500;
  }

  h1 strong {
    align-self: center;
    font-weight: 700;
    letter-spacing: 0.06em;
  }

  .greeting {
    display: inline;
    position: absolute;
    bottom: -.16em;
    right: 1.16em;
    height: 0;
    width: 0;
    z-index: -1;
    transform: rotate(-90deg);
    transform-origin: bottom right;
    font-family: 'Basier Mono Square', monospace;
    font-weight: 700;
    color: transparent;
    pointer-events: none;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: var(--primary-color);
  }

  .greeting::selection {
    background: transparent;
    color: transparent;
  }

  @media all and (orientation: landscape) {
    h1 {
      padding: 0;
    }
  }

  @keyframes slide-up {
    0% {
      opacity: 0;
      transform: translate3d(-0.6%, 5%, 0);
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
</style>

<svelte:head>
  <title>Lena Schnedlitz</title>
</svelte:head>

<section>
  <h1 class="huge">
    <small class="left">I'm</small>
    <strong>Lena<br/><span class="desktop-only">Schnedlitz</span></strong>
    <small class="right">
      a <em>software engineer</em><br/>
      based in <em>Vienna.</em>
    </small>
  </h1>

  <span class="gigantic greeting">
    Welcome
  </span>
</section>
