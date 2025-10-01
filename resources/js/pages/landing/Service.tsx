import NavServices from '@/components/landing/NavServices';
import Title from '@/components/landing/Title';
import LandingLayout from '@/layouts/LandingLayout';
import type { InfoT, ServiceT } from '@/types';
import { Link } from '@inertiajs/react';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import Form from './Form';

export default function Service({ info, services, service }: { info: InfoT; services: ServiceT[]; service: ServiceT }) {
    const [filtredServices, setFiltredServices] = useState<ServiceT[]>(services);
    const onSearch = (value: string) =>
        setFiltredServices(!value ? services : services.filter((service) => service.name.toLowerCase().includes(value.toLowerCase())));
    const schema = {
        '@type': 'WebPage',
        '@id': route('service', service.slug),
        url: route('service', service.slug),
        name: service.name + ' - ' + info.name,
        description: service.description,
        '@graph': [
            {
                '@type': 'Service Page',
                name: service.name,
                serviceType: service.name,
                provider: { '@id': route('service', service.slug) },
            },
            ...service.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: { '@type': 'Answer', text: faq.answer },
            })),
        ],
    };

    return (
        <LandingLayout
            title="Services"
            metaDescription={`Experts in ${service.name}. Request your quote instantly.`}
            schema={schema}
            paths={[
                { name: 'Home', href: route('home') },
                { name: 'Services', href: route('services') },
                { name: service.name, href: route('service', service.slug) },
            ]}
        >
            <section className="p-5">
                <div className="container mx-auto flex flex-col gap-10 md:flex-row">
                    <NavServices
                        onSearch={onSearch}
                        services={filtredServices}
                        service={service}
                        ButtonWrapper={({ service, children }) => <Link href={route('service', service.slug)}>{children}</Link>}
                    />
                    <div className="prose dark:prose-invert prose-sm prose-lg prose-img:w-full max-w-none flex-1 overflow-auto rounded-lg px-4">
                        <Title className="mb-5" title={service.name} subtitle="Learn more about this service" />
                        <img className="aspect-video rounded-md object-cover" src={service.image_url} alt={'Image of service ' + service.name} />
                        <p>{service.description}</p>
                        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{service.page}</ReactMarkdown>
                        <Title className="mt-10 mb-5" title="Get a Free Estimate Today!" subtitle="Contact Us" />
                        <Form
                            className="border-c1/10 mb-10 rounded border p-10"
                            // classInput="border border-foreground/10 placeholder:text-foreground/50 text-foreground"
                        />
                    </div>
                </div>
            </section>
        </LandingLayout>
    );
}
