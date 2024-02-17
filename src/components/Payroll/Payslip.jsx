import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";

const Payslip = () => {
  return (
    <div className="m-5">
         <div className="flex items-center align-middle  mb-4">
        <p className="text-2xl font-bold">
          Payslip <span className="text-3xl opacity-40"> |</span>{" "}
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
        <div className=" text-xs sm:text-base">Payslip</div>
      </div>
      <div className="bg-gray-50 border border-gray-300 p-8 rounded-lg shadow-lg">
        <h1 className="text-xl text-center mb-6 font-semibold underline">PAYSLIP FOR THE MONTH OF FEB 2024</h1>

        <div class="flex justify-between gap-5 mb-4">
          <div class="w-full md:w-1/2 flex flex-col md:flex-row md:mb-4 py-4">
            <div class="md:mr-4">
              <p class="mb-2">Activpass Infotech</p>
              <p class="mb-2">18 Teeds garden ,4th street,</p>
              <p>Perambur,Chennai 600011</p>
            </div>
          </div>
          <div class="w-full md:w-1/2  p-4">
            <div class="text-right">
              <h2 class="uppercase font-semibold text-xl mb-4">Payslip #49029</h2>
              <p>
                <span class="font-semibold">Salary Month:</span> March, 2024
              </p>
            </div>
          </div>
        </div>

        <div class="mb-4">
          <h3 class="text-xl font-bold mb-2">Employee Details</h3>
          <div class="">
            <div>
              <p>
                <strong>Employee Name:</strong> John Doe
              </p>
              <p>
                <strong>Employee ID:</strong> FT-0009
              </p>
            </div>
            <div>
              <p>
                <strong>Designation:</strong> Web Designer
              </p>
              <p>
                <strong>Joining Date:</strong> 1 Jan 2024
              </p>
            </div>
          </div>
        </div>

        <div class="flex justify-between gap-5 mb-4">
          <div class="w-full md:w-1/2">
            <div class="mb-6">
              <h3 class="text-xl font-bold mb-2">Earnings</h3>
              <table class="table-auto w-full border-collapse border border-gray-300">
                <tbody>
                  <tr>
                    <td class="py-2 px-4 border border-gray-300">Basic Salary</td>
                    <td class="py-2 px-4 border border-gray-300 text-right">$6500</td>
                  </tr>
                  <tr>
                    <td class="py-2 px-4 border border-gray-300">House Rent Allowance (H.R.A.)</td>
                    <td class="py-2 px-4 border border-gray-300 text-right">$55</td>
                  </tr>
                  <tr>
                    <td class="py-2 px-4 border border-gray-300">Conveyance</td>
                    <td class="py-2 px-4 border border-gray-300 text-right">$55</td>
                  </tr>
                  <tr>
                    <td class="py-2 px-4 border border-gray-300">Other Allowance</td>
                    <td class="py-2 px-4 border border-gray-300 text-right">$55</td>
                  </tr>
                  <tr>
                    <td class="font-semibold py-2 px-4 border border-gray-300">Total Earnings</td>
                    <td class="font-semibold py-2 px-4 border border-gray-300 text-right">$55</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <div class="mb-6">
              <h3 class="text-xl font-bold mb-2">Deductions</h3>
              <table class="table-auto w-full border-collapse border border-gray-300">
                <tbody>
                  <tr>
                    <td class="py-2 px-4 border border-gray-300">Tax Deducted at Source (T.D.S.)</td>
                    <td class="py-2 px-4 border border-gray-300 text-right">$0</td>
                  </tr>
                  <tr>
                    <td class="py-2 px-4 border border-gray-300">Provident Fund</td>
                    <td class="py-2 px-4 border border-gray-300 text-right">$0</td>
                  </tr>
                  <tr>
                    <td class="py-2 px-4 border border-gray-300">ESI</td>
                    <td class="py-2 px-4 border border-gray-300 text-right">$0</td>
                  </tr>
                  <tr>
                    <td class="py-2 px-4 border border-gray-300">Loan</td>
                    <td class="py-2 px-4 border border-gray-300 text-right">$300</td>
                  </tr>
                  <tr>
                    <td class="font-semibold py-2 px-4 border border-gray-300">Total Deductions</td>
                    <td class="font-semibold py-2 px-4 border border-gray-300 text-right">$59698</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <p className="font-semibold">
            <b>Net Salary: $59698</b> (Fifty nine thousand six hundred and ninety eight only.)
          </p>
          <button className="flex items-center rounded-md bg-blue-500 text-white py-2 px-4 border border-gray-300 hover:bg-blue-600">
            Download PDF
          </button>
        </div>
      </div>
    </div>
  )
}

export default Payslip
