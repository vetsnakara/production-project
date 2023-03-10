import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import AvatarImg from 'shared/assets/tests/avatar.png';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

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

export const Primary = Template.bind({});
Primary.args = {
    data,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
    data,
    readOnly: true,
};

export const WithLoading = Template.bind({});
WithLoading.args = {
    data,
    isLoading: true,
};

export const WithErrors = Template.bind({});
WithErrors.args = {
    data,
    error: 'Some error occured',
};
