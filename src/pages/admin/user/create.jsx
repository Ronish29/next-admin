"use client";
import Input from "@/admin-components/form/input/InputField";
import Label from "@/admin-components/form/Label";
import MultiSelect from "@/admin-components/form/MultiSelect";
import Select from "@/admin-components/form/Select";
import Switch from "@/admin-components/form/switch/Switch";
import Button from "@/admin-components/ui/button/Button";
import { ChevronDownIcon } from "@/admin-icons";
import themeConfig from "@/config/themeConfig";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const theme = themeConfig();

const Create = () => {
  const [values, setValues] = useState({
    user_name: "",
    email: "",
    mobile: "",
    name: "",
    isSuperAdmin: false,
    password: "",
    roleId: [],
    selectedRole: null,
  });
  const [loading, setLoading] = useState(false);
  const [createLoader, setCreateLoader] = useState(false);

  const [roles, setRoles] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  console.log(values, "==values===");

  const handleSwitchChange = (checked) => {
    setValues((prev) => ({
      ...prev,
      isSuperAdmin: checked,
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await axios.get("/api/role");

        console.log(res.data.roles.map(({ name }) => ({ name })));

        if (res.status === 200) {
          setRoles(
            res.data.roles.map(({ name, id }) => ({ label: name, value: id }))
          );
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSelectChange = (value) => {
    setValues((prev) => ({
      ...prev,
      selectedRole: parseInt(value),
    }));
  };

  const handleCreate = async () => {
    try {
      setCreateLoader(true);

      let formData = {
        ...values,
        roleId: isSuperAdmin ? null : values.selectedRole,
      };

      const res = await axios.post("/api/user", formData);

      if (res.status === 200) {
        toast.success("User Created");
      }
    } catch (error) {
    } finally {
      setCreateLoader(false);
    }
  };

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />

      <h1 className="text-center pb-5 text-2xl">Create User</h1>

      <div className="">
        {/* Username */}
        <div className="py-2">
          <Label>Username</Label>
          <Input
            type="text"
            name="user_name"
            placeholder="Enter Your Username"
            value={values.user_name}
            onChange={handleChange}
          />
        </div>

        <div className="py-2">
          <Label>Email</Label>
          <Input
            type="text"
            name="email"
            placeholder="Enter Your Email"
            value={values.email}
            onChange={handleChange}
          />
        </div>

        <div className="py-2">
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={values.name}
            onChange={handleChange}
          />
        </div>

        <div className="py-2">
          <Label>Mobile</Label>
          <Input
            type="text"
            name="mobile"
            placeholder="Enter Your Mobile"
            value={values.mobile}
            max={12}
            onChange={handleChange}
          />
        </div>

        <div className="py-2">
          <Label>Password</Label>
          <Input
            type="text"
            name="password"
            placeholder="Enter Your Password"
            value={values.password}
            onChange={handleChange}
          />
        </div>

        {/* Switch for isSuperAdmin */}
        <div className="pb-2 pt-4">
          <Switch
            label="Do you want to make this user as a Super Admin ?"
            defaultChecked={values.isSuperAdmin}
            onChange={handleSwitchChange}
          />
        </div>

        {!values.isSuperAdmin && (
          <div className="pt-2">
            <div className="relative">
              <Select
                options={roles}
                placeholder="Select Option"
                onChange={handleSelectChange}
                className="dark:bg-dark-900"
                defaultValue=""
              />
              <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                <ChevronDownIcon />
              </span>
            </div>
          </div>
        )}
      </div>

      <button
        className={`py-2 rounded-md px-4 mt-4`}
        style={{
          backgroundColor: theme.primary,
          color: theme.secondary,
        }}
        onClick={handleCreate}
      >
        Add User
      </button>
    </div>
  );
};

export default Create;
