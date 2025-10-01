import Breadcrumbs from '@/components/landing/Breadcrumbs';
import Footer from '@/components/landing/Footer';
import Header from '@/components/landing/Header';
import HeaderTop from '@/components/landing/HeaderTop';
import type { InfoT, SocialT } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { ToastContainer } from 'react-toastify';
import 'swiper/css';
import 'swiper/css/autoplay';

export default function LandingLayout({ title = '', paths = undefined, metaDescription = '', schema = {}, headChildren = undefined, children }) {
    const { info, socials } = usePage<{ info: InfoT; socials: SocialT[] }>().props;
    const headTitle = title ? `${title} - ${info.name}` : info.name;
    const schemaData = {
        '@context': 'https://schema.org',
        ...schema,
        '@graph': [
            ...(schema['@graph'] || []),
            {
                '@type': 'LocalBusiness',
                name: info.name,
                url: route('home'),
                logo: info.logo,
                image: info.logo,
                telephone: info.phone,
                address: { '@type': 'PostalAddress', streetAddress: info.address },
                sameAs: socials.map((social) => social.link),
                description: metaDescription || '',
            },
            {
                '@type': 'WebSite',
                '@id': route('home') + '#website',
                url: route('home'),
                name: info.name,
                potentialAction: {
                    '@type': 'SearchAction',
                    target: `${route('home')}buscar?q={search_term_string}`,
                    'query-input': 'required name=search_term_string',
                },
            },
            ...[
                { url: route('home'), name: 'Home' },
                { url: route('services'), name: 'Services' },
                { url: route('gallery'), name: 'Gallery' },
                { url: route('faqs'), name: 'FAQs' },
                { url: route('contact'), name: 'Contact' },
                { url: route('about'), name: 'About' },
            ].map((i) => ({ '@type': 'WebPage', '@id': i.url, url: i.url, name: i.name })),
        ],
    };

    return (
        <>
            <link rel="shortcut icon" href={info.favicon} type="image/x-icon" />
            <Head title={headTitle}>
                <link rel="shortcut icon" href={info.favicon} type="image/x-icon" />
                <link rel="canonical" href={window.location.href} />
                {/* meta */}
                {metaDescription && <meta name="description" content={metaDescription} />}
                <meta property="og:title" content={headTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:image" content={info.logo} />
                <meta property="og:url" content={window.location.href} />
                {/* twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={headTitle} />
                <meta name="twitter:description" content={metaDescription} />
                <meta name="twitter:image" content={info.logo} />
                {/* Schema */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
                {/* children */}
                {headChildren}
            </Head>
            <HeaderTop />
            <Header />
            {!paths && <h1 hidden>{headTitle}</h1>}
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
