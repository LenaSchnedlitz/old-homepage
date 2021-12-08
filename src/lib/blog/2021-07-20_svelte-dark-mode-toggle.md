---
title: '<strong>How To:</strong><br/>Toggle Dark Mode'
teaser: "Dark mode toggles are everywhere right now - here's how to create one in Svelte."
illustration: 'add-color'
color: '#33bbee'
---

_Note: While this tutorial is focused on Svelte, it should be possible to make it work with other UI frameworks as well. Feel free to give it a try!_

You might have noticed that light/dark mode toggles are everywhere right now - pretty much [every](https://github.com/) [popular](https://feathericons.com/) [website](https://fonts.google.com/) allows users to choose which theme they prefer. So how do you add a theme toggle to your Svelte app?

Luckily, it's pretty easy - here's what you need to do:

## **Step 1:** Add a Toggle Component

Create a new component, `DarkModeToggle.svelte`, and add a new checkbox inside it:

```svelte
<input type="checkbox" on:click={toggleTheme} />
```

Checkboxes are pretty good choices for toggles like this one because they are [widely supported](https://caniuse.com/?search=input%20type%3Dcheckbox) and represent Boolean states. In our case, `false` represents "light off" (= "dark"), while `true` represents "on".

Append the new component to your app.

## **Step 2:** Toggle Themes

Next, we need to implement the `toggleTheme` handler. Add a `script` tag to your component:

```svelte
<script>
  const STORAGE_KEY = 'theme';
  const DARK_PREFERENCE = '(prefers-color-scheme: dark)';

  const THEMES = {
    DARK: 'dark',
    LIGHT: 'light',
  };

  const prefersDarkThemes = () => window.matchMedia(DARK_PREFERENCE).matches;

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

    // TODO: apply new theme
  };
</script>

...
```

As you can see, there's quite a lot going on in here:

- We use `localStorage` to store a user's theme preference.
- We use a media query to figure out whether the user has a theme preference set in their OS.
- If the user generally prefers dark themes and also picks the dark theme on our website, we do not need to store a preference. The same is true for users who do not use dark themes both generally and on our site. For all others, we store their preference in their `localStorage`.

## **Step 3:** Apply the Theme

Finally, we need to apply the new theme. Add another function to your file and call it at the end of `toggleTheme`:

```js
const applyTheme = () => {
  const preferredTheme = prefersDarkThemes() ? THEMES.DARK : THEMES.LIGHT;
  currentTheme = localStorage.getItem(STORAGE_KEY) ?? preferredTheme;

  currentTheme = localStorage.getItem(STORAGE_KEY) ?? preferredTheme;

  if (currentTheme === THEMES.DARK) {
    document.body.classList.remove(THEMES.LIGHT);
    document.body.classList.add(THEMES.DARK);
  } else {
    document.body.classList.remove(THEMES.DARK);
    document.body.classList.add(THEMES.LIGHT);
  }
};

const toggleTheme = () => {
  // ...

  applyTheme();
};
```

Looks good so far! However, we still don't handle some edge cases:

- How do we apply the initial theme when a user first visits our website?
- What happens when a user changes their system wide theme preference?

We can take care of both situations in `onMount`:

```js
import { onMount } from 'svelte';

// ...

onMount(() => {
  applyTheme();
  window.matchMedia(DARK_PREFERENCE).addEventListener('change', applyTheme);
});
```

Last but not least, adapt the checkbox so it's state matches the theme:

```svelte
<input
  type="checkbox"
  checked={currentTheme !== THEMES.DARK}
  on:click={toggleTheme}
/>
```

Now, all that's left to do is:

## **Step 4:** Write Custom CSS

We can now write custom styles for dark mode:

```css
@media (prefers-color-scheme: dark) {
  body:not(.light) {
    /* Your stuff here... */
  }
}

body.dark {
  /* And also here... */
}
```

Aaaaand we're done! 🎉

If you are interested in a fully working example, check out my [homepage](https://www.lenaschnedlitz.me) [(source code).](https://github.com/LenaSchnedlitz/LenaSchnedlitz.github.io) It might also give you some ideas how to style the toggle.
