import React, { useState } from "react"
import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem"
import Button from "@mui/material/Button"
import StatesAndDistricts from "../../utils/data/StatesAndDistricts"
import { Link } from "react-router-dom"
import { GoChevronRight } from "react-icons/go"
import { FaHome } from "react-icons/fa"

const EditClientForm = () => {
  const [selectedState, setSelectedState] = useState("")
  const [selectedDistrict, setSelectedDistrict] = useState("")

  const handleStateChange = event => {
    setSelectedState(event.target.value)
    setSelectedDistrict("")
  }

  const handleDistrictChange = event => {
    setSelectedDistrict(event.target.value)
  }

  return (
    <div className="m-1 sm:m-5">
      <div className="flex items-center align-middle  mb-4">
          <p className="text-2xl font-bold">
          Edit Clients <span className="text-3xl opacity-40"> |</span>{" "}
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
          <Link to={"/clients"} className=" text-xs sm:text-base font-semibold opacity-40">
          <div className=" text-xs sm:text-base">Clients</div>
          </Link>
          <GoChevronRight className="sm:text-xl opacity-40 " />
          <div className=" text-xs sm:text-base">Edit Client</div>
        </div>
      <div className="bg-gray-100 p-5 rounded-lg">
          <div className="font-semibold mb-4">
            <h2>
              <strong>Edit</strong> Client
            </h2>
          </div>
          <div className="body">
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
                <TextField id="designation" label="Designation" variant="standard" className="w-full" required />
              </div>
              <div>
                <TextField id="gender" select label="Gender" variant="standard" className="w-full" required>
                  <MenuItem disabled value="">
                    Select gender
                  </MenuItem>
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="female">Transgender</MenuItem>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div>
                <TextField
                  id="state"
                  select
                  label="State"
                  variant="standard"
                  className="w-full"
                  required
                  value={selectedState}
                  onChange={handleStateChange}
                >
                  <MenuItem disabled value="">
                    Select state
                  </MenuItem>
                  {StatesAndDistricts.states.map((state, index) => (
                    <MenuItem key={index} value={state.state}>
                      {state.state}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div>
                <TextField
                  id="district"
                  select
                  label="District"
                  variant="standard"
                  className="w-full"
                  required
                  value={selectedDistrict}
                  onChange={handleDistrictChange}
                >
                  <MenuItem disabled value="">
                    Select district
                  </MenuItem>
                  {selectedState &&
                    StatesAndDistricts.states
                      .find(state => state.state === selectedState)
                      .districts.map((district, index) => (
                        <MenuItem key={index} value={district}>
                          {district}
                        </MenuItem>
                      ))}
                </TextField>
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
    </div>
  )
}

export default EditClientForm
