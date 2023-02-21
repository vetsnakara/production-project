import Storybook from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';

export const withStore = (Story: Storybook.Story) => (
    <StoreProvider>
        <Story />
    </StoreProvider>
);
