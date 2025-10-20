import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@lib';
import { PATHS } from '@app/routes';
import { useAppDispatch } from '@store/index';
import { setUser } from '@store/slices/userSlice';
import { IUserFormData } from '@interfaces/UserFormData';
import { Form } from '@components/molecules';

type Props = {
    setError: Dispatch<SetStateAction<string | null>>;
};

export default function LogInForm({ setError = () => {} }: Props) {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogin = (data: IUserFormData) => {
        const { email, password } = data;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const { uid, displayName, email, photoURL, refreshToken } = userCredential.user;

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
            })
            .catch((error) => setError(error.message));
    };

    return <Form btnText='Log In' handleEvent={handleLogin} />;
}
