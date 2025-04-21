import About from '@/components/landing/home-sections/About';
import Hero from '@/components/landing/home-sections/Hero';
import { Philosophy } from '@/components/landing/home-sections/Philosophy';
import Projects from '@/components/landing/home-sections/Projects';
import Services from '@/components/landing/home-sections/Services';
import useSectionsIntersection from '@/hooks/landing/use-sections-intersection';
import LandingLayout from '@/layouts/LandingLayout';

export default function Home() {
    const { isVisible } = useSectionsIntersection({ classId: 'section' });
    return (
        <LandingLayout title="Home">
            <Hero className="section" id="section-hero" isVisible={isVisible['section-hero']} />
            {/* <Partners /> */}
            <Philosophy className="section" id="section-philosophy" isVisible={isVisible['section-philosophy']} />
            <About className="section" id="section-about" isVisible={isVisible['section-about']} />
            <Services className="section" id="section-services" isVisible={isVisible['section-services']} />
            <Projects className="section" id="section-projects" isVisible={isVisible['section-projects']} />
        </LandingLayout>
    );
}
