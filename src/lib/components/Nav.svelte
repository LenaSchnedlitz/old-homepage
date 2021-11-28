<script lang="ts">
  export let currentRoute: string;
</script>

<nav>
  <ul>
    <!--
    <li>
      <a rel=prefetch aria-current='{segment === "blog" ? "page" : undefined}' href='blog'>Blog</a>
    </li>
    -->
    <li>
      <a aria-current='{currentRoute.startsWith("/projects") ? "page" : undefined}'
         href='/projects'>Projects</a>
    </li>
    <li>
      <a aria-current='{currentRoute.startsWith("/about") ? "page" : undefined}' href='/about'>About</a>
    </li>
  </ul>
</nav>

<style>
  nav {
    font-weight: 500;
    --height: 1.5rem;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: right;
    align-items: center;
    font-family: 'Basier Mono Square', monospace;
    text-transform: uppercase;
  }

  li {
    list-style: none;
    height: var(--height);
    line-height: var(--height);
  }

  a {
    position: relative;
    padding: 0 var(--item-padding);
  }

  a:hover {
    color: var(--tertiary-color);
  }

  a::after {
    position: absolute;
    content: '';
    bottom: -.2rem;
    left: calc(100% - var(--item-padding));
    display: block;
    height: 1px;
    width: 0;
    background-color: currentColor;
    transition: all ease-out .1s;
  }

  [aria-current]::after {
    left: var(--item-padding);
    width: calc(100% - calc(var(--item-padding) * 2));
    transition: width ease-in .2s;
  }

  @media all and (min-width: 768px) {
    nav {
      --height: 2rem;
    }
  }
</style>
