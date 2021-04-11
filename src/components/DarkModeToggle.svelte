<script>
  import {onMount} from 'svelte';
  import ConvenienceButton from './ConvenienceButton.svelte';

  const STORAGE_KEY = 'theme';
  const DARK_PREFERENCE = '(prefers-color-scheme: dark)';

  let icon, manuallySelectedTheme, prefersDarkThemes = undefined;

  const applyTheme = () => {
    manuallySelectedTheme = manuallySelectedTheme || localStorage.getItem(STORAGE_KEY);
    prefersDarkThemes = prefersDarkThemes || window.matchMedia(DARK_PREFERENCE).matches;

    if (manuallySelectedTheme === 'dark' || (!manuallySelectedTheme && prefersDarkThemes)) {
      document.body.classList.add('dark-mode');
      icon = 'sun';
    } else {
      document.body.classList.remove('dark-mode');
      icon = 'moon';
    }
  };

  const toggleTheme = () => {
    if (manuallySelectedTheme) {
      localStorage.removeItem(STORAGE_KEY);
      manuallySelectedTheme = undefined;
    } else {
      const newTheme = prefersDarkThemes ? 'light' : 'dark'; // opposite of preference
      localStorage.setItem(STORAGE_KEY, newTheme);
      manuallySelectedTheme = newTheme;
    }

    applyTheme();
  };

  onMount(applyTheme);
</script>

<ConvenienceButton onclick={toggleTheme}>
  <svg viewBox="0 0 24 24" class="icon">
    <title>Toggle Dark Mode</title>
    <use xlink:href="icons/sprite.svg#{icon}"/>
  </svg>
</ConvenienceButton>
