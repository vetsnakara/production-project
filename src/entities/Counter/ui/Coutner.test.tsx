import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {
    renderWithProviders,
} from 'shared/lib/tests/renderWithProviders/renderWithProviders';

import { Counter } from './Counter';

describe('Counter', () => {
    test('render', () => {
        renderWithProviders(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('increment', () => {
        renderWithProviders(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        const valueTitle = screen.getByTestId('value-title');
        const incrementBtn = screen.getByTestId('increment-btn');

        expect(valueTitle).toHaveTextContent('10');
        userEvent.click(incrementBtn);
        expect(valueTitle).toHaveTextContent('11');
    });

    test('decrement', () => {
        renderWithProviders(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        const valueTitle = screen.getByTestId('value-title');
        const decrementBtn = screen.getByTestId('decrement-btn');

        expect(valueTitle).toHaveTextContent('10');
        userEvent.click(decrementBtn);
        expect(valueTitle).toHaveTextContent('9');
    });
});
