import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { withTheme } from 'shared/config/storybook/decorators';

import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

const options = [
    { value: '1', content: 'one' },
    { value: '2', content: 'two' },
    { value: '3', content: 'three' },
];

export const Primary = Template.bind({});
Primary.args = {
    options,
    value: '2',
    label: 'Some label',
};

export const Dark = Template.bind({});
Dark.args = {
    options,
    value: '2',
    label: 'Some label',
};
Dark.decorators = [withTheme(Theme.DARK)];
