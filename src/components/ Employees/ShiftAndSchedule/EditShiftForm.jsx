import React from "react"
import { TextField, MenuItem, FormControl, Checkbox, FormGroup, FormControlLabel, Button } from "@mui/material"
import { GoChevronRight } from "react-icons/go"
import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"

const EditShiftForm = () => {
  const numbers = [1, 2, 3, 4]

  return (
    <div className="p-1 sm:p-5 ">
      <div className="flex items-center align-middle mb-5">
        <p className="text-2xl font-bold">
          Edit Shift <span className="text-3xl opacity-40"> |</span>{" "}
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
        <Link to={"/shift-schedule"} className=" text-xs sm:text-base font-semibold opacity-40">
          Shift & Schedule
        </Link>
        <GoChevronRight className="sm:text-xl opacity-40 " />
        <Link to={"/shift-list"} className=" text-xs sm:text-base font-semibold opacity-40">
          Shift List
        </Link>
        <GoChevronRight className="sm:text-xl opacity-40 " />
        <div className=" text-xs sm:text-base ">Edit Shift</div>
      </div>
      <form className="w-3/5  mx-auto border border-gray-200 rounded-lg px-5">
        <h3 className="text-xl font-bold text-center mb-10 mt-5">Edit Shift</h3>
        <div className="grid-cols-1 mb-3">
          <label className="col-form-label">
            Shift Name <span className="text-red-600">*</span>
          </label>
          <TextField variant="outlined" fullWidth />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="mb-3">
            <label className="col-form-label">
              Shift Start Time <span className="text-red-600">*</span>
            </label>
            <TextField type="time" variant="outlined" fullWidth />
          </div>
          <div className="mb-3">
            <label className="col-form-label">
              Shift End Time <span className="text-red-600">*</span>
            </label>
            <TextField type="time" variant="outlined" fullWidth />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="mb-3">
            <label className="col-form-label">
              Shift Duration <span className="text-red-600">*</span>
            </label>
            <TextField type="time" variant="outlined" fullWidth />
          </div>
          <div className="mb-3">
            <label className="col-form-label">
              Break Duration <span className="text-red-600">*</span>
            </label>
            <TextField type="time" variant="outlined" fullWidth />
          </div>
        </div>
        <div className="mb-3 flex items-center">
          <input className="mr-2" type="checkbox" id="customCheck1" />
          <label htmlFor="customCheck1">Recurring Shift</label>
        </div>
        <div className="mb-3">
          <label className="col-form-label">
            Repeat Every <span className="text-red-600">*</span>
          </label>
          <TextField select variant="outlined" defaultValue={1} fullWidth>
            {numbers.map(number => (
              <MenuItem key={number} value={number}>
                {number}
              </MenuItem>
            ))}
          </TextField>
          <span className="text-[14px]">Week(s)</span>
        </div>
        <div className="mb-3">
          <FormControl component="fieldset" className="wday-box">
            <FormGroup row>
              <FormControlLabel control={<Checkbox checked name="monday" />} label="M" />
              <FormControlLabel control={<Checkbox checked name="tuesday" />} label="T" />
              <FormControlLabel control={<Checkbox checked name="wednesday" />} label="W" />
              <FormControlLabel control={<Checkbox checked name="thursday" />} label="T" />
              <FormControlLabel control={<Checkbox checked name="friday" />} label="F" />
              <FormControlLabel control={<Checkbox name="saturday" />} label="S" />
              <FormControlLabel control={<Checkbox name="sunday" />} label="S" />
            </FormGroup>
          </FormControl>
        </div>
        <div className="mb-3">
          <TextField label="Edit Note" multiline rows={4} variant="outlined" fullWidth />
        </div>
        <div className="mt-6 text-center">
          <Button variant="contained" color="primary">
            Submit
          </Button>
          <Button variant="contained" color="error" style={{ marginLeft: "8px" }}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  )
}

export default EditShiftForm
