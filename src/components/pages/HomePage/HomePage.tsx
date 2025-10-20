import { PATHS } from '@app/routes';
import { useAuth } from '@hooks';
import { Btn, Text, Title } from '@components/atoms';

export default function HomePage() {
    const { name, email } = useAuth();

    return (
        <section className='relative flex flex-col gap-4 w-full text-center'>
            <div className='w-full'>
                <Title>Welcome back!</Title>
                <Text size='large'>{name || email}</Text>
            </div>

            <Btn isLink>
                <Btn.Link href={PATHS.SETTINGS}>Settings</Btn.Link>
            </Btn>
        </section>
    );
}
