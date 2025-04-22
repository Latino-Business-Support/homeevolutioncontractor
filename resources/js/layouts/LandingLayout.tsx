import Breadcrumbs from '@/components/landing/Breadcrumbs';
import Footer from '@/components/landing/Footer';
import Header from '@/components/landing/Header';
import HeaderTop from '@/components/landing/HeaderTop';
import type { InfoT } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { ToastContainer } from 'react-toastify';
import 'swiper/css';
import 'swiper/css/autoplay';

export default function LandingLayout({ title = '', paths = undefined, children }) {
    const { info } = usePage().props as unknown as { info: InfoT };
    return (
        <>
            <link rel="shortcut icon" href={info.favicon} type="image/x-icon" />
            <Head title={title} />
            <HeaderTop />
            <Header />
            {paths && <Breadcrumbs title={title} paths={paths} />}
            <div>{children}</div>
            <Footer />
            <div className="fixed inset-0 -z-10 w-full overflow-hidden opacity-0 transition-colors duration-500 dark:bg-slate-950 dark:text-white dark:opacity-100">
                {/* Animated blobs for dark mode */}
                <div className="pointer-events-none fixed inset-0 transition-opacity duration-500 dark:opacity-100">
                    <div className="animate-blob animation-delay-2000 bg-c1/20 absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full blur-[100px]" />
                    <div className="animate-blob bg-c3/10 absolute top-[20%] right-[-5%] h-[500px] w-[400px] rounded-full blur-[100px]" />
                    <div className="animate-blob animation-delay-4000 absolute bottom-[-10%] left-[20%] h-[600px] w-[600px] rounded-full bg-purple-900/20 blur-[100px]" />
                </div>
                <div className="pointer-events-none fixed inset-0 bg-white/5 backdrop-blur-[2px] dark:bg-black/5" />
            </div>
            <ToastContainer />
        </>
    );
}
