import useReviews from '@/hooks/landing/use-Reviews';
import { cn } from '@/lib/utils';
import type { InfoT, ReviewT } from '@/types';
import { usePage } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import { Autoplay, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '../Button';
import { FacebookIcon, GoogleIcon } from '../Icons';
import Title from '../Title';

export default function Reviews({ className = '', id = '', isVisible }) {
    const { reviews } = useReviews();

    return (
        <section className={cn('mb-10 px-5 py-10', className)} id={id}>
            <div
                className={cn('container mx-auto transition-all duration-1000', {
                    'translate-y-10 opacity-0': !isVisible,
                    'translate-y-0 opacity-100': isVisible,
                })}
            >
                <Title
                    title="Reviews"
                    subtitle="What {Our Clients} Say"
                    description="Our clients trust us because of the quality of our work and attention to detail. Their feedback and reviews motivate us to keep
                    providing the best service possible."
                    className="pb-10"
                />
                <StatsCard />
                <StatsReviews reviews={reviews} />
            </div>
        </section>
    );
}

function StatsCard() {
    const { info } = usePage().props as unknown as { info: InfoT };
    const [showReviewMenu, setShowReviewMenu] = useState(false);
    const menuRef = useRef(null);
    const toggleReviewMenu = () => setShowReviewMenu(!showReviewMenu);
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) setShowReviewMenu(false);
    };
    useEffect(() => {
        if (showReviewMenu) document.addEventListener('mousedown', handleClickOutside);
        else document.removeEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showReviewMenu]);
    return (
        <div className="relative mb-5 flex flex-col items-center justify-between rounded border bg-white px-10 py-5 md:flex-row dark:bg-transparent">
            <div className="mb-3 flex flex-row items-center gap-3">
                <span className="text-lg font-bold">All Reviews</span>

                <StateBarSocial>
                    <GoogleIcon className="aspect-square w-5" />
                    4.9
                </StateBarSocial>
                <StateBarSocial>
                    <FacebookIcon className="aspect-square w-5" />
                    4.8
                </StateBarSocial>
            </div>
            <div className="mb-3 text-center">
                <p className="mb-0 text-2xl font-bold text-[#6c757d]">Overall Rating</p>
                <span className="text-2xl text-[#ffc107]">4.9 ★★★★★</span>
            </div>
            <Button className="flex font-bold" label="Write a review" onClick={toggleReviewMenu} />

            {/* Menú emergente para seleccionar dónde dejar la reseña */}
            {showReviewMenu && (
                <div
                    ref={menuRef}
                    className="absolute top-full right-0 z-10 flex w-full max-w-60 flex-col gap-5 rounded-lg bg-white p-5 shadow-xl dark:bg-black/10 dark:text-white dark:backdrop-blur-sm"
                >
                    <p className="text-sm font-semibold opacity-50">Where do you want to leave a review?</p>

                    <StateBarSubmenuItem href={'https://search.google.com/local/writereview?placeid=' + info.google_place_id} label="Google">
                        <GoogleIcon className="h-5 w-5" />
                    </StateBarSubmenuItem>
                    <StateBarSubmenuItem href={info.facebook} label="Facebook">
                        <FacebookIcon className="h-5 w-5" />
                    </StateBarSubmenuItem>
                </div>
            )}
        </div>
    );
}

function StateBarSocial({ children }) {
    return <span className="flex h-10 items-center gap-2">{children}</span>;
}

function StateBarSubmenuItem({ label = '', href = '', children }) {
    return (
        <a className="flex items-center gap-2" href={href} target="_blank" rel="noopener noreferrer">
            {children}
            <b>{label}</b>
        </a>
    );
}

function StatsReviews({ reviews }: { reviews: ReviewT[] }) {
    return (
        <Swiper
            className="w-full"
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            modules={[Keyboard, Autoplay]}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
        >
            {reviews &&
                reviews.map((review, index) => (
                    <SwiperSlide
                        key={index}
                        onMouseEnter={(e: any) => e.currentTarget.closest('.swiper')?.swiper.autoplay.stop()}
                        onMouseLeave={(e: any) => e.currentTarget.closest('.swiper')?.swiper.autoplay.start()}
                    >
                        <SingleReview
                            review={review}
                            className={cn('translate-y-20 opacity-0', {
                                'translate-y-0 opacity-100 delay-300': true,
                            })}
                        />
                    </SwiperSlide>
                ))}
        </Swiper>
    );
}

function SingleReview({ review, className = '' }: { review: ReviewT; className?: string }) {
    const [viewMore, setViewMore] = useState(false);
    const toggleViewMore = () => setViewMore((prev) => !prev);

    return (
        <div
            className={cn(
                'flex h-60 w-full flex-col items-center gap-2 overflow-hidden rounded border p-5 dark:bg-white/5',
                {
                    'h-auto': viewMore,
                },
                className,
            )}
        >
            <div className="flex w-full flex-row justify-between gap-3">
                <div className="flex items-center gap-3">
                    <img
                        className="aspect-square h-8 w-8"
                        src={review.authorAttribution.photoUri}
                        alt={'Photo of ' + review.authorAttribution.displayName + ' review writer'}
                    />
                    <p className="text-sm opacity-60">{review.authorAttribution.displayName}</p>
                </div>
                <GoogleIcon className="aspect-square h-5 w-5" />
            </div>
            <div className="flex w-full gap-1 text-2xl">
                {Array.from({ length: review.rating }, (_, i) => (
                    <b key={i} className="text-yellow-400">
                        ★
                    </b>
                ))}
                {Array.from({ length: 5 - review.rating }, (_, i) => (
                    <b key={i} className="text-gray-300">
                        ★
                    </b>
                ))}
            </div>
            <p className={cn('leading-7 opacity-70', { 'line-clamp-3': !viewMore })}>{review.text.text}</p>
            <div className="mt-auto flex w-full items-center justify-between text-black/50 dark:text-white/50">
                <button className="cursor-pointer text-sm underline" onClick={toggleViewMore}>
                    Learn {viewMore ? 'less' : 'more'}
                </button>
                <span className="text-xs">{review.relativePublishTimeDescription}</span>
            </div>
        </div>
    );
}
