import Storybook from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const withRouter = () => (Story: Storybook.Story) =>
    (
        <BrowserRouter>
            <Story />
        </BrowserRouter>
    );
