import { ReactNode, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@lib';
import { useAppDispatch } from '@store/index';
import { removeUser, setUser } from '@store/slices/userSlice';
import { Loader } from '@components/atoms';

type Props = {
    children: ReactNode;
};

export default function AuthProvider({ children }: Props) {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, displayName, email, photoURL, refreshToken } = user;

                dispatch(
                    setUser({
                        id: uid,
                        name: displayName,
                        email: email,
                        img: photoURL,
                        token: refreshToken,
                    })
                );
            } else {
                dispatch(removeUser());
            }

            setIsLoading(false);
        });

        return () => unsubscribe();
    }, [dispatch]);

    return (
        <>
            {isLoading ? (
                <section className='relative w-full h-svh'>
                    <div className='container flex items-center justify-center h-svh'>
                        <Loader size={32} />
                    </div>
                </section>
            ) : (
                <>{children}</>
            )}
        </>
    );
}
