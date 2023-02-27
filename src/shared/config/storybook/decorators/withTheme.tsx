/* eslint-disable react/display-name */
import Storybook from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const withTheme = (theme: Theme) => (Story: Storybook.Story) => {
    document.body.className = theme;
    return <Story />;
};
