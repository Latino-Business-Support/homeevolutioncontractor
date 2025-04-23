import Button from '@/components/dashboard/Button';
import MdEditor from '@/components/dashboard/MdEditor';
import AppLayout from '@/layouts/app-layout';
import type { InfosT } from '@/types';
import { Link, router, useForm } from '@inertiajs/react';
import { toast } from 'react-toastify';

export default function InfoMdEditor({ info1: info }: { info1: InfosT }) {
    const { data, setData, post } = useForm({ infos: [{ ...info }] });
    const handleSubmit = () => {
        post(route('dashboard.crud-info.update', info.id + '?_method=PATCH'), {
            preserveScroll: true,
            onSuccess: () => {
                toast.success('Updated successfully');
                setTimeout(() => router.visit(route('dashboard.home')), 1000);
            },
            onError: (errors) => console.error(errors),
        });
    };
    if (!info) return <p>Not found</p>;

    return (
        <AppLayout
            title={'Info ' + info.label}
            breadcrumbs={[
                { title: 'Information', href: route('dashboard.home') },
                { title: info.label, href: route('dashboard.info_md_editor', info.id) },
            ]}
        >
            <section className="flex h-full flex-1 flex-col gap-4 rounded-xl p-5">
                <MdEditor value={data.infos[0].value} onChange={(value: string) => setData('infos', [{ ...data.infos[0], value }])} />
                <div className="flex gap-5">
                    <Button onClick={handleSubmit} label="Save" />
                    <Button as={Link} variant="destructive" onClick={handleSubmit} label="Cancel" href={route('dashboard.home')} />
                </div>
            </section>
        </AppLayout>
    );
}
