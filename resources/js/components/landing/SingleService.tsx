import { cn } from '@/lib/utils';
import type { ServiceT } from '@/types/models';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import Button from './Button';

export default function SingleService({ service, variant = 'primary' }: { service: ServiceT; variant?: 'primary' | 'secondary' }) {
    return (
        <div
            className={cn('group flex h-full flex-col gap-5 overflow-hidden rounded transition-all duration-300 dark:bg-white/5', {
                // '': variant === 'primary',
                // '': variant === 'secondary',
            })}
        >
            <div className="overflow-hidden rounded">
                <img
                    src={service.image_url}
                    alt={'Service of ' + service.name}
                    className={cn('aspect-square w-full object-cover transition-all duration-300 group-hover:scale-125', {
                        'aspect-video': variant === 'secondary',
                    })}
                />
            </div>
            <div className="grid gap-5 p-5">
                <Link
                    href={route('service', service.slug)}
                    className={cn('hover:text-c1 font-c2 truncate text-3xl font-bold', {
                        '': variant === 'primary',
                    })}
                >
                    {service.name}
                </Link>
                {variant === 'secondary' && (
                    <div className="flex flex-1 flex-col justify-between gap-5">
                        <p className="text-foreground/70 line-clamp-3">{service.description}</p>
                        <div className="mt-auto">
                            <Button as={Link} href={route('service', service.slug)} label="View Details" icon={ArrowRight} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
