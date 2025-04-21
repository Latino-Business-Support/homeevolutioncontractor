import Button from '@/components/landing/Button';
import Title from '@/components/landing/Title';
import { cn } from '@/lib/utils';
import type { ProjectT } from '@/types';
import { usePage } from '@inertiajs/react';
import { FolderOpen } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay, Keyboard, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Projects({ className = '', id = '', isVisible }) {
    const { projects } = usePage().props as unknown as { projects: ProjectT[] };

    return (
        <section className={cn('px-5 py-20', className)} id={id}>
            <div
                className={cn('container mx-auto transition-all duration-1000', {
                    'translate-y-10 opacity-0': !isVisible,
                    'translate-y-0 opacity-100': isVisible,
                })}
            >
                <Title titleIcon={FolderOpen} title="Latest Projects" subtitle="Latest Projects Our Project Showcase" />
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
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {projects.slice(0, 6).map((project) => (
                            <SwiperSlide key={project.id} className="p-2">
                                <SingleProject project={project} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <Button label="See All Projects" className="mx-auto mt-12" href={route('projects')} />
            </div>
        </section>
    );
}

function SingleProject({ project }: { project: ProjectT }) {
    return (
        <div className="aspect-video w-full overflow-hidden">
            <img className="h-full w-full object-cover" src={project.image_url} alt="Image of project" />
        </div>
    );
}
