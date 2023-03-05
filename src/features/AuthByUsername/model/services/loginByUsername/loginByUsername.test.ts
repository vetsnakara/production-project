import { User, userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { loginByUsername } from './loginByUsername';

describe('loginByUsername', () => {
    test('success login', async () => {
        const user: User = {
            id: '1',
            username: '123',
        };

        const thunk = new TestAsyncThunk(loginByUsername);

        thunk.api.post.mockReturnValue(
            Promise.resolve({
                data: user,
            })
        );

        const result = await thunk.callThunkAction({
            username: '',
            password: '',
        });

        expect(thunk.api.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.dispatch).toHaveBeenCalledWith(
            userActions.setAuthData(user)
        );
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(user);
    });

    test('login with error', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);

        thunk.api.post.mockReturnValue(Promise.reject());

        const result = await thunk.callThunkAction({
            username: 'John Smith',
            password: '123',
        });

        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    });
});
