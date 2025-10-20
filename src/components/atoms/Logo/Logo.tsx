import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import { Framer } from 'lucide-react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
}

const Logo = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
    return (
        <div
            ref={ref}
            {...props}
            className={`flex items-center justify-center size-10 rounded-full bg-title ${className}`}
        >
            <Framer className='size-6 text-bg' />
        </div>
    );
});

export default Logo;
