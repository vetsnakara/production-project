import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { withTheme } from 'shared/config/storybook/decorators';

import { CountrySelect } from './CountrySelect';
import { Country } from '../../model/types/country';

export default {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => (
    <CountrySelect {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    value: Country.Russia,
    label: 'Country',
};

export const Dark = Template.bind({});
Dark.args = {
    value: Country.Russia,
    label: 'Country',
};
Dark.decorators = [withTheme(Theme.DARK)];
