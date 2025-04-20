import { InfoT } from '@/types';
import { usePage } from '@inertiajs/react';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import Button from './Button';

export default function HeaderTop() {
    const { info } = usePage().props as unknown as { info: InfoT };
    console.log(info);

    return (
        <div className="px-5 py-1">
            <div className="container flex justify-between">
                <img src={info.logo} alt={'Logo of ' + info.name} className="max-w-24" />
                <div className="flex gap-5">
                    <Item title="Call us any time" subtitle={info.phone} icon={Phone} />
                    <Item title="Company Location" subtitle={info.address} icon={MapPin} />
                    <Item title="Your Email " subtitle={info.email} icon={Mail} />
                </div>
                <div className="flex gap-2">
                    <Button label="GET A QUOTE" icon={ArrowUpRight} />
                    {/* <div className="flex">
                        <Button icon={Search} className="border-none bg-transparent px-4 text-blue-950" />
                        <Button icon={Logs} className="border-none bg-transparent px-4 text-blue-950" />
                    </div> */}
                </div>
            </div>
        </div>
    );
}

function Item({ title, subtitle, icon = null }) {
    const Icon = icon;
    return (
        <div className="flex items-center gap-5">
            <Icon className="h-8 w-8 rounded-full bg-gray-200 p-2 text-xs text-blue-950" />
            <div className="flex flex-col">
                <span className="text-sm opacity-50">{title}</span>
                <span className="text-sm font-bold">{subtitle}</span>
            </div>
        </div>
    );
}
