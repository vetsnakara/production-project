import Storybook from '@storybook/react';

import 'app/styles/index.scss';

export const withGlobalStyles = () => (Story: Storybook.Story) => <Story />;
