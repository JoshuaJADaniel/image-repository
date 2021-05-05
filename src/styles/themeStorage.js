const STORAGE_KEY = "theme";
const DARK_THEME_KEY = "dark";
const LIGHT_THEME_KEY = "light";

const getLocalTheme = () => {
  const localTheme = localStorage.getItem(STORAGE_KEY);
  return localTheme !== LIGHT_THEME_KEY;
};

const toggleTheme = () => {
  if (getLocalTheme()) {
    localStorage.setItem(STORAGE_KEY, LIGHT_THEME_KEY);
  } else {
    localStorage.setItem(STORAGE_KEY, DARK_THEME_KEY);
  }
};

export { getLocalTheme, toggleTheme };
