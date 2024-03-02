import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Tables } from "../../../utils/components/index"
import { HiMiniPlusSmall, HiPencil } from "react-icons/hi2"
import { MdDeleteForever } from "react-icons/md"
import { GoChevronRight } from "react-icons/go"
import { FaHome } from "react-icons/fa"

const Holidays = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [filter, setFilter] = useState("")

  const holidayData = [
    {
      id: 1,
      holidayName: "New Year",
      date: "01.01.2024",
      status: "Active",
    },
    {
      id: 2,
      holidayName: "Pongal",
      date: "15.01.2024",
      status: "Active",
    },
    {
      id: 3,
      holidayName: "Thiruvalluvar Day",
      date: "16.01.2024",
      status: "Active",
    },
    {
      id: 4,
      holidayName: "Uzhavar Thirunal",
      date: "17.01.2024",
      status: "Active",
    },
    {
      id: 5,
      holidayName: "Tamil New Year",
      date: "14.04.2024",
      status: "Inactive",
    },
    {
      id: 6,
      holidayName: "Diwali",
      date: "31.10.2024",
      status: "Active",
    },
  ]

  const columns = [
    { id: "id", label: "#" },
    { id: "holidayName", label: "Holiday Name" },
    { id: "date", label: "Date" },
    { id: "status", label: "Status", isMobileDisable: true, isSortDisable: true },
    { id: "action", label: "Action", isMobileDisable: true, isSortDisable: true },
  ]

  const res_data = holidayData.map(item => ({
    ...item,
    status: (
      <div className="text-center">
        {item.status === "Active" && (
          <span className="border border-green-500 status-span   text-green-500 px-2 py-1 rounded">Active</span>
        )}
        {item.status === "Inactive" && (
          <span className="border border-red-500 status-span text-red-500 px-2 py-1 rounded">Inactive</span>
        )}
      </div>
    ),
    action: (
      <div className="flex flex-row gap-3">
        <Link to="/edit-holiday">
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
  }))

  const handleChangePage = (event, newPage) => setPage(newPage)

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleFilterChange = event => setFilter(event.target.value)

  const filteredData = res_data.filter(
    item =>
      item.holidayName.toLowerCase().includes(filter.toLowerCase()) ||
      (item.status && item.status.toLowerCase().includes(filter.toLowerCase()))
  )
  return (
    <div className="p-1 md:p-5">
      <div className="flex items-center align-middle my-5">
        <p className="text-2xl font-bold">
          All Holidays <span className="text-3xl opacity-40"> |</span>{" "}
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
        <div className=" text-xs sm:text-base ">All Holidays</div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-xs sm:text-base font-semibold mt-2">All Holidays</p>
        <div className="flex space-x-4">
          <Link
            to="/add-holiday"
            className="text-black hover:bg-black hover:text-white border border-gray-300 px-2 py-1 mt-3 text-xs sm:text-base flex flex-row align-middle items-center rounded"
          >
            <HiMiniPlusSmall className="text-3xl" /> Add Holiday
          </Link>
        </div>
      </div>
      <div>
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
  )
}

export default Holidays
