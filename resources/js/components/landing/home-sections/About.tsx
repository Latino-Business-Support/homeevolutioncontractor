import Title from '@/components/landing/Title';
import { asset, cn } from '@/lib/utils';
import { Info } from 'lucide-react';

export default function About({ className = '', id = '', isVisible }) {
    return (
        <section className={cn('overflow-hidden px-5 py-20', className)} id={id}>
            <div className="container mx-auto flex flex-col justify-between gap-10 md:flex-row">
                <div
                    className={cn('transitin-all flex flex-1 items-center duration-1000', {
                        '-translate-x-10 opacity-0': !isVisible,
                        'translate-x-0 opacity-100': isVisible,
                    })}
                >
                    <div className="w-full overflow-hidden rounded-tl-[100px] rounded-br-[100px]">
                        <img src={asset('img/info/bg2.webp')} alt="Refinería industrial" className="aspect-video w-full object-cover" />
                    </div>
                </div>
                <div
                    className={cn('flex flex-1 items-center transition-all duration-1000', {
                        'translate-x-10 opacity-0': !isVisible,
                        'translate-x-0 opacity-100': isVisible,
                    })}
                >
                    <Title
                        titleIcon={Info}
                        title="About Us"
                        subtitle="Your {trusted contractor} in Syracuse, NY and surrounding areas"
                        description="At Home Evolution Contractor, our mission is to empower homeowners to achieve their dream living spaces through exceptional craftsmanship and customer satisfaction. Founded on integrity, quality, and community, we deliver top-notch roofing, siding, and gutter services with a personal touch. Our experienced professionals bring expertise and dedication to every project, ensuring seamless execution and stunning results."
                        className="md:items-start md:text-left"
                    />
                </div>
            </div>
        </section>
    );
}
