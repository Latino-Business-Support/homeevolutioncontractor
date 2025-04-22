import Contact from '@/components/landing/sections/Contact';
import FaqsComponent from '@/components/landing/sections/Faqs';
import useSectionsIntersection from '@/hooks/landing/use-sections-intersection';
import LandingLayout from '@/layouts/LandingLayout';

export default function Faqs() {
    const { isVisible } = useSectionsIntersection({ classId: 'section' });

    return (
        <LandingLayout
            title="Faqs"
            paths={[
                { name: 'Home', href: route('home') },
                { name: 'Faqs', href: route('faqs') },
            ]}
        >
            <FaqsComponent className="section" id="section-faqs" isVisible={isVisible['section-faqs']} />
            <Contact className="section" id="section-contact" isVisible={isVisible['section-contact']} />
        </LandingLayout>
    );
}
