<script>
  import Nav from '../components/Nav.svelte';
  import Logo from '../components/Logo.svelte';
  import DarkModeToggle from '../components/DarkModeToggle.svelte';
  import {onMount} from 'svelte';

  export let segment;

  let oldPosition = 0;
  let visible = true;

  onMount(() => {
    window.onscroll = function () {
      visible = window.scrollY < 64 || window.scrollY < oldPosition;
      oldPosition = window.scrollY;
    };
  });
</script>

<header class:visible>
  <Logo/>
  <Nav {segment}/>
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

    --item-padding: .75rem;
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
