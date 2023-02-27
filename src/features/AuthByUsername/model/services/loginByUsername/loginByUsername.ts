import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    { rejectValue: string }
>('login/loginByUsername', async (authData, thunkAPI) => {
    try {
        const { data: user } = await axios.post<User>(
            'http://localhost:8000/login',
            authData
        );

        if (!user) {
            throw new Error();
        }

        localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(user));
        thunkAPI.dispatch(userActions.setAuthData(user));

        return user;
    } catch (error) {
        return thunkAPI.rejectWithValue('authErrorMessage');
    }
});
