import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Tables } from "../../utils/components/index"
import { HiMiniPlusSmall, HiPencil } from "react-icons/hi2"
import { MdDeleteForever } from "react-icons/md"

const LeaveTypes = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [filter, setFilter] = useState("")

  const leaveData = [
    {
        id: 1,
        leaveType: "Annual leave",
        days: 10,
        status: "Active",
      },
      {
        id: 2,
        leaveType: "Sick Leave",
        days: 5,
        status: "Active",
      },
      {
        id: 3,
        leaveType: "Casual Leave",
        days: 7,
        status: "Active",
      },
      {
        id: 4,
        leaveType: "Maternity Leave",
        days: 90,
        status: "Inactive",
      },
      {
        id: 5,
        leaveType: "Paternity leave",
        days: 14,
        status: "Active",
      },
      {
        id: 6,
        leaveType: "Bereavement leave",
        days: 3,
        status: "Inactive",
      },
      {
        id: 7,
        leaveType: "Marriage leave",
        days: 7,
        status: "Active"
      },
      {
        id: 8,
        leaveType: "Unpaid leave (LOP)",
        days: null,
        status: "Active",
      }
  ]

 
  const columns = [
    { id: "id", label: "#" },
    { id: "leaveType", label: "Leave Type" },
    { id: "days", label: "Days" },
    { id: "status", label: "Status", isMobileDisable: true, isSortDisable: true },
    { id: "action", label: "Action", isMobileDisable: true, isSortDisable: true },
  ]

  
  const res_data = leaveData.map(item => ({
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
          <Link to="/edit-leave-type">
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
      item.leaveType.toLowerCase().includes(filter.toLowerCase()) ||
      (item.status && item.status.toLowerCase().includes(filter.toLowerCase()))
  )
  return (
    <div className="">
        <div className="flex items-center justify-between">
        <p className="text-xs sm:text-base font-semibold mt-2">All Leave Types</p>
        <div className="flex space-x-4">
          <Link
            to="/add-leave-newtype"
            className="text-black hover:bg-black hover:text-white border border-gray-300 px-2 py-1 mt-3 text-xs sm:text-base flex flex-row align-middle items-center rounded"
          >
            <HiMiniPlusSmall className="text-3xl" /> Add Leave Type
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

export default LeaveTypes;
