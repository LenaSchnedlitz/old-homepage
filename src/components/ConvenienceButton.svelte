<script>
  export let onclick;
</script>

<style>
  .convenience-button {
    width: 2rem;
    height: 2rem;
    padding: .25rem;
    box-sizing: content-box;

    display: flex;
    justify-content: center;
    align-items: center;

    border: solid 1px transparent;
    border-radius: 2rem;
    background: transparent;

    cursor: pointer;
    transition: all ease-in .3s;
  }

  .convenience-button:hover {
    border-color: var(--primary-color-700);
  }

  :global(.convenience-button) > :global(svg.icon) {
    width: 1.25rem;
    height: 1.25rem;
    stroke-width: 1.25;
    stroke: var(--gray-900);
    transition: all ease-in .2s;
  }

  @media (min-width: 800px) {
    :global(.convenience-button) > :global(svg.icon) {
      stroke: var(--gray-500);
    }

    :global(.convenience-button:hover) > :global(svg.icon) {
      stroke: var(--primary-color-700);
      stroke-width: 1.5;
    }
  }
</style>

<button class="convenience-button" on:click={onclick}>
  <slot/>
</button>
