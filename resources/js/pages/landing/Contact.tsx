import ContactForm from '@/components/landing/sections/Contact';
import { Counters } from '@/components/landing/sections/Counters';
import Faqs from '@/components/landing/sections/Faqs';
import useSectionsIntersection from '@/hooks/landing/use-sections-intersection';
import LandingLayout from '@/layouts/LandingLayout';
import type { InfoT } from '@/types';

export default function Contact({ info }: { info: InfoT }) {
    const { isVisible } = useSectionsIntersection({ classId: 'section' });
    const schema = {
        '@type': 'WebPage',
        '@id': route('contact'),
        url: route('contact'),
        name: 'Contact Us - ' + info.name,
        '@graph': [
            {
                '@type': 'Organization',
                name: info.name,
                url: route('home'),
                logo: info.logo,
            },
            {
                '@type': 'ContactPage',
                mainEntity: {
                    '@type': 'WebPageElement',
                    name: 'Contact Us Section',
                    description: 'Reach out to us for any questions or to schedule a consultation.',
                },
            },
        ],
    };

    return (
        <LandingLayout
            title="Contact"
            metaDescription="We are here to assist you with your restoration needs. Contact us today for a free consultation."
            schema={schema}
            paths={[
                { name: 'Home', href: route('home') },
                { name: 'Contact', href: route('contact') },
            ]}
        >
            <ContactForm className="section" id="section-contact" isVisible={isVisible['section-contact']} />
            <Counters className="section" id="section-counters" isVisible={isVisible['section-counters']} />
            <Faqs className="section" id="section-faqs" isVisible={isVisible} />
        </LandingLayout>
    );
}
