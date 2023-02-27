import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { withStore, withTheme } from 'shared/config/storybook/decorators';

import { LoginForm } from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
    <LoginForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
    withStore({
        loginForm: {
            username: 'Username',
            password: 'password',
        },
    }),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
    withStore({
        loginForm: {
            username: 'Username',
            password: 'password',
            isLoading: true,
        },
    }),
];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [
    withStore({
        loginForm: {
            username: 'Username',
            password: 'password',
            error: 'Error',
        },
    }),
];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [
    withTheme(Theme.DARK),
    withStore({
        loginForm: {
            username: 'Username',
            password: 'password',
        },
    }),
];

export const LoadingDark = Template.bind({});
LoadingDark.args = {};
LoadingDark.decorators = [
    withTheme(Theme.DARK),
    withStore({
        loginForm: {
            username: 'Username',
            password: 'password',
            isLoading: true,
        },
    }),
];

export const ErrorDark = Template.bind({});
ErrorDark.args = {};
ErrorDark.decorators = [
    withTheme(Theme.DARK),
    withStore({
        loginForm: {
            username: 'Username',
            password: 'password',
            error: 'Error',
        },
    }),
];
