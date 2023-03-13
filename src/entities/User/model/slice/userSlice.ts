import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';
import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {
    authData: null,
    inited: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData(state, action: PayloadAction<User>) {
            state.authData = action.payload;
        },
        initAuthData(state) {
            const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);

            if (user) {
                state.authData = JSON.parse(user);
            }

            state.inited = true;
        },
        logout(state) {
            state.authData = null;
            localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
        },
    },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
