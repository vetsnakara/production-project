import Storybook from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';

export const withTheme = (theme: Theme) => {
    const StoryWithTheme = (Story: Storybook.Story) => (
        <div className={classNames('app', {}, [theme])}>
            <Story />
        </div>
    );

    return StoryWithTheme;
};
