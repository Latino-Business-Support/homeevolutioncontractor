import About from '@/components/landing/home-sections/About';
import Hero from '@/components/landing/home-sections/Hero';
import { Philosophy } from '@/components/landing/home-sections/Philosophy';
import Projects from '@/components/landing/home-sections/Projects';
import Services from '@/components/landing/home-sections/Services';
import Contact from '@/components/landing/sections/Contact';
import { Counters } from '@/components/landing/sections/Counters';
import useSectionsIntersection from '@/hooks/landing/use-sections-intersection';
import LandingLayout from '@/layouts/LandingLayout';

export default function Home() {
    const { isVisible } = useSectionsIntersection({ classId: 'section' });
    return (
        <LandingLayout title="Home">
            <Hero className="section" id="section-hero" isVisible={isVisible['section-hero']} />
            {/* <Partners /> */}
            <Services className="section" id="section-services" isVisible={isVisible['section-services']} />
            <Philosophy className="section" id="section-philosophy" isVisible={isVisible['section-philosophy']} />
            <Counters className="section" id="section-counters" isVisible={isVisible['section-counters']} />
            <About className="section" id="section-about" isVisible={isVisible['section-about']} />
            <Projects className="section" id="section-projects" isVisible={isVisible['section-projects']} />
            <Contact className="section" id="section-contact" isVisible={isVisible['section-contact']} />
        </LandingLayout>
    );
}
