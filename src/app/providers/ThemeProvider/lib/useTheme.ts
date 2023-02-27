import { useContext, useMemo } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
    theme: Theme;
    toggleTheme: () => void;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const result = useMemo(() => {
        const toggleTheme = () => {
            const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
            document.body.className = newTheme;

            setTheme(newTheme);
        };

        return {
            theme,
            toggleTheme,
        };
    }, [theme, setTheme]);

    return result;
}
