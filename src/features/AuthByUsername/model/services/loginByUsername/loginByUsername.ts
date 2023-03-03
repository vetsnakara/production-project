import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { User, userActions } from 'entities/User';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>('login/loginByUsername', async (authData, thunkApi) => {
    const {
        dispatch,
        rejectWithValue,
        extra: { api },
    } = thunkApi;

    try {
        const { data: user } = await api.post<User>('/login', authData);

        if (!user) {
            throw new Error();
        }

        localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(user));
        dispatch(userActions.setAuthData(user));

        return user;
    } catch (error) {
        return rejectWithValue('authErrorMessage');
    }
});
