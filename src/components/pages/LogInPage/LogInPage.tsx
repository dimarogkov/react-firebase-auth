import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { PATHS } from '@app/routes';
import { useAuth } from '@hooks';
import { LogInForm } from '@components/organisms';
import { GoogleAuthBtn } from '@components/molecules';
import { ErrorMessage, Logo, Separator, SimpleLink, Text, Title } from '@components/atoms';

export default function LogInPage() {
    const [error, setError] = useState<string | null>(null);
    const { isAuth } = useAuth();

    if (isAuth) {
        return <Navigate replace to={PATHS.HOME} />;
    }

    return (
        <section className='relative flex items-center w-full h-svh'>
            <div className='container'>
                <Logo className='m-auto mb-2.5' />

                <div className='w-full text-center'>
                    <Title className='mb-0.5'>Welcome Back!</Title>
                    <Text size='large'>We are Happy to See You Again</Text>
                </div>

                <Separator className='my-5' />

                {error && <ErrorMessage className='mb-2.5'>{error}</ErrorMessage>}
                <LogInForm setError={setError} />

                <Separator className='my-5' />

                <div className='flex flex-col gap-4 w-full text-center'>
                    <GoogleAuthBtn setError={setError} />

                    <Text>
                        Don't have an account? <SimpleLink href={PATHS.SIGN_UP}>Sign Up</SimpleLink>
                    </Text>
                </div>
            </div>
        </section>
    );
}
