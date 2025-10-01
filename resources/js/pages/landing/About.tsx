import AboutUs from '@/components/landing/sections/About';
import Contact from '@/components/landing/sections/Contact';
import { Philosophy } from '@/components/landing/sections/Philosophy';
import Reviews from '@/components/landing/sections/Reviews';
import useSectionsIntersection from '@/hooks/landing/use-sections-intersection';
import LandingLayout from '@/layouts/LandingLayout';
import type { InfoT } from '@/types';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export default function About({ info }: { info: InfoT }) {
    const { isVisible } = useSectionsIntersection({ classId: 'section' });
    const schema = {
        '@type': 'WebPage',
        '@id': route('about'),
        url: route('about'),
        name: 'About Us - ' + info.name,
        '@graph': [
            { '@type': 'Organization', name: info.name, url: route('home'), logo: info.logo },
            {
                '@type': 'AboutPage',
                mainEntity: {
                    '@type': 'WebPageElement',
                    name: 'About Us Section',
                    description:
                        'We are passionate about restoring spaces and peace of mind, delivering outstanding results with a focus on quality, care, and customer satisfaction.',
                },
            },
        ],
    };

    return (
        <LandingLayout
            title="About Us"
            metaDescription="Learn about our mission, vision, and the values that drive us to provide exceptional restoration services."
            schema={schema}
            paths={[
                { name: 'Home', href: route('home') },
                { name: 'About Us', href: route('about') },
            ]}
        >
            <AboutUs className="section" id="section-about" isVisible={isVisible['section-about']} />
            <section className="px-5 py-10">
                <div className="prose dark:prose-invert prose-sm prose-lg prose-img:w-full container mx-auto max-w-none flex-1 overflow-auto rounded-lg px-4">
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>{info.history}</ReactMarkdown>
                </div>
            </section>
            <Philosophy className="section" id="section-philosophy" isVisible={isVisible['section-philosophy']} />
            <Reviews className="section" id="section-reviews" isVisible={isVisible['section-reviews']} />
            <Contact className="section" id="section-contact" isVisible={isVisible['section-contact']} />
        </LandingLayout>
    );
}
