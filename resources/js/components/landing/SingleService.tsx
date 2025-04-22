import { cn } from '@/lib/utils';
import type { ServiceT } from '@/types/models';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import Button from './Button';

export default function SingleService({ service, variant = 'primary' }: { service: ServiceT; variant?: 'primary' | 'secondary' }) {
    return (
        <div
            className={cn('group flex flex-col gap-5 transition-all duration-300', {
                '': variant === 'primary',
                '': variant === 'secondary',
            })}
        >
            <div className="overflow-hidden">
                <img
                    src={service.image_url}
                    alt={'Service of ' + service.name}
                    className={cn('w-full object-cover transition-all duration-300 group-hover:scale-125', {
                        'aspect-square': variant === 'primary',
                        'aspect-video': variant === 'secondary',
                    })}
                />
            </div>
            <Link href={route('service', service.slug)} className="hover:text-c1 font-c2 text-3xl font-bold">
                {service.name}
            </Link>
            {variant === 'secondary' && (
                <div className="justify flex h-full max-h-52 flex-col">
                    <p className="text-gray-600">{service.description}</p>
                    <Button label="View Details" icon={ArrowRight} />
                </div>
            )}
        </div>
    );
}
