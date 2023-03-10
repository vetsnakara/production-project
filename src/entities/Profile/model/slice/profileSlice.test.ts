import { updateProfileData } from '../services';
import { Profile, ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

describe('profileSlice', () => {
    test('setReadonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };

        const expected = profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true)
        );

        expect(expected).toEqual({ readonly: true });
    });

    test('set cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
            data: { username: 'initial' },
            form: { username: 'edited' },
            validateError: [ValidateProfileError.INCORRECT_AGE],
        };

        const expected = profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit()
        );

        expect(expected).toEqual({
            readonly: true,
            data: { username: 'initial' },
            form: { username: 'initial' },
            validateError: [],
        });
    });

    test('update profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: {
                lastname: 'old',
            },
        };

        const expected = profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({
                lastname: 'new',
            })
        );

        expect(expected).toEqual({
            form: {
                lastname: 'new',
            },
        });
    });

    test('update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileError.INCORRECT_USER_DATA],
        };

        const expected = profileReducer(
            state as ProfileSchema,
            updateProfileData.pending
        );

        expect(expected).toEqual({
            isLoading: true,
            validateError: [],
        });
    });

    test('update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            readonly: false,
            validateError: [ValidateProfileError.INCORRECT_USER_DATA],
        };

        const data: Profile = {
            lastname: 'new',
        };

        const expected = profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, '')
        );

        expect(expected).toEqual({
            data,
            form: data,
            isLoading: false,
            readonly: true,
            validateError: [],
        });
    });
});
