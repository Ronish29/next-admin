import React from "react";
import Head from "next/head";
import AppSidebar from "@/admin-common-components/AppSideBar";
import Backdrop from "@/admin-common-components/Backdrop";
import AppHeader from "@/admin-common-components/AppHeader";
import { useSidebar } from "@/admin-context/SidebarContext";
import PageBreadcrumb from "@/admin-components/common/PageBreadCrumb";
import DefaultModal from "@/admin-components/example/ModalExample/DefaultModal";
import VerticallyCenteredModal from "@/admin-components/example/ModalExample/VerticallyCenteredModal";
import FormInModal from "@/admin-components/example/ModalExample/FormInModal";
import FullScreenModal from "@/admin-components/example/ModalExample/FullScreenModal";
import ModalBasedAlerts from "@/admin-components/example/ModalExample/ModalBasedAlerts";

export default function ModalPage() {
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
                            <PageBreadcrumb pageTitle="Modals" />
                            <div className="grid grid-cols-1 gap-5 xl:grid-cols-2 xl:gap-6">
                                <DefaultModal />
                                <VerticallyCenteredModal />
                                <FormInModal />
                                <FullScreenModal />
                                <ModalBasedAlerts />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}