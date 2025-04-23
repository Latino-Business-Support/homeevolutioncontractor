import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { Images, Info, LayoutGrid, Mails, Share2 } from 'lucide-react';
import AppLogo from './app-logo';
import AppearanceToggleTab from './appearance-tabs';

const mainNavItems: NavItem[] = [
    {
        title: 'Information',
        href: route('dashboard.home'),
        icon: Info,
    },
    {
        title: 'Slides',
        href: route('dashboard.slides'),
        icon: Images,
    },
    {
        title: 'Socials',
        href: route('dashboard.socials'),
        icon: Share2,
    },
    {
        title: 'Images',
        href: route('dashboard.images'),
        icon: Images,
    },
    {
        title: 'Services',
        href: route('dashboard.services'),
        icon: LayoutGrid,
    },
    {
        title: 'Mails',
        href: route('dashboard.mails'),
        icon: Mails,
    },
];

export function AppSidebar() {
    const { open } = useSidebar();

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <AppearanceToggleTab
                    variant="sidebar"
                    className={cn({
                        'flex-col': !open,
                    })}
                    classButton={cn({
                        'flex items-center justify-center p-0 py-1': !open,
                    })}
                />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
