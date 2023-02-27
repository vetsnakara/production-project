import { FC, useEffect, useMemo, useState } from 'react';

import {
    LOCAL_STORAGE_THEME_KEY,
    ThemeContext,
    Theme,
} from '../lib/ThemeContext';

const localStorageTheme = localStorage.getItem(
    LOCAL_STORAGE_THEME_KEY
) as Theme;
const defaultTheme: Theme = localStorageTheme || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme.LIGHT;
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const { children, initialTheme = defaultTheme } = props;
    const [theme, setTheme] = useState<Theme>(initialTheme);

    useEffect(() => {
        document.body.className = defaultTheme;
    }, []);

    const contextObj = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme]
    );

    return (
        <ThemeContext.Provider value={contextObj}>
            {children}
        </ThemeContext.Provider>
    );
};
