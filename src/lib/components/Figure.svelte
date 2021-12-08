<script>
  export let src;
</script>

<figure>
  <img {src} alt="" />
  <figcaption><slot /></figcaption>
</figure>

<style>
  figure {
    margin: 0;
  }

  figcaption {
    font-family: var(--font-mono-square);
    font-size: var(--font--small);
    text-transform: uppercase;
    margin: -0.25rem 0 1.25rem;
  }

  figure > img {
    width: 100%;
    max-height: 100%;
  }

  @media all and (min-width: 768px) {
    figure {
      grid-column: 3 / 4;
    }

    figure:first-of-type {
      grid-row: 2 / 5;
    }

    figure:nth-of-type(2) {
      grid-row: 5 / 8;
    }
  }

  @media all and (min-width: 1366px) {
    figure {
      grid-column: 4 / 6;
    }

    figure:first-of-type {
      grid-row: 2 / 5;
    }
  }
</style>
