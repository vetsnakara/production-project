import { Theme } from '../../src/app/providers/ThemeProvider';

import {
    withGlobalStyles,
    withTheme,
    withRouter,
    withStore,
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

// order: from bottom to top
export const decorators = [
    withStore(),
    withRouter(),
    withTheme(Theme.LIGHT),
    withGlobalStyles(),
];
