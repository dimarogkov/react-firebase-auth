import { zodResolver } from '@hookform/resolvers/zod';
import { validationSchema } from './schema';

export const formOptions = {
    resolver: zodResolver(validationSchema),
    defaultValues: {
        email: '',
        password: '',
    },
};
