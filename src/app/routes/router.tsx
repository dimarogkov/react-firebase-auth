import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { PATHS } from './paths';

const AppLayout = lazy(() => import(`../../App`));
const HomePage = lazy(() => import(`@components/pages/HomePage/HomePage`));
const SettingsPage = lazy(() => import(`@components/pages/SettingsPage/SettingsPage`));
const LogInPage = lazy(() => import(`@components/pages/LogInPage/LogInPage`));
const SignUpPage = lazy(() => import(`@components/pages/SignUpPage/SignUpPage`));
const NotFoundPage = lazy(() => import(`@components/pages/NotFoundPage/NotFoundPage`));

export const router = createBrowserRouter([
    {
        element: (
            <ProtectedRoute>
                <AppLayout />
            </ProtectedRoute>
        ),
        children: [
            { index: true, element: <HomePage /> },
            { path: PATHS.SETTINGS, element: <SettingsPage /> },
        ],
    },
    {
        path: PATHS.LOGIN,
        element: <LogInPage />,
    },
    {
        path: PATHS.SIGN_UP,
        element: <SignUpPage />,
    },
    { path: '*', element: <NotFoundPage /> },
]);
