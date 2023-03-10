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
            let newTheme: Theme;

            switch (theme) {
                case Theme.DARK:
                    newTheme = Theme.LIGHT;
                    break;
                case Theme.LIGHT:
                    newTheme = Theme.ORANGE;
                    break;
                case Theme.ORANGE:
                    newTheme = Theme.DARK;
                    break;
                default:
                    newTheme = Theme.LIGHT;
            }

            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
            document.body.className = newTheme;

            setTheme?.(newTheme);
        };

        return {
            theme: theme || Theme.LIGHT,
            toggleTheme,
        };
    }, [theme, setTheme]);

    return result;
}
