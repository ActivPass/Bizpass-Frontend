import React from "react"
import { Link } from "react-router-dom"
import { FaHome } from "react-icons/fa"

const RowNavigation = () => {
  return (
    <div className="flex justify-left gap-5 text-[14px] mb-5">
      <Link to="/" className="flex items-center p-2 border rounded-md hover:bg-blue-200">
        <FaHome className="h-4 w-4 mr-2" />
        <span className="">Dashboard</span>
      </Link>
    </div>
  )
}

export default RowNavigation
