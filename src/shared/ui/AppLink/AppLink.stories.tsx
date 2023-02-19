import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

import { withTheme } from 'shared/config/storybook/decorators';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'AppLink',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'AppLink',
};
PrimaryDark.decorators = [withTheme(Theme.DARK)];

export const Inverted = Template.bind({});
Inverted.args = {
    children: 'AppLink',
    theme: AppLinkTheme.INVERTED,
};

export const InvertedDark = Template.bind({});
InvertedDark.args = {
    children: 'AppLink',
    theme: AppLinkTheme.INVERTED,
};
InvertedDark.decorators = [withTheme(Theme.DARK)];
