import { useSidebar } from "@/admin-context/SidebarContext"
import AppHeader from "@/admin-common-components/AppHeader"
import AppSidebar from "@/admin-common-components/AppSideBar"
import Backdrop from "@/admin-common-components/Backdrop"
import React from "react"
import { EcommerceMetrics } from "@/admin-components/ecommerce/EcommerceMetrics"
import MonthlySalesChart from "@/admin-components/ecommerce/MonthlySalesChart"
import MonthlyTarget from "@/admin-components/ecommerce/MonthlyTarget"
import StatisticsChart from "@/admin-components/ecommerce/StatisticsChart"
import DemographicCard from "@/admin-components/ecommerce/DemographicCard"
import RecentOrders from "@/admin-components/ecommerce/RecentOrders"

export default function Home() {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar()

  // Dynamic class for main content margin based on sidebar state
  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
      ? "lg:ml-[290px]"
      : "lg:ml-[90px]"

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
        <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-12 space-y-6 xl:col-span-7">
              <EcommerceMetrics />

              <MonthlySalesChart />
            </div>

            <div className="col-span-12 xl:col-span-5">
              <MonthlyTarget />
            </div>

            <div className="col-span-12">
              <StatisticsChart />
            </div>

            <div className="col-span-12 xl:col-span-5">
              <DemographicCard />
            </div>

            <div className="col-span-12 xl:col-span-7">
              <RecentOrders />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
