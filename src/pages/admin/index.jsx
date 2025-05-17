import React, { useEffect, useState } from "react";
import UserTable from "@/admin-components/tables/UserTable";
import useFetch from "@/utils/ApiResponse";
import PageBreadcrumb from "@/admin-components/common/PageBreadCrumb";

export default function Home() {
  return (
    <div>
      <PageBreadcrumb pageTitle="User List" />
      <div className="space-y-6">
        <UserTable />
      </div>
    </div>
  );
}
