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
    const { info } = usePage<{ info: InfoT }>().props;

    return (
        <>
            <Head title={title ? `${title} - ${info.name} - Dashboard` : info.name}>
                <link rel="shortcut icon" href={info.favicon} type="image/x-icon" />
            </Head>
            <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
                {children}
            </AppLayoutTemplate>
        </>
    );
}
