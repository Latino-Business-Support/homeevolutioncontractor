import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import type { BreadcrumbItem, InfoT } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { type ReactNode } from 'react';

interface AppLayoutProps {
    title: string;
    breadcrumbs?: BreadcrumbItem[];
    children: ReactNode;
}

export default function ({ title, breadcrumbs, children, ...props }: AppLayoutProps) {
    const { info } = usePage().props as unknown as { info: InfoT };
    return (
        <>
            <link rel="shortcut icon" href={info.favicon} type="image/x-icon" />
            <Head title={title} />
            <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
                {children}
            </AppLayoutTemplate>
        </>
    );
}
