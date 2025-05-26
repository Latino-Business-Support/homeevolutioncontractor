import Reviews from '@/components/landing/sections/Reviews';
import useSectionsIntersection from '@/hooks/landing/use-sections-intersection';
import LandingLayout from '@/layouts/LandingLayout';
import type { ProjectT } from '@/types';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';

export default function Projects({ projects }: { projects: ProjectT[] }) {
    const { isVisible } = useSectionsIntersection({ classId: 'section' });
    const [selectedProject, setSelectedProject] = useState<ProjectT | null>(null);
    const handleProjectClick = (image: ProjectT | null) => () => setSelectedProject(image);

    return (
        <LandingLayout
            title="Projects"
            paths={[
                { name: 'Home', href: route('home') },
                { name: 'Projects', href: route('projects') },
            ]}
        >
            <section className="px-5 py-5">
                <div className="container mx-auto">
                    <motion.div className="mt-5 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {projects.map((project) => (
                            <motion.button
                                key={project.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleProjectClick(project)}
                            >
                                <motion.img
                                    src={project.image_url}
                                    className="aspect-square h-auto w-full rounded-md object-cover shadow-lg"
                                    layoutId={String(project.id)}
                                />
                            </motion.button>
                        ))}
                    </motion.div>
                </div>
            </section>
            <Reviews className="section" id="section-reviews" isVisible={isVisible['section-reviews']} />

            {selectedProject && (
                <motion.section
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-5 backdrop-blur-sm sm:p-10 md:p-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleProjectClick(null)}
                >
                    <button
                        className="fixed top-5 right-5 z-[1] cursor-pointer text-white transition-all hover:scale-110"
                        onClick={handleProjectClick(null)}
                    >
                        <X size={32} />
                    </button>
                    <motion.img
                        className="relative h-full w-full object-contain"
                        src={selectedProject.image_url}
                        layoutId={String(selectedProject.id)}
                    />
                </motion.section>
            )}
        </LandingLayout>
    );
}
