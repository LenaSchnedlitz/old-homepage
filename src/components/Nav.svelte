<script>
  import DarkModeToggle from './DarkModeToggle.svelte';
  export let segment;
</script>

<style>
  nav {
    padding: 2rem 2rem 1rem;
    position: absolute;
    top: 0;
    right: 0;
  }

  ul {
    margin: 0 -.5rem;
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
    padding: 0 .5rem;
    font-family: var(--monospace);
    font-size: .75rem;
  }

  a::after {
    position: absolute;
    content: '';
    bottom: -.2rem;
    left: .4rem;
    display: block;
    height: 1px;
    width: calc(100% - .8rem);
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

  .mobile-only {
    margin-top: -.7rem;
  }

  @media (min-width: 800px) {
    nav {
      position: fixed;
      right: 0;
      background: var(--gray-1--90);
    }

    ul {
      margin: 0 0 0 -.8rem;
    }

    a {
      padding: 0 .8rem;
      font-family: var(--sans-serif);
      font-size: .875rem;
    }

    a::after {
      left: .7rem;
      width: calc(100% - 1.4rem);
    }

    li {
      margin-top: .5rem;
    }

    .mobile-only {
      display: none;
    }
  }
</style>

<nav>
  <ul>
    <!-- Temporarily hidden until there are posts
    <li>
      <a rel=prefetch aria-current='{segment === "blog" ? "page" : undefined}' href='blog'>Blog</a>
    </li>
    -->
    <li>
      <a rel=prefetch aria-current='{segment === "projects" ? "page" : undefined}'
         href='projects'>Projects</a>
    </li>
    <li>
      <a aria-current='{segment === "about" ? "page" : undefined}' href='about'>About</a>
    </li>
    <li class="mobile-only">
      <DarkModeToggle/>
    </li>
  </ul>
</nav>
