import React from "react"
import { Link } from "react-router-dom"
import { GoChevronRight } from "react-icons/go"
import { FaHome } from "react-icons/fa"
import NavHeader from "../NavHeader"
import { EmployeeForm } from "./EmployeeForm"


const AddEmployeeForm = () => {
  return (
    <div className="p-1 md:p-5">
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
          <Link to={"/employees"} className=" text-xs sm:text-base font-semibold opacity-40">
          <div className=" text-xs sm:text-base">Employees</div>
          </Link>
          <GoChevronRight className="sm:text-xl opacity-40 " />
          <div className=" text-xs sm:text-base">Add Employee</div>
        </div> */}

      <NavHeader
        current={{ name: "Add Employee" }}
        previous={[
          { name: "Home", link: "/" },
          { name: "Employees", link: "/employees" },
        ]}
      />

      <EmployeeForm />
    </div>
  )
}




export default AddEmployeeForm
