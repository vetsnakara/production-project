import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchProfileData, updateProfileData } from '../services';
import { ProfileSchema, Profile } from '../types/profile';

const initialState: ProfileSchema = {
    isLoading: false,
    readonly: true,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly(state, action: PayloadAction<boolean>) {
            state.readonly = action.payload;
        },
        cancelEdit(state) {
            state.readonly = true;
            state.form = state.data;
            state.validateError = [];
        },
        updateProfile(state, action: PayloadAction<Profile>) {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        // fetch profile
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.isLoading = true;
                delete state.error;
            })
            .addCase(
                fetchProfileData.fulfilled,
                (state, { payload }: PayloadAction<Profile>) => {
                    state.data = payload;
                    state.form = payload;
                    state.isLoading = false;
                }
            )
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });

        // update profile
        builder
            .addCase(updateProfileData.pending, (state) => {
                state.isLoading = true;
                state.validateError = [];
            })
            .addCase(
                updateProfileData.fulfilled,
                (state, { payload }: PayloadAction<Profile>) => {
                    state.data = payload;
                    state.form = payload;
                    state.isLoading = false;
                    state.readonly = true;
                    state.validateError = [];
                }
            )
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.validateError = action.payload;
            });
    },
});

export const { actions: profileActions, reducer: profileReducer } =
    profileSlice;
