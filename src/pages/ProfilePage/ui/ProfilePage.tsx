import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { ReducerList } from 'app/providers/StoreProvider';

import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadOnly,
    getProfileValidateErrors,
    profileActions,
    ProfileCard,
    profileReducer,
    ValidateProfileError,
} from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = memo(() => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const form = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const readOnly = useSelector(getProfileReadOnly);
    const error = useSelector(getProfileError);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t(
            'profileValidationErrorServerError'
        ),
        [ValidateProfileError.NO_DATA]: t('profileValidationErrorNoData'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t(
            'profileValidationErrorIncorrectUserData'
        ),
        [ValidateProfileError.INCORRECT_COUNTRY]: t(
            'profileValidationErrorIncorrectCountry'
        ),
        [ValidateProfileError.INCORRECT_AGE]: t(
            'profileValidationErrorIncorrectAge'
        ),
    };

    const onChangeFirstname = useCallback(
        (value: string = '') => {
            dispatch(profileActions.updateProfile({ first: value }));
        },
        [dispatch]
    );

    const onChangeLastname = useCallback(
        (value: string = '') => {
            dispatch(profileActions.updateProfile({ lastname: value }));
        },
        [dispatch]
    );

    const onChangeCity = useCallback(
        (value: string = '') => {
            dispatch(profileActions.updateProfile({ city: value }));
        },
        [dispatch]
    );

    const onChangeAge = useCallback(
        (value: string = '') => {
            dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
        },
        [dispatch]
    );

    const onChangeUsername = useCallback(
        (value: string = '') => {
            dispatch(profileActions.updateProfile({ username: value }));
        },
        [dispatch]
    );

    const onChangeAvatar = useCallback(
        (value: string = '') => {
            dispatch(profileActions.updateProfile({ avatar: value }));
        },
        [dispatch]
    );

    const onChangeCurrency = useCallback(
        (value: Currency) => {
            dispatch(profileActions.updateProfile({ currency: value }));
        },
        [dispatch]
    );

    const onChangeCountry = useCallback(
        (value: Country) => {
            dispatch(profileActions.updateProfile({ country: value }));
        },
        [dispatch]
    );

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <ProfilePageHeader />
            {Boolean(validateErrors?.length) &&
                validateErrors.map((err) => (
                    <Text
                        key={err}
                        theme={TextTheme.ERROR}
                        text={validateErrorTranslates[err]}
                    />
                ))}
            <ProfileCard
                data={form}
                isLoading={isLoading}
                readOnly={readOnly}
                error={error}
                onChangeFirstname={onChangeFirstname}
                onChangeLastname={onChangeLastname}
                onChangeCity={onChangeCity}
                onChangeAge={onChangeAge}
                onChangeUsername={onChangeUsername}
                onChangeAvatar={onChangeAvatar}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}
            />
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
