import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading', () => {
    test('should return error', () => {
        const isLoading = true;
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading,
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toBe(isLoading);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginIsLoading(state as StateSchema)).toBe(false);
    });
});
