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

  a {
    position: relative;
    padding: 0 0.5rem;
    font-family: var(--monospace);
    font-size: 12px;
  }

  a::after {
    position: absolute;
    content: '';
    bottom: -0.2rem;
    left: 0.4rem;
    display: block;
    height: 1px;
    width: calc(100% - 0.8rem);
  }

  a:hover {
    color: var(--primary-color);
  }

  a:hover::after {
    background-color: var(--primary-color);
  }

  a:active {
    color: var(--primary-color-6);
  }

  [aria-current]::after {
    height: 1px;
    background-color: var(--gray-9);
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

    a::after {
      left: 0.7rem;
      width: calc(100% - 1.4rem);
    }

    li {
      margin-top: 0.5rem;
    }
  }

  @media (prefers-color-scheme: dark) {
    a:hover {
      color: var(--primary-color-4);
    }

    a:hover::after {
      background-color: var(--primary-color-4);
    }

    a:active {
      color: var(--primary-color-3);
    }

    [aria-current]::after {
      background-color: var(--gray-1);
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
    <li>
      <a rel=prefetch aria-current='{segment === "blog" ? "page" : undefined}' href='blog'>Blog</a>
    </li>
    <li>
      <a rel=prefetch  aria-current='{segment === "portfolio" ? "page" : undefined}'
         href='portfolio'>Portfolio</a>
    </li>
    <li>
      <a aria-current='{segment === "about" ? "page" : undefined}' href='about'>About</a>
    </li>
  </ul>
</nav>
