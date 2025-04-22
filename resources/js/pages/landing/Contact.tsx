import ContactForm from '@/components/landing/sections/Contact';
import { Counters } from '@/components/landing/sections/Counters';
import Faqs from '@/components/landing/sections/Faqs';
import useSectionsIntersection from '@/hooks/landing/use-sections-intersection';
import LandingLayout from '@/layouts/LandingLayout';

export default function Contact() {
    const { isVisible } = useSectionsIntersection({ classId: 'section' });
    return (
        <LandingLayout
            title="Contact"
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
