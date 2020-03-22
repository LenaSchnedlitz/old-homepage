<script>
  import Nav from '../components/Nav.svelte';
  import Logo from '../components/Logo.svelte';

  export let segment;
</script>

<style>
  main {
    max-width: 650px;
    padding: 0 32px 32px;
    margin: 0 auto;
    box-sizing: border-box;
  }

  #follow-me {
    display: none;
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

    #follow-me {
      position: fixed;
      left: 40px;
      bottom: 26px;
      display: flex;
      font-family: var(--sans-serif);
      transform: rotate(-90deg);
      transform-origin: top left;
    }

    #follow-me strong {
      font-weight: 800;
      text-transform: uppercase;
    }

    #follow-me ul {
      margin: 0;
      padding: 0;
      display: flex;
    }

    #follow-me li {
      padding: 0 0.6rem;
      list-style: none;
    }

    #follow-me a {
      display: flex;
    }

    #follow-me a svg {
      transition: all ease-out 150ms;
      padding-right: 0.3rem;
    }

    #follow-me a:hover {
      color: var(--primary-color-8);
    }

    #follow-me a:hover svg {
      stroke: var(--primary-color-8);
    }

    #follow-me a:active {
      color: var(--primary-color-6);
    }

    #follow-me a:active svg {
      stroke: var(--primary-color-6);
    }

    @media (max-height: 800px) {
      #follow-me .label {
        display: none;
      }

      #follow-me li {
        padding-right: 0;
      }
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