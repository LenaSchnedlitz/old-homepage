<script>
  import {onMount} from 'svelte';
  import ConvenienceButton from './ConvenienceButton.svelte';

  const STORAGE_KEY = 'theme';

  let icon = 'moon';
  const applyTheme = () => {
    const selectedTheme = localStorage.getItem(STORAGE_KEY);
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (selectedTheme === 'dark' || (!selectedTheme && prefersDarkScheme)) {
      document.body.classList.add('dark-mode');
      icon = 'sun';
    } else {
      document.body.classList.remove('dark-mode');
      icon = 'moon';
    }
  };

  const toggleTheme = () => {
    const currentTheme = localStorage.getItem(STORAGE_KEY);
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (currentTheme) {
      localStorage.removeItem(STORAGE_KEY);
    } else {
      localStorage.setItem(STORAGE_KEY, prefersDarkScheme ? 'light' : 'dark'); // opposite of preference
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
