import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

import Badge from "../ui/badge/Badge";
import Image from "next/image";
import axios from "axios";
import themeConfig from "@/config/themeConfig";
import Input from "../form/input/InputField";
import { useRouter } from "next/navigation";
import Edit from "../ui/button/Edit";
import { AnimatePresence, motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../ui/loaders/Loader";

const theme = themeConfig();

export default function UserTable() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);

  const entity = "user";

  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const [deleteLoading, setDeleteLoading] = useState(false);
  const [isDeleted, setIsDeleted] = useState("");

  const handleToggle = () => setIsOpen(!isOpen);
  const handleSearch = () => {
    fetchData();
    setIsOpen(false);
  };

  const [openDialog, setOpenDialog] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setOpenDialog(true);
  };

  const router = useRouter();

  const fetchData = async () => {
    try {
      setLoading(true);

      const res = await axios.get("/api/user", {
        params: { currPage: 1, records: 10, searchTerm: search },
      });

      if (res.status === 200) {
        setTableData(res.data.users);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [isDeleted]);

  const handleDeleteConfirmed = async (id) => {
    try {
      setDeleteLoading(true);
      const res = await axios.delete(`/api/user`, {
        params: { id },
      });

      if (res.status === 200) {
        setIsDeleted((prev) => !prev);
        toast.success("deleted");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <AnimatePresence>
        {openDialog && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-999999"
          >
            <motion.div
              key="dialog"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-2xl w-80"
            >
              <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
              <p className="mb-4">Are you sure you want to delete this item?</p>
              <div className="flex justify-end gap-2">
                <button
                  className="px-4 py-2 bg-gray-300 rounded"
                  onClick={() => setOpenDialog(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-red-600 text-white rounded"
                  onClick={() => {
                    handleDeleteConfirmed(deleteId);
                    setOpenDialog(false);
                  }}
                >
                  {deleteLoading ? <Loader /> : "Confirm"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="border rounded-md overflow-hidden transition-all">
        {/* Header */}
        <div
          className="w-full bg-gray-100 h-10 flex justify-between items-center px-3"
          onClick={handleToggle}
        >
          <p>Search & Filter here</p>
          <button
            onClick={handleToggle}
            className="text-sm text-blue-600"
            style={{
              color: theme.primary,
            }}
          >
            {isOpen ? "Close" : "Dropdown"}
          </button>
        </div>

        {/* Animated Filter Content */}
        <div
          className={`transition-all duration-300 ease-in-out grid overflow-hidden ${
            isOpen ? "max-h-[500px] opacity-100 p-5" : "max-h-0 opacity-0 p-0"
          }`}
        >
          <div className="grid grid-cols-1 gap-5">
            <Input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="search by email, user_name or role"
              className="w-full"
            />
          </div>

          <button
            onClick={handleSearch}
            className={`py-2 rounded-md px-4 mt-4`}
            style={{
              backgroundColor: theme.primary,
              color: theme.secondary,
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex justify-end items-center gap-3">
        <button
          className={`py-2 rounded-md px-4`}
          style={{
            backgroundColor: theme.primary,
            color: theme.secondary,
          }}
          onClick={() => router.push("/admin/user/create")}
        >
          Create
        </button>
      </div>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <div className="min-w-[1102px]">
            <Table>
              {/* Table Header */}
              <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                <TableRow>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    User Name
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    Name
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    Email
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    Mobile
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    Super Admin
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    Role
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    Edit
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    Delete
                  </TableCell>
                </TableRow>
              </TableHeader>

              {/* Table Body */}
              <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                {loading
                  ? "loading..."
                  : tableData?.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                          {order.user_name}
                        </TableCell>
                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                          {order.name}
                        </TableCell>
                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                          {order.email}
                        </TableCell>
                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                          {order.mobile}
                        </TableCell>
                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                          {order.isSuperAdmin ? "Yes" : "No"}
                        </TableCell>
                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                          {order?.role?.name || ""}
                        </TableCell>
                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                          <Edit entity={entity} id={order.id} />
                        </TableCell>
                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                          <button
                            className={`py-2 rounded-md px-4 border`}
                            onClick={() => handleDeleteClick(order.id)} // <-- pass your item id
                            style={{
                              backgroundColor: theme.secondary,
                              color: theme.primary,
                            }}
                          >
                            Delete
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}
