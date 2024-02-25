import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMiniPlusSmall,HiPencil } from "react-icons/hi2";
import { MdDeleteForever } from "react-icons/md";
import { Tables } from "../../../utils/components/index";
import { GoChevronRight } from "react-icons/go";
import { FaHome } from "react-icons/fa";


const ShiftList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filter, setFilter] = useState("");

  const data = [
    {
      id: 1,
      shiftname: "1-st Shift",
      shiftstarttime: "05:00 AM",
      shiftendtime: "02:00 PM",
      shiftduration: "8 Hrs",
      breakduration: "1 Hrs",
    },
    {
      id: 2,
      shiftname: "2-nd Shift",
      shiftstarttime: "02:00 PM",
      shiftendtime: "10:30:00 PM",
      shiftduration: "8 Hrs",
      breakduration: "00:30 mins",
    },
    {
        id: 3,
        shiftname: "3-rd Shift",
        shiftstarttime: "08:00 AM",
        shiftendtime: "5:00 PM",
        shiftduration: "8 Hrs",
        breakduration: "1 Hrs",
      },
  ];

  const columns = [
    { id: "id", label: "#" },
    { id: "shiftname", label: "Shift Name" },
    { id: "shiftstarttime", label: "Shift Start Time",},
    { id: "shiftendtime", label: "Shift End Time", isMobileDisable: true },
    { id: "shiftduration", label: "Shift Duration", isMobileDisable: true },
    { id: "breakduration", label: "Break Duration", isMobileDisable: true },
    { id: "action", label: "Action", isMobileDisable: true, isSortDisable: true },
  ];

  const res_data = data.map((item) => ({
    ...item,
    action: (
      <div className="flex flex-row gap-3">
        <Link to="/edit-shift">
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
      item.shiftname.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="p-1 sm:p-5">
      <div className="flex items-center align-middle">
          <p className="text-2xl font-bold">Shift List <span className="text-3xl opacity-40"> |</span> </p>&nbsp;&nbsp;
          <Link to={"/"}>
          <FaHome className="sm:text-2xl" />
          </Link>&nbsp;
          <GoChevronRight className="sm:text-xl opacity-40 " />
          <Link to={"/"} className=" text-xs sm:text-base font-semibold opacity-40">
           Home
          </Link>
          <GoChevronRight className="sm:text-xl opacity-40 " />
          <Link to={"/shift-schedule"} className=" text-xs sm:text-base font-semibold opacity-40">
           Shift & Schedule
          </Link>
          <GoChevronRight className="sm:text-xl opacity-40 " />
          <div className=" text-xs sm:text-base ">Shift List</div>
        </div>
      <div className="flex items-center justify-between">
        <p className="text-xs sm:text-base font-semibold mt-2">List Of Shifts</p>
        <div className="flex space-x-4">
          <Link
            to="/add-shift"
            className="text-black hover:bg-black hover:text-white border border-gray-300 px-2 py-1 mt-3 text-xs sm:text-base flex flex-row align-middle items-center rounded"
          >
            <HiMiniPlusSmall className="text-3xl" /> Add Shift 
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
      {console.log(res_data)}
    </div>
  );
};

export default ShiftList;
