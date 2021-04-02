<script>
  export let content, previewFile;
</script>

<style>
  section {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    box-shadow: 5px 10px 25px 0 rgba(0, 0, 0, .1);
    transition: all cubic-bezier(.18, .89, .32, 1.28) .5s;
  }

  .text-wrapper {
    margin: 2rem 2.4rem 2rem 2rem;
    font-family: var(--sans-serif);
  }

  h3 {
    margin-top: 1rem;
    margin-bottom: .5rem;
    font-size: 1.2rem;
    font-weight: 800;
  }

  span {
    line-height: 1.5;
  }

  img {
    min-height: calc(1rem + 4px);
    width: 180px;
    margin-bottom: -1rem;
    box-shadow: 5px 10px 1.25rem 0 rgba(0, 0, 0, .2);
    border-radius: 15px 15px 0 0;
  }

  @media (min-width: 800px) {
    section {
      width: 354px;
      height: 354px;
    }

    section:hover {
      transform: scale(.9);
    }

    .text-wrapper {
      margin-left: 3rem;
      margin-right: auto;
      padding-right: 3rem;
    }

    h3 {
      font-size: 1.4rem;
      margin-bottom: .6rem;
    }

    span {
      font-size: calc(1rem - 1px);
    }

    img {
      width: auto;
      max-width: 230px;
    }
  }
</style>

<section class={content.background}>
  <div class="text-wrapper">
    <h3>{content.title}</h3>
    <span>{content.teaser}</span>
  </div>
  <img alt="{content.title} - Preview" src={previewFile}/>
</section>
