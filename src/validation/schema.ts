import * as z from 'zod';

export const validationSchema = z.object({
    email: z.string().trim().nonempty('Missing email').email('Invalid email format'),
    password: z.string().trim().nonempty('Missing password').min(6, 'Your password must be minimum 6'),
});
