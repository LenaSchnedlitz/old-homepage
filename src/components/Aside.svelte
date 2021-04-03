<style>
  aside {
    width: 100%;
  }

  strong,
  .dot,
  .label {
    display: none;
  }

  ul {
    margin: 0;
    padding: 1.5rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  li {
    padding: 0 .6rem;
    list-style: none;
  }

  a svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  @media (min-width: 800px) {
    aside {
      position: fixed;
      left: 40px;
      bottom: 26px;
      display: flex;
      width: auto;
      font-family: var(--sans-serif);
      transform: rotate(-90deg);
      transform-origin: top left;
    }

    strong {
      font-weight: 800;
      font-style: normal;
      text-transform: uppercase;
    }

    .dot {
      height: 4px;
      width: 4px;
      border-radius: .5rem;
      margin: auto .1rem .55rem .8rem;
      background: var(--gray-3);
    }

    strong,
    .dot,
    .label {
      display: initial;
    }

    ul {
      padding: 0;
      justify-content: flex-start;
    }

    a {
      display: flex;
      align-items: center;
    }

    a svg {
      width: 1rem;
      height: 1rem;
      transition: all ease-out 150ms;
      padding-right: .3rem;
    }

    a:hover {
      color: var(--tertiary-color);
    }

    a:hover svg {
      stroke: var(--tertiary-color);
      stroke-width: 2;
    }

    a:active {
      color: var(--tertiary-color-6);
    }

    a:active svg {
      stroke: var(--tertiary-color-6);
    }

    @media (max-height: 800px) {
      li {
        padding-right: 0;
      }

      .label {
        display: none;
      }
    }
  }
</style>

<aside id="follow-me">
  <strong>Follow me</strong>
  <div class="dot"></div>
  <ul>
    <li>
      <a href="https://github.com/LenaSchnedlitz">
        <svg viewBox="0 0 24 24" class="icon" aria-hidden="true">
          <use xlink:href="icons/sprite.svg#github"/>
        </svg>
        <span class="label">GitHub</span>
      </a>
    </li>
    <li>
      <a href="https://gitlab.com/LenaSchnedlitz">
        <svg viewBox="0 0 24 24" class="icon" aria-hidden="true">
          <use xlink:href="icons/sprite.svg#gitlab"/>
        </svg>
        <span class="label">GitLab</span>
      </a>
    </li>
    <li>
      <a href="https://twitter.com/LenaSchnedlitz">
        <svg viewBox="0 0 24 24" class="icon" aria-hidden="true">
          <use xlink:href="icons/sprite.svg#twitter"/>
        </svg>
        <span class="label">Twitter</span>
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/lenaschnedlitz">
        <svg viewBox="0 0 24 24" class="icon" aria-hidden="true">
          <use xlink:href="icons/sprite.svg#linkedin"/>
        </svg>
        <span class="label">LinkedIn</span>
      </a>
    </li>
  </ul>
</aside>