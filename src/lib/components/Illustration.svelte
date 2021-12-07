<script>
  import InlineSVG from 'svelte-inline-svg';
  import {
    backgroundGradient,
    illustrationVariables,
  } from '$lib/illustrations/utils';

  export let color = '#bbb';
  export let illustration;
  export let customClass;
</script>

<div
  class={customClass}
  style="background: {backgroundGradient(
    color,
  )}; box-shadow: 2px 8px 24px {color}66"
>
  <InlineSVG
    src="/illustrations/{illustration}.svg"
    style={illustrationVariables(color)}
  />
</div>

<style>
  div {
    width: 100%;
    height: 200px;
    overflow: hidden;
    transition: all ease-in 0.1s;
  }

  div > :global(svg) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  div :global(.illustration--skin-dark) {
    fill: #9e616a;
  }

  div :global(.illustration--skin-light) {
    fill: #ffb8b8;
  }

  div :global(.illustration--darkest) {
    fill: var(--illustration--darkest);
  }

  div :global(.illustration--dark) {
    fill: var(--illustration--dark);
  }

  div :global(.illustration--grey) {
    fill: var(--illustration--medium);
  }

  div :global(.illustration--light) {
    fill: var(--illustration--light);
  }

  div :global(.illustration--lightest) {
    fill: var(--illustration--lightest);
  }

  div :global(.illustration--white) {
    fill: #fff;
  }

  div :global(.illustration--accent) {
    fill: var(--illustration--accent);
  }

  div :global(.illustration--accent2) {
    fill: var(--illustration--accent2);
  }

  @media all and (min-width: 768px) {
    div:hover {
      transform: scale(1.05, 1.05);
      transition: all ease-out 0.3s;
    }
  }

  @media all and (min-width: 1366px) {
    div {
      height: 300px;
    }
  }
</style>
