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
                'group/btn bg-c1 border-c1 flex items-center gap-1 border px-8 py-4 font-semibold text-nowrap text-white transition-all dark:hover:text-white',
                {
                    'aspect-square justify-center p-0': !label && icon,
                    'items-center justify-center': !label,
                    'hover:text-c1 hover:bg-transparent': variant === 'primary',
                    'hover:bg-c1 hover:border-c1 border-white bg-transparent': variant === 'secondary',
                },
                className,
            )}
            {...props}
        >
            {label ? label : ''}
            {Icon && <Icon size={18} className={cn('transition-all duration-300 group-hover/btn:translate-x-2', classIcon)} />}
            {children}
        </Component>
    );
}
