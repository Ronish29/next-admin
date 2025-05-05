import React from "react";
import Head from "next/head";
import AppSidebar from "@/admin-common-components/AppSideBar";
import Backdrop from "@/admin-common-components/Backdrop";
import AppHeader from "@/admin-common-components/AppHeader";
import { useSidebar } from "@/admin-context/SidebarContext";
import PageBreadcrumb from "@/admin-components/common/PageBreadCrumb";
import ComponentCard from "@/admin-components/common/ComponentCard";
import Alert from "@/admin-components/ui/alert/Alert";

export default function AlertsPage() {
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
                            <PageBreadcrumb pageTitle="Alerts" />
                            <div className="space-y-5 sm:space-y-6">
                                <ComponentCard title="Success Alert">
                                    <Alert
                                        variant="success"
                                        title="Success Message"
                                        message="Be cautious when performing this action."
                                        showLink={true}
                                        linkHref="/"
                                        linkText="Learn more"
                                    />
                                    <Alert
                                        variant="success"
                                        title="Success Message"
                                        message="Be cautious when performing this action."
                                        showLink={false}
                                    />
                                </ComponentCard>
                                <ComponentCard title="Warning Alert">
                                    <Alert
                                        variant="warning"
                                        title="Warning Message"
                                        message="Be cautious when performing this action."
                                        showLink={true}
                                        linkHref="/"
                                        linkText="Learn more"
                                    />
                                    <Alert
                                        variant="warning"
                                        title="Warning Message"
                                        message="Be cautious when performing this action."
                                        showLink={false}
                                    />
                                </ComponentCard>{" "}
                                <ComponentCard title="Error Alert">
                                    <Alert
                                        variant="error"
                                        title="Error Message"
                                        message="Be cautious when performing this action."
                                        showLink={true}
                                        linkHref="/"
                                        linkText="Learn more"
                                    />
                                    <Alert
                                        variant="error"
                                        title="Error Message"
                                        message="Be cautious when performing this action."
                                        showLink={false}
                                    />
                                </ComponentCard>{" "}
                                <ComponentCard title="Info Alert">
                                    <Alert
                                        variant="info"
                                        title="Info Message"
                                        message="Be cautious when performing this action."
                                        showLink={true}
                                        linkHref="/"
                                        linkText="Learn more"
                                    />
                                    <Alert
                                        variant="info"
                                        title="Info Message"
                                        message="Be cautious when performing this action."
                                        showLink={false}
                                    />
                                </ComponentCard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}