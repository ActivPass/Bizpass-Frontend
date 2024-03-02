import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
import { FaHome } from "react-icons/fa";
import { Tables } from "../../../utils/components/index";

const AttendanceLog = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filter, setFilter] = useState("");

  const attendanceData = [
    {
      id: 1,
      date: "2024-03-01",
      checkIn: "09:00 AM",
      checkOut: "06:00 PM",
      workHours: "9",
      shift: "Day Shift",
      status: "Present",
    },
    {
      id: 2,
      date: "2024-03-02",
      checkIn: "09:30 AM",
      checkOut: "05:30 PM",
      workHours: "8",
      shift: "Day Shift",
      status: "Absent",
    },
    {
        id: 3,
        date: "2024-03-03",
        checkIn: "09:30 AM",
        checkOut: "05:30 PM",
        workHours: "9",
        shift: "Day Shift",
        status: "Present",
      },
      {
        id: 4,
        date: "2024-03-04",
        checkIn: "09:30 AM",
        checkOut: "05:30 PM",
        workHours: "8",
        shift: "Day Shift",
        status: "Absent",
      },
  ];

  const columns = [
    { id: "date", label: "Date" },
    { id: "checkIn", label: "Check-in" },
    { id: "checkOut", label: "Check-out" ,isMobileDisable: true},
    { id: "workHours", label: "Work Hours",isMobileDisable: true },
    { id: "shift", label: "Shift" ,isMobileDisable: true},
    { id: "status", label: "Status" ,isMobileDisable: true, isSortDisable: true},
  ];

  const res_data = attendanceData.map(item => ({
    ...item,
    status: (
      <div className="text-center">
        {item.status === "Present" && (
          <span className="border border-green-500 status-span   text-green-500 px-2 py-1 rounded">Present</span>
        )}
        {item.status === "Absent" && (
          <span className="border border-red-500 status-span text-red-500 px-2 py-1 rounded">Absent</span>
        )}
      </div>
    ),
  }))

  const handleChangePage = (event, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterChange = event => setFilter(event.target.value);

  const filteredData = res_data.filter(
    item =>
      item.date.toLowerCase().includes(filter.toLowerCase()) ||
      item.status.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="p-1 sm:p-5">
      <div className="flex items-center align-middle  mb-4">
        <p className="text-2xl font-bold">
          Attendance Log <span className="text-3xl opacity-40"> |</span>{" "}
        </p>
        &nbsp;&nbsp;
        <Link to={"/"}>
          <FaHome className="sm:text-2xl" />
        </Link>
        &nbsp;
        <GoChevronRight className="sm:text-xl opacity-40 " />
        <Link to={"/"} className=" text-xs sm:text-base font-semibold opacity-40">
          Home
        </Link>
        <GoChevronRight className="sm:text-xl opacity-40 " />
        <Link to={"/attendance-info"} className=" text-xs sm:text-base font-semibold opacity-40">
          Attendance Info
        </Link>
        <GoChevronRight className="sm:text-xl opacity-40 " />
        <div className=" text-xs sm:text-base">Attendance Log</div>
      </div>

      <div className="">
        <Tables
          columns={columns}
          data={res_data}
          filter={filter}
          filteredData={filteredData}
          handleFilterChange={handleFilterChange}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          handleChangePage={handleChangePage}
          page={page}
          rowsPerPage={rowsPerPage}
        />
      </div>
    </div>
  );
};

export default AttendanceLog;
