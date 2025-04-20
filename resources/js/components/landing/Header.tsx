import { useAppearance } from '@/hooks/use-appearance';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { Facebook, Instagram, Linkedin, Monitor, Moon, Sun, Twitter } from 'lucide-react';

export default function Header() {
    return (
        <header className="sticky top-0 bg-black/10 px-5 py-5">
            <div className="container mx-auto flex items-center gap-5">
                <nav className="flex flex-1 items-center justify-between">
                    <ul className="flex items-center gap-5">
                        <NavOption href={route('home')} label="Home" />
                        <NavOption href={route('home')} label="About" />
                        <NavOption href={route('home')} label="Services" />
                        <NavOption href={route('home')} label="Projects" />
                        <NavOption href={route('home')} label="Contact" />
                    </ul>
                    <ul className="flex items-center gap-5">
                        <span>Social Media:</span>
                        <SocialOption href="#" icon={Facebook} />
                        <SocialOption href="#" icon={Instagram} />
                        <SocialOption href="#" icon={Twitter} />
                        <SocialOption href="#" icon={Linkedin} />
                    </ul>
                </nav>
                <ButtonApperance />
            </div>
        </header>
    );
}

function NavOption({ href, label }) {
    return (
        <li>
            <Link href={href}>{label}</Link>
        </li>
    );
}

function SocialOption({ href, icon }) {
    const Icon = icon;
    return (
        <li>
            <a href={href}>
                <Icon size={18} />
            </a>
        </li>
    );
}

function ButtonApperance() {
    const { appearance, updateAppearance } = useAppearance();
    return (
        <button
            className="rounded-full p-3 transition-colors duration-200 hover:bg-black/10"
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
