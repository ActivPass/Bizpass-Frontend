import React, { useState } from "react"
import { FiEdit } from "react-icons/fi"
import { Link } from "react-router-dom"
import NavHeader from "../NavHeader"

const ClientProfile = () => {
  const [activeTab, setActiveTab] = useState("profile")

  const handleTabChange = tab => {
    setActiveTab(tab)
  }

  return (
    <div className="container mx-auto pt-5 pb-5">
      <NavHeader
        current={{ name: "Client Profile" }}
        previous={[
          { name: "Home", link: "/" },
          { name: "Clients", link: "/clients" },
        ]}
      />
      <div className="p-4 mb-5 border rounded-md">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="mr-4">
              <a href="#">
                <img
                  alt=""
                  className="rounded-full"
                  src="https://smarthr.dreamstechnologies.com/codeigniter/template/orange/public//assets/img/profiles/avatar-02.jpg"
                />
              </a>
            </div>
            <div className="">
              <h3 className="">John Doe</h3>
              <h6 className="opacity-50">UI/UX Design Team</h6>
              <small className="opacity-50 block">Web Designer</small>
              <div className="text-xs opacity-50">Employee ID : FT-0001</div>
              <div className="text-xs opacity-50">Date of Join : 1st Jan 2013</div>
            </div>
          </div>
          <Link to="/editclient">
            <div className="absolute top-[20%] right-[12%]">
              <FiEdit className="text-lg cursor-pointer" />
            </div>
          </Link>
          <div className="">
            <ul className="personal-info">
              <li className="flex mb-2">
                <div className="w-1/6">Phone:</div>
                <div className="opacity-50">9876543210</div>
              </li>
              <li className="flex mb-2">
                <div className="w-1/6">Email:</div>
                <div className="opacity-50">johndoe@example.com</div>
              </li>
              <li className="flex mb-2">
                <div className="w-1/6">Birthday:</div>
                <div className="opacity-50">24th July</div>
              </li>
              <li className="flex mb-2">
                <div className="w-1/6">Address:</div>
                <div className="opacity-50">1861 Bayonne Ave, Manchester Township, NJ, 08759</div>
              </li>
              <li className="flex mb-2">
                <div className="w-1/6">Gender:</div>
                <div className="opacity-50">Male</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-left mb-4">
        <div
          className={`mr-6 cursor-pointer ${
            activeTab === "profile"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500 hover:text-blue-500 hover:border-b-2 hover:border-blue-500"
          }`}
          onClick={() => handleTabChange("profile")}
        >
          Profile
        </div>
        <div
          className={`mr-6 cursor-pointer ${
            activeTab === "bank"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500 hover:text-blue-500 hover:border-b-2 hover:border-blue-500"
          }`}
          onClick={() => handleTabChange("bank")}
        >
          Bank Details
        </div>
        <div
          className={`cursor-pointer ${
            activeTab === "attendance"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500 hover:text-blue-500 hover:border-b-2 hover:border-blue-500"
          }`}
          onClick={() => handleTabChange("attendance")}
        >
          Entry List (Attendance)
        </div>
      </div>
      <div className="p-4 border rounded-md">
        {activeTab === "profile" && (
          <div className="relative h-[60vh]">
            <h2 className="text-xl font-bold">Personal Information</h2>
            <div className="mt-2">
              <ul className="personal-info">
                <li className="flex mb-2">
                  <span className="font-bold w-1/6">Email:</span>
                  <span>johndoe@example.com</span>
                </li>
                <li className="flex mb-2">
                  <span className="font-bold w-1/6">Joining Date:</span>
                  <span>01/01/2023</span>
                </li>
                <li className="flex mb-2">
                  <span className="font-bold w-1/6">Designation:</span>
                  <span>Software Engineer</span>
                </li>
                <li className="flex mb-2">
                  <span className="font-bold w-1/6">Gender:</span>
                  <span>Male</span>
                </li>
                <li className="flex mb-2">
                  <span className="font-bold w-1/6">Phone:</span>
                  <span>+1234567890</span>
                </li>
                <li className="flex mb-2">
                  <span className="font-bold w-1/6">Birth Date:</span>
                  <span>01/01/1990</span>
                </li>
                <li className="flex mb-2">
                  <span className="font-bold w-1/6">Address:</span>
                  <span>123 Main St, City, Country</span>
                </li>
              </ul>
            </div>
            <Link to="/editclient">
              <div className="absolute top-0 right-0">
                <FiEdit className="text-lg cursor-pointer" />
              </div>
            </Link>
          </div>
        )}
        {activeTab === "bank" && (
          <div className="relative h-[60vh] mb-5">
            <h2 className="text-xl font-bold">Bank Information</h2>
            <div className="mt-2">
              <ul className="personal-info">
                <li className="flex mb-2">
                  <span className="font-bold w-1/6">Bank name:</span>
                  <span>ICICI Bank</span>
                </li>
                <li className="flex mb-2">
                  <span className="font-bold w-1/6">Bank account No.:</span>
                  <span>159843014641</span>
                </li>
                <li className="flex mb-2">
                  <span className="font-bold w-1/6">IFSC Code:</span>
                  <span>ICI24504</span>
                </li>
                <li className="flex mb-2">
                  <span className="font-bold w-1/6">PAN No:</span>
                  <span>TC000Y56</span>
                </li>
              </ul>
            </div>
            {/* <Link to="/editemployee">
            <div className="absolute top-0 right-0">
              <FiEdit className="text-lg cursor-pointer" />
            </div>
          </Link> */}
          </div>
        )}
        {activeTab === "attendance" && <div className="h-[60vh]">Entry List(Attendance)</div>}
      </div>
    </div>
  )
}

export default ClientProfile
