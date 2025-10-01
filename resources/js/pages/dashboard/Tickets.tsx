import { WidgetChat } from '@/components/Widgets';
import AppLayout from '@/layouts/app-layout';

export default function Tickets() {
    return (
        <AppLayout title="Tickets" breadcrumbs={[{ title: 'Tickets', href: route('dashboard.tickets') }]}>
            <WidgetChat className="p-5" />
        </AppLayout>
    );
}
