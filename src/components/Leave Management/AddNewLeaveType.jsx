import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
import { FaHome } from "react-icons/fa";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

const AddNewLeaveType = () => {
  const [newLeaveType, setNewLeaveType] = useState("");
  const [numberOfDays, setNumberOfDays] = useState("");
  const [status, setStatus] = useState("");

  const handleAddLeaveType = () => {
    console.log("New leave type:", newLeaveType);
    console.log("Number of days:", numberOfDays);
    console.log("Status:", status);
    setNewLeaveType("");
    setNumberOfDays("");
    setStatus("");
  };

  return (
    <div className="p-1 sm:p-5">
      <div className="flex items-center align-middle">
        <p className="text-2xl font-bold">
          New Leave Type <span className="text-3xl opacity-40"> |</span>{" "}
        </p>
        &nbsp;&nbsp;
        <Link to={"/"}>
          <FaHome className="sm:text-2xl" />
        </Link>
        &nbsp;
        <GoChevronRight className="sm:text-xl opacity-40 " />
        <Link
          to={"/"}
          className=" text-xs sm:text-base font-semibold opacity-40"
        >
          Home
        </Link>
        <GoChevronRight className="sm:text-xl opacity-40 " />
        <Link
          to={"/leave-types"}
          className=" text-xs sm:text-base font-semibold opacity-40"
        >
          All Leave Types
        </Link>
        <GoChevronRight className="sm:text-xl opacity-40 " />
        <div className=" text-xs sm:text-base ">New Leave Type</div>
      </div>
      <div className=" p-6 bg-gray-100 rounded-lg shadow-lg mt-5">
        <div className="font-semibold mb-4">
          <h2>
            <strong>Add</strong> New Leave Type
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <TextField
              id="newLeaveType"
              label="New Leave Type"
              variant="standard"
              className="w-full"
              value={newLeaveType}
              onChange={(e) => setNewLeaveType(e.target.value)}
              required
            />
          </div>
          <div>
            <TextField
              id="numberOfDays"
              label="Number of Days"
              variant="standard"
              className="w-full"
              type="number"
              value={numberOfDays}
              onChange={(e) => setNumberOfDays(e.target.value)}
              required
            />
          </div>
          <div>
            <FormControl variant="standard" className="w-full">
              <InputLabel id="status-label">Status</InputLabel>
              <Select
                labelId="status-label"
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <MenuItem value={"Active"}>Active</MenuItem>
                <MenuItem value={"Inactive"}>Inactive</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="mt-6 text-center">
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddLeaveType}
          >
            Add Leave Type
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddNewLeaveType;
