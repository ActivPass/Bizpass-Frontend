import React, { useState } from "react"
import { Button, TextField } from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { GoChevronRight } from "react-icons/go"
import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"

const OverTimeFrom = () => {
  const [formData, setFormData] = useState({
    employee: "",
    selectedDate: null,
    overtimeHours: "",
    description: "",
  })

  const handleChange = event => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleDateChange = date => {
    setFormData({ ...formData, selectedDate: date })
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log("Form submitted:", formData)
    // Clear form data
    setFormData({
      employee: "",
      selectedDate: null,
      overtimeHours: "",
      description: "",
    })
  }

  return (
    <div className="p-1 sm:p-5 ">
      <div className="flex items-center align-middle mb-12">
        <p className="text-2xl font-bold">
          Add Overtime <span className="text-3xl opacity-40"> |</span>{" "}
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
        <Link to={"/over-time"} className=" text-xs sm:text-base font-semibold opacity-40">
        Overtime
        </Link>
        <GoChevronRight className="sm:text-xl opacity-40 " />
        <div className=" text-xs sm:text-base ">Add Overtime</div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col w-3/6 mx-auto border border-gray-200 rounded-lg px-5">
        <p className="text-xl font-bold text-center my-10">Add Overtime</p>
        <div className="input-block mb-3">
          <div className="input-block mb-3">
            <label className="">
              Employee <span className="text-red-500">*</span>
            </label>
            <TextField
              name="employee"
              className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
              type="text"
              value={formData.employee}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="input-block mb-3">
          <label className="">
            Overtime Date <span className="text-red-500">*</span>
          </label>
          <div className="">
            <div className="relative">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  name="selectedDate"
                  className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                  value={formData.selectedDate}
                  onChange={handleDateChange}
                  renderInput={params => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
          </div>
        </div>
        <div className="input-block mb-3">
          <label className="">
            Overtime Hours <span className="text-red-500">*</span>
          </label>
          <TextField
            name="overtimeHours"
            className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
            type="number"
            value={formData.overtimeHours}
            onChange={handleChange}
          />
        </div>
        <div className="input-block mb-3">
          <label className="">
            Description <span className="text-red-500">*</span>
          </label>
          <TextField
            name="description"
            className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
            multiline
            rows={4}
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="mx-auto">
          <Button variant="contained" color="primary" aria-label="Close" type="submit" style={{ marginBottom: "12px" }}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default OverTimeFrom
