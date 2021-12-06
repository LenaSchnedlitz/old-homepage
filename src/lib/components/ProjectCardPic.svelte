<script>
  export let post;
</script>

<a
  class={post.slug}
  href="/projects/{post.slug}"
  rel="prefetch"
  title={post.title}
  aria-hidden="true"
>
  <img alt={post.title} src="/projects/{post.slug}.{post.previewType}" />
</a>

<style>
  a {
    z-index: -1;
  }

  img {
    width: 100%;
    height: 62vw;
    object-fit: cover;
  }

  .game-of-life {
    background: #d8dee9;
    filter: grayscale(70%);
  }

  .luups-map img {
    object-position: top;
  }

  .phagocyte img {
    object-position: right;
  }

  .progress-badges img {
    object-fit: contain;
    padding: 20%;
    background: var(--grey-25);
  }

  .satvis img {
    object-position: top;
  }

  @media all and (min-width: 768px) {
    a {
      grid-column-end: span 1;
      height: 20vw;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    img {
      height: 100%;
    }

    .game-of-life img {
      object-fit: contain;
    }
  }

  @media all and (min-width: 1366px) {
    a {
      grid-column-end: span 2;
      height: 24vw;
    }
  }
</style>
