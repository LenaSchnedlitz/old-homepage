<script>
  export let left;
  export let right;
</script>

<style>
  section {
    position: fixed;
    top: 5rem;
  }

  .left {
    left: 1.75rem;
  }

  .right {
    right: 2rem;
  }
</style>


<section class:left class:right>
  <slot />
</section>
