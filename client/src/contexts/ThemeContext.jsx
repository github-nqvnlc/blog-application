import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  SUNSET: 'sunset',
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first, then system preference, default to light
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && Object.values(THEMES).includes(savedTheme)) {
      return savedTheme;
    }

    // Check system preference
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return THEMES.DARK;
    }

    return THEMES.LIGHT;
  });

  useEffect(() => {
    // Apply theme to HTML element
    document.documentElement.setAttribute('data-theme', theme);

    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      switch (prevTheme) {
        case THEMES.LIGHT:
          return THEMES.DARK;
        case THEMES.DARK:
          return THEMES.SUNSET;
        case THEMES.SUNSET:
          return THEMES.LIGHT;
        default:
          return THEMES.LIGHT;
      }
    });
  };

  const setLightTheme = () => setTheme(THEMES.LIGHT);
  const setDarkTheme = () => setTheme(THEMES.DARK);
  const setSunsetTheme = () => setTheme(THEMES.SUNSET);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themes: THEMES,
        toggleTheme,
        setLightTheme,
        setDarkTheme,
        setSunsetTheme,
        setTheme,
        isLight: theme === THEMES.LIGHT,
        isDark: theme === THEMES.DARK,
        isSunset: theme === THEMES.SUNSET,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
