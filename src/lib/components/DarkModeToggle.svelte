<script>
  import { onMount } from 'svelte';
  import Icon from '$lib/components/Icon.svelte';

  const STORAGE_KEY = 'theme';
  const DARK_PREFERENCE = '(prefers-color-scheme: dark)';

  const THEMES = {
    DARK: 'dark',
    LIGHT: 'light',
  };
  let lightOn;

  const prefersDarkThemes = () => window.matchMedia(DARK_PREFERENCE).matches;

  const applyTheme = () => {
    const preferredTheme = prefersDarkThemes() ? THEMES.DARK : THEMES.LIGHT;
    const currentTheme = localStorage.getItem(STORAGE_KEY) || preferredTheme;

    lightOn = currentTheme !== THEMES.DARK;

    if (lightOn) {
      document.body.classList.remove(THEMES.DARK);
      document.body.classList.add(THEMES.LIGHT);
    } else {
      document.body.classList.remove(THEMES.LIGHT);
      document.body.classList.add(THEMES.DARK);
    }
  };

  const toggleTheme = () => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
      // clear storage
      localStorage.removeItem(STORAGE_KEY);
    } else {
      // store opposite of preference
      localStorage.setItem(
        STORAGE_KEY,
        prefersDarkThemes() ? THEMES.LIGHT : THEMES.DARK,
      );
    }

    applyTheme();
  };

  onMount(() => {
    applyTheme();
    window.matchMedia(DARK_PREFERENCE).addEventListener('change', applyTheme);
  });
</script>

<svelte:head>
  <meta content={lightOn ? '#ffffff' : '#131418'} name="theme-color" />
</svelte:head>

<label>
  <span class="aria-label">{lightOn ? THEMES.LIGHT : THEMES.DARK} mode</span>
  <input type="checkbox" bind:checked={lightOn} on:click={toggleTheme} />
  <span class="toggle">
    <span class="toggle-icons">
      <Icon name="moon" />
      <Icon name="sun" />
    </span>
  </span>
</label>

<style>
  label {
    padding: 0;

    display: flex;
    align-items: center;

    background: transparent;
    border: none;
    box-sizing: border-box;

    --toggle-height: 20px;
  }

  @media all and (min-width: 1366px) {
    label {
      --toggle-height: 16px;
    }
  }

  .aria-label {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    overflow: hidden;
    pointer-events: none;
  }

  input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    overflow: hidden;
  }

  .toggle {
    position: relative;
    display: inline-block;
    width: calc(var(--toggle-height) * 2);
    height: var(--toggle-height);
    margin: 0;

    background: var(--grey-950);
    color: var(--grey-950);

    border-radius: var(--toggle-height);
    cursor: pointer;
  }

  .toggle::after {
    position: absolute;
    top: 1px;
    left: 1px;
    width: calc(var(--toggle-height) - 2px);
    height: calc(var(--toggle-height) - 2px);

    background: var(--grey-0);
    box-shadow: 1px 2px 3px 0 rgba(0, 0, 0, 0.2);

    border-radius: var(--toggle-height);
    content: '';
    transition: all 0.25s cubic-bezier(0.19, 1, 0.22, 1);
  }

  input:checked ~ .toggle:after {
    left: calc(var(--toggle-height) + 1px);
  }

  .toggle-icons {
    --icon-padding: 6px;

    position: absolute;
    top: 0;
    left: 3px;
    width: calc(100% - var(--icon-padding));
    height: 100%;
    z-index: 1;

    display: flex;
    justify-content: space-between;
    align-items: center;
    pointer-events: none;
  }

  .toggle-icons :global(svg) {
    stroke: currentColor;
    stroke-width: 2px;
    height: calc(var(--toggle-height) - var(--icon-padding));
    width: calc(var(--toggle-height) - var(--icon-padding));
  }

  label:focus-within .toggle {
    background: var(--secondary-color);
    color: var(--secondary-color);
  }
</style>
