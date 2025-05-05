import React from "react";
import Head from "next/head";
import AppSidebar from "@/admin-common-components/AppSideBar";
import Backdrop from "@/admin-common-components/Backdrop";
import AppHeader from "@/admin-common-components/AppHeader";
import { useSidebar } from "@/admin-context/SidebarContext";
import PageBreadcrumb from "@/admin-components/common/PageBreadCrumb";
import ComponentCard from "@/admin-components/common/ComponentCard";
import Button from "@/admin-components/ui/button/Button";
import { BoxIcon } from "@/admin-icons";


export default function ButtonPage() {
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
                            <PageBreadcrumb pageTitle="Buttons" />
                            <div className="space-y-5 sm:space-y-6">
                                {/* Primary Button */}
                                <ComponentCard title="Primary Button">
                                    <div className="flex items-center gap-5">
                                        <Button size="sm" variant="primary">
                                            Button Text
                                        </Button>
                                        <Button size="md" variant="primary">
                                            Button Text
                                        </Button>
                                    </div>
                                </ComponentCard>
                                {/* Primary Button with Start Icon */}
                                <ComponentCard title="Primary Button with Left Icon">
                                    <div className="flex items-center gap-5">
                                        <Button size="sm" variant="primary" startIcon={<BoxIcon />}>
                                            Button Text
                                        </Button>
                                        <Button size="md" variant="primary" startIcon={<BoxIcon />}>
                                            Button Text
                                        </Button>
                                    </div>
                                </ComponentCard>{" "}
                                {/* Primary Button with Start Icon */}
                                <ComponentCard title="Primary Button with Right Icon">
                                    <div className="flex items-center gap-5">
                                        <Button size="sm" variant="primary" endIcon={<BoxIcon />}>
                                            Button Text
                                        </Button>
                                        <Button size="md" variant="primary" endIcon={<BoxIcon />}>
                                            Button Text
                                        </Button>
                                    </div>
                                </ComponentCard>
                                {/* Outline Button */}
                                <ComponentCard title="Secondary Button">
                                    <div className="flex items-center gap-5">
                                        {/* Outline Button */}
                                        <Button size="sm" variant="outline">
                                            Button Text
                                        </Button>
                                        <Button size="md" variant="outline">
                                            Button Text
                                        </Button>
                                    </div>
                                </ComponentCard>
                                {/* Outline Button with Start Icon */}
                                <ComponentCard title="Outline Button with Left Icon">
                                    <div className="flex items-center gap-5">
                                        <Button size="sm" variant="outline" startIcon={<BoxIcon />}>
                                            Button Text
                                        </Button>
                                        <Button size="md" variant="outline" startIcon={<BoxIcon />}>
                                            Button Text
                                        </Button>
                                    </div>
                                </ComponentCard>{" "}
                                {/* Outline Button with Start Icon */}
                                <ComponentCard title="Outline Button with Right Icon">
                                    <div className="flex items-center gap-5">
                                        <Button size="sm" variant="outline" endIcon={<BoxIcon />}>
                                            Button Text
                                        </Button>
                                        <Button size="md" variant="outline" endIcon={<BoxIcon />}>
                                            Button Text
                                        </Button>
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