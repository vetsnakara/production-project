import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
    test('should return error', () => {
        const password = 'qwerty';
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password,
            },
        };
        expect(getLoginPassword(state as StateSchema)).toBe(password);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toBe('');
    });
});
