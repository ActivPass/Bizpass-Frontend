import React from "react"
import RowNavigation from "./RowNavigation"
import NavHeader from "../NavHeader"
import { MdOutlineCloudUpload } from "react-icons/md"

const AddPayment = () => {
  return (
    <div className="pt-5">
      <RowNavigation />
      <NavHeader current={{ name: "Client Zone" }} previous={[{ name: "Home", link: "/clients" }]} />
      <div className="p-5 border rounded-lg mb-5">
        <div className="">
          <p className="text-xl pb-5">Add Payment</p>
          <form className="grid grid-cols-3 gap-5">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="mobile_number">
                Mobile Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="mobile_number"
                type="text"
                placeholder="Enter Mobile Number"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="customer_name">
                Customer Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="customer_name"
                type="text"
                placeholder="Enter Customer Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="invoice_date">
                Invoice Date
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="invoice_date"
                type="date"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="due_date">
                Due Date
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="due_date"
                type="date"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="status">
                Status
              </label>
              <select
                className="shadow border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
                id="status"
              >
                <option value="paid">Choose a status</option>
                <option value="paid">Paid</option>
                <option value="unpaid">Unpaid</option>
                <option value="overdue">Overdue</option>
                <option value="partially_paid">Partially Paid</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="reference_number">
                Reference Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="reference_number"
                type="text"
                placeholder="Enter Reference Number"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="recurring_cycle">
                Recurring Cycle
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="recurring_cycle"
                type="text"
                placeholder="Enter Recurring Cycle"
              />
            </div>
          </form>
        </div>

        <div className="flex gap-5">
          <div className="w-[560px] h-[420px] border rounded-lg bg-gray-100">
            <form action="" className="p-4">
              <div className="flex justify-center items-center gap-5">
                <div className="w-3/4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="bank">
                    Select Bank
                  </label>
                  <select
                    className="shadow border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
                    id="bank"
                  >
                    <option value="paid">Choose a Bank</option>
                    <option value="paid">IOB</option>
                    <option value="unpaid">HDFC</option>
                    <option value="overdue">IDFC</option>
                    <option value="partially_paid">KVB</option>
                    <option value="cancelled">SBI</option>
                  </select>
                </div>
                <div className="mt-6">
                  <button className="bg-blue-500 p-2 text-white rounded-md hover:bg-blue-600 ">Add Bank</button>
                </div>
              </div>
              <div className="flex flex-col mb-4">
                <label className="block text-gray-700 text-sm font-bold my-2" htmlFor="Notes">
                  Notes
                </label>
                <textarea
                  name="Notes"
                  className="shadow border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
                  placeholder="Enter Notes"
                  cols="20"
                  rows="4"
                ></textarea>
              </div>
              <div className="block text-gray-700 ">
                <label htmlFor="Terms" className="block text-gray-700 text-sm font-bold mb-2">
                  Terms and Conditions
                </label>
                <textarea
                  name="Terms"
                  className="shadow border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
                  placeholder="Enter Terms and Conditions"
                  cols="20"
                  rows="4"
                ></textarea>
              </div>
            </form>
          </div>
          <div className="w-[560px] h-[420px] border rounded-lg bg-gray-100 p-5">
            <div className="">
              <ul>
                <li className="flex justify-between py-3">
                  <p className="opacity-70">Taxable Amount</p>
                  <p className="font-semibold">$1360.00</p>
                </li>
                <li className="flex justify-between">
                  <p className="opacity-70">Discount</p>
                  <p className="font-semibold">$136.00</p>
                </li>
                <li className="flex justify-between py-3">
                  <p className="opacity-70">Vat</p>
                  <p className="font-semibold">$0.00</p>
                </li>
                <li className="flex justify-between">
                  <p className="opacity-70 flex gap-3">
                    Round Off <input type="checkbox" className="toggle toggle-primary" />
                  </p>
                  <p className="font-semibold">$0.00</p>
                </li>
                <li className="flex justify-between py-3">
                  <p className="font-semibold">Total Amount</p>
                  <p className="font-semibold">$1224.00</p>
                </li>
              </ul>
            </div>
            <div className="mt-7">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="customer_name">
                Signature Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="customer_name"
                type="text"
                placeholder="Enter Signature Name"
              />
            </div>
            <div class="mt-7">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="signature">
                Signature Image
              </label>
              <div class="relative">
                <input class="hidden" id="signature" type="file" placeholder="Upload Signature" />
                <label
                  for="signature"
                  class="cursor-pointer flex items-center justify-center gap-1 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                >
                  <MdOutlineCloudUpload className="text-2xl" />
                  Upload Signature
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center gap-5 my-5">
          <button className="border border-blue-500 w-[5rem] text-blue-500 hover:bg-blue-500 hover:text-white px-3 py-1 rounded-md">Cancel</button>
          <button className="border border-blue-500 bg-blue-500 hover:bg-blue-600 w-[5rem] text-white px-3 py-1 rounded-md">Save</button>
        </div>
      </div>
    </div>
  )
}

export default AddPayment
