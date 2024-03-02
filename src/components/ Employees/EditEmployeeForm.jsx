import React from "react"
import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem"
import Button from "@mui/material/Button"
import { Link } from "react-router-dom"
import { GoChevronRight } from "react-icons/go"
import { FaHome } from "react-icons/fa"


const EditEmployeeForm = () => {
  return (
    <div className="p-1 md:p-5">
      <div className="flex items-center align-middle  mb-4">
          <p className="text-2xl font-bold">
          Edit Employee <span className="text-3xl opacity-40"> |</span>{" "}
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
          <div className=" text-xs sm:text-base">Edit Employee</div>
        </div>
      <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="font-semibold mb-4">
          {" "}
          <strong>Edit</strong> Employee
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <TextField id="firstName" label="First Name" variant="standard" className="w-full" required />
          </div>
          <div>
            <TextField id="lastName" label="Last Name" variant="standard" className="w-full" required />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div>
            <TextField id="email" label="Email" variant="standard" className="w-full" required />
          </div>
          <div>
            <TextField id="joiningDate" label="Joining Date" variant="standard" className="w-full" required />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div>
            <TextField id="designation" select label="Designation" variant="standard" className="w-full" required>
              <MenuItem disabled value="">
                Select designation
              </MenuItem>
              <MenuItem value="Coach">Coach</MenuItem>
              <MenuItem value="Trainer">Trainer</MenuItem>
              <MenuItem value="Supervisor">Supervisor</MenuItem>
              <MenuItem value="Manager">Manager</MenuItem>
              <MenuItem value="Accountant">Accountant</MenuItem>
              <MenuItem value="Housekeeping">Housekeeping</MenuItem>
            </TextField>
          </div>
          <div>
            <TextField id="gender" select label="Gender" variant="standard" className="w-full" required>
              <MenuItem disabled value="">
                Select gender
              </MenuItem>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Transgender">Transgender</MenuItem>
            </TextField>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div>
            <TextField id="telephone" label="Phone" variant="standard" className="w-full" required />
          </div>
          <div>
            <TextField id="birthDate" label="Birth Date" variant="standard" className="w-full" required />
          </div>
        </div>
        <div className="mt-10">
          <TextField id="address" label="Address" multiline rows={3} variant="standard" className="w-full" required />
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

export default EditEmployeeForm
