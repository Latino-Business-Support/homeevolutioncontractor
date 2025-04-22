import AboutUs from '@/components/landing/sections/About';
import Contact from '@/components/landing/sections/Contact';
import { Philosophy } from '@/components/landing/sections/Philosophy';
import Reviews from '@/components/landing/sections/Reviews';
import useSectionsIntersection from '@/hooks/landing/use-sections-intersection';
import LandingLayout from '@/layouts/LandingLayout';

export default function About() {
    const { isVisible } = useSectionsIntersection({ classId: 'section' });
    return (
        <LandingLayout
            title="About Us"
            paths={[
                { name: 'Home', href: route('home') },
                { name: 'About Us', href: route('about') },
            ]}
        >
            <AboutUs className="section" id="section-about" isVisible={isVisible['section-about']} />
            <Philosophy className="section" id="section-philosophy" isVisible={isVisible['section-philosophy']} />
            <Reviews className="section" id="section-reviews" isVisible={isVisible['section-reviews']} />
            <Contact className="section" id="section-contact" isVisible={isVisible['section-contact']} />
        </LandingLayout>
    );
}
