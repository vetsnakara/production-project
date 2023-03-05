import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
    test('should return error', () => {
        const username = 'John Smith';
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username,
            },
        };
        expect(getLoginUsername(state as StateSchema)).toBe(username);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toBe('');
    });
});
