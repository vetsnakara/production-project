import { Theme } from '../../src/app/providers/ThemeProvider';

import {
    withGlobalStyles,
    withTheme,
    withRouter,
} from '../../src/shared/config/storybook/decorators';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

export const decorators = [
    withGlobalStyles,
    withTheme(Theme.LIGHT),
    withRouter,
];
