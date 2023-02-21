import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { withTheme } from 'shared/config/storybook/decorators';

import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

const text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus at quae facere cupiditate, consequuntur natus ipsum exercitationem possimus illum nobis quas beatae ex quasi consectetur corrupti vitae ratione perspiciatis dicta.';

export const Primary = Template.bind({});
Primary.args = {
    children: text,
    isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
    children: text,
    isOpen: true,
};
Dark.decorators = [withTheme(Theme.DARK)];
