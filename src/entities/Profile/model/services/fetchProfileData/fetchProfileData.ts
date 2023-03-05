import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<string>
>('profile/fetchProfileData', async (_, thunkApi) => {
    const {
        // dispatch,
        rejectWithValue,
        extra: { api },
    } = thunkApi;

    try {
        const { data: user } = await api.get<Profile>('/profile');

        return user;
    } catch (error) {
        return rejectWithValue('authErrorMessage');
    }
});
