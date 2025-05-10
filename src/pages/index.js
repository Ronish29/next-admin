import { useSidebar } from "@/admin-context/SidebarContext";
import AppHeader from "@/admin-common-components/AppHeader";
import AppSidebar from "@/admin-common-components/AppSideBar";
import Backdrop from "@/admin-common-components/Backdrop";
import React from "react";
import PageBreadcrumb from "@/admin-components/common/PageBreadCrumb";
import BasicTableOne from "@/admin-components/tables/BasicTableOne";
import UserTable from "@/admin-components/tables/UserTable";

export default function Home() {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  // Dynamic class for main content margin based on sidebar state
  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
    ? "lg:ml-[290px]"
    : "lg:ml-[90px]";

  return (
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
        <div className="px-4 mx-auto max-w-(--breakpoint-2xl) md:px-4 md:pt-5">
          <PageBreadcrumb pageTitle="User List" />
          <div className="space-y-6">
            <UserTable />
          </div>
        </div>
      </div>
    </div>
  );
}
