import { memo, useEffect } from 'react';

import { ReducerList } from 'app/providers/StoreProvider';
import {
    fetchProfileData,
    ProfileCard,
    profileReducer,
} from 'entities/Profile';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

const reducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = memo(() => {
    const dispatch = useAppDispatch();

    //! is called after useEffect in DynamicModuleLoader
    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <ProfileCard />
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
