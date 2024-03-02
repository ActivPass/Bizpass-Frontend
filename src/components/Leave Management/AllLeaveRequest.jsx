import React, { useState } from "react"
import { Link } from "react-router-dom"
import { HiMiniPlusSmall, HiPencil } from "react-icons/hi2"
import { MdDeleteForever } from "react-icons/md"
import { Tables } from "../../utils/components/index"
import NavHeader from "../NavHeader"
import { GoChevronRight } from "react-icons/go"
import { FaHome } from "react-icons/fa"

const AllLeaveRequest = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [filter, setFilter] = useState("")

  const data = [
    {
      id: 1,
      empid: "1001",
      name: "Aakash",
      applyDate: "11-02-2024",
      status: "Reject",
      leavefrom: "12-02-2024",
      toleave: "14-02-2024",
      leavetype: "Sick",
      reason: "Go to temple",
    },
    {
      id: 2,
      empid: "1002",
      name: "Krishna",
      applyDate: "11-02-2024",
      status: "Approved",
      leavefrom: "12-02-2024",
      toleave: "14-02-2024",
      leavetype: "Casual",
      reason: "Some health issue",
    },
    {
      id: 3,
      empid: "1003",
      name: "Devan",
      applyDate: "11-02-2024",
      status: "Pending",
      leavefrom: "12-02-2024",
      toleave: "14-02-2024",
      leavetype: "Casual",
      reason: "Some health issue",
    },
  ]

  const columns = [
    { id: "empid", label: "Emp ID" },
    { id: "name", label: "Name" },
    { id: "applyDate", label: "Apply Date", isMobileDisable: true, isSortDisable: true },
    { id: "leavetype", label: "Leave Type", isMobileDisable: true, isSortDisable: true },
    { id: "leavefrom", label: "Leave From", isMobileDisable: true, isSortDisable: true },
    { id: "toleave", label: "To Leave", isMobileDisable: true, isSortDisable: true },
    { id: "reason", label: "Reason", isMobileDisable: true, isSortDisable: true },
    { id: "status", label: "Status", isMobileDisable: true, isSortDisable: true },
    { id: "action", label: "Action", isMobileDisable: true, isSortDisable: true },
  ]

  const LeaveMatrix = [
    { label: "Overall Leave Request", value: 12, color: "gray" },
    { label: "New Leave Request", value: 12, color: "blue" },
    { label: "Approved Leave", value: 3, color: "green" },
    { label: "Pending Leave", value: 4, color: "yellow" },
    { label: "Rejected Leave", value: 5, color: "red" },
  ]

  const res_data = data.map(item => ({
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
        <Link to="/edit-leave">
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
      item.empid.toLowerCase().includes(filter.toLowerCase()) || item.role.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div className="p-1 sm:p-5">
      {/* <div className="flex items-center align-middle mb-5">
        <p className="text-2xl font-bold">
          All Leave Request <span className="text-3xl opacity-40"> |</span>{" "}
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
        <div className=" text-xs sm:text-base ">All Leave Request</div>
      </div> */}
      <NavHeader
        current={{ name: "Leave Request app" }}
        previous={[
          { name: "Home", link: "/" },
          { name: "Leave request", link: "/leavemanagement" },
        ]}
      />

      {/* Leave matrix start*/}

      <div className="flex flex-row gap-5 text-center">
        {LeaveMatrix.map((item, index) => (
          <div key={index} className="w-full md:w-1/4">
            <div className={`stats-info bg-${item.color}-50 text-${item.color}-500  p-3 rounded-md`}>
              <h6 className="font-semibold">{item.label}</h6>
              <h4 className="text-2xl font-bold">{item.value}</h4>
            </div>
          </div>
        ))}
      </div>
      {/* Leave matrix end*/}

      <div className="flex items-center justify-between">
        <p className="text-xs sm:text-base font-semibold mt-2">All Leave Request</p>
        <div className="flex space-x-4">
          <Link
            to="/add-leave"
            className="text-black hover:bg-black hover:text-white border border-gray-300 px-2 py-1 mt-3 text-xs sm:text-base flex flex-row align-middle items-center rounded"
          >
            <HiMiniPlusSmall className="text-3xl" /> Add Leave
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
  )
}

export default AllLeaveRequest
