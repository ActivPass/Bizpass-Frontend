import React from "react"
import { Link } from "react-router-dom"
import { GoChevronRight } from "react-icons/go"
import { FaHome } from "react-icons/fa"

const ShiftAndSchedule = () => {
  return (
    <div className="m-1 md:m-5">
      <div className="flex items-center align-middle mb-5">
        <p className="text-2xl font-bold">
          Shift & Schedule <span className="text-3xl opacity-40"> |</span>{" "}
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
        <div className=" text-xs sm:text-base ">Shift & Schedule</div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-xs sm:text-base font-semibold mt-2">Shift & Schedule</p>
        <div className="flex space-x-4">
          <Link
            to="/shift-list"
            className="bg-[#5D87FF] text-white hover:bg-[#3d66d4] hover:text-white border border-gray-300 px-4 py-1 mt-3 text-xs sm:text-base flex flex-row align-middle items-center rounded"
          >
            Shift
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ShiftAndSchedule
