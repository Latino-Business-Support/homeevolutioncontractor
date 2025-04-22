import { asset } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumbs({ title, paths }: { title: string; paths: { name: string; href: string }[] }) {
    if (paths.length === 0) return null;

    return (
        <section className="animate-in fade-in-0 relative overflow-hidden px-5 py-30 duration-500">
            <img
                className="absolute inset-0 z-[1] h-full w-full object-cover brightness-75 dark:[mask-image:linear-gradient(transparent,black,transparent)]"
                src={asset('img/info/bg3.webp')}
                alt="Shape 2"
            />
            {/* <div className="bg-c3/20 absolute inset-0 z-[2] dark:[mask-image:linear-gradient(transparent,black,transparent)]" /> */}
            <div className="relative z-[3] container mx-auto flex flex-col items-center justify-center gap-2">
                <h1 className="font-c2 text-5xl font-bold text-white">{title}</h1>
                <nav className="mt-5 flex items-center gap-1 text-xl text-white">
                    {paths.map((path, index) =>
                        index < paths.length - 1 ? (
                            <Link
                                key={index}
                                href={path.href}
                                className="font-c2 flex items-center gap-1 shadow-md transition-shadow duration-200 hover:shadow-lg"
                            >
                                {path.name}
                                <ChevronRight size={17} className="opacity-70" />
                            </Link>
                        ) : (
                            <span key={index} className="font-c2 flex items-center gap-1 shadow-md transition-shadow duration-200">
                                {path.name}
                            </span>
                        ),
                    )}
                </nav>
            </div>
        </section>
    );
}
