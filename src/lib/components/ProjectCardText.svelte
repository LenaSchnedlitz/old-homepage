<script>
  export let post;
</script>

<div href="/projects/{post.slug}" rel="prefetch" title={post.title}>
  <a
    href="/projects/{post.slug}"
    rel="prefetch"
    title={post.title}
    tabindex="-1"
  >
    <h3>{post.title}</h3>
    <span>{post.teaser}</span>
  </a>
</div>

<style>
  div {
    padding: 0.25rem 0.5rem;
  }

  @media all and (min-width: 768px) {
    div {
      grid-column-end: span 1;
      padding: 1rem 2rem;
      align-self: end;
    }

    div h3 {
      margin-top: 0;
    }
  }

  @media all and (min-width: 1366px) {
    div {
      grid-column-end: span 2;
    }
  }
</style>
