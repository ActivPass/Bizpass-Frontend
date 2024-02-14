import React from "react"
import { Link } from "react-router-dom"
import PieChart from "./PieChart"
import { Button } from "@mui/material"
import { FaHome } from "react-icons/fa"
import { GoChevronRight } from "react-icons/go"

const Memberships = () => {
  const user = {
    partnerName: "Wolf Fitness Center",
    name: "Sakthi Pandiyan",
    team: "Team Wolf",
    email: "pandi@gmail.com",
    phone: "6381458872",
    status: "Active",
  }

  const toggleStatus = () => {
    setUser(prevUser => ({
      ...prevUser,
      status: prevUser.status === "Active" ? "Inactive" : "Active",
    }))
  }

  const handlePayNow = () => {
    alert("Payment initiated for user:", user.name)
  }

  return (
    <div className="p-1 sm:p-5">
      <div className="flex items-center align-middle  mb-4">
        <p className="text-2xl font-bold">
          Membership <span className="text-3xl opacity-40"> |</span>{" "}
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
        <div className=" text-xs sm:text-base">Membership</div>
      </div>
      <div className="text-base mb-2">Your Profile</div>
      <section className="grid grid-flow-rows gap-4 sm:grid-flow-col sm:grid-cols-2  sm:gap-4">
        <main className="bg-gray-200  rounded-md m-0 sm:mr-8">
          <aside className="flex flex-grow justify-between">
            <div className="text-3xl bg-gray-400 rounded-full m-2 sm:m-4 flex items-center justify-center h-20 w-20 ">
              {user.partnerName.slice(0, 1).toUpperCase()}
            </div>
            <div className="m-2 sm:m-4">
              <h2 className="font-bold">{user.partnerName}</h2>
              <p className="text-sm opacity-50">{user.name}</p>
              <p className="text-sm opacity-50">{user.team}</p>
            </div>
            <div className="p-4 flex flex-col gap-3">
              <Button
                variant="contained"
                size="small"
                color={user.status === "Active" ? "success" : "error"}
                onClick={toggleStatus}
              >
                {user.status === "Active" ? "Active" : "Inactive"}
              </Button>
              {user.status !== "Active" && (
                <Button variant="contained" color="primary" onClick={handlePayNow}>
                  Renewal
                </Button>
              )}
            </div>
          </aside>
          <article className="m-4">
            <h3 className="text-md font-bold">Contact Email</h3>
            <p className="text-sm opacity-50">{user.email}</p>
            <h3 className="text-md font-bold mt-3">Contact Phone</h3>
            <p className="text-sm opacity-50">{user.phone}</p>
          </article>
        </main>

        <main className="bg-gray-200 sm:w-full sm:h-full w-full h-52 rounded-md">
          <p className=" p-3">Attendance record</p>
          <PieChart />
        </main>
      </section>
    </div>
  )
}

export default Memberships
