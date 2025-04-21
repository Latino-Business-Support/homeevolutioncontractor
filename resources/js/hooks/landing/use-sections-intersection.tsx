import { useEffect, useState } from 'react';

export default function useSectionsIntersection({ classId }: { classId: string }) {
    const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelectorAll('.' + classId);
            section.forEach((el) => {
                const rect = el.getBoundingClientRect();
                const isInViewport = rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0;
                setIsVisible((prev) => ({ ...prev, [el.id]: isInViewport }));
            });
        };
        window.addEventListener('scroll', handleScroll);
        setTimeout(handleScroll, 100);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [classId]);
    return { isVisible };
}
