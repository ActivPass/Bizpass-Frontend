import { Typography } from "@mui/material"
import React from "react"
import ImageUpload from "./ImageUpload"

function InvoiceSettings() {
  return (
    <div className="bg-white rounded-lg w-[70%] p-8">
      <Typography variant="h5">Invoice Settings</Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
        <div className="mb-4">
          <label htmlFor="invoicePrefix" className="block text-sm font-medium text-gray-700">
            Invoice Prefix
          </label>
          <input
            type="text"
            id="invoicePrefix"
            name="invoicePrefix"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter Invoice Prefix"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="digitSignatureName" className="block text-sm font-medium text-gray-700">
            Digital Signature Name
          </label>
          <input
            type="text"
            id="digitSignatureName"
            name="digitSignatureName"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter Digital Signature Name"
          />
        </div>

        <div className="mb-4">
          <ImageUpload name={"Invoice Logo"} types={"SVG, PNG, JPG"} maxWidth={800} maxHeight={400} />
        </div>

        <div className="mb-4">
          <ImageUpload name={"Digital Signature Image"} types={"SVG, PNG, JPG"} maxWidth={35} maxHeight={35} />
        </div>
      </div>
    </div>
  )
}

export default InvoiceSettings
