import Contact from '@/components/landing/sections/Contact';
import FaqsComponent from '@/components/landing/sections/Faqs';
import useSectionsIntersection from '@/hooks/landing/use-sections-intersection';
import LandingLayout from '@/layouts/LandingLayout';
import type { ServiceT } from '@/types';

export default function Faqs({ services }: { services: ServiceT[] }) {
    const { isVisible } = useSectionsIntersection({ classId: 'section' });
    const allFaqs = services.reduce((acc, service) => [...acc, ...service.faqs], [] as { question: string; answer: string }[]);
    const schema = {
        '@type': 'WebPage',
        '@id': route('faqs'),
        url: route('faqs'),
        name: 'FAQs - Your Trusted Partner for Safe and Pristine Home Environments',
        '@graph': [
            ...services.map((service) => ({
                '@type': 'Service',
                name: service.name,
                serviceType: service.name,
                provider: { '@id': route('service', service.slug) },
            })),
            {
                '@type': 'FAQPage',
                mainEntity: allFaqs.map((faq) => ({
                    '@type': 'Question',
                    name: faq.question,
                    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
                })),
            },
        ],
    };

    return (
        <LandingLayout
            title="Faqs"
            metaDescription="Find answers to the most common inquiries about our services, processes, and solutions."
            schema={schema}
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
