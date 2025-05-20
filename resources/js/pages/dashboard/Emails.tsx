import Button from '@/components/dashboard/Button';
import ConfirmModal from '@/components/dashboard/ConfirmModal';
import { Form, Input } from '@/components/dashboard/Form';
import { Table, Td, TdActions, Th } from '@/components/dashboard/Table';
import useCrud from '@/hooks/dashboard/useCrud';
import AppLayout from '@/layouts/app-layout';
import type { EmailT } from '@/types';

export default function Emails({ emails }: { emails: EmailT[] }) {
    const { addField, modeForm, setModeForm, handleSubmit, showModal, setDeleteMode, handleDelete } = useCrud({ resource: 'crud-emails' });

    return (
        <AppLayout title="Socials" breadcrumbs={[{ title: 'Emails', href: route('dashboard.emails') }]}>
            <section className="flex h-full flex-1 flex-col gap-4 rounded-xl p-5">
                <div className="container mx-auto">
                    <Table
                        isShow={!modeForm}
                        childrenHeader={<Button label="Create new" onClick={setModeForm()} />}
                        childrenTitles={
                            <>
                                <Th label="ID" />
                                <Th label="Name" />
                                <Th label="Email" />
                                <Th label="Actions" />
                            </>
                        }
                        data={emails}
                        onRow={(item) => (
                            <>
                                <Td label={String(item.id)} className="w-0" />
                                <Td>{item.name}</Td>
                                <Td>{item.email}</Td>
                                <TdActions className="w-0">
                                    <Button label="Edit" onClick={setModeForm(item)} />
                                    <Button label="Delete" variant="destructive" onClick={setDeleteMode(item)} />
                                </TdActions>
                            </>
                        )}
                    />
                    <Form isShow={modeForm} onSubmit={handleSubmit} className="mx-auto flex w-full flex-col">
                        <div className="grid w-full gap-x-5 gap-y-3 md:grid-cols-2">
                            <Input {...addField('name', 'Name')} />
                            <Input {...addField('email', 'Email')} type="email" />
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
