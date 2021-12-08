<script>
  import InlineSVG from 'svelte-inline-svg';
  import {
    backgroundGradient,
    illustrationVariables,
  } from '$lib/illustrations/utils';

  export let color = '#bbb';
  export let illustration;
  export let customClass;
  export let featured;

  let style;
  $: style = `${
    featured ? `box-shadow: 2px 8px 24px ${color}66; ` : ''
  }background: ${backgroundGradient(color)}`;
</script>

<div class={customClass} class:featured {style}>
  <InlineSVG
    src="/illustrations/{illustration}.svg"
    style={illustrationVariables(color)}
  />
</div>

<style>
  div {
    width: 100%;
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
    .featured:hover {
      transform: scale(1.05, 1.05);
      transition: all ease-out 0.3s;
    }
  }
</style>
