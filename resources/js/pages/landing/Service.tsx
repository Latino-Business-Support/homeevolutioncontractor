import LandingLayout from '@/layouts/LandingLayout';
import type { ServiceT } from '@/types';

export default function Service({ service }: { service: ServiceT }) {
    return (
        <LandingLayout
            title="Services"
            paths={[
                { name: 'Home', href: route('home') },
                { name: 'Services', href: route('services') },
                { name: 'Service', href: route('service', service.slug) },
            ]}
        >
            <div></div>
        </LandingLayout>
    );
}
