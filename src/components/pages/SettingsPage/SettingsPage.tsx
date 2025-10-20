import { useAuth } from '@hooks';
import { LogoutBtn } from '@components/molecules';
import { Text, Title } from '@components/atoms';

export default function SettingsPage() {
    const { id, name, email, img } = useAuth();

    return (
        <section className='relative flex flex-col gap-4 w-full text-center'>
            <div className='w-full'>
                <Title className='mb-2.5'>Settings</Title>

                <ul>
                    {img && (
                        <li>
                            <Text size='large' className='flex items-center justify-center gap-2.5'>
                                <span>Avatar -</span>
                                <img src={img} alt={name || 'avatar'} className='size-10 rounded-full bg-text' />
                            </Text>
                        </li>
                    )}

                    {name && (
                        <li>
                            <Text size='large'>Name - {name}</Text>
                        </li>
                    )}

                    <li>
                        <Text size='large'>userID - {id}</Text>
                    </li>

                    <li>
                        <Text size='large'>Email - {email}</Text>
                    </li>
                </ul>
            </div>

            <LogoutBtn />
        </section>
    );
}
