<script>
  export let left = false;
  export let right = false;
</script>

<style>
  section {
    position: fixed;
    top: 5rem;
    display: none;
  }

  @media (min-width: 800px) {
    section {
      display: initial;
    }
  }

  .left {
    left: 1.75rem;
  }

  .right {
    right: 2rem;
  }
</style>


<section class:left class:right>
  <slot/>
</section>
