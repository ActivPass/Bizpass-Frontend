import React, { useState } from "react"
import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem"
import Button from "@mui/material/Button"
import StatesAndDistricts from "../../utils/data/StatesAndDistricts"

const AddClientForm = () => {
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
      <div className="bg-gray-100 p-5 rounded-lg">
          <div className="text-2xl font-semibold mb-4">
            <h2>
              <strong>Add</strong> Client
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

export default AddClientForm
