import { asset } from '@/lib/utils';
import type { InfoT } from '@/types';
import { Link, usePage } from '@inertiajs/react';

export default function Footer() {
    const { info } = usePage().props as unknown as { info: InfoT };
    return (
        <footer className="bg-c3 relative px-5 py-15 text-white dark:bg-transparent">
            <img
                className="absolute inset-0 z-[1] h-full w-full object-cover opacity-20 dark:hidden"
                src={asset('img/info/bg1.webp')}
                alt="Shape 1"
            />
            <div className="relative z-[2] container mx-auto">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col gap-5">
                        <img src={info.logo} alt="logo" className="mx-auto max-w-40" />
                        <span className="text-center text-balance text-white/50">
                            Welcome to consaik, a leader in the industry/sector since With a passion for excellence and a commitment.
                        </span>
                        <div className="text-center">
                            <h3>We are available</h3>
                            <span className="text-c1">Mon - Sat : 10:00Am To 07:30Pm</span>
                        </div>
                    </div>
                    <div className="mx-auto flex flex-col gap-10">
                        <Title text="Quick links" />
                        <ul className="flex flex-col gap-3">
                            <Item text="About Us" href="#" />
                            <Item text="Our Services" href="#" />
                            <Item text="Our Pricing" href="#" />
                            <Item text="Our team" href="#" />
                            <Item text="Contact Us" href="#" />
                        </ul>
                    </div>
                    <div className="mx-auto flex flex-col gap-10">
                        <Title text="Services" />
                        <ul className="flex flex-col gap-3">
                            <Item text="Building Renovation" href="#" />
                            <Item text="General Contracting" href="#" />
                            <Item text="Repair & Expand" href="#" />
                            <Item text="Architecture Design" href="#" />
                            <Item text="Building Contraction" href="#" />
                        </ul>
                    </div>
                    <div className="mx-auto flex flex-col gap-10">
                        <Title text="Social Media" />
                        <ul className="flex flex-col gap-3">
                            <Item as="a" text="Facebook" target="_blank" rel="noreferrer noopener" href="#" />
                            <Item as="a" text="Instagram" target="_blank" rel="noreferrer noopener" href="#" />
                            <Item as="a" text="Twitter" target="_blank" rel="noreferrer noopener" href="#" />
                            <Item as="a" text="YouTube" target="_blank" rel="noreferrer noopener" href="#" />
                            <Item as="a" text="LinkedIn" target="_blank" rel="noreferrer noopener" href="#" />
                        </ul>
                    </div>
                </div>
                <div className="flex w-full justify-center pt-1 text-center">
                    <span>©2025 All rights For Abuild. Designed By RSTheme.</span>
                </div>
            </div>
        </footer>
    );
}

function Item({
    as = Link,
    text,
    ...props
}: {
    as?: React.ElementType;
    text: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    const Component = as;
    return (
        <Component className="hover:text-c1 text-white/50" {...props}>
            {text}
        </Component>
    );
}

function Title({ text }) {
    return <h2 className="font-bold text-white">{text}</h2>;
}
