<script>
  export let content, previewFile;
</script>

<style>
  section {
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
    margin-bottom: 3rem;
    width: 206px;
    box-shadow: 5px 10px 1.25rem 0 rgba(0, 0, 0, .2);
  }

  img.left {
    align-self: flex-start;
    border-radius: 0 15px 15px 0;
  }

  img.right {
    align-self: flex-end;
    border-radius: 15px 0 0 15px;
  }

  img.tiny {
    margin-bottom: 6rem;
  }

  @media (min-width: 800px) {
    section {
      width: 256px;
      height: 354px;
    }

    section:hover {
      transform: scale(.9);
    }

    .text-wrapper {
      margin-bottom: 1.3rem;
    }

    span {
      font-size: calc(1rem - 2px);
    }
  }
</style>

<section class={content.background}>
  <div class="text-wrapper">
    <h3>{content.title}</h3>
    <span>{content.teaser}</span>
  </div>
  <img alt="{content.title}" src="{previewFile}" class={content.align} class:tiny={content.tiny}/>
</section>
