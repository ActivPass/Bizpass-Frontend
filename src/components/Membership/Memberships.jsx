import React, { useState } from "react"
import { Tables } from "../../utils/components/index"
import { Link } from "react-router-dom"
import { HiMiniPlusSmall, HiPencil } from "react-icons/hi2"
import { MdDeleteForever } from "react-icons/md";
import PieChart from "./PieChart"

const Memberships = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [filter, setFilter] = useState("")

  const data = [
    {
      id: 1,
      name: "Perumal",
      role: "Coach / Trainer",
      phone: "9500319273",
      email: "perumal@gmail.com",
      joiningDate: "10-02-2024",
    },
    {
      id: 2,
      name: "Sakthivel",
      role: "Coach / Trainer",
      phone: "6381458872",
      email: "vel@gmail.com",
      joiningDate: "11-02-2024",
    },
  ]

  const columns = [
    { id: "name", label: "Name" },
    { id: "role", label: "Role", isMobileDisable: true },
    { id: "phone", label: "Contact Phone", isMobileDisable: true },
    { id: "email", label: "Contact Email", isSortDisable: true },
    { id: "joiningDate", label: "Joining Date", isSortDisable: true, isMobileDisable: true },
    { id: "action", label: "Action", isMobileDisable: true, isSortDisable: true },
  ]

  const res_data = data.map(item => ({
    ...item,
    action: (
      <div className="flex flex-row gap-3">
        <Link to="#">
          <div className="text-xl bg-green-500 text-gray-100 rounded-full flex items-center justify-center h-8 w-8 ">
            <HiPencil />
          </div>
        </Link>
        <Link to="#">
        <div className="text-xl bg-red-500 text-gray-100 rounded-full flex items-center justify-center h-8 w-8 ">
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
      item.name.toLowerCase().includes(filter.toLowerCase()) || item.role.toLowerCase().includes(filter.toLowerCase())
  )

  const partnerName = "Sakthi Pandiyan"

  return (
    <div className="p-1 sm:p-5">
      <div className="text-base font-bold mb-2">Your Details</div>
      <section className="grid grid-flow-rows gap-4 sm:grid-flow-col sm:grid-cols-2  sm:gap-4">
        <main className="bg-gray-200  rounded-md m-0 sm:mr-8 ">
          <aside className="flex">
            <div className="text-3xl bg-gray-400 rounded-full m-2 sm:m-4 flex items-center justify-center h-20 w-20 ">
              {partnerName.slice(0, 1).toUpperCase()}
            </div>
            <div className="m-2 sm:m-4">
              <h2 className="text-md font-bold">Wolf Fitness Center</h2>
              <p className="text-sm opacity-50">Sakthi Pandiyan</p>
              <p className="text-sm opacity-50">Team Wolf</p>
            </div>
          </aside>
          <article className="m-4">
            <h3 className="text-md font-bold">Contact Email</h3>
            <p className="text-sm opacity-50">pandi@gmail.com</p>
            <h3 className="text-md font-bold mt-3">Contact Phone</h3>
            <p className="text-sm opacity-50">6381458872</p>
          </article>
        </main>
        <main className="bg-gray-200 sm:w-full sm:h-full w-full h-52 rounded-md">
          <p className=" p-3">Attendance record</p>
          <PieChart/>
        </main>
      </section>
      <div className="flex items-center justify-between">
        <p className="text-xs sm:text-base font-semibold mt-2">Employee Informations</p>
        <div className="flex space-x-4">
          <Link
            to="#"
            className="text-black hover:bg-black hover:text-white border border-gray-300 px-2 py-1 mt-3 text-xs sm:text-base flex flex-row align-middle items-center rounded"
          >
            <HiMiniPlusSmall className="text-3xl" /> Add Employee
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

export default Memberships
