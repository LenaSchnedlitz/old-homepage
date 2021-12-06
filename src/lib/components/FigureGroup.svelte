<section>
  <slot />
</section>

<style>
  section {
    grid-column-start: 1;
  }

  @media all and (min-width: 768px) {
    section {
      margin-top: 3rem;
      display: flex;
      gap: 0 3rem;
    }
  }

  @media all and (min-width: 1366px) {
    section {
      grid-column-start: 2;
      flex-direction: row-reverse;
      flex-wrap: wrap;
      gap: 3rem 6rem;
    }

    section > :global(figure) {
      max-width: calc(50% - 3rem);
    }
  }
</style>
