import { PATHS } from '@app/routes';
import { Btn, Text, Title } from '@components/atoms';
import { ArrowUpRight } from 'lucide-react';

export default function NotFoundPage() {
    return (
        <section className='relative w-full h-svh'>
            <div className='container flex items-center h-full'>
                <div className='flex flex-col gap-4 w-full text-center'>
                    <div className='w-full'>
                        <Title className='mb-0.5 last:mb-0'>Ooops! Page Not Found</Title>
                        <Text>This page doesn’t exist! We suggest you go back to home.</Text>
                    </div>

                    <Btn isLink className='m-auto'>
                        <Btn.Link href={PATHS.HOME}>
                            <span>Go Home</span>
                            <ArrowUpRight className='size-5' />
                        </Btn.Link>
                    </Btn>
                </div>
            </div>
        </section>
    );
}
