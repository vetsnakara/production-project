import { AnyAction } from '@reduxjs/toolkit';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
    test('set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '' };
        const username = 'qwerty';

        const expected = loginReducer(
            state as LoginSchema,
            loginActions.setUsername(username)
        );

        expect(expected).toHaveProperty('username', username);
    });

    test('set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '' };
        const password = '123';

        const expected = loginReducer(
            state as LoginSchema,
            loginActions.setPassword(password)
        );

        expect(expected).toHaveProperty('password', password);
    });

    test('set isLoading', () => {
        const state: DeepPartial<LoginSchema> = { isLoading: false };
        const action: AnyAction = { type: loginByUsername.pending };

        const expected = loginReducer(state as LoginSchema, action);
        expect(expected).toHaveProperty('isLoading', true);
    });

    test('set error', () => {
        const state: DeepPartial<LoginSchema> = { error: null };
        const error = 'error';

        const action: AnyAction = {
            type: loginByUsername.rejected,
            payload: error,
        };

        const expected = loginReducer(state as LoginSchema, action);
        expect(expected).toHaveProperty('error', error);
    });
});
