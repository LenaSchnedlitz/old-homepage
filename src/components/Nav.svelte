<script>
  export let segment;
</script>

<style>
  nav {
    padding: 32px 32px 16px;
    position: absolute;
    top: 0;
    right: 0;
  }

  ul {
    margin: 0 -0.5rem;
    padding: 0;
    display: flex;
    justify-content: right;
  }

  li {
    list-style: none;
    transition: all ease-out 150ms;
  }

  [aria-current] {
    position: relative;
  }

  [aria-current]::after {
    position: absolute;
    content: '';
    bottom: -0.2rem;
    left: 0.4rem;
    display: block;
    height: 1px;
    width: calc(100% - 0.8rem);
    background-color: var(--gray-9);
  }

  a {
    padding: 0 0.5rem;
    font-family: var(--monospace);
    font-size: 12px;
  }

  a:hover {
    color: var(--primary-color-8);
  }

  a:active {
    color: var(--primary-color-6);
  }

  @media (min-width: 800px) {
    nav {
      position: fixed;
      background: #fefefedd;
    }

    ul {
      margin: 0 0 0 -0.8rem;
    }

    a {
      padding: 0 0.8rem;
      font-family: var(--sans-serif);
      font-size: 14px;
    }

    li {
      margin-top: 0.5rem;
    }

    [aria-current]::after {
      left: 0.7rem;
      width: calc(100% - 1.4rem);
    }
  }

  @media (prefers-color-scheme: dark) {
    [aria-current]::after {
      background-color: var(--gray-1);
    }

    a:hover {
      color: var(--primary-color-3);
    }

    a:active {
      color: var(--primary-color);
    }

    @media (min-width: 800px) {
      nav {
        background: #111111dd;
      }
    }
  }
</style>

<nav>
  <ul>
    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
         the blog data when we hover over the link or tap it on a touchscreen -->
    <li>
      <a rel=prefetch aria-current='{segment === "blog" ? "page" : undefined}' href='blog'>Blog</a>
    </li>
    <li>
      <a aria-current='{segment === "portfolio" ? "page" : undefined}'
         href='portfolio'>Portfolio</a>
    </li>
    <li>
      <a aria-current='{segment === "about" ? "page" : undefined}' href='about'>About</a>
    </li>
  </ul>
</nav>
