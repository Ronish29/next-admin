"use client";
import Input from "@/admin-components/form/input/InputField";
import Label from "@/admin-components/form/Label";
import MultiSelect from "@/admin-components/form/MultiSelect";
import Switch from "@/admin-components/form/switch/Switch";
import Button from "@/admin-components/ui/button/Button";
import React, { useState } from "react";

const Create = () => {
  const [values, setValues] = useState({
    user_name: "",
    email: "",
    mobile: "",
    name: "",
    isSuperAdmin: false,
    password: "",
    roleId: [],
  });
  const [selectedValues, setSelectedValues] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSwitchChange = (checked) => {
    setValues((prev) => ({
      ...prev,
      isSuperAdmin: checked,
    }));
  };

  console.log(selectedValues);

  const multiOptions = [
    { value: "1", text: "Option 1", selected: false },
    { value: "2", text: "Option 2", selected: false },
    { value: "3", text: "Option 3", selected: false },
    { value: "4", text: "Option 4", selected: false },
    { value: "5", text: "Option 5", selected: false },
  ];

  return (
    <div>
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
              <MultiSelect
                label="Select Roles"
                options={multiOptions}
                defaultSelected={[]}
                onChange={(values) => setSelectedValues(values)}
              />
              <p className="sr-only">
                Selected Values: {selectedValues.join(", ")}
              </p>
            </div>
          </div>
        )}
      </div>

      <Button children={"write"} variant="" />
    </div>
  );
};

export default Create;
