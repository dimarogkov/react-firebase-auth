import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@store/index';
import AuthProvider from './AuthProvider';

type Props = {
    children: ReactNode;
};

export default function RootProvider({ children }: Props) {
    return (
        <Provider store={store}>
            <AuthProvider>{children}</AuthProvider>
        </Provider>
    );
}
