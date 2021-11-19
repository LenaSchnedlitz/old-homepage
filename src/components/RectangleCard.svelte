<script>
  export let content, previewFile;
</script>

<style>
</style>

<section class={content.background}>
  <div class="text-wrapper">
    <h3>{content.title}</h3>
    <span>{content.teaser}</span>
  </div>
  <img alt="{content.title}" src="{previewFile}" class={content.align} class:tiny={content.tiny}/>
</section>
