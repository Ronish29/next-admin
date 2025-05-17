"use client";
import themeConfig from "@/config/themeConfig";
import { useRouter } from "next/navigation";
import React from "react";

const theme = themeConfig();

const Edit = ({ entity, id }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/admin/${entity}/update/${id}`);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="py-2 rounded-md px-4"
        style={{
          backgroundColor: theme.primary,
          color: theme.secondary,
        }}
      >
        Edit
      </button>
    </div>
  );
};

export default Edit;
