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
import { Link } from '@inertiajs/react';
import AppLogo from './app-logo';
import AppearanceToggleTab from './appearance-tabs';

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
                <NavMain />
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
