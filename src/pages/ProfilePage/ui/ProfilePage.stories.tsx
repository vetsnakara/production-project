import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { withStore, withTheme } from 'shared/config/storybook/decorators';
import AvatarImg from 'shared/assets/tests/avatar.png';

import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

const data = {
    username: 'admin',
    first: 'Firstname',
    lastname: 'Lastname',
    age: 33,
    city: 'Moscow',
    country: Country.Belarus,
    currency: Currency.USD,
    avatar: AvatarImg,
};

export const Light = Template.bind({});
Light.decorators = [
    withStore({
        profile: {
            form: data,
        },
    }),
];

export const Dark = Template.bind({});
Dark.decorators = [
    withTheme(Theme.DARK),
    withStore({
        profile: {
            form: data,
        },
    }),
];
