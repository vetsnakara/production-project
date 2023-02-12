import { FC } from 'react';

import { useTheme, Theme } from 'app/providers/ThemeProvider';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames';
import DarkThemeIcon from 'shared/assets/icons/theme-dark.svg';
import LightThemeIcon from 'shared/assets/icons/theme-light.svg';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const { className } = props;

    const { toggleTheme, theme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkThemeIcon /> : <LightThemeIcon />}
        </Button>
    );
};
