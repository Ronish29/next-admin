import React from "react";
import Head from "next/head";
import AppSidebar from "@/admin-common-components/AppSideBar";
import Backdrop from "@/admin-common-components/Backdrop";
import AppHeader from "@/admin-common-components/AppHeader";
import { useSidebar } from "@/admin-context/SidebarContext";
import UserMetaCard from "@/admin-components/user-profile/UserMetaCard";
import UserInfoCard from "@/admin-components/user-profile/UserInfoCard";
import UserAddressCard from "@/admin-components/user-profile/UserAddressCard";

export default function ProfilePage() {
    const { isExpanded, isHovered, isMobileOpen } = useSidebar()

    // Dynamic class for main content margin based on sidebar state
    const mainContentMargin = isMobileOpen
        ? "ml-0"
        : isExpanded || isHovered
            ? "lg:ml-[290px]"
            : "lg:ml-[90px]"
    return (
        <>
            <Head>
                <title>Next.js Calendar | TailAdmin - Next.js Dashboard Template</title>
                <meta
                    name="description"
                    content="This is the Next.js Calendar page for TailAdmin Tailwind CSS Admin Dashboard Template"
                />
                {/* Add more meta tags if needed */}
            </Head>
            <div className="min-h-screen xl:flex">
                {/* Sidebar and Backdrop */}
                <AppSidebar />
                <Backdrop />
                {/* Main Content Area */}
                <div
                    className={`flex-1 transition-all  duration-300 ease-in-out ${mainContentMargin}`}
                >
                    {/* Header */}
                    <AppHeader />
                    {/* Page Content */}
                    <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
                        <div>
                            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
                                <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
                                    Profile
                                </h3>
                                <div className="space-y-6">
                                    <UserMetaCard />
                                    <UserInfoCard />
                                    <UserAddressCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}