import { cn } from '@/lib/utils';
import Form from '@/pages/landing/Form';
import { Contact2, Mail, MapPin, Phone } from 'lucide-react';
import { ComponentIcon } from '../ComponentIcon';
import Title from '../Title';

export default function Contact({ className = '', id = '', isVisible }) {
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
                        <ContactItem icon={MapPin} name="Address" value="618 N Lowell Ave, Syracuse, NY 13204" />
                        <ContactItem icon={Phone} name="Phone" value="+1 (315) 412-6744" />
                        <ContactItem icon={Mail} name="Email" value="info@homeevolutioncontractor.com" />
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.28753664307!2d-76.18639!3d43.054414099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d9f11418e74a9d%3A0xa6c1bab5a646285!2sHome%20Evolution%20Roofing!5e1!3m2!1ses-419!2sec!4v1745278278750!5m2!1ses-419!2sec"
                            className="mt-5 aspect-[6/2] w-full flex-1 rounded border"
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
