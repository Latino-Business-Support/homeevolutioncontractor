import { asset, cn } from '@/lib/utils';
import type { InfoT, ServiceT, SocialT } from '@/types';
import { Link, usePage } from '@inertiajs/react';

export default function Footer() {
    const { info, services, socials } = usePage().props as unknown as { info: InfoT; services: ServiceT[]; socials: SocialT[] };
    return (
        <footer className="bg-c3 relative px-5 py-15 text-white dark:bg-transparent">
            <img
                className="absolute inset-0 z-[1] h-full w-full object-cover opacity-10 dark:hidden"
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
                            <Item text="Home" href={route('home')} />
                            <Item text="Our Services" href={route('services')} />
                            <Item text="Our Projects" href={route('projects')} />
                            <Item text="Faq's" href={route('faqs')} />
                            <Item text="Contact Us" href={route('contact')} />
                            <Item text="About Us" href={route('about')} />
                            <Item text="Dashboard" href={route('dashboard.home')} />
                        </ul>
                    </div>
                    <div className="mx-auto flex flex-col gap-10">
                        <Title text="Services" />
                        <ul className="flex flex-col gap-3">
                            {services.map((service) => (
                                <Item key={service.id} text={service.name} href={route('service', service.slug)} />
                            ))}
                        </ul>
                    </div>
                    <div className="mx-auto flex flex-col gap-10">
                        <Title text="Social Media" />
                        <ul className="flex flex-col gap-3">
                            {socials.map((social) => (
                                <Item
                                    key={social.id}
                                    as="a"
                                    text={social.name}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    href={social.link}
                                    isSocial={true}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function Item({
    as = Link,
    text,
    isSocial = false,
    ...props
}: {
    as?: React.ElementType;
    text: string;
    isSocial?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    const isActive = isSocial ? false : new URL(props.href).pathname === new URL(window.location.href).pathname;
    const Component = as;

    return (
        <Component
            className={cn('hover:text-c1 text-white/50', {
                hidden: isActive,
            })}
            {...props}
        >
            {text}
        </Component>
    );
}

function Title({ text }) {
    return <h2 className="font-bold text-white">{text}</h2>;
}
