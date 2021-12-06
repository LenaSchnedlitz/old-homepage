<section><slot /></section>

<style>
  section {
    position: absolute;
    bottom: 6rem;
    display: flex;
  }

  section > :global(a) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.25rem 1rem;
    border: solid 1px var(--text);
    font-size: var(--font--small);
  }

  section > :global(a):not(:last-child) {
    border-right: 0 transparent;
  }

  @media all and (min-width: 768px) {
    section > :global(a) {
      font-size: 1rem;
    }
  }

  section :global(svg):first-child:not(:last-child) {
    stroke-width: 2;
    margin-right: 0.5rem;
  }

  section :global(svg):last-child {
    stroke-width: 2;
    margin-left: 0.5rem;
  }
</style>
