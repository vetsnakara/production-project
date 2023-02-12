import { FC, useMemo, useState } from 'react';

import {
    LOCAL_STORAGE_THEME_KEY,
    ThemeContext,
    Theme,
} from '../lib/ThemeContext';

const localStorageTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;
const defaultTheme: Theme = localStorageTheme || Theme.LIGHT;

export const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const contextObj = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={contextObj}>
            {children}
        </ThemeContext.Provider>
    );
};
