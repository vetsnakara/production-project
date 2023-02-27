import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { withTheme } from 'shared/config/storybook/decorators';

import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Hello World',
    text: 'Hello World',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Hello World',
    text: 'Hello World',
};
PrimaryDark.decorators = [withTheme(Theme.DARK)];

export const TitleOnly = Template.bind({});
TitleOnly.args = {
    title: 'Hello World',
};

export const TitleOnlyDark = Template.bind({});
TitleOnlyDark.args = {
    title: 'Hello World',
};
TitleOnlyDark.decorators = [withTheme(Theme.DARK)];

export const TextOnly = Template.bind({});
TextOnly.args = {
    text: 'Hello World',
};

export const TextOnlyDark = Template.bind({});
TextOnlyDark.args = {
    text: 'Hello World',
};
TextOnlyDark.decorators = [withTheme(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    title: 'Hello World',
    text: 'Hello World',
    theme: TextTheme.ERROR,
};
