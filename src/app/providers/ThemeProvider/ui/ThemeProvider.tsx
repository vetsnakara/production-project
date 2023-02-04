import { FC } from "react";

import { useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from "../lib/ThemeContext";
import { Theme } from "../lib/ThemeContext";

const defaultTheme: Theme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
