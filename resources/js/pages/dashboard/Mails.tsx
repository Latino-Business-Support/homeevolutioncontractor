import Button from '@/components/dashboard/Button';
import ConfirmModal from '@/components/dashboard/ConfirmModal';
import { Table, Td, TdActions, Th } from '@/components/dashboard/Table';
import useCrud from '@/hooks/dashboard/useCrud';
import AppLayout from '@/layouts/app-layout';
import type { MailT } from '@/types';

export default function Mails({ mails }: { mails: MailT[] }) {
    const { showModal, setDeleteMode, handleDelete } = useCrud({ resource: 'crud-mails' });

    return (
        <AppLayout title="Mails" breadcrumbs={[{ title: 'Mails', href: route('dashboard.mails') }]}>
            <section className="flex h-full flex-1 flex-col gap-4 rounded-xl p-5">
                <div className="container mx-auto">
                    <Table
                        childrenTitles={
                            <>
                                <Th label="ID" className="w-0" />
                                <Th label="Name" />
                                <Th label="Email" />
                                <Th label="phone" />
                                <Th label="Address" />
                                <Th label="Message" />
                                <Th label="Actions" className="w-0" />
                            </>
                        }
                        data={mails}
                        onRow={(item) => (
                            <>
                                <Td label={String(item.id)} />
                                <Td label={item.name} />
                                <Td label={item.email} />
                                <Td label={item.phone} />
                                <Td label={item.address} />
                                <Td label={item.message} />
                                <TdActions>
                                    <Button label="Delete" variant="destructive" onClick={setDeleteMode(item)} />
                                </TdActions>
                            </>
                        )}
                    />
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
