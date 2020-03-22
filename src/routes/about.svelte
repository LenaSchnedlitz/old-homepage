<svelte:head>
  <title>Lena Schnedlitz - About</title>
</svelte:head>

<style>
  #follow-me-about {
    position: absolute;
    left: 0;
    bottom: 32px;
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  li {
    padding: 0 0.6rem;
    list-style: none;
  }

  @media (min-width: 800px) {
    #follow-me-about {
      display: none;
    }
  }
</style>

<article>
  <h1>About Me</h1>

  <p>
    My name is <i>Lena Schnedlitz</i> and I’m a software engineer from Vienna,
    Austria.
  </p>
  <p>
    I enjoy implementing stuff and solving problems.
    I’m mostly interested in logic, UX and medicine.
    I also love hipster coffee shops,
    math puzzles and origami.
  </p>
  <p>
    <br>
    This page is about my personal projects and opinions. You can find most of my stuff on
    <a class="link" href="https://github.com/LenaSchnedlitz">GitHub</a>.
    The source code of this homepage is available on
    <a class="link" href="https://gitlab.com/LenaSchnedlitz/personal-homepage">GitLab</a>.
  </p>
</article>

<ul id="follow-me-about">
  <li>
    <a href="https://twitter.com/LenaSchnedlitz">
      <svg viewBox="0 0 24 24" class="icon">
        <title>Twitter</title>
        <use xlink:href="icons/sprite.svg#twitter"/>
      </svg>
    </a>
  </li>
  <li>
    <a href="https://github.com/LenaSchnedlitz">
      <svg viewBox="0 0 24 24" class="icon">
        <title>GitHub</title>
        <use xlink:href="icons/sprite.svg#github"/>
      </svg>
    </a>
  </li>
  <li>
    <a href="https://gitlab.com/LenaSchnedlitz">
      <svg viewBox="0 0 24 24" class="icon">
        <title>GitLab</title>
        <use xlink:href="icons/sprite.svg#gitlab"/>
      </svg>
    </a>
  </li>
  <li>
    <a href="https://www.linkedin.com/in/lenaschnedlitz">
      <svg viewBox="0 0 24 24" class="icon">
        <title>LinkedIn</title>
        <use xlink:href="icons/sprite.svg#linkedin"/>
      </svg>
    </a>
  </li>
</ul>