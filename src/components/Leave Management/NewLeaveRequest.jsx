import React from "react"
import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem"
import Button from "@mui/material/Button"
import NavHeader from "../NavHeader"
import { Link } from "react-router-dom"
import { GoChevronRight } from "react-icons/go"
import { FaHome } from "react-icons/fa"

const NewLeaveRequest = () => {
  return (
    <div className="p-1 md:p-5">
      {/* <div className="flex items-center align-middle">
        <p className="text-2xl font-bold">
          New Leave Request <span className="text-3xl opacity-40"> |</span>{" "}
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
        <Link to={"/leavemanagement"} className=" text-xs sm:text-base font-semibold opacity-40">
          All Leave Request
        </Link>
        <GoChevronRight className="sm:text-xl opacity-40 " />
        <div className=" text-xs sm:text-base ">New Leave Request</div>
      </div> */}
      <NavHeader
        current={{ name: "New Leave request app" }}
        previous={[
          { name: "Home", link: "/" },
          { name: "Leave request", link: "/leavemanagement" },
        ]}
      />
      <div className=" p-6 bg-gray-100 rounded-lg shadow-lg mt-5">
        <h2 className="text-2xl font-semibold mb-4"> New Leave Request</h2>
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
            <TextField id="employeeid" label="Employee ID" variant="standard" className="w-full" required />
          </div>
          <div>
            <TextField id="leavetype" select label="Leave Type" variant="standard" className="w-full" required>
              <MenuItem disabled value="">
                Select Leave Type
              </MenuItem>
              <MenuItem value="Annual leave">Annual leave</MenuItem>
              <MenuItem value="Sick Leave">Sick Leave</MenuItem>
              <MenuItem value="Casual Leave">Casual Leave</MenuItem>
              <MenuItem value="Maternity Leave">Maternity Leave</MenuItem>
              <MenuItem value="Paternity Leave">Paternity leave</MenuItem>
              <MenuItem value="Bereavement leave">Bereavement leave</MenuItem>
              <MenuItem value="Marriage leave"> Marriage leave</MenuItem>
              <MenuItem value="Unpaid leave">Unpaid leave ( LOP )</MenuItem>
            </TextField>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div>
            <TextField id="fromDate" label="From Date" variant="standard" className="w-full" required />
          </div>
          <div>
            <TextField id="toDate" label="To Date" variant="standard" className="w-full" required />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div>
            <TextField id="numberDays" label="Number of Days" variant="standard" className="w-full" required />{" "}
          </div>
          <div>
            <TextField id="remainingDays" label="Remaining Days" variant="standard" className="w-full" required />{" "}
          </div>
        </div>
        <div className="mt-10">
          <TextField id="reason" label="Reason" multiline rows={3} variant="standard" className="w-full" required />
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

export default NewLeaveRequest
