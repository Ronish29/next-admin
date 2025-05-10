import React from "react";
import Head from "next/head";
import AppSidebar from "@/admin-common-components/AppSideBar";
import Backdrop from "@/admin-common-components/Backdrop";
import AppHeader from "@/admin-common-components/AppHeader";
import { useSidebar } from "@/admin-context/SidebarContext";
import DefaultInputs from "@/admin-components/form/form-elements/DefaultInputs";
import SelectInputs from "@/admin-components/form/form-elements/SelectInputs";
import TextAreaInput from "@/admin-components/form/form-elements/TextAreaInput";
import InputStates from "@/admin-components/form/form-elements/InputStates";
import InputGroup from "@/admin-components/form/form-elements/InputGroup";
import FileInputExample from "@/admin-components/form/form-elements/FileInputExample";
import CheckboxComponents from "@/admin-components/form/form-elements/CheckboxComponents";
import RadioButtons from "@/admin-components/form/form-elements/RadioButtons";
import ToggleSwitch from "@/admin-components/form/form-elements/ToggleSwitch";
import DropzoneComponent from "@/admin-components/form/form-elements/DropZone";
import PageBreadcrumb from "@/admin-components/common/PageBreadCrumb";

export default function FormElementsPage() {
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
                            <PageBreadcrumb pageTitle="From Elements" />
                            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                                <div className="space-y-6">
                                    <DefaultInputs />
                                    <SelectInputs />
                                    <TextAreaInput />
                                    <InputStates />
                                </div>
                                <div className="space-y-6">
                                    <InputGroup />
                                    <FileInputExample />
                                    <CheckboxComponents />
                                    <RadioButtons />
                                    <ToggleSwitch />
                                    <DropzoneComponent />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}