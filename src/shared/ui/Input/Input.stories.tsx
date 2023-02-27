import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { withTheme } from 'shared/config/storybook/decorators';

import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    autoFocus: true,
    placeholder: 'Enter',
    value: 'Hello world!',
};

export const Dark = Template.bind({});
Dark.args = {
    autoFocus: true,
    placeholder: 'Enter',
    value: 'Hello world!',
};
Dark.decorators = [withTheme(Theme.DARK)];
