import { cn } from '@/lib/utils';
import { Link, usePage } from '@inertiajs/react';
import { Search } from 'lucide-react';
import Button from './Button';
// import { useState } from "react";
import { InfoT, ServiceT } from '@/types';

export default function NavServices({
    onSearch,
    services,
    service,
    ButtonWrapper,
    className = '',
}: {
    onSearch: (value: string) => void;
    services: ServiceT[];
    service?: ServiceT;
    ButtonWrapper: ({ service, children }: { service: ServiceT; children: React.ReactNode }) => React.ReactNode;
    className?: string;
}) {
    const { info } = usePage().props as unknown as { info: InfoT };

    return (
        <div className={cn('top-25 flex h-fit flex-1 flex-col items-start gap-5 md:sticky md:max-w-96 dark:opacity-70', className)}>
            <div className="w-full rounded border border-white/10 bg-gray-100 p-6 dark:bg-white/5">
                <h2 className="mb-2 text-xl font-semibold text-black/60 dark:text-white">Explore Our Roofing Services</h2>
                <div className="flex items-center">
                    <div className="full bg-c1 mr-1 h-1 w-6 rounded" />
                    <div className="bg-c1 h-1 w-10 rounded" />
                </div>

                <div className="mt-3 flex items-center gap-3 rounded-md border p-2">
                    <input type="text" placeholder="Search service..." onChange={(e) => onSearch(e.target.value)} className="flex-1 outline-0" />
                    <Search className="opacity-50" />
                </div>

                <div className="flex flex-col py-4">
                    {!!service && (
                        <ButtonWrapper service={service}>
                            {<ItemLink text={service.name} className="bg-accent-foreground/5 border-0" />}
                        </ButtonWrapper>
                    )}
                    {services.slice(0, 5).map(
                        (s, index) =>
                            s.id !== service?.id && (
                                <ButtonWrapper key={s.id} service={s}>
                                    {<ItemLink text={s.name} className={cn({ 'border-none': index === 0 })} />}
                                </ButtonWrapper>
                            ),
                    )}
                    <Button as={Link} label="See all services" className="mt-2 w-full justify-center" href={route('services')} />
                </div>
            </div>
            <div className="bg-c3 rounded p-6 text-white dark:bg-transparent">
                <h2 className="mb-4 text-2xl font-semibold">Need Help?</h2>

                <p className="mb-6 dark:text-white/80">
                    Speak with a human to filling out a form? call corporate office and we will connect you with a team member help.
                </p>

                <div className="mb-6 space-y-2">
                    <p className="text-xl">{info.phone}</p>
                    <p>{info.email}</p>
                </div>
                <Button variant="secondary" as={Link} label="Contact Us" href={route('contact')} className="justify-center" />
            </div>
        </div>
    );
}

function ItemLink({ text, className = '' }) {
    return (
        <div
            className={cn(
                'hover:text-c1 flex rounded border-t border-t-black/10 p-3 font-semibold transition-colors duration-300 dark:border-t-white/10 dark:brightness-90',
                className,
            )}
        >
            {text}
        </div>
    );
}
