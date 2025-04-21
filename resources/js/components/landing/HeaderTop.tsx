import { InfoT } from '@/types';
import { usePage } from '@inertiajs/react';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import Button from './Button';

export default function HeaderTop() {
    const { info } = usePage().props as unknown as { info: InfoT };

    return (
        <div className="hidden px-5 py-3 sm:block">
            <div className="container mx-auto flex justify-between">
                <img src={info.logo} alt={'Logo of ' + info.name} className="hidden h-13 lg:block" />
                <div className="flex flex-1 items-center gap-5 lg:justify-center">
                    <Item title="Call us any time" subtitle={info.phone} icon={Phone} href="#" />
                    <Item title="Company Location" subtitle={info.address} icon={MapPin} href="#" />
                    <Item title="Your Email " subtitle={info.email} icon={Mail} href="#" />
                </div>
                <Button className="py-2" label="GET A QUOTE" icon={ArrowUpRight} />
            </div>
        </div>
    );
}

function Item({ title, subtitle, icon = null, href = '' }) {
    const Icon = icon;
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            className="border-c1 flex aspect-square h-8 items-center justify-center gap-5 rounded-full border lg:aspect-auto lg:border-0"
        >
            <Icon size={18} className="text-c1" />
            <div className="hidden lg:grid">
                <span className="truncate text-sm opacity-80">{title}</span>
                <span className="truncate text-sm font-semibold">{subtitle}</span>
            </div>
        </a>
    );
}
