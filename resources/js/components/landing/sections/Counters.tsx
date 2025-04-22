import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const stats = [
    { value: 20, label: 'Completed Projects' },
    { value: 20, label: 'Satisfied Clients' },
    { value: 4, label: 'Team Professionals' },
    { value: 5, label: 'Years of Experience' },
];

export function Counters({ className = '', id = '', isVisible }) {
    return (
        <section className={cn('px-5 py-10', className)} id={id}>
            <div className="dark:bg-background/10 border-c1/10 container mx-auto grid grid-cols-2 gap-6 rounded border bg-white/80 p-10 text-center md:grid-cols-4 dark:shadow-lg dark:backdrop-blur-lg">
                {stats.map((stat, index) => (
                    <SingleCounter key={index} value={stat.value} label={stat.label} isVisible={isVisible} />
                ))}
            </div>
        </section>
    );
}

function SingleCounter({ value, label, isVisible }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isVisible) {
            let start = 0;
            const duration = 1000;
            const increment = value / (duration / 16);
            const animate = () => {
                start += increment;
                if (start >= value) setCount(value);
                else {
                    setCount(Math.ceil(start));
                    requestAnimationFrame(animate);
                }
            };

            animate();
        } else setCount(0);
    }, [isVisible, value]);

    return (
        <div className="font-c2 space-y-2">
            <div className="text-c1 text-4xl font-bold md:text-5xl">{count}+</div>
            <p className="text-foreground/80">{label}</p>
        </div>
    );
}
