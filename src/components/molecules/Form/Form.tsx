import z from 'zod';
import { useForm } from 'react-hook-form';
import { validationSchema } from '@validation/schema';
import { formOptions } from '@validation/formOptions';
import { Btn, ErrorMessage, Input, InputPassword, Label } from '@components/atoms';

type FormData = z.infer<typeof validationSchema>;

type Props = {
    btnText?: string;
    handleEvent?: (data: { email: string; password: string }) => void;
};

export default function Form({ btnText = 'Send', handleEvent = () => {} }: Props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>(formOptions);

    const onSubmit = (data: FormData) => handleEvent(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
            <Label className='flex flex-col gap-2.5'>
                <Input {...register('email')} placeholder='Enter email' />
                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </Label>

            <Label className='flex flex-col gap-2.5'>
                <InputPassword {...register('password')} placeholder='Enter password' />
                {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
            </Label>

            <Btn type='submit'>{btnText}</Btn>
        </form>
    );
}
