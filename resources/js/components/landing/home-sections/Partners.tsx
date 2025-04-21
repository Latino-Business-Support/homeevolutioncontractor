import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Partners() {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        const tempPartners = [
            { imageSrc: '/images/partners/khan-it.png', name: 'Khan IT' },
            { imageSrc: '/images/partners/count-it.png', name: 'Count IT' },
            { imageSrc: '/images/partners/violet.png', name: 'Violet' },
            { imageSrc: '/images/partners/violet-alt.png', name: 'Violet Alternative' },
            { imageSrc: '/images/partners/count-it-alt.png', name: 'Count IT Alternative' },
        ];

        setPartners(tempPartners);
    }, []);

    return (
        <section className="bg-white px-5 py-12">
            <div className="container mx-auto px-4">
                <div className="mb-10 flex flex-col items-center justify-center md:flex-row md:justify-between">
                    <h2 className="mb-4 text-center text-2xl font-bold md:mb-0">Nuestro Sitio Web 75000+ Clientes VIP</h2>
                    {/* <div className="flex -space-x-3">
                        <img className="h-10 w-10 rounded-full border-2 border-white" src="/images/avatars/avatar-1.jpg" alt="Avatar 1" />
                        <img className="h-10 w-10 rounded-full border-2 border-white" src="/images/avatars/avatar-2.jpg" alt="Avatar 2" />
                        <img className="h-10 w-10 rounded-full border-2 border-white" src="/images/avatars/avatar-3.jpg" alt="Avatar 3" />
                        <img className="h-10 w-10 rounded-full border-2 border-white" src="/images/avatars/avatar-4.jpg" alt="Avatar 4" />
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gray-100 text-xs">+25</div>
                    </div> */}
                </div>

                <div className="border-t border-b border-gray-200 py-8">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                            1280: { slidesPerView: 5 },
                        }}
                        className="partners-swiper"
                    >
                        {partners.map((partner, index) => (
                            <SwiperSlide key={index}>
                                <SinglePartner imageSrc={partner.imageSrc} name={partner.name} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

function SinglePartner({ imageSrc, name }: { imageSrc: string; name: string }) {
    return (
        <div className="flex items-center justify-center px-8 py-4">
            <img
                src={imageSrc}
                alt={`Logo de ${name}`}
                className="max-h-16 max-w-full object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            />
        </div>
    );
}
