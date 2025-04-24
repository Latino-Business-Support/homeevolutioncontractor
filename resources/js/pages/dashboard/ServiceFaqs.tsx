import Button from '@/components/dashboard/Button';
import ConfirmModal from '@/components/dashboard/ConfirmModal';
import { Form, Input, InputTextarea } from '@/components/dashboard/Form';
import { Table, Td, TdActions, Th } from '@/components/dashboard/Table';
import useCrud from '@/hooks/dashboard/useCrud';
import AppLayout from '@/layouts/app-layout';
import type { ServiceT } from '@/types';
import { useEffect } from 'react';

export default function ServiceFaqs({ service }: { service: ServiceT }) {
    const { addField, modeForm, setModeForm, handleSubmit, showModal, setDeleteMode, handleDelete, setData } = useCrud({
        resource: 'crud-servicefaqs',
    });
    useEffect(() => {
        setData({ service_id: service.id });
    }, [service.id, setData]);

    return (
        <AppLayout
            title="Services"
            breadcrumbs={[
                { title: 'Services', href: route('dashboard.services') },
                { title: service.name, href: route('dashboard.service_faqs', service.id) },
            ]}
        >
            <section className="flex h-full flex-1 flex-col gap-4 rounded-xl p-5">
                <div className="container mx-auto">
                    <Table
                        isShow={!modeForm}
                        childrenHeader={<Button label="Create new" onClick={setModeForm()} />}
                        childrenTitles={
                            <>
                                <Th label="ID" />
                                <Th label="Question" />
                                <Th label="Actions" />
                            </>
                        }
                        data={service.faqs}
                        onRow={(item) => (
                            <>
                                <Td label={String(item.id)} className="w-0" />
                                <Td label={item.question} />
                                <TdActions className="w-0">
                                    <Button label="Edit" onClick={setModeForm(item)} />
                                    <Button label="Delete" variant="destructive" onClick={setDeleteMode(item)} />
                                </TdActions>
                            </>
                        )}
                    />
                    <Form isShow={modeForm} onSubmit={handleSubmit} className="mx-auto flex w-full flex-col">
                        <div className="flex w-full flex-col gap-5">
                            <Input {...addField('question', 'Question')} />
                            <InputTextarea {...addField('answer', 'Answer')} />
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
