/* eslint-disable i18next/no-literal-string */
import { screen, fireEvent } from '@testing-library/react';

import {
    renderWithProviders,
} from 'shared/lib/tests/renderWithProviders/renderWithProviders';

import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('render', () => {
        renderWithProviders(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('toggle', () => {
        renderWithProviders(<Sidebar />);
        const sidebar = screen.getByTestId('sidebar');
        expect(sidebar).toBeInTheDocument();

        const toggleBtn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleBtn);
        expect(sidebar).toHaveClass('collapsed');
    });
});
