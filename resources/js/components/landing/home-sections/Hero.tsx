import Button from '@/components/landing/Button';
import Title from '@/components/landing/Title';
import { asset, cn } from '@/lib/utils';
import Form from '@/pages/landing/Form';
import type { InfoT } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { ArrowUpRight, Monitor } from 'lucide-react';
import { useEffect, useState } from 'react';

const slides = [
    {
        image: asset('img/slides/1.webp'),
        title: 'Building Trust, One {Roof at a Time}. Syracuse’s Go-To Contractor',
        description: 'This involves exploration and production (E&P) of oil and natural gas.',
        link: route('services'),
    },
    {
        image: asset('img/slides/2.webp'),
        title: 'Quality {Roofing Solutions} for Every Home',
        description: 'This involves exploration and production (E&P) of oil and natural gas.',
        link: route('services'),
    },
    {
        image: asset('img/slides/3.webp'),
        title: 'Your Trusted Partner in {Home Renovations}',
        description: 'This involves exploration and production (E&P) of oil and natural gas.',
        link: route('services'),
    },
];
export default function Hero({ className = '', id = '', isVisible }) {
    const { info } = usePage().props as unknown as { info: InfoT };
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, []);
    const handleDotClick = (index: number) => setCurrentSlideIndex(index);

    return (
        <section className={cn('relative w-full overflow-hidden px-5 py-20 pb-30', className)} id={id}>
            <div className="absolute inset-0 z-0 transition-opacity duration-1000">
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide.image}
                        alt={slide.title}
                        className={cn(
                            'absolute inset-0 h-full w-full object-cover opacity-0 brightness-75 transition-opacity duration-500 dark:[mask-image:linear-gradient(transparent,black,transparent)]',
                            { 'opacity-100': index === currentSlideIndex },
                        )}
                    />
                ))}
            </div>
            <div
                className={cn('relative z-2 container mx-auto flex items-center gap-10 transition-all duration-1000', {
                    'translate-y-10 opacity-0': !isVisible,
                    'translate-y-0 opacity-100': isVisible,
                })}
            >
                {/* Content Container */}
                <div className="flex h-full flex-1 flex-col text-white">
                    <Title
                        size="xl"
                        titleIcon={Monitor}
                        title={'Welcome to ' + info.name}
                        subtitle={slides[currentSlideIndex].title}
                        description={slides[currentSlideIndex].description}
                        className="items-start text-left"
                        invert={true}
                    />

                    <div className="mt-15 flex justify-start gap-4">
                        <Button as={Link} href={slides[currentSlideIndex].link} label="Explore More" icon={ArrowUpRight} />
                        <Button as={Link} href={route('contact')} label="Contact Us" icon={ArrowUpRight} variant="secondary" />
                    </div>
                </div>
                {/* Quote Form */}
                <div className="hidden max-w-md flex-1 lg:block">
                    <div className="bg-c3/50 flex w-full flex-col rounded-lg p-6 text-white shadow-lg backdrop-blur-sm">
                        <h2 className="pb-6 text-2xl font-bold">Feel Free to Contact Us</h2>

                        <Form />
                    </div>
                </div>
            </div>
            {/* Slide Indicators */}
            <div className="absolute bottom-16 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`h-3 w-3 rounded-full transition-all ${index === currentSlideIndex ? 'scale-125 bg-white' : 'bg-white/50'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
