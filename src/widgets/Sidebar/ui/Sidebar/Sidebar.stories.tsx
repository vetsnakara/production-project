import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { withStore, withTheme } from 'shared/config/storybook/decorators';

import { Sidebar } from './Sidebar';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
    <Sidebar {...args} />
);

export const Light = Template.bind({});
Light.decorators = [
    withStore({
        user: { authData: {} },
    }),
];

export const Dark = Template.bind({});
Dark.decorators = [
    withTheme(Theme.DARK),
    withStore({
        user: { authData: {} },
    }),
];

export const NoAuth = Template.bind({});
