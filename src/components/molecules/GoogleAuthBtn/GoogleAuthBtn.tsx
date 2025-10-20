import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '@lib';
import { PATHS } from '@app/routes';
import { useAppDispatch } from '@store/index';
import { setUser } from '@store/slices/userSlice';
import { Btn } from '@components/atoms';

type Props = {
    setError: Dispatch<SetStateAction<string | null>>;
};

export default function GoogleAuthBtn({ setError = () => {} }: Props) {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        googleProvider.setCustomParameters({
            prompt: 'select_account',
        });

        try {
            const { user } = await signInWithPopup(auth, googleProvider);
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

            setError(null);
            navigate(PATHS.HOME);
        } catch (error) {
            setError(`Google login error: ${error}`);
        }
    };

    return (
        <Btn type='button' variant='outline' onClick={handleGoogleLogin} className='!gap-2.5'>
            <img src='/google.png' alt='google' className='size-5' />
            <span>Log in with Google</span>
        </Btn>
    );
}
