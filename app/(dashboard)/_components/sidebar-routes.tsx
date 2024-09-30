"use client";

import { BarChart, Compass, House, List } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { usePathname } from "next/navigation";

const teacherRoutes = [
    {
        icon: List,
        label: "Courses",
        href: "/teacher/courses",
    },
    {
        icon: BarChart,
        label: "Analytics",
        href: "/teacher/analytics",
    },
];

const guestRoutes = [
    {
        icon: House,
        label: "Home",
        href: "/",
    },
    {
        icon: Compass,
        label: "Search",
        href: "/search",
    },
];

export const SidebarRoutes = () => {
    const pathname = usePathname();

    const isTeacherPage = pathname?.includes("/teacher");


    const routes = isTeacherPage ? teacherRoutes : guestRoutes;

    return (
        <div className="flex flex-col w-full">
            {routes.map((route) => (
                <SidebarItem
                    key={route.href}
                    icon={route.icon} 
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
    );
};
