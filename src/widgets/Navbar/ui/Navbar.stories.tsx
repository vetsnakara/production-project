import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { withStore, withTheme } from 'shared/config/storybook/decorators';

import { Navbar } from './Navbar';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});

export const LightWithAuth = Template.bind({});
LightWithAuth.decorators = [withStore({ user: { authData: {} } })];

export const Dark = Template.bind({});
Dark.decorators = [withTheme(Theme.DARK)];

export const DarkWitAuth = Template.bind({});
DarkWitAuth.decorators = [
    withTheme(Theme.DARK),
    withStore({ user: { authData: {} } }),
];
