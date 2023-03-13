import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getUserAuthData } from 'entities/User';
import { RoutePath } from '../config/routerConfig';

interface RequireAuthProps {
    children: React.ReactNode;
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
    const authData = useSelector(getUserAuthData);
    const location = useLocation();

    if (!authData) {
        return (
            <Navigate to={RoutePath.main} state={{ from: location }} replace />
        );
    }

    return <>{children}</>;
};
