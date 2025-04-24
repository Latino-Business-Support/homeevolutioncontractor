import Button from '@/components/dashboard/Button';
import MdEditor from '@/components/dashboard/MdEditor';
import AppLayout from '@/layouts/app-layout';
import type { ServiceT } from '@/types';
import { Link, router, useForm } from '@inertiajs/react';
import { toast } from 'react-toastify';

export default function ServicePage({ service }: { service: ServiceT }) {
    delete service.image;
    const { data, setData, post } = useForm(service);

    const handleSubmit = () => {
        post(route('dashboard.crud-services.update', service.id + '?_method=PATCH'), {
            preserveScroll: true,
            onSuccess: () => {
                toast.success('Updated successfully');
                setTimeout(() => router.visit(route('dashboard.services')), 1000);
            },
            onError: (errors) => console.error(errors),
        });
    };

    return (
        <AppLayout
            title={'Service ' + service.name}
            breadcrumbs={[
                { title: 'Services', href: route('dashboard.services') },
                { title: service.name, href: route('dashboard.service_page', service.id) },
            ]}
        >
            <section className="flex h-full flex-1 flex-col gap-4 rounded-xl p-5">
                <MdEditor value={data.page} onChange={(value: string) => setData('page', value)} />
                <div className="flex gap-5">
                    <Button onClick={handleSubmit} label="Save" />
                    <Button as={Link} variant="destructive" onClick={handleSubmit} label="Cancel" href={route('dashboard.services')} />
                </div>
            </section>
        </AppLayout>
    );
}
