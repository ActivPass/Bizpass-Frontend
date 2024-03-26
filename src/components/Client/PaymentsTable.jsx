import React, { useState } from "react"
import { Tables } from "../../utils/components/index"
import { HiMiniPlusSmall } from "react-icons/hi2"
import { Link } from "react-router-dom"

const PaymentsTable = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [filter, setFilter] = useState("")

  const data = [
    {
      id: 1,
      paymentid: "1001",
      frequency: "12",
      date: "01/01/2024",
      duedate: "01/11/2024",
      total: "Rs 12345",
      paymentmode: "Cash",
      status: "Paid",
    },
    {
      id: 2,
      paymentid: "1002",
      frequency: "6",
      date: "30/11/2022",
      duedate: "30/02/2023",
      total: "Rs 8000",
      paymentmode: "UPI",
      status: "Paid",
    },
    {
        id: 3,
        paymentid: "1002",
        frequency: "3",
        date: "30/08/2022",
        duedate: "30/02/2023",
        total: "Rs 5000",
        paymentmode: "UPI",
        status: "Unpaid",
      },
  ]

  const columns = [
    { id: "paymentid", label: "Payment ID", isSortDisable: true },
    { id: "frequency", label: "Frequency ", isSortDisable: true },
    { id: "date", label: "Date", isMobileDisable: true, isSortDisable: true },
    { id: "duedate", label: "Due Date", isMobileDisable: true, isSortDisable: true },
    { id: "total", label: "Total", isMobileDisable: true, isSortDisable: true },
    { id: "paymentmode", label: "Payment Mode", isMobileDisable: true, isSortDisable: true },
    { id: "status", label: "Status", isMobileDisable: true, isSortDisable: true },
    { id: "action", label: "Action", isMobileDisable: true, isSortDisable: true },
  ]

  const res_data = data.map(item => ({
    ...item,
    status: (
      <div className="">
        {item.status === "Paid" && (
          <div className="flex flex-row items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <div className="status-span text-green-500 rounded">Paid</div>
          </div>
        )}
        {item.status === "Unpaid" && (
          <div className="flex flex-row items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <div className="status-span text-red-500 rounded">Unpaid</div>
          </div>
        )}
      </div>
    ),
    action: (
      <div>
        {item.status === "Paid" && (
          <Link
           className="border border-blue-500 text-center status-span text-blue-500 hover:bg-blue-500 px-2 py-1 rounded-md hover:text-white"
            to={"/invoice/" + item.status}
          >
            View
          </Link>
        )}
        {(item.status === "Unpaid" || item.status === "Pending") && (
          <Link
          className="border border-blue-500 text-center status-span text-blue-500 hover:bg-blue-500 px-2 py-1 rounded-md hover:text-white"
            to={"/invoice/" + item.status}
          >
            Request
          </Link>
          
        )}
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
      item.paymentid.toLowerCase().includes(filter.toLowerCase()) ||
      item.date.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div className="p-1 sm:p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs sm:text-base font-semibold mt-2">Transaction History</p>
        <div className="flex space-x-4">
          <Link
            to="/add-payment"
            className="bg-[#5D87FF] text-white hover:bg-[#4777fa] hover:text-white border border-gray-300 px-2 py-1 mt-3 text-xs sm:text-base flex flex-row align-middle items-center rounded-md"
          >
            <HiMiniPlusSmall className="text-2xl" /> Add Payment
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

export default PaymentsTable
