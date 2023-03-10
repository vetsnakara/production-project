import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';

import { getProfileForm } from '../../selectors';
import { Profile, ValidateProfileError } from '../../types/profile';
import { validateProfile } from '../validateProfile/validateProfile';

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, thunkApi) => {
    const {
        getState,
        rejectWithValue,
        extra: { api },
    } = thunkApi;

    const formData = getProfileForm(getState());

    const errors = validateProfile(formData);

    if (errors.length) {
        return rejectWithValue(errors);
    }

    try {
        const { data: user } = await api.put<Profile>('/profile', formData);

        if (!user) {
            throw new Error();
        }

        return user;
    } catch (error) {
        return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
});
