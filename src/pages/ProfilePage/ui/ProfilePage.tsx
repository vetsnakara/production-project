import { ReducerList } from 'app/providers/StoreProvider';
import { profileReducer } from 'entities/Profile';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const reducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = memo(() => {
    const { t } = useTranslation('profile');

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>{t('profilePage')}</div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
