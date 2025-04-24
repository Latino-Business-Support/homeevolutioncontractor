import Button from '@/components/dashboard/Button';
import ConfirmModal from '@/components/dashboard/ConfirmModal';
import { Form, Input, InputSelect } from '@/components/dashboard/Form';
import { Table, Td, TdActions, Th } from '@/components/dashboard/Table';
import useCrud from '@/hooks/dashboard/useCrud';
import AppLayout from '@/layouts/app-layout';
import type { SocialT } from '@/types';
import { usePage } from '@inertiajs/react';
import * as LucideIcons from 'lucide-react';

export default function Socials() {
    const { socials } = usePage().props as unknown as { socials: SocialT[] };

    const { addField, modeForm, setModeForm, handleSubmit, showModal, setDeleteMode, handleDelete, data } = useCrud({ resource: 'crud-socials' });
    const Icon = LucideIcons[data.icon] || LucideIcons['Share2'];

    return (
        <AppLayout title="Socials" breadcrumbs={[{ title: 'Socials', href: route('dashboard.socials') }]}>
            <section className="flex h-full flex-1 flex-col gap-4 rounded-xl p-5">
                <div className="container mx-auto">
                    <Table
                        isShow={!modeForm}
                        childrenHeader={<Button label="Create new" onClick={setModeForm()} />}
                        childrenTitles={
                            <>
                                <Th label="ID" />
                                <Th label="Image" />
                                <Th label="Name" />
                                <Th label="Actions" />
                            </>
                        }
                        data={socials}
                        onRow={(item) => {
                            const Icon = LucideIcons[item.icon] || LucideIcons['Share2'];
                            return (
                                <>
                                    <Td label={String(item.id)} className="w-0" />
                                    <Td>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                                            <Icon />
                                        </a>
                                    </Td>
                                    <Td>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                            {item.name}
                                        </a>
                                    </Td>
                                    <TdActions className="w-0">
                                        <Button label="Edit" onClick={setModeForm(item)} />
                                        <Button label="Delete" variant="destructive" onClick={setDeleteMode(item)} />
                                    </TdActions>
                                </>
                            );
                        }}
                    />
                    <Form isShow={modeForm} onSubmit={handleSubmit} className="mx-auto flex w-full flex-col">
                        <div className="grid w-full gap-x-5 gap-y-3 md:grid-cols-2">
                            <Input {...addField('name', 'Name')} />
                            <div className="flex gap-5">
                                <InputSelect {...addField('icon', 'Lucide Icon')} className="flex-1">
                                    {Object.entries(LucideIcons).map(([key]) => (
                                        <option key={key} value={key}>
                                            {key}
                                        </option>
                                    ))}
                                </InputSelect>
                                <Icon className="my-auto" style={{ color: data.color }} />
                            </div>
                            <Input {...addField('link', 'Link')} type="url" />
                        </div>
                        <div className="flex gap-5 md:col-span-2">
                            <Button label="Save" />
                            <Button label="Cancel" variant="destructive" onClick={setModeForm(false)} />
                        </div>
                    </Form>
                    <ConfirmModal
                        title="Delete row"
                        subtitle="Are you sure you want to delete this row? This action cannot be undone."
                        onConfirm={handleDelete}
                        onCancel={setDeleteMode(false)}
                        isShow={showModal}
                    />
                </div>
            </section>
        </AppLayout>
    );
}
