import Button from '@/components/dashboard/Button';
import ConfirmModal from '@/components/dashboard/ConfirmModal';
import { Form, Input, InputCheck, InputImage, InputTextarea } from '@/components/dashboard/Form';
import { Table, Td, TdActions, Th } from '@/components/dashboard/Table';
import useCrud from '@/hooks/dashboard/useCrud';
import AppLayout from '@/layouts/app-layout';
import type { SlideT } from '@/types';
import { usePage } from '@inertiajs/react';

export default function Slides() {
    const { slides } = usePage().props as unknown as { slides: SlideT[] };
    const { addField, modeForm, setModeForm, handleSubmit, showModal, setDeleteMode, handleDelete } = useCrud({ resource: 'crud-slides' });

    return (
        <AppLayout title="Slides" breadcrumbs={[{ title: 'Slides', href: route('dashboard.slides') }]}>
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
                        data={slides}
                        onRow={(item) => (
                            <>
                                <Td label={String(item.id)} className="w-0" />
                                <Td className="w-32">
                                    <img
                                        className="aspect-video w-full rounded object-cover transition-transform duration-200 hover:scale-200"
                                        src={item.image_url}
                                        alt={'Image of slide ' + item.title}
                                    />
                                </Td>
                                <Td label={item.title} />
                                <TdActions className="w-0">
                                    <Button label="Edit" onClick={setModeForm(item)} />
                                    <Button label="Delete" variant="destructive" onClick={setDeleteMode(item)} />
                                </TdActions>
                            </>
                        )}
                    />
                    <Form isShow={modeForm} onSubmit={handleSubmit} className="mx-auto flex w-full flex-col">
                        <div className="flex w-full flex-col gap-5 sm:flex-row">
                            <InputImage {...addField('image', 'Image')} className="max-h-48" />
                            <div className="flex flex-1 flex-col gap-1">
                                <Input {...addField('title', 'Title')} />
                                <Input {...addField('link', 'Link')} />
                                <InputCheck {...addField('internal', 'Is internal?')} defaultValue={true} />
                                <InputTextarea {...addField('description', 'Description')} />
                            </div>
                        </div>
                        <div className="col-span-2 flex gap-5">
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
