import Footer from '@/components/landing/Footer';
import Header from '@/components/landing/Header';
import HeaderTop from '@/components/landing/HeaderTop';
import { Head } from '@inertiajs/react';

export default function LandingLayout({ title = '', children }) {
    return (
        <>
            <Head title={title} />
            <HeaderTop />
            <Header />
            <div>{children}</div>
            <Footer />
        </>
    );
}
