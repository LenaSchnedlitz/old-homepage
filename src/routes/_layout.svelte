<script>
  import Nav from '../components/Nav.svelte';
  import Logo from '../components/Logo.svelte';
  import Aside from '../components/Aside.svelte';
  import DarkModeToggle from '../components/DarkModeToggle.svelte';
  import ConvenienceButtonGroup from '../components/ConvenienceButtonGroup.svelte';

  export let segment;
</script>

<style>
  main {
    min-height: calc(100% - 168px);
    max-width: 650px;
    padding: 0 2rem 2rem;
    margin: 0 auto;
    box-sizing: border-box;
  }

  @media (min-width: 700px) {
    main {
      padding-top: 146px;
    }
  }

  @media (min-width: 800px) {
    main {
      box-sizing: content-box;
    }
  }
</style>

<Logo/>
<Nav {segment}/>

<ConvenienceButtonGroup right>
  <DarkModeToggle/>
</ConvenienceButtonGroup>

<main>
  <slot/>
</main>

<Aside/>
