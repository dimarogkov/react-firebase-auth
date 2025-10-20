import { Link, NavLink } from 'react-router-dom';
import { PATHS } from '@app/routes';
import { Logo, Text } from '@components/atoms';
import cn from 'classnames';

export default function Header() {
    return (
        <header className='absolute top-0 left-0 flex items-center justify-between w-full py-2 px-[30px]'>
            <Link to={PATHS.HOME} className='transition-opacity duration-300 hover:opacity-80'>
                <Logo />
            </Link>

            <ul className='flex gap-4'>
                <li>
                    <NavLink to={PATHS.HOME} className={({ isActive }) => cn({ underline: isActive })}>
                        <Text size='large'>Home</Text>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={PATHS.SETTINGS} className={({ isActive }) => cn({ underline: isActive })}>
                        <Text size='large'>Settings</Text>
                    </NavLink>
                </li>
            </ul>
        </header>
    );
}
