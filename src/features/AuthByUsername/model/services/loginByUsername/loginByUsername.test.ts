import axios from 'axios';
import { User, userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');
const mockedAxios = jest.mocked(axios);

describe('loginByUsername', () => {
    test('success login', async () => {
        const user: User = {
            id: '1',
            username: '123',
        };

        mockedAxios.post.mockReturnValue(
            Promise.resolve({
                data: user,
            })
        );

        const thunk = new TestAsyncThunk(loginByUsername);

        const result = await thunk.callThunkAction({
            username: '',
            password: '',
        });

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.dispatch).toHaveBeenCalledWith(
            userActions.setAuthData(user)
        );
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(user);
    });

    test('login with error', async () => {
        mockedAxios.post.mockReturnValue(Promise.reject());

        const thunk = new TestAsyncThunk(loginByUsername);

        const result = await thunk.callThunkAction({
            username: 'John Smith',
            password: '123',
        });

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    });
});
