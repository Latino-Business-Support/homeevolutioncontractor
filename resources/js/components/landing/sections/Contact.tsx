import { cn } from '@/lib/utils';
import Form from '@/pages/landing/Form';
import type { InfoT } from '@/types';
import { usePage } from '@inertiajs/react';
import { Contact2, Mail, MapPin, Phone } from 'lucide-react';
import { ComponentIcon } from '../ComponentIcon';
import Title from '../Title';

export default function Contact({ className = '', id = '', isVisible }) {
    const { info } = usePage<{ info: InfoT }>().props;

    return (
        <section className={cn('px-5 py-20', className)} id={id}>
            <div
                className={cn('container mx-auto transition-all duration-1000', {
                    'translate-y-10 opacity-0': !isVisible,
                    'translate-y-0 opacity-100': isVisible,
                })}
            >
                <Title
                    titleIcon={Contact2}
                    title="Contact Us"
                    subtitle="Get in Touch {With Us}"
                    description="We are here to help you with your home improvement needs. Whether you have questions about our services or want to schedule a consultation, feel free to reach out to us."
                    className="mb-10"
                />
                <div className="flex flex-col gap-10 lg:flex-row">
                    <div className="border-c1/10 flex-1 rounded border p-10 dark:border-white/5">
                        <h2 className="font-c2 mb-5 text-2xl">Send a Message</h2>
                        <Form />
                    </div>
                    <div className="flex-1 rounded border border-transparent p-10">
                        <h2 className="font-c2 mb-5 text-2xl">Contact Information</h2>
                        <p>
                            We are available to answer your questions and assist you with your project. Feel free to contact us through any of these
                            means.
                        </p>
                        <ContactItem icon={MapPin} name="Address" value={info.address} />
                        <ContactItem icon={Phone} name="Phone" value={info.phone} />
                        <ContactItem icon={Mail} name="Email" value={info.email} />
                        <iframe
                            src={info.map}
                            className="mt-5 aspect-[6/2] w-full flex-1 rounded border"
                            title={`${info.name} location on map`}
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function ContactItem({ icon, name, value }) {
    return (
        <div className="mt-3 flex items-center gap-4">
            <div className="bg-c1/5 text-c1 flex aspect-square h-full items-center justify-center rounded-full p-3">
                <ComponentIcon icon={icon} size={20} />
            </div>
            <div className="flex flex-col">
                <b className="font-c2 text-lg font-normal">{name}:</b>
                <span className="opacity-70">{value}</span>
            </div>
        </div>
    );
}
