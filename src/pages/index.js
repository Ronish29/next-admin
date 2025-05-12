import React, { useEffect, useState } from "react";
import UserTable from "@/admin-components/tables/UserTable";
import useFetch from "@/utils/ApiResponse";
import PageBreadcrumb from "@/admin-components/common/PageBreadCrumb";

export default function Home() {
  const { data, loading, error } = useFetch("/api/contact");

  console.log(data, "this is data");

  if (loading) return <p>Loading...</p>;
  if (!error) return <p>Error: {error}</p>;

  return (
    <div>
      <PageBreadcrumb pageTitle="User List" />
      <div className="space-y-6">
        <UserTable />
      </div>
    </div>
  );
}
