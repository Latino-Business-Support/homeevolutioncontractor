import { TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { ComponentIcon } from './ComponentIcon';

export function TabOptions({ className = '', withAll = false, children }) {
    return (
        <div
            className={cn(
                'dark:bg-c1/5 border-c1/10 sticky top-20 z-[1] mx-auto mb-10 w-full justify-center overflow-x-auto rounded border bg-white/10 backdrop-blur-lg xl:w-auto dark:shadow-lg [&::-webkit-scrollbar]:h-0',
                className,
            )}
        >
            <TabsList className="mx-auto flex h-auto bg-transparent p-1">
                {withAll && <SingleTab name="Todos" value="all" />}
                {children}
            </TabsList>
        </div>
    );
}

export function SingleTab({ name = '', value = '', icon = '' }: { name: string; value: string; icon?: string | LucideIcon }) {
    return (
        <TabsTrigger
            value={value}
            className="flex items-center gap-1.5 rounded border-0 px-4 py-2 text-sm font-medium opacity-80 transition-all duration-200 hover:opacity-100"
        >
            {icon && <ComponentIcon icon={icon} />}
            <span className="hidden sm:inline">{name}</span>
        </TabsTrigger>
    );
}

export function TabContent({ value, className = '', classWrap = '', children }) {
    return (
        <TabsContent value={value} className={cn('', className)}>
            <motion.div
                key={value}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.2 }}
                className={cn(
                    'border-c1/10 mx-auto rounded border p-8 text-center dark:border-white/5 dark:bg-white/1 dark:shadow-lg dark:backdrop-blur-lg',
                    classWrap,
                )}
            >
                {children}
            </motion.div>
        </TabsContent>
    );
}
