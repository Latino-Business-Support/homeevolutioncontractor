import { WidgetManual } from "@/components/Widgets";
import AppLayout from "@/layouts/app-layout";


export default function ManualPage() {
    return (
        <AppLayout title="User Manual" breadcrumbs={[{ title: 'User Manual', href: route('dashboard.manual') }]}>
            <div className="relative z-50 flex flex-col p-5">
                <WidgetManual />
            </div>
        </AppLayout>
    );
}
