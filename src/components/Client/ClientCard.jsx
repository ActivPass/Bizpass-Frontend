import React from "react"
import { Button } from "@mui/material"

const user = { status: "Active" }

function ClientCard() {
  return (
    <div className="m-1 sm:m-5">
      <div className=" mt-5">
        <p className=" my-3">Client Profile</p>
        <div className="bg-black text-white flex justify-between items-center p-4">
          <p className="text-xl font-bold">Aakash</p>
          <Button variant="contained" size="small" color={user.status === "Active" ? "success" : "error"}>
            {user.status === "Active" ? "Active" : "Inactive"}
          </Button>
        </div>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="p-4">
              <div className="mb-4">
                <label className="font-bold">Client ID</label>
                <p className="border-b-2 border-[#cccccc]">1001</p>
              </div>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <label className="font-bold">Phone</label>
                <p className="border-b-2 border-[#cccccc]">9500319343</p>
              </div>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <label className="font-bold">Email</label>
                <p className="border-b-2 border-[#cccccc]">aakash@gmail.com</p>
              </div>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <label className="font-bold">Gender</label>
                <p className="border-b-2 border-[#cccccc]">Male</p>
              </div>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <label className="font-bold">Age</label>
                <p className="border-b-2 border-[#cccccc]">25</p>
              </div>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <label className="font-bold">Joining Date</label>
                <p className="border-b-2 border-[#cccccc]">10-02-2024</p>
              </div>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <label className="font-bold">Designation</label>
                <p className="border-b-2 border-[#cccccc]">Developer</p>
              </div>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <label className="font-bold">Date Of Birth </label>
                <p className="border-b-2 border-[#cccccc]">09-05-1998</p>
              </div>
            </div>
          </div>
          <div className="p-4 grid grid-cols-1">
            <div className="mb-4">
              <label className="font-bold">Address</label>
              <p className="border-b-2 border-[#cccccc]">18 Teeds garden ,4th street,Perambur,Chennai</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientCard;
