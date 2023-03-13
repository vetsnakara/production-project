import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppRouter } from 'app/providers/Router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar/ui';
import { getUserInited, userActions } from 'entities/User';
import { classNames } from 'shared/lib/classNames';

export const App = () => {
    const dispatch = useDispatch();
    const userInited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app')}>
            <Suspense fallback="">
                <div>
                    <Navbar />
                    <div className="content-page">
                        <Sidebar />
                        {userInited && <AppRouter />}
                    </div>
                </div>
            </Suspense>
        </div>
    );
};
