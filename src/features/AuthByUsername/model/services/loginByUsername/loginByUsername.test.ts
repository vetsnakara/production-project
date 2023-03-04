import { ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';
import { User, userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { $api } from 'shared/api/api';

import { loginByUsername } from './loginByUsername';

jest.mock('shared/api/api');

const api = jest.mocked($api);
const extra: Partial<ThunkExtraArg> = { api };

describe('loginByUsername', () => {
    test('success login', async () => {
        const user: User = {
            id: '1',
            username: '123',
        };

        api.post.mockReturnValue(
            Promise.resolve({
                data: user,
            })
        );

        const thunk = new TestAsyncThunk(
            loginByUsername,
            extra as ThunkExtraArg
        );

        const result = await thunk.callThunkAction({
            username: '',
            password: '',
        });

        expect(api.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.dispatch).toHaveBeenCalledWith(
            userActions.setAuthData(user)
        );
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(user);
    });

    test('login with error', async () => {
        api.post.mockReturnValue(Promise.reject());

        const thunk = new TestAsyncThunk(
            loginByUsername,
            extra as ThunkExtraArg
        );

        const result = await thunk.callThunkAction({
            username: 'John Smith',
            password: '123',
        });

        expect(api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    });
});
