import Button from '@/components/dashboard/Button';
import ConfirmModal from '@/components/dashboard/ConfirmModal';
import { Form, InputImage } from '@/components/dashboard/Form';
import useCrud from '@/hooks/dashboard/useCrud';
import AppLayout from '@/layouts/app-layout';
import type { ProjectT } from '@/types';

export default function Projects({ projects }: { projects: ProjectT[] }) {
    const { addField, modeForm, setModeForm, handleSubmit, showModal, setDeleteMode, handleDelete } = useCrud({ resource: 'crud-projects' });
    // console.log(data);

    return (
        <AppLayout title="Images" breadcrumbs={[{ title: 'Images', href: route('dashboard.images') }]}>
            <section className="flex h-full flex-1 flex-col gap-4 rounded-xl p-5">
                <div className="container mx-auto">
                    <GridImages isShow={!modeForm} projects={projects} onClickDelete={setDeleteMode} onClickNew={setModeForm()} />
                    <Form isShow={modeForm} onSubmit={handleSubmit} className="mx-auto flex w-full flex-col">
                        <InputImage {...addField('image', 'Image')} />
                        <div className="col-span-2 flex gap-5">
                            <Button label="Save" />
                            <Button label="Cancel" variant="destructive" onClick={setModeForm(false)} type="button" />
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

function GridImages({
    isShow = true,
    projects,
    onClickDelete,
    onClickNew,
}: {
    isShow?: boolean;
    projects: ProjectT[];
    onClickDelete: any;
    onClickNew?: any;
}) {
    if (!isShow) return null;
    return (
        <div className="">
            <Button label="Add new" onClick={onClickNew} className="mb-5 w-fit" />
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                {projects.map((image) => (
                    <div key={image.id} className="flex flex-col gap-2">
                        <img className="aspect-video w-full rounded object-cover transition-transform duration-200" src={image.image_url} />
                        <Button className="flex-1" label="Delete" variant="destructive" onClick={onClickDelete(image)} />
                    </div>
                ))}
            </div>
        </div>
    );
}
