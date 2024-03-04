import React, { useState } from "react"
import { Tables } from "../../utils/components/index"
import { Link } from "react-router-dom"
import { HiMiniPlusSmall, HiPencil } from "react-icons/hi2"
import { MdDeleteForever } from "react-icons/md"
import { GoChevronRight } from "react-icons/go"
import { FaHome } from "react-icons/fa"
import NavHeader from "../NavHeader"
import Card from "./Card"
import EmpImg from "../../assets/images/employee.svg"
import Present from "../../assets/images/present.svg"
import Absent from "../../assets/images/absent.svg"
import Money from "../../assets/images/money.svg"
import RowNavigation from "./RowNavigation"

const Employees = () => {
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
      <Link className="underline text-blue-500" to={"/employee-profile"} rel="noopener noreferrer">
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

  let Incomes = [
    {
      id: 1,
      name: "Total Employee",
      sub: "Over All",
      price: "1200",
      img: EmpImg,
      css: "bg-orange-50 text-orange-400",
    },

    {
      id: 2,
      name: "Present",
      sub: "Today",
      price: "1180",
      img: Present,
      css: "bg-green-50 text-green-500",
    },
    {
      id: 3,
      name: "Absent",
      sub: "Today",
      price: "20",
      img: Absent,
      css: "bg-rose-50 text-rose-500",
    },
    {
      id: 4,
      name: "Salary",
      sub: "This Month",
      price: "$ 1012342",
      img: Money,
      css: "bg-blue-50 text-blue-500",
    },
  ]

  return (
    <div className="p-1 sm:p-5">
      {/* <div className="flex items-center align-middle  mb-4">
        <p className="text-2xl font-bold">
          Employees <span className="text-3xl opacity-40"> |</span>{" "}
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
        <div className=" text-xs sm:text-base">Employees</div>
      </div> */}
      <RowNavigation/>
      <NavHeader
        current={{ name: "Employees Zone" }}
        previous={[
          { name: "Home", link: "/" },
          { name: "Employees", link: "/employees" },
        ]}
      />
      <section className="">
        <div className="grid sm:grid-cols-4 grid-flow-row pb-6 gap-6">
          {Incomes.map(obj => {
            return <Card data={obj} key={obj.id}></Card>
          })}
        </div>
      </section>

      <div className="flex items-center justify-between">
        <p className="text-xs sm:text-base font-semibold mt-2">List Of Employees</p>
        <div className="flex space-x-4">
          <Link
            to="/addemployee"
            className="bg-[#5D87FF] text-white hover:bg-[#4777fa] hover:text-white border border-gray-300 px-2 py-1 mt-3 text-xs sm:text-base flex flex-row align-middle items-center rounded"
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

export default Employees
