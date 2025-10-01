import Button from '@/components/landing/Button';
import useCrud from '@/hooks/dashboard/useCrud';
import { cn } from '@/lib/utils';
import type { InfoT } from '@/types';
import { usePage } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Form({ className = '', invert = false }) {
    const { info } = usePage().props as unknown as { info: InfoT };
    const { addField, processing, handleSubmit, setData, errors } = useCrud({ resource: 'crud-mails', prefix: '' });
    const recaptchaRef = useRef(null);

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className={cn(
                    'grid gap-x-5 gap-y-3 text-black sm:grid-cols-2 dark:text-white',
                    {
                        'text-white': invert,
                    },
                    className,
                )}
            >
                <Input {...addField('name', 'FullName *')} invert={invert} />
                <Input {...addField('email', 'Email *')} invert={invert} type="email" />
                <Input {...addField('phone', 'Phone *')} invert={invert} type="tel" />
                <Input {...addField('address', 'Address *')} invert={invert} />
                <Input {...addField('message', 'Message *')} invert={invert} as="textarea" className="sm:col-span-2" />
                <div className="flex flex-col items-center sm:col-span-2">
                    <ReCAPTCHA ref={recaptchaRef} sitekey={info.captcha_site_key} onChange={(token) => setData('g-recaptcha-response', token)} />
                    <span className="h-5 truncate pl-2 text-sm text-nowrap text-red-500 dark:text-red-400">{errors?.['g-recaptcha-response']}</span>
                </div>

                <Button label="Send Message" icon={ArrowRight} className="w-full justify-center sm:col-span-2" disabled={processing} />
            </form>
        </>
    );
}

function Input({
    type = 'text',
    label = '',
    error = '',
    onChange = null,
    className = '',
    invert = false,
    as = 'input',
    ...props
}: {
    type?: string;
    label?: string;
    error: string;
    onChange: (value: string) => void;
    className?: string;
    invert?: boolean;
    as?: 'input' | 'textarea';
}) {
    const Component = as;
    return (
        <label htmlFor="name" className={cn('', className)}>
            <div className="relative">
                <Component
                    className={cn(
                        'peer focus:border-c1 focus:ring-c1 border-c1/10 dark:focus:border-c1 field-sizing-content w-full resize-none rounded border bg-transparent px-4 py-3 pt-7 placeholder-transparent transition-all focus:ring-1 focus:outline-none',
                        { 'field-sizing-content min-h-20 resize-none': as === 'textarea' },
                        { 'border-white/20': invert },
                    )}
                    type={type}
                    autoComplete="off"
                    onChange={(e) => onChange?.(e.target.value)}
                    {...props}
                />
                <span className="peer-focus:text-c1 pointer-events-none absolute top-2 left-4 text-xs font-medium transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-500 peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-xs dark:text-zinc-400">
                    {label}
                </span>
            </div>
            <div className="grid">
                <span className="h-5 truncate pl-2 text-sm text-nowrap text-red-500 dark:text-red-400">{error}</span>
            </div>
        </label>
    );
}

// function ModalFormConfirm({ handleSubmit, show = true, close = null, isLoading = false, className = '' }) {
//     const num1 = useMemo(() => Math.floor(Math.random() * 10) + 1, []);
//     const num2 = useMemo(() => Math.floor(Math.random() * 10) + 1, []);
//     const result = useMemo(() => num1 + num2, [num1, num2]);
//     const options = useMemo(() => [result, result + 1, result - 1, result + 2], [result]);
//     const shuffledOptions = useMemo(() => options.sort(() => Math.random() - 0.5), [options]);

//     const handleClick = (option) => {
//         if (option === result) {
//             handleSubmit();
//             close();
//         } else toast.error('Incorrect answer. Please try again.');
//     };

//     useEffect(() => {
//         if (show) document.body.style.overflow = 'hidden';
//         else document.body.style.overflow = '';
//         return () => {
//             document.body.style.overflow = '';
//         };
//     }, [show]);

//     if (!show) return null;
//     return (
//         <div className={cn('relative z-20', className)}>
//             <div className="fixed inset-0 cursor-pointer bg-black/40 backdrop-blur-md" onClick={close} />
//             <div className="dark:bg-c3 fixed top-1/2 left-1/2 z-[1] w-full max-w-md -translate-1/2 rounded-lg bg-white px-5 py-10 text-black shadow-lg dark:text-white">
//                 <h2 className="mb-4 text-center text-xl font-semibold">Resuelve la siguiente operación para confirmar tu solicitud</h2>
//                 <p className="mb-4 text-center">
//                     ¿Cuánto es {num1} + {num2}?
//                 </p>
//                 <div className="mx-auto flex justify-center gap-4">
//                     {shuffledOptions.map((option, index) => (
//                         <Button
//                             key={index}
//                             label={!isLoading ? String(option) : ''}
//                             classIcon="animate-spin"
//                             icon={isLoading ? LoaderCircle : null}
//                             onClick={() => handleClick(option)}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }
