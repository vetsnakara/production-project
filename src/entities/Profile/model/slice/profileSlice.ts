import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { ProfileSchema, Profile } from '../types/profile';

const initialState: ProfileSchema = {
    isLoading: false,
    readonly: true,
    data: null,
    error: null,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(
                fetchProfileData.fulfilled,
                (state, action: PayloadAction<Profile>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                }
            )
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: profileActions, reducer: profileReducer } =
    profileSlice;
