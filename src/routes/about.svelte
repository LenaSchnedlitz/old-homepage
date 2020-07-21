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
    My name is <span class="emph">Lena Schnedlitz</span> and I’m a <em>software engineer</em>
    from Vienna, Austria.
  </p>
  <p>
    I enjoy implementing and optimizing things. You can find most of my stuff on
    <a class="link" href="https://github.com/LenaSchnedlitz">GitHub</a>.
  </p>
  <br>
  <p>
    This website is about my personal projects and opinions. There might be a slight bias towards
    content related to programming, but I also post about topics like math puzzles,
    origami, and video games.
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