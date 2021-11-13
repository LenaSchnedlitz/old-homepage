<style>
  aside {
    position: fixed;
    left: 0;
    bottom: 1rem;
    width: 3rem;
  }


  @media (min-width: 768px) {
    aside {
      width: 4rem;
    }
  }

  ul {
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  li {
    padding: 0;
    list-style: none;
  }

  a {
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 1rem;
  }

  a svg {
    width: 1rem;
    height: 1rem;
    padding: .5rem;
    stroke-width: 1.5;
    box-sizing: content-box;
    stroke-dasharray: 3, 0, 300;
    transition: all ease-out 150ms;
  }

  a::after {
    position: absolute;
    height: 40%;
    width: 40%;
    top: 20%;
    left: 40%;
    border-radius: 50px;
    content: '';
    z-index: -1;
  }

  li:nth-child(even) a::after {
    top: 20%;
    left: 20%;
  }

  a:hover {
    color: var(--tertiary-color);
  }

  a:hover svg {
    fill: rgba(255, 255, 255, .3);
    stroke-width: 2;
    stroke-linecap: round;
    animation: draw .7s;
  }

  a[title='GitHub']:hover::after,
  a[title='GitHub']:active::after {
    background: var(--tertiary-color-600);
  }

  a[title='GitLab']:hover::after,
  a[title='GitLab']:active::after {
    background: var(--secondary-color);
  }

  a[title='Twitter']:hover::after,
  a[title='Twitter']:active::after {
    background: var(--tertiary-color);
  }

  a[title='LinkedIn']:hover::after,
  a[title='LinkedIn']:active::after {
    background: var(--tertiary-color-800);
  }

  @keyframes draw {
    10% {
      stroke-dasharray: 3, 10, 300;
    }
    100% {
      stroke-dasharray: 33, 10, 300;
    }
  }
</style>

<aside id="follow-me">
  <ul>
    <li>
      <a href="https://github.com/LenaSchnedlitz" title="GitHub">
        <svg viewBox="0 0 24 24" class="icon" aria-hidden="true">
          <use href="icons/sprite.svg#github"/>
        </svg>
      </a>
    </li>
    <li>
      <a href="https://gitlab.com/LenaSchnedlitz" title="GitLab">
        <svg viewBox="0 0 24 24" class="icon" aria-hidden="true">
          <use href="icons/sprite.svg#gitlab"/>
        </svg>
      </a>
    </li>
    <li>
      <a href="https://twitter.com/LenaSchnedlitz" title="Twitter">
        <svg viewBox="0 0 24 24" class="icon" aria-hidden="true">
          <use href="icons/sprite.svg#twitter"/>
        </svg>
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/lenaschnedlitz" title="LinkedIn">
        <svg viewBox="0 0 24 24" class="icon" aria-hidden="true">
          <use href="icons/sprite.svg#linkedin"/>
        </svg>
      </a>
    </li>
  </ul>
</aside>