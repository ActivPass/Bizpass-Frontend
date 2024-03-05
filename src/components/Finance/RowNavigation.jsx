import React from "react"
import { Link } from "react-router-dom"
import { FaHome, FaMoneyBillWave, FaMoneyCheckAlt, FaFileInvoice } from "react-icons/fa"

const RowNavigation = () => {
  return (
    <div className="flex justify-left gap-5 text-[14px] p-4 my-1">
      <Link to="/" className="flex items-center bg-[#5D87FF] p-2 rounded-md text-white">
        <FaHome className="h-4 w-4 mr-2" />
        <span className="">Dashboard</span>
      </Link>
      <Link to="/income" className="flex items-center p-2 rounded-md hover:bg-[#e6f2ff]">
        <FaMoneyCheckAlt className="h-4 w-4 mr-2" />
        <span className="">Income</span>
      </Link>
      <Link to="/expense" className="flex items-center p-2 rounded-md hover:bg-[#e6f2ff]">
        <FaMoneyBillWave className="h-4 w-4 mr-2" />
        <span className="">Expense</span>
      </Link>
      <Link to="/income" className="flex items-center p-2 rounded-md hover:bg-[#e6f2ff]">
        <FaFileInvoice className="h-4 w-4 mr-2" />
        <span className="">Invoice</span>
      </Link>
    </div>
  )
}

export default RowNavigation
