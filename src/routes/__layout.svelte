<script context="module">
  export async function load({page}) {
    const routeParts = page.path.split('/');
    const segment = routeParts.length > 1 ? routeParts[1] : '';

    return {
      props: {segment}
    }
  }
</script>

<script>
  import Nav from '$lib/components/Nav.svelte';
  import Logo from '$lib/components/Logo.svelte';
  import DarkModeToggle from '$lib/components/DarkModeToggle.svelte';
  import {onMount} from 'svelte';

  export let segment;

  let transparent;
  $: transparent = !segment;

  let oldPosition = 0;
  let visible = true;

  onMount(() => {
    window.onscroll = function () {
      visible = window.scrollY < 64 || window.scrollY < oldPosition;
      oldPosition = window.scrollY;
    };
  });
</script>

<header class:visible class:transparent>
  <Logo/>
  <Nav {segment}/>
  <DarkModeToggle/>
</header>

<div class="sticky-segment-dot {segment}"></div>

<main>
  <slot/>
</main>

<style>
  header {
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
    z-index: 100;
    background: var(--header);

    --item-padding: .75rem;
  }

  header.transparent {
    background: transparent;
  }

  header:not(.visible) {
    display: none;
  }

  header > :global(label) {
    /* e.g. for dark mode toggle */
    margin: 0 0 0 var(--item-padding);
  }

  @media all and (min-width: 768px) {
    header {
      --item-padding: 2rem;
    }
  }

  .sticky-segment-dot {
    position: fixed;
    left: .75rem;
    top: .75rem;
    z-index: 1;
    width: .5rem;
    height: .5rem;
    border-radius: 1rem;
    background: var(--primary-color);
    transition: all cubic-bezier(.6, -0.28, .74, .05) .15s;
    transition-delay: .15s;
  }

  .sticky-segment-dot.projects {
    background: var(--tertiary-color);
    border-radius: 0;
  }

  header.visible ~ .sticky-segment-dot {
    transform: scale(.5, .5);
    opacity: 0;
    transition: none;
  }

  @media all and (min-width: 768px) {
    .sticky-segment-dot {
      display: none;
    }
  }

  main {
    min-height: 90vh;
    width: 100%;
  }
</style>
