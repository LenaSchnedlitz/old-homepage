<script>
  import Nav from '../components/Nav.svelte';
  import Logo from '../components/Logo.svelte';
  import Aside from '../components/Aside.svelte';
  import DarkModeToggle from '../components/DarkModeToggle.svelte';

  export let segment;
</script>

<style>
  header {
    display: flex;
    justify-content: flex-end;
    padding: 1rem;

    --item-padding: .75rem;
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

<header>
  <Logo/>
  <Nav {segment}/>
  <DarkModeToggle/>
</header>

<main>
  <slot/>
</main>

<Aside/>
