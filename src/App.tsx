import { Outlet } from 'react-router-dom';
import { Header } from '@components/organisms';

export default function App() {
    return (
        <main className='relative w-full h-svh'>
            <div className='container relative flex items-center h-full'>
                <Header />
                <Outlet />
            </div>
        </main>
    );
}
