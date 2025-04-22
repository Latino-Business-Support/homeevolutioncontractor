import Button from '@/components/landing/Button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export default function Form({ className = '', invert = false }) {
    return (
        <form
            className={cn(
                'grid gap-6 text-black sm:grid-cols-2 dark:text-white',
                {
                    'text-white': invert,
                },
                className,
            )}
        >
            <Input placeholder="FullName *" label="FullName" invert={invert} />
            <Input placeholder="Email *" label="Email" invert={invert} />
            <Input placeholder="Phone *" label="Phone" invert={invert} />
            <Input placeholder="Address *" label="Address" invert={invert} />
            <Input placeholder="Message *" label="Message" as="textarea" className="sm:col-span-2" invert={invert} />

            <Button label="Send Message" icon={ArrowRight} className="w-full justify-center sm:col-span-2" />
        </form>
    );
}

function Input({
    as = 'input',
    className = '',
    label,
    error = '',
    invert = false,
    ...props
}: { as?: React.ElementType; label: string; error?: string; invert: boolean } & React.InputHTMLAttributes<HTMLInputElement>) {
    const Component = as;
    return (
        <label htmlFor="name" className={cn('', className)}>
            <div className="relative">
                <Component
                    className={cn(
                        'peer focus:border-c1 focus:ring-c1 border-c1/10 dark:focus:border-c1 field-sizing-content w-full resize-none rounded border bg-transparent px-4 py-3 pt-7 placeholder-transparent transition-all focus:ring-1 focus:outline-none',
                        { 'field-sizing-content min-h-20 resize-none': as === 'textarea' },
                        { 'border-c1/20': invert },
                    )}
                    {...props}
                />
                <span className="peer-focus:text-c1 pointer-events-none absolute top-2 left-4 text-xs font-medium transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-400 peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-xs dark:text-zinc-400">
                    {label}
                </span>
            </div>
            <div className="grid">
                <span className="h-5 truncate pl-2 text-sm text-nowrap text-red-500 dark:text-red-400">{error}</span>
            </div>
        </label>
    );
}
