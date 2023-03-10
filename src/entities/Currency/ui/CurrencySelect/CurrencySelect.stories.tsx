import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { withTheme } from 'shared/config/storybook/decorators';

import { CurrencySelect } from './CurrencySelect';
import { Currency } from '../../model/types/currency';

export default {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => (
    <CurrencySelect {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    value: Currency.EUR,
    label: 'Currency',
};

export const Dark = Template.bind({});
Dark.args = {
    value: Currency.EUR,
    label: 'Currency',
};
Dark.decorators = [withTheme(Theme.DARK)];
