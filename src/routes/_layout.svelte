<script>
  import Nav from '../components/Nav.svelte';
  import Logo from '../components/Logo.svelte';

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

<main>
  <slot/>
</main>

<aside id="follow-me">
  <strong>Follow me</strong>
  <div class="dot"></div>
  <ul>
    <li>
      <a href="https://github.com/LenaSchnedlitz">
        <svg viewBox="0 0 24 24" class="icon icon-small">
          <use xlink:href="icons/sprite.svg#github"/>
        </svg>
        <span class="label">GitHub</span>
      </a>
    </li>
    <li>
      <a href="https://gitlab.com/LenaSchnedlitz">
        <svg viewBox="0 0 24 24" class="icon icon-small">
          <use xlink:href="icons/sprite.svg#gitlab"/>
        </svg>
        <span class="label">GitLab</span>
      </a>
    </li>
    <li>
      <a href="https://twitter.com/LenaSchnedlitz">
        <svg viewBox="0 0 24 24" class="icon icon-small">
          <use xlink:href="icons/sprite.svg#twitter"/>
        </svg>
        <span class="label">Twitter</span>
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/lenaschnedlitz">
        <svg viewBox="0 0 24 24" class="icon icon-small">
          <use xlink:href="icons/sprite.svg#linkedin"/>
        </svg>
        <span class="label">LinkedIn</span>
      </a>
    </li>
  </ul>
</aside>