import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { PATHS } from '@app/routes';
import { useAuth } from '@hooks';
import { SignUpForm } from '@components/organisms';
import { ErrorMessage, Logo, Separator, SimpleLink, Text, Title } from '@components/atoms';

export default function SignUpPage() {
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
                    <Title>Create an account</Title>
                </div>

                <Separator className='my-5' />

                {error && <ErrorMessage className='mb-2.5'>{error}</ErrorMessage>}
                <SignUpForm setError={setError} />

                <Separator className='my-5' />

                <Text className='text-center'>
                    Already have an account? <SimpleLink href={PATHS.LOGIN}>Log In</SimpleLink>
                </Text>
            </div>
        </section>
    );
}
