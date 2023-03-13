import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from 'widgets/PageLoader';
import { routeConfig, AppRoutesProps } from '../config/routerConfig';
import { RequireAuth } from './RequireAuth';

export const AppRouter = memo(() => {
    const renderWithAuthWrapper = useCallback(
        ({ path, element, authOnly }: AppRoutesProps) => {
            const routeElement = (
                <div className="page-wrapper">
                    {authOnly ? <RequireAuth>{element}</RequireAuth> : element}
                </div>
            );
            return <Route key={path} path={path} element={routeElement} />;
        },
        []
    );

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routeConfig).map(renderWithAuthWrapper)}
            </Routes>
        </Suspense>
    );
});
