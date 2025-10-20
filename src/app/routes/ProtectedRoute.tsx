import { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { PATHS } from './paths';
import { useAuth } from '@hooks';

type Props = {
    children: ReactNode;
};

export const ProtectedRoute = ({ children }: Props) => {
    const { isAuth } = useAuth();

    if (!isAuth) {
        return <Navigate replace to={PATHS.LOGIN} />;
    }

    return <>{children}</> || <Outlet />;
};
