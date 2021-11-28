<script>
  import Nav from '$lib/components/Nav.svelte';
  import Logo from '$lib/components/Logo.svelte';
  import DarkModeToggle from '$lib/components/DarkModeToggle.svelte';
  import {onMount} from 'svelte';
  import { base } from '$app/paths';

  let transparent;
  $: transparent = !base;

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
  <Nav basePath={base}/>
  <DarkModeToggle/>
</header>

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

  main {
    min-height: 90vh;
    width: 100%;
  }
</style>
