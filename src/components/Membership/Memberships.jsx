import React, { useState } from "react"
import { Tables } from "../../utils/components/index"
import { Link } from "react-router-dom"
import { HiMiniPlusSmall, HiPencil } from "react-icons/hi2"
import { MdDeleteForever } from "react-icons/md"
import PieChart from "./PieChart"
import { Button } from "@mui/material"
import { GoChevronRight } from "react-icons/go"
import { FaHome } from "react-icons/fa"

const Memberships = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [filter, setFilter] = useState("")

  const data = [
    {
      id: 1,
      empid: "EMP0001",
      name: "Perumal",
      role: "Coach / Trainer",
      phone: "9500319273",
      email: "perumal@gmail.com",
      joiningDate: "10-02-2024",
    },
    {
      id: 2,
      empid: "EMP0002",
      name: "Sakthivel",
      role: "Coach / Trainer",
      phone: "6381458872",
      email: "vel@gmail.com",
      joiningDate: "11-02-2024",
    },
  ]

  const columns = [
    { id: "empid", label: "Employe ID" },
    { id: "name", label: "Name" },
    { id: "role", label: "Role", isMobileDisable: true },
    { id: "phone", label: "Contact Phone", isMobileDisable: true },
    { id: "email", label: "Contact Email", isMobileDisable: true },
    { id: "joiningDate", label: "Joining Date", isMobileDisable: true },
    { id: "action", label: "Action", isMobileDisable: true, isSortDisable: true },
  ]

  const res_data = data.map(item => ({
    ...item,
    name: (
      <Link className="underline text-blue-500" to={"/employeecard"} rel="noopener noreferrer">
        {item.name}
      </Link>
    ),
    action: (
      <div className="flex flex-row gap-3">
        <Link to="/editemployee">
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
      item.empid.toLowerCase().includes(filter.toLowerCase()) || item.role.toLowerCase().includes(filter.toLowerCase())
  )

  const user = {
    partnerName: "Wolf Fitness Center",
    name: "Sakthi Pandiyan",
    team: "Team Wolf",
    email: "pandi@gmail.com",
    phone: "6381458872",
    status: "Active",
  }

  const toggleStatus = () => {
    setUser(prevUser => ({
      ...prevUser,
      status: prevUser.status === "Active" ? "Inactive" : "Active",
    }))
  }

  const handlePayNow = () => {
    alert("Payment initiated for user:", user.name)
  }

  return (
    <div className="p-1 sm:p-5">
      <div className="flex items-center align-middle  mb-4">
          <p className="text-2xl font-bold">
          Membership <span className="text-3xl opacity-40"> |</span>{" "}
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
          <div className=" text-xs sm:text-base">Membership</div>
        </div>
      <div className="text-base mb-2">Your Profile</div>
      <section className="grid grid-flow-rows gap-4 sm:grid-flow-col sm:grid-cols-2  sm:gap-4">
        <main className="bg-gray-200  rounded-md m-0 sm:mr-8">
          <aside className="flex flex-grow justify-between">
            <div className="text-3xl bg-gray-400 rounded-full m-2 sm:m-4 flex items-center justify-center h-20 w-20 ">
              {user.partnerName.slice(0, 1).toUpperCase()}
            </div>
            <div className="m-2 sm:m-4">
              <h2 className="font-bold">{user.partnerName}</h2>
              <p className="text-sm opacity-50">{user.name}</p>
              <p className="text-sm opacity-50">{user.team}</p>
            </div>
            <div className="p-4 flex flex-col gap-3">
              <Button
                variant="contained"
                size="small"
                color={user.status === "Active" ? "success" : "error"}
                onClick={toggleStatus}
              >
                {user.status === "Active" ? "Active" : "Inactive"}
              </Button>
              {user.status !== "Active" && (
                <Button variant="contained" color="primary" onClick={handlePayNow}>
                  Renewal
                </Button>
              )}
            </div>
          </aside>
          <article className="m-4">
            <h3 className="text-md font-bold">Contact Email</h3>
            <p className="text-sm opacity-50">{user.email}</p>
            <h3 className="text-md font-bold mt-3">Contact Phone</h3>
            <p className="text-sm opacity-50">{user.phone}</p>
          </article>
        </main>

        <main className="bg-gray-200 sm:w-full sm:h-full w-full h-52 rounded-md">
          <p className=" p-3">Attendance record</p>
          <PieChart />
        </main>
      </section>
      <div className="flex items-center justify-between">
        <p className="text-xs sm:text-base font-semibold mt-2">List Of Employees</p>
        <div className="flex space-x-4">
          <Link
            to="/addemployee"
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
