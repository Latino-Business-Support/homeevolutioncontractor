import type { ServiceT } from '@/types/models';
import { Link } from '@inertiajs/react';

export default function SingleService({ service }: { service: ServiceT }) {
    return (
        <div className="group flex flex-col gap-5 transition-all duration-300">
            <div className="overflow-hidden">
                <img
                    src={service.image_url}
                    alt={'Service of ' + service.name}
                    className="aspect-square w-full object-cover transition-all duration-300 group-hover:scale-125"
                />
            </div>
            <Link href={route('service', service.slug)} className="hover:text-c1 font-c2 text-3xl font-bold">
                {service.name}
            </Link>
        </div>
    );
}
