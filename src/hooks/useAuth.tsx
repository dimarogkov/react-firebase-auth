import { useAppSelector } from '@store/index';

export default function useAuth() {
    const { id, name, email, img, token } = useAppSelector((state) => state.user);

    return {
        isAuth: !!token,
        id,
        name,
        email,
        img,
        token,
    };
}
