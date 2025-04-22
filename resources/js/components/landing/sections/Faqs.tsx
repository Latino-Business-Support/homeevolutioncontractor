import { SingleTab, TabContent, TabOptions } from '@/components/landing/Tabs';
import Title from '@/components/landing/Title';
import { Tabs } from '@/components/ui/tabs';
import { asset, cn } from '@/lib/utils';
import { ServiceT } from '@/types';
import { usePage } from '@inertiajs/react';
import { CircleHelp } from 'lucide-react';
import { useState } from 'react';

export default function Faqs({ className = '', id = '', isVisible }) {
    const { services } = usePage().props as unknown as { services: ServiceT[] };
    const [activeTab, setActiveTab] = useState(String(services[0].id));
    return (
        <section className={cn('section bg-white px-5 py-20 dark:bg-transparent', className)} id={id}>
            <div
                className={cn('container mx-auto transition-all duration-1000', {
                    'translate-y-10 opacity-0': !isVisible,
                    'translate-y-0 opacity-100': isVisible,
                })}
            >
                <div className="mb-16 text-center">
                    <Title
                        titleIcon={CircleHelp}
                        subtitle=" {Frequently} Asked Questions"
                        description="Answers to the most common questions about our services and processes."
                    />
                </div>
                <div className="mx-auto flex flex-col items-center">
                    <Tabs defaultValue={activeTab} onValueChange={(value) => setActiveTab(value)} className="w-full">
                        <TabOptions className="w-full">
                            {services.map((service) => (
                                <SingleTab key={service.id} name={service.name} value={String(service.id)} />
                            ))}
                        </TabOptions>

                        <div className="flex gap-10">
                            <img
                                className="hidden h-full max-w-96 flex-1 object-contain [mask-image:linear-gradient(black_80%,transparent)] md:block"
                                src={asset('img/info/faq1.webp')}
                                alt="A person thinking"
                            />
                            {services.map((service) => (
                                <TabContent
                                    key={service.id}
                                    value={String(service.id)}
                                    className="flex-1"
                                    classWrap="space-y-6 border-0 p-0 dark:bg-transparent backdrop-blur-none"
                                >
                                    {service.faqs.map((faq) => (
                                        <div
                                            key={faq.id}
                                            className="hover:border-c1 border-c1/10 dark:hover:border-c1/20 relative rounded border p-6 transition-all duration-500 dark:bg-white/3 dark:backdrop-blur-lg"
                                        >
                                            <h3 className="mb-3 text-left text-lg font-semibold text-[#1d2027] dark:text-white">{faq.question}</h3>
                                            <p className="text-left text-zinc-600 dark:text-zinc-300">{faq.answer}</p>
                                        </div>
                                    ))}
                                </TabContent>
                            ))}
                        </div>
                    </Tabs>
                </div>
            </div>
        </section>
    );
}
