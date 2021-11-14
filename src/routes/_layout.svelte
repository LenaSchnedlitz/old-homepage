<script>
  import Nav from '../components/Nav.svelte';
  import Logo from '../components/Logo.svelte';
  import Aside from '../components/Aside.svelte';
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

<style>
  header {
    position: fixed;
    width: 100vw;
    display: flex;
    justify-content: flex-end;
    padding: 1rem;

    --item-padding: .75rem;
  }

  header:not(.visible) {
    display: none;
  }

  @media all and (min-width: 768px) {
    header {
      --item-padding: 2rem;
    }
  }

  header > :global(label) {
    margin: 0 .5rem 0 var(--item-padding);
  }
</style>

<header class:visible>
  <Logo/>
  <Nav {segment}/>
  <DarkModeToggle/>
</header>

<main>
  <slot/>
</main>

<Aside/>
