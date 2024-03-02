import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
import { FaHome } from "react-icons/fa";

const AddHoliday = () => {
  const [holidayName, setHolidayName] = useState("");
  const [date, setDate] = useState("");

  const handleAddHoliday = () => {
    console.log("Holiday Name:", holidayName);
    console.log("Date:", date);
    setHolidayName("");
    setDate("");
  };

  return (
    <div className="p-1 sm:p-5">
      <div className="flex items-center align-middle">
        <p className="text-2xl font-bold">
          New Holiday <span className="text-3xl opacity-40"> |</span>{" "}
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
        <div className=" text-xs sm:text-base ">New Holiday</div>
      </div>
      <div className=" p-6 bg-gray-100 rounded-lg shadow-lg mt-5">
        <div className="font-semibold mb-4">
          <h2>
            <strong>Add</strong> New Holiday
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <TextField
              id="holidayName"
              label="Holiday Name"
              variant="standard"
              className="w-full"
              value={holidayName}
              onChange={(e) => setHolidayName(e.target.value)}
              required
            />
          </div>
          <div>
            <TextField
              id="date"
              label="Date"
              variant="standard"
              className="w-full"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mt-6 text-center">
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddHoliday}
          >
            Add Holiday
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddHoliday;
