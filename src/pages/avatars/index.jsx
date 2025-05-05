import React from "react";
import Head from "next/head";
import AppSidebar from "@/admin-common-components/AppSideBar";
import Backdrop from "@/admin-common-components/Backdrop";
import AppHeader from "@/admin-common-components/AppHeader";
import { useSidebar } from "@/admin-context/SidebarContext";
import PageBreadcrumb from "@/admin-components/common/PageBreadCrumb";
import ComponentCard from "@/admin-components/common/ComponentCard";
import Avatar from "@/admin-components/ui/avatar/Avatar";

export default function AvatarPage() {
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
                            <PageBreadcrumb pageTitle="Avatar" />
                            <div className="space-y-5 sm:space-y-6">
                                <ComponentCard title="Default Avatar">
                                    {/* Default Avatar (No Status) */}
                                    <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
                                        <Avatar src="/images/user/user-01.jpg" size="xsmall" />
                                        <Avatar src="/images/user/user-01.jpg" size="small" />
                                        <Avatar src="/images/user/user-01.jpg" size="medium" />
                                        <Avatar src="/images/user/user-01.jpg" size="large" />
                                        <Avatar src="/images/user/user-01.jpg" size="xlarge" />
                                        <Avatar src="/images/user/user-01.jpg" size="xxlarge" />
                                    </div>
                                </ComponentCard>
                                <ComponentCard title="Avatar with online indicator">
                                    <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
                                        <Avatar
                                            src="/images/user/user-01.jpg"
                                            size="xsmall"
                                            status="online"
                                        />
                                        <Avatar
                                            src="/images/user/user-01.jpg"
                                            size="small"
                                            status="online"
                                        />
                                        <Avatar
                                            src="/images/user/user-01.jpg"
                                            size="medium"
                                            status="online"
                                        />
                                        <Avatar
                                            src="/images/user/user-01.jpg"
                                            size="large"
                                            status="online"
                                        />
                                        <Avatar
                                            src="/images/user/user-01.jpg"
                                            size="xlarge"
                                            status="online"
                                        />
                                        <Avatar
                                            src="/images/user/user-01.jpg"
                                            size="xxlarge"
                                            status="online"
                                        />
                                    </div>
                                </ComponentCard>
                                <ComponentCard title="Avatar with Offline indicator">
                                    <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
                                        <Avatar
                                            src="/images/user/user-01.jpg"
                                            size="xsmall"
                                            status="offline"
                                        />
                                        <Avatar
                                            src="/images/user/user-01.jpg"
                                            size="small"
                                            status="offline"
                                        />
                                        <Avatar
                                            src="/images/user/user-01.jpg"
                                            size="medium"
                                            status="offline"
                                        />
                                        <Avatar
                                            src="/images/user/user-01.jpg"
                                            size="large"
                                            status="offline"
                                        />
                                        <Avatar
                                            src="/images/user/user-01.jpg"
                                            size="xlarge"
                                            status="offline"
                                        />
                                        <Avatar
                                            src="/images/user/user-01.jpg"
                                            size="xxlarge"
                                            status="offline"
                                        />
                                    </div>
                                </ComponentCard>{" "}
                                <ComponentCard title="Avatar with busy indicator">
                                    <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
                                        <Avatar
                                            src="/images/user/user-01.jpg"
                                            size="xsmall"
                                            status="busy"
                                        />
                                        <Avatar src="/images/user/user-01.jpg" size="small" status="busy" />
                                        <Avatar
                                            src="/images/user/user-01.jpg"
                                            size="medium"
                                            status="busy"
                                        />
                                        <Avatar src="/images/user/user-01.jpg" size="large" status="busy" />
                                        <Avatar
                                            src="/images/user/user-01.jpg"
                                            size="xlarge"
                                            status="busy"
                                        />
                                        <Avatar
                                            src="/images/user/user-01.jpg"
                                            size="xxlarge"
                                            status="busy"
                                        />
                                    </div>
                                </ComponentCard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}