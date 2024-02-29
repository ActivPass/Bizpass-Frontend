import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMiniPlusSmall, HiPencil } from "react-icons/hi2";
import { MdDeleteForever } from "react-icons/md";
import { Tables } from "../../../utils/components/index";
import { GoChevronRight } from "react-icons/go";
import { FaHome } from "react-icons/fa";

const OverTime = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filter, setFilter] = useState("");

  const data = [
    {
      id: 1,
      empid: "1001",
      name: "Aakash",
      otDate: "11-02-2024",
      status: "Reject",
      otHours: "3",
      description: "Lorem ipsum dollar",
    },
    {
      id: 2,
      empid: "1002",
      name: "Krishna",
      otDate: "11-02-2024",
      status: "Approved",
      otHours: "2",
      description: "Lorem ipsum dollar",
    },
    {
      id: 3,
      empid: "1003",
      name: "Devan",
      otDate: "11-02-2024",
      status: "Pending",
      otHours: "4",
      description: "Lorem ipsum dollar",
    },
  ];


  const columns = [
    { id: "empid", label: "Emp ID" },
    { id: "name", label: "Name" },
    { id: "otDate", label: "OT Date", isMobileDisable: true, isSortDisable: true },
    { id: "otHours", label: "OT Hours", isMobileDisable: true, isSortDisable: true },
    { id: "description", label: "Description", isMobileDisable: true, isSortDisable: true },
    { id: "status", label: "Status", isMobileDisable: true, isSortDisable: true },
    { id: "action", label: "Action", isMobileDisable: true, isSortDisable: true },
  ];

  const overtimeMatrix = [
    { label: "Overtime Hours", value: 34, color: "blue" },
    { label: "Approved Request", value: 3, color: "green" },
    { label: "Pending Request", value: 4, color: "yellow" },
    { label: "Reject Request", value: 5, color: "red" },
  ];

  const res_data = data.map((item) => ({
    ...item,
    name: (
      <Link className="underline text-blue-500" to={"/employeecard"} rel="noopener noreferrer">
        {item.name}
      </Link>
    ),
    status: (
      <div className="text-center">
        {item.status === "Approved" && (
          <span className="border border-green-500 status-span   text-green-500 px-2 py-1 rounded">Approved</span>
        )}
        {item.status === "Reject" && (
          <span className="border border-red-500 status-span text-red-500 px-2 py-1 rounded">Reject</span>
        )}
        {item.status === "Pending" && (
          <span className="border border-yellow-500 status-span text-yellow-500 px-2 py-1 rounded">Pending</span>
        )}
      </div>
    ),
    action: (
      <div className="flex flex-row gap-3">
        <Link to="/edit-overtime">
          <div className="text-xl bg-green-500 text-gray-100 rounded-full flex items-center justify-center h-8 w-8">
            <HiPencil />
          </div>
        </Link>
        <Link to="#">
          <div className="text-xl bg-red-500 text-gray-100 rounded-full flex items-center justify-center h-8 w-8">
            <MdDeleteForever />
          </div>
        </Link>
      </div>
    ),
  }));

  const handleChangePage = (event, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterChange = (event) => setFilter(event.target.value);

  const filteredData = res_data.filter(
    (item) =>
      item.empid.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="p-1 sm:p-5">
      <div className="flex items-center align-middle mb-5">
        <p className="text-2xl font-bold">
          Overtime <span className="text-3xl opacity-40"> |</span>{" "}
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
        <div className=" text-xs sm:text-base ">Overtime</div>
      </div>

      {/* Overtime matrix start*/}

      <div className="flex flex-row gap-5 text-center">
        {overtimeMatrix.map((item, index) => (
          <div key={index} className="w-full md:w-1/4 transform transition-transform hover:scale-105">
            <div className={`stats-info bg-${item.color}-50 text-${item.color}-500 border border-${item.color}-500 p-4 rounded-md shadow-md`}>
              <h6 className="font-semibold">{item.label}</h6>
              <h4 className="text-2xl font-bold">{item.value}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* Overtime matrix end*/}

      <div className="flex items-center justify-between">
        <p className="text-xs sm:text-base font-semibold mt-2">Overtime</p>
        <div className="flex space-x-4">
          <Link
            to="/add-overtime"
            className="text-black hover:bg-black hover:text-white border border-gray-300 px-2 py-1 mt-3 text-xs sm:text-base flex flex-row align-middle items-center rounded"
          >
            <HiMiniPlusSmall className="text-3xl" /> Add Overtime
          </Link>
        </div>
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

export default OverTime;
