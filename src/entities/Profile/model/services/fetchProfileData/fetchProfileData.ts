import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<string>
>('profile/fetchProfileData', async (_, thunkApi) => {
    const {
        rejectWithValue,
        extra: { api },
    } = thunkApi;

    try {
        const { data: profile } = await api.get<Profile>('/profile');

        if (!profile) {
            throw new Error();
        }

        return profile;
    } catch (error) {
        return rejectWithValue('authErrorMessage');
    }
});
