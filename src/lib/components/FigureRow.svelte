<script>
  export let spaced;
</script>

<section class:spaced>
  <slot />
</section>

<style>
  section {
    grid-column-start: 1;
  }

  section.spaced :global(img) {
    width: auto;
    max-width: 100%;
  }

  @media all and (min-width: 768px) {
    section {
      grid-column: 1 / 3;
      display: flex;
      flex-wrap: wrap;
      gap: 0 2rem;
    }

    section > :global(figure) {
      width: calc(50% - 1rem);
    }
  }

  @media all and (min-width: 1366px) {
    section {
      grid-column: 2 / 6;
      justify-content: flex-end;
      gap: 0 1rem;
    }

    section > :global(figure) {
      max-width: calc(25% - 0.75rem);
    }
  }
</style>
