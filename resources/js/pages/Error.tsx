import Button from '@/components/landing/Button';
import { Link } from '@inertiajs/react';
import { Home } from 'lucide-react';

export default function Error({ status }) {
    const title = {
        503: 'Service Unavailable',
        500: 'Server Error',
        404: 'Page Not Found',
        403: 'Forbidden',
    }[status];
    const description = {
        503: 'The service is temporarily unavailable. Please try again later.',
        500: 'The server encountered an unexpected error. Please try again later.',
        404: 'Oops! It seems the page you are looking for is lost in digital space. Our mascot is working to find it.',
        403: 'Access denied. You do not have permission to access this page.',
    }[status];

    return (
        // <LandingLayout title={title}>
        <section className="px-5 py-10">
            <div className="container mx-auto flex flex-col items-center justify-center text-center">
                <div className="glass-card border-c1/5 mx-auto max-w-3xl rounded-2xl dark:border-white/5">
                    <div className="relative mx-auto h-64 w-64">
                        <h1 className="font-poppins from-c1 to-c1/70 mx-auto mb-4 inline bg-gradient-to-r bg-clip-text text-9xl font-bold text-transparent">
                            {status}
                        </h1>
                        <h2 className="font-poppins text-3xl font-bold md:text-4xl">{title}</h2>
                        <div className="bg-c1/50 dark:bg-c1/20 absolute inset-0 animate-pulse rounded-full opacity-30 blur-3xl duration-[3s]" />
                    </div>

                    <p className="text-foreground/80 mx-auto mb-8 max-w-lg text-xl">{description}</p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Button as={Link} href={route('home')} icon={Home} label="Back to Home" />
                    </div>
                </div>
            </div>
        </section>
        /* </LandingLayout> */
    );
}
