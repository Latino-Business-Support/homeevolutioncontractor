import { cn } from '@/lib/utils';

export default function Button({
    as = 'button',
    variant = 'primary',
    label = '',
    icon = null,
    className = '',
    classIcon = '',
    children,
    ...props
}: {
    as?: React.ElementType;
    variant?: 'primary' | 'secondary' | 'tertiary';
    label?: string;
    icon?: React.ElementType | null;
    className?: string;
    classIcon?: string;
    children?: React.ReactNode;
} & (React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement>)) {
    const Component = as;
    const Icon = icon;

    return (
        <Component
            className={cn(
                'm-auto flex items-center gap-2 border bg-blue-950 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-blue-950 hover:bg-transparent hover:text-blue-950 dark:hover:text-white',
                {
                    'aspect-square justify-center p-0': !label && icon,
                    'items-center justify-center': !label,
                    '': variant === 'primary',
                },
                className,
            )}
            {...props}
        >
            {label ? label : ''}
            {Icon && <Icon size={15} className={cn('', classIcon)} />}
            {children}
        </Component>
    );
}
