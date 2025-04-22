import { useAppearance } from '@/hooks/use-appearance';
import { cn } from '@/lib/utils';
import type { InfoT, SocialT } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { Menu, Monitor, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';
import { ComponentIcon } from './ComponentIcon';

export default function Header() {
    const { info, socials } = usePage().props as unknown as { info: InfoT; socials: SocialT[] };
    const [open, setOpen] = useState(false);
    return (
        <>
            <header className="sticky top-0 z-20">
                <div className="relative h-18 px-5 text-white">
                    <div className="bg-c3 absolute inset-0 -z-[1] [animation:header-scroll-light_0.3s_linear_both] [animation-range:140px_250px] [animation-timeline:_scroll()] dark:bg-transparent" />
                    <div className="relative z-[1] container mx-auto flex h-full items-center gap-5">
                        <img className="h-full lg:hidden" src={info.logo} alt={'Logo of ' + info.name} />
                        <nav
                            className={cn(
                                'dark:bg-c3 fixed top-0 left-0 z-10 flex h-full w-full max-w-66 flex-1 -translate-x-full flex-col items-center justify-between bg-white p-10 text-black transition-all duration-500 dark:text-white',
                                'lg:static lg:max-w-none lg:translate-x-0 lg:flex-row lg:bg-transparent lg:p-0 lg:text-white lg:dark:bg-transparent',
                                { 'translate-x-0': open },
                            )}
                        >
                            <ul className={cn('flex flex-col items-start gap-5', 'lg:flex-row lg:items-center')}>
                                <img className="w-full lg:hidden" src={info.logo} alt={'Logo of ' + info.name} />
                                <NavOption href={route('home')} label="Home" />
                                <NavOption href={route('about')} label="About" />
                                <NavOption href={route('services')} label="Services" />
                                <NavOption href={route('projects')} label="Projects" />
                                <NavOption href={route('faqs')} label="Faq's" />
                                <NavOption href={route('contact')} label="Contact" />
                            </ul>
                            <ul className="flex items-center gap-5">
                                <span className="hidden lg:inline">Social Media:</span>
                                {socials.map((social) => (
                                    <SocialOption key={social.id} href={social.link} icon={social.icon} />
                                ))}
                            </ul>
                        </nav>
                        <div
                            className={cn('fixed inset-0 bg-white/10 backdrop-blur-sm lg:hidden dark:bg-black/10', { hidden: !open })}
                            onClick={() => setOpen(false)}
                        />
                        <ButtonApperance className="ml-auto lg:ml-0" />
                        <button
                            onClick={() => setOpen(!open)}
                            className="z-10 rounded-full p-3 transition-colors duration-200 hover:bg-black/10 lg:hidden"
                        >
                            <ComponentIcon icon={open ? X : Menu} size={open ? 25 : 18} />
                        </button>
                    </div>
                </div>
            </header>
            <style>{`@keyframes header-scroll-light{100%{box-shadow:0 5px 10px rgba(0,0,0,0.2);background-color:rgba(0,0,0,0.6);backdrop-filter:blur(20px)}}`}</style>
        </>
    );
}

function NavOption({ href, label }) {
    const path1 = new URL(href).pathname;
    const path2 = new URL(window.location.href).pathname;
    const isActive = path1 === path2;

    return (
        <li className={cn('durations-300 hover:text-c1 font-semibold transition-colors', { 'text-c1': isActive })}>
            <Link href={href}>{label}</Link>
        </li>
    );
}

function SocialOption({ href, icon }) {
    return (
        <li>
            <a href={href} target="_blank" rel="noopener noreferrer">
                <ComponentIcon icon={icon} size={18} />
            </a>
        </li>
    );
}

function ButtonApperance({ className = '' }) {
    const { appearance, updateAppearance } = useAppearance();
    return (
        <button
            className={cn('rounded-full p-3 transition-colors duration-200 hover:bg-black/10', className)}
            onClick={() => {
                if (appearance === 'light') {
                    updateAppearance('dark');
                } else if (appearance === 'dark') {
                    updateAppearance('system');
                } else {
                    updateAppearance('light');
                }
            }}
        >
            <Sun
                size={18}
                className={cn('hidden', {
                    block: appearance === 'light',
                })}
            />
            <Moon
                size={18}
                className={cn('hidden', {
                    block: appearance === 'dark',
                })}
            />
            <Monitor
                size={18}
                className={cn('hidden', {
                    block: appearance === 'system',
                })}
            />
        </button>
    );
}
