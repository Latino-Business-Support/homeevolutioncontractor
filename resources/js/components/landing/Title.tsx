import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

type TitleProps = {
    size?: 'md' | 'lg' | 'xl';
    subtitle?: string;
    description?: string;
    className?: string;
    id?: string;
    invert?: boolean;
    title?: string;
    titleIcon?: LucideIcon;
};

export default function Title({ title, titleIcon, subtitle, description, size = 'lg', className = '', id = '', invert = false }: TitleProps) {
    const Icon = titleIcon || null;

    const formatSubtitle = (text?: string) => {
        if (!text) return null;
        const parts = text.split(/({.*?})/g);
        return parts.map((part, index) =>
            part.startsWith('{') && part.endsWith('}') ? (
                <span key={index} className="from-c1 via-c1/80 to-c2 bg-gradient-to-r bg-clip-text text-transparent">
                    {part.slice(1, -1)}
                </span>
            ) : (
                part
            ),
        );
    };

    return (
        <div className={cn('flex flex-col items-center gap-5 text-center text-balance', { 'text-white/90': invert }, className)} id={id}>
            {title && (
                <div
                    className={cn(
                        'text-c1/50 border-c1/20 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium dark:border-white/10 dark:text-white dark:shadow-lg',
                        {
                            'border-white/20 text-white/80': invert,
                        },
                    )}
                >
                    {Icon && <Icon size={15} />}
                    <span>{title}</span>
                </div>
            )}

            {subtitle && (
                <h1
                    className={cn('font-c2 mb-6 max-w-5xl font-bold text-balance', {
                        'text-xl md:text-2xl lg:text-4xl': size === 'md',
                        'text-2xl md:text-4xl lg:text-5xl': size === 'lg',
                        'text-4xl md:text-6xl lg:text-7xl': size === 'xl',
                    })}
                >
                    {formatSubtitle(subtitle)}
                </h1>
            )}
            {description && (
                <p
                    className={cn('max-w-[700px] opacity-90', {
                        'text-base': size === 'md',
                        'text-lg': size === 'lg',
                        'text-xl': size === 'xl',
                    })}
                >
                    {description}
                </p>
            )}
        </div>
    );
}
