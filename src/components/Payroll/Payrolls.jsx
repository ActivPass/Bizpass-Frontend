import React, { useState } from "react"
import { Tables } from "../../utils/components/index"
import { Link } from "react-router-dom"
import { HiMiniPlusSmall } from "react-icons/hi2"
import { GoChevronRight } from "react-icons/go"
import { FaHome } from "react-icons/fa"

const Payrolls = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [filter, setFilter] = useState("")

  const data = [
    {
      id: 1,
      empid: "EMP0001",
      name: "Perumal",
      role: "Coach / Trainer",
      email: "perumal@gmail.com",
      joiningDate: "10-02-2024",
      salary:"$18000",
    },
    {
      id: 2,
      empid: "EMP0002",
      name: "Sakthivel",
      role: "Coach / Trainer",
      email: "vel@gmail.com",
      joiningDate: "11-02-2024",
      salary:"$18000",
    },
  ]

  const columns = [
    { id: "empid", label: "Employe ID" },
    { id: "name", label: "Name" },
    { id: "role", label: "Role", isMobileDisable: true },
    { id: "email", label: "Contact Email", isMobileDisable: true },
    { id: "joiningDate", label: "Joining Date", isMobileDisable: true },
    { id: "salary", label: "Salary", isMobileDisable: true },
  ]

  const res_data = data.map(item => ({
    ...item,
    name: (
      <Link className="underline text-blue-500" to={"/employeecard"} rel="noopener noreferrer">
        {item.name}
      </Link>
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
      <div className="flex items-center align-middle  mb-4">
          <p className="text-2xl font-bold">
          Employee Salary <span className="text-3xl opacity-40"> |</span>{" "}
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
          <div className=" text-xs sm:text-base">Employee Salary</div>
        </div>

      <div className="flex items-center justify-between">
        <p className="text-xs sm:text-base font-semibold mt-2">List Of Employees</p>
        <div className="flex space-x-4">
          <Link
            to="/add-salary"
            className="text-black hover:bg-black hover:text-white border border-gray-300 px-2 py-1 mt-3 text-xs sm:text-base flex flex-row align-middle items-center rounded"
          >
            <HiMiniPlusSmall className="text-3xl" /> Add Salary
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

export default Payrolls;
