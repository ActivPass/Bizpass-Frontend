import { Typography } from "@mui/material"
import React from "react"
import ImageUpload from "./ImageUpload"

function CompanySettings() {
  return (
    <div className="bg-white rounded-lg w-[70%] p-8">
      <Typography variant="h5">Company Settings</Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
        <div className="mb-4">
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter Company Name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="companyAddress" className="block text-sm font-medium text-gray-700">
            Company Address
          </label>
          <input
            type="text"
            id="companyAddress"
            name="companyAddress"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter Company Address"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter Phone Number"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="companyEmail" className="block text-sm font-medium text-gray-700">
            Company Email
          </label>
          <input
            type="email"
            id="companyEmail"
            name="companyEmail"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter Company Email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700">
            Address Line 1
          </label>
          <input
            type="text"
            id="addressLine1"
            name="addressLine1"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter Address Line 1"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700">
            Address Line 2
          </label>
          <input
            type="text"
            id="addressLine2"
            name="addressLine2"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter Address Line 2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter Country"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter State"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter City"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">
            Pincode
          </label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter Pincode"
          />
        </div>
        <div className="mb-4 col-span-2">
          <ImageUpload name={"Site Logo"} types={"SVG, PNG, JPG"} maxWidth={800} maxHeight={400} />
        </div>
        <div className="mb-4">
          <ImageUpload name={"Favicon"} types={"SVG, PNG, JPG"} maxWidth={35} maxHeight={35} />
        </div>

        <div className="mb-4">
          <ImageUpload name={"Company Logo"} types={"SVG, PNG, JPG"} maxWidth={800} maxHeight={400} />
        </div>
      </div>
    </div>
  )
}

export default CompanySettings
