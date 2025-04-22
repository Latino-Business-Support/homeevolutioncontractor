import Contact from '@/components/landing/sections/Contact';
import SingleService from '@/components/landing/SingleService';
import Title from '@/components/landing/Title';
import useSectionsIntersection from '@/hooks/landing/use-sections-intersection';
import LandingLayout from '@/layouts/LandingLayout';
import type { ServiceT } from '@/types/models';
import { usePage } from '@inertiajs/react';
import { NotebookPen } from 'lucide-react';

export default function Services() {
    const { services } = usePage().props as unknown as { services: ServiceT[] };
    const { isVisible } = useSectionsIntersection({ classId: 'section' });

    return (
        <LandingLayout
            title="Services"
            paths={[
                { name: 'Home', href: route('home') },
                { name: 'Services', href: route('services') },
            ]}
        >
            <section className="px-5 py-20">
                <div className="container mx-auto">
                    <Title
                        titleIcon={NotebookPen}
                        title="Our Services"
                        subtitle="Home Evolution Contractor Syracuse, NY"
                        description="Your home’s roof is its first line of defense. Trust our expert team for comprehensive roofing services, including premium roof replacements that balance style, durability, and energy efficiency. We also provide prompt roof repairs and proactive maintenance to ensure a watertight seal and extend your roof’s lifespan. In emergencies, our 24/7 response team springs into action for severe weather, fallen trees, or sudden leaks. Additionally, we offer expert gutter replacement and repair, siding installation, and precise roof flashing services to safeguard your home’s foundation, walls, and landscaping."
                    />
                    <div className="mt-20 grid grid-cols-1 gap-5 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, index) => (
                            <SingleService key={index} service={service} variant="secondary" />
                        ))}
                    </div>
                </div>
            </section>
            <Contact className="section" id="section-contact" isVisible={isVisible['section-contact']} />
        </LandingLayout>
    );
}
