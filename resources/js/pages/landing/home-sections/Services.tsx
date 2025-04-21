import Button from '@/components/landing/Button';
import Title from '@/components/landing/Title';
import { cn } from '@/lib/utils';
import type { ServiceT } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { NotebookPen } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay, Keyboard, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Services({ className = '', id = '', isVisible }) {
    const { services } = usePage().props as unknown as { services: ServiceT[] };
    return (
        <section className={cn('px-5 py-20', className)} id={id}>
            <div
                className={cn('container mx-auto transition-all duration-1000', {
                    'translate-y-10 opacity-0': !isVisible,
                    'translate-y-0 opacity-100': isVisible,
                })}
            >
                <Title titleIcon={NotebookPen} title="Our Services" subtitle="The Best Service" />
                <div className="pt-10">
                    <Swiper
                        modules={[Keyboard, Autoplay, Pagination]}
                        freeMode={true}
                        grabCursor={true}
                        initialSlide={1}
                        loop={true}
                        spaceBetween={30}
                        keyboard={{
                            enabled: true,
                        }}
                        autoplay={{
                            delay: 5000,
                            stopOnLastSlide: false,
                            disableOnInteraction: false,
                        }}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                        }}
                    >
                        {services.map((service, index) => (
                            <SwiperSlide key={index} className="p-2">
                                <SingleService key={index} service={service} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <Button className="mx-auto mt-12" label="See All Services" href={route('services')} />
            </div>
        </section>
    );
}

function SingleService({ service }: { service: ServiceT }) {
    return (
        <div className="group flex flex-col gap-5 transition-all duration-300">
            <div className="overflow-hidden">
                <img
                    src={service.image_url}
                    alt={'Service of ' + service.name}
                    className="aspect-square object-cover transition-all duration-300 group-hover:scale-125"
                />
            </div>
            <Link href={route('service', service.slug)} className="hover:text-c1 font-c2 text-3xl font-bold">
                {service.name}
            </Link>
        </div>
    );
}
