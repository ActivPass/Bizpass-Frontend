import React from "react"
import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem"
import Button from "@mui/material/Button"
import { Link } from "react-router-dom"
import { GoChevronRight } from "react-icons/go"
import { FaHome } from "react-icons/fa"


const AddSalaryForm = () => {
  return (
    <div className="p-1 md:p-5">
      <div className="flex items-center align-middle  mb-4">
          <p className="text-2xl font-bold">
          Add Employee Salary <span className="text-3xl opacity-40"> |</span>{" "}
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
          <Link to={"/payroll"} className=" text-xs sm:text-base font-semibold opacity-40">
          <div className=" text-xs sm:text-base">Payroll</div>
          </Link>
          <GoChevronRight className="sm:text-xl opacity-40 " />
          <div className=" text-xs sm:text-base">Add Employee Salary</div>
        </div>
      <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="font-semibold mb-4">
          {" "}
          <strong>Add</strong> Staff Salary
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
            <TextField id="selectstaff" select label="Select Staff" variant="standard" className="w-full" required>
              <MenuItem disabled value="">
              Select Staff
              </MenuItem>
              <MenuItem value="Aakash">Aakash</MenuItem>
              <MenuItem value="Krishna">Krishna</MenuItem>
              <MenuItem value="Devan">Devan</MenuItem>
              <MenuItem value="Stephen">Stephen</MenuItem>
            </TextField>
          </div>
          <div>
            <TextField id="netsalary" label="Net Salary" variant="standard" className="w-full" required />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div>
            <p className="py-5 font-bold">Earnings</p>
            <TextField id="basic" label="Basic" variant="standard" className="w-full" required />
          </div>
          <div>
          <p className="py-5 font-bold">Deductions</p>
            <TextField id="tds" label="TDS" variant="standard" className="w-full"  required />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div>
            <TextField id="da" label="DA(40%)" variant="standard" className="w-full"  required />
          </div>
          <div>
            <TextField id="esi" label="ESI" variant="standard" className="w-full" required />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div>
            <TextField id="hra" label="HRA(15%)" variant="standard" className="w-full"  required />
          </div>
          <div>
            <TextField id="pf" label="PF" variant="standard" className="w-full" required />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div>
            <TextField id="Conveyance" label="Conveyance" variant="standard" className="w-full" required />
          </div>
          <div>
            <TextField id="Leave" label="Leave" variant="standard" className="w-full" required />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div>
            <TextField id="Allowance" label="Allowance" variant="standard" className="w-full" required />
          </div>
          <div>
            <TextField id="Medical Allowance" label="Medical Allowance" variant="standard" className="w-full" required />
          </div>
        </div>
        <div className="mt-6 text-center">
          <Button variant="contained" color="primary">
            Submit
          </Button>
          <Button variant="contained" color="error" style={{ marginLeft: "8px" }}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AddSalaryForm;
