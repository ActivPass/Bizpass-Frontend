import { Button, Divider, Switch, Typography } from "@mui/material"
import React from "react"

function PaymentMethods() {
  return (
    <div className="bg-white rounded-lg w-[70%] p-8">
      <Typography variant="h5">Payment Settings</Typography>
      <div>
        <div>
          <div className="flex w-full mt-4 justify-between">
            <Typography variant="h6">Strip</Typography>
            <Switch defaultChecked />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
            <div className="mb-4">
              <label htmlFor="stripeKey" className="block text-sm font-medium text-gray-700">
                Stripe Key
              </label>
              <input
                type="text"
                id="stripeKey"
                name="stripeKey"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter Stripe Key"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="stripeSecret" className="block text-sm font-medium text-gray-700">
                Stripe Secret
              </label>
              <input
                type="text"
                id="stripeSecret"
                name="stripeSecret"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter Stripe Secret"
              />
            </div>
          </div>
        </div>

        <Divider />

        <div>
          <div className="flex w-full mt-4 justify-between">
            <Typography variant="h6">Paypal</Typography>
            <Switch defaultChecked />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="mb-4">
              <label htmlFor="paypalClientId" className="block text-sm font-medium text-gray-700">
                Paypal Client Id
              </label>
              <input
                type="text"
                id="paypalClientId"
                name="paypalClientId"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter Paypal Client Id"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="paypalSecret" className="block text-sm font-medium text-gray-700">
                Paypal Secret
              </label>
              <input
                type="text"
                id="paypalSecret"
                name="paypalSecret"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter Paypal Secret"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="paypalMode" className="block text-sm font-medium text-gray-700">
                Paypal Mode
              </label>
              <input
                type="text"
                id="paypalMode"
                name="paypalMode"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter Paypal Mode"
              />
            </div>
          </div>
        </div>

        <Divider />

        <div>
          <div className="flex w-full mt-4 justify-between">
            <Typography variant="h6">Razorpay</Typography>
            <Switch defaultChecked />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
            <div className="mb-4">
              <label htmlFor="razorpayKeyId" className="block text-sm font-medium text-gray-700">
                Razorpay Key Id
              </label>
              <input
                type="text"
                id="razorpayKeyId"
                name="razorpayKeyId"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter Razorpay Key Id"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="razorpaySecret" className="block text-sm font-medium text-gray-700">
                Razorpay Secret
              </label>
              <input
                type="text"
                id="razorpaySecret"
                name="razorpaySecret"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter Razorpay Secret"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Button sx={{ backgroundColor: "#EADDFF", color: "black", textTransform: "none" }}>Cancel</Button>
          <Button
            sx={{
              backgroundColor: "#7539FF",
              color: "white",
              ":hover": { backgroundColor: "white", color: "#7539FF" },
              border: "solid",
              borderColor: "#7539FF",
              textTransform: "none",
            }}
          >
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethods
