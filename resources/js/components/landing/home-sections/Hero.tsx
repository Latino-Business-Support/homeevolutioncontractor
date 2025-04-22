import Button from '@/components/landing/Button';
import Title from '@/components/landing/Title';
import { cn } from '@/lib/utils';
import Form from '@/pages/landing/Form';
import type { InfoT, SlideT } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { ArrowUpRight, Monitor } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero({ className = '', id = '', isVisible }) {
    const { info, slides } = usePage().props as unknown as { info: InfoT; slides: SlideT[] };

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, [slides.length]);
    const handleDotClick = (index: number) => setCurrentSlideIndex(index);

    return (
        <section
            className={cn(
                'relative h-[calc(100dvh-72px)] w-full overflow-hidden px-5 py-20 pb-30 sm:h-[calc(100dvh-138px)] lg:h-[calc(100dvh-148px)]',
                className,
            )}
            id={id}
        >
            <div className="absolute inset-0 z-0 transition-opacity duration-1000">
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide.image_url}
                        alt={slide.title}
                        className={cn(
                            'absolute inset-0 h-full w-full object-cover opacity-0 brightness-75 transition-opacity duration-500 dark:[mask-image:linear-gradient(transparent,black,transparent)]',
                            { 'opacity-100': index === currentSlideIndex },
                        )}
                    />
                ))}
            </div>
            <div
                className={cn('relative z-2 container mx-auto flex h-full items-center gap-10 transition-all', {
                    'translate-y-10 opacity-0': !isVisible,
                    'translate-y-0 opacity-100': isVisible,
                })}
            >
                {/* Content Container */}
                <div className="flex h-full flex-1 flex-col justify-center text-white">
                    <Title
                        size="xl"
                        titleIcon={Monitor}
                        title={'Welcome to ' + info.name}
                        subtitle={slides[currentSlideIndex].title}
                        description={slides[currentSlideIndex].description}
                        className="items-start text-left"
                        invert={true}
                    />

                    <div className="mt-15 flex flex-col justify-start gap-4 sm:flex-row">
                        <Button
                            className="h-10 w-full justify-center sm:h-14 sm:w-fit"
                            as={Link}
                            href={slides[currentSlideIndex].link}
                            label="Explore More"
                            icon={ArrowUpRight}
                        />
                        <Button
                            className="h-10 w-full justify-center sm:h-14 sm:w-fit"
                            as={Link}
                            href={route('contact')}
                            label="Contact Us"
                            icon={ArrowUpRight}
                            variant="secondary"
                        />
                    </div>
                </div>
                {/* Quote Form */}
                <div className="hidden max-w-md flex-1 lg:block">
                    <div className="bg-c3/50 border-c1/15 flex w-full flex-col rounded-lg border p-6 text-white shadow-lg backdrop-blur-lg">
                        <h2 className="pb-6 text-2xl font-bold">Feel Free to Contact Us</h2>
                        <Form invert />
                    </div>
                </div>
            </div>
            {/* Slide Indicators */}
            <div className="absolute bottom-16 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={cn('h-3 w-3 rounded-full bg-white/50 transition-all', {
                            'scale-125 bg-white': index === currentSlideIndex,
                        })}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
