import * as LucideIcons from 'lucide-react';
import { LucideProps } from 'lucide-react';

export function ComponentIcon({ icon, ...props }: { icon: string | LucideIcons.LucideIcon } & LucideProps) {
    if (typeof icon === 'string') {
        const Icon = LucideIcons[icon] as LucideIcons.LucideIcon;
        if (!Icon) return null;
        return <Icon {...props} />;
    }
    const Icon = icon;
    return <Icon {...props} />;
}
