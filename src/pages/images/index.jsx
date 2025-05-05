import React from "react";
import Head from "next/head";
import AppSidebar from "@/admin-common-components/AppSideBar";
import Backdrop from "@/admin-common-components/Backdrop";
import AppHeader from "@/admin-common-components/AppHeader";
import { useSidebar } from "@/admin-context/SidebarContext";
import PageBreadcrumb from "@/admin-components/common/PageBreadCrumb";
import ComponentCard from "@/admin-components/common/ComponentCard";
import ResponsiveImage from "@/admin-components/ui/images/ResponsiveImage";
import TwoColumnImageGrid from "@/admin-components/ui/images/TwoColumnImageGrid";
import ThreeColumnImageGrid from "@/admin-components/ui/images/ThreeColumnImageGrid";


export default function ImagePage() {
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
                            <PageBreadcrumb pageTitle="Images" />
                            <div className="space-y-5 sm:space-y-6">
                                <ComponentCard title="Responsive image">
                                    <ResponsiveImage />
                                </ComponentCard>
                                <ComponentCard title="Image in 2 Grid">
                                    <TwoColumnImageGrid />
                                </ComponentCard>
                                <ComponentCard title="Image in 3 Grid">
                                    <ThreeColumnImageGrid />
                                </ComponentCard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}