import React, { useState } from "react"
import { Link } from "react-router-dom"
import { HiMiniPlusSmall } from "react-icons/hi2"
import { Tables } from "../../utils/components/index"
import Card from "./Card"
import NavHeader from "../NavHeader"
import EmpImg from "../../assets/images/employee.svg"
import Present from "../../assets/images/present.svg"
import Absent from "../../assets/images/absent.svg"
import Money from "../../assets/images/money.svg"
import RowNavigation from "./RowNavigation"

const ClientTable = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [filter, setFilter] = useState("")

  const data = [
    {
      id: 1,
      empid: "1001",
      name: "Aakash",
      phone: "+91 9500319273",
      type: "Annual",
      status: "Inactive",
    },
    {
      id: 2,
      empid: "1002",
      name: "Krishna",
      phone: "+91 6381458872",
      type: "Half",
      status: "Active",
    },
    {
      id: 3,
      empid: "1003",
      name: "Sathish",
      phone: "+91 6381458872",
      type: "Half",
      status: "Active",
    },
  ]

  const columns = [
    { id: "empid", label: "Client ID", isSortDisable: true },
    { id: "name", label: "Name", isSortDisable: true },
    { id: "phone", label: "Contact", isMobileDisable: true, isSortDisable: true },
    { id: "type", label: "Type", isMobileDisable: true, isSortDisable: true },
    { id: "status", label: "Status", isMobileDisable: true, isSortDisable: true },
    { id: "action", label: "Action", isMobileDisable: true, isSortDisable: true },
  ]

  const res_data = data.map(item => ({
    ...item,
    name: (
      <Link className="text-blue-500" to={"/client-profile"} rel="noopener noreferrer">
        {item.name}
      </Link>
    ),
    status: (
      <div className="">
        {item.status === "Active" && (
          <div className="flex flex-row items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <div className="status-span text-green-500 rounded">Active</div>
          </div>
        )}
        {item.status === "Inactive" && (
          <div className="flex flex-row items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <div className="status-span text-red-500 rounded">Inactive</div>
          </div>
        )}
      </div>
    ),
    action: (
      <div className="flex flex-row gap-3">
        <Link to="/client-profile">
          <div className="text-base text-blue-500 px-3 py-1 hover:bg-blue-500 hover:text-white border border-blue-500 rounded-lg">
            View
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
      name: "Total Clients",
      sub: "Over All",
      price: "1200",
      img: EmpImg,
      css: "bg-orange-50 text-orange-400",
    },

    {
      id: 2,
      name: "New Clients",
      sub: "This Month",
      price: "180",
      img: Present,
      css: "bg-blue-50 text-blue-500",
    },
    {
      id: 3,
      name: "Present",
      sub: "Today",
      price: "1120",
      img: Absent,
      css: "bg-green-50 text-green-500",
    },
    {
      id: 4,
      name: "Absent",
      sub: "Today",
      price: "80",
      img: Money,
      css: "bg-rose-50 text-rose-500",
    },
  ]

  return (
    <div className="pt-5">
      <RowNavigation />
      <NavHeader
        current={{ name: "Clients Zone" }}
        previous={
          [
            // { name: "Home", link: "/" },
            // { name: "Clients", link: "/clients" },
          ]
        }
      />
      <section className="">
        <div className="grid sm:grid-cols-4 grid-flow-row pb-6 gap-6">
          {Incomes.map(obj => {
            return <Card data={obj} key={obj.id}></Card>
          })}
        </div>
      </section>

      <div className="flex items-center justify-between">
        <p className="text-xs sm:text-base font-semibold mt-2">List Of Clients</p>
        <div className="flex space-x-4">
          <Link
            to="/addclient"
            className="bg-[#5D87FF] text-white hover:bg-[#4777fa] hover:text-white border border-gray-300 px-2 py-1 mt-3 text-xs sm:text-base flex flex-row align-middle items-center rounded-md"
          >
            <HiMiniPlusSmall className="text-2xl" /> Add Client
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

export default ClientTable
