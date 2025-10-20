import { signOut } from 'firebase/auth';
import { auth } from '@lib';
import { useAppDispatch } from '@store/index';
import { removeUser } from '@store/slices/userSlice';
import { Btn } from '@components/atoms';

export default function LogoutBtn() {
    const dispatch = useAppDispatch();

    const handleLogout = async () => {
        await signOut(auth);
        dispatch(removeUser());
    };

    return <Btn onClick={handleLogout}>Logout</Btn>;
}
