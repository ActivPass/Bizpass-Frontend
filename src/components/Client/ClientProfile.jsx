import React, { useState } from "react"
import { FiEdit } from "react-icons/fi"
import { Link } from "react-router-dom"
import NavHeader from "../NavHeader"
import { WhatsApp } from "@mui/icons-material"
import ClientAttendance from "./ClientAttendance"

const ClientProfile = () => {
  const [activeTab, setActiveTab] = useState("profile")

  const handleTabChange = tab => {
    setActiveTab(tab)
  }

  const handleEmailClick = email => {
    window.location.href = `mailto:${email}`
  }

  const handleWhatsAppClick = phoneNumber => {
    window.location.href = `https://wa.me/${phoneNumber}?text=Hello! Welcome to BizPass.`
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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsS1-3_Ivzo_62VnIjQPOr_50iztWmlxsZdg&usqp=CAU"
                />
              </a>
            </div>
            <div className="">
              <h3 className="">John Doe</h3>
              <h6 className="opacity-50">UI/UX Design Team</h6>
              <small className="opacity-50 block">Web Designer</small>
              <div className="text-xs opacity-50">Client ID : FT-0001</div>
              <div className="text-xs opacity-50">Date of Join : 1st Jan 2024</div>
            </div>
          </div>
          <Link to="/editclient">
            <div className="relative top-[-6rem] right-[-32rem]">
              <FiEdit className="text-lg cursor-pointer" />
            </div>
          </Link>
          <div className="">
            <ul className="personal-info">
              <li className="flex mb-2 cursor-pointer">
                <div className="w-1/4">Phone:</div>
                <div className=" text-blue-700" onClick={() => handleWhatsAppClick("919500319275")}>
                  9500319275
                </div>
              </li>
              <li className="flex mb-2 cursor-pointer">
                <div className="w-1/4">Email:</div>
                <div className="text-blue-700" onClick={() => handleEmailClick("johndoe@example.com")}>
                  johndoe@example.com
                </div>
              </li>
              <li className="flex mb-2">
                <div className="w-1/4">Birthday:</div>
                <div className="opacity-50">24th July</div>
              </li>
              <li className="flex mb-2">
                <div className="w-1/4">Address:</div>
                <div className="opacity-50">1861 Bayonne Ave, Manchester Township, NJ, 08759</div>
              </li>
              <li className="flex mb-2">
                <div className="w-1/4">Gender:</div>
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
          <div className="relative grid grid-cols-2 gap-x-8 h-auto">
            <div className="border p-3 rounded-lg h-auto">
              <h2 className="text-xl font-bold">Personal Information</h2>
              <div className="mt-2">
                <ul className="personal-info">
                  <li className="flex mb-2">
                    <span className="font-bold w-1/4">Email:</span>
                    <span>johndoe@example.com</span>
                  </li>
                  <li className="flex mb-2">
                    <span className="font-bold w-1/4">Joining Date:</span>
                    <span>01/01/2023</span>
                  </li>
                  <li className="flex mb-2">
                    <span className="font-bold w-1/4">Designation:</span>
                    <span>Software Engineer</span>
                  </li>
                  <li className="flex mb-2">
                    <span className="font-bold w-1/4">Gender:</span>
                    <span>Male</span>
                  </li>
                  <li className="flex mb-2">
                    <span className="font-bold w-1/4">Phone:</span>
                    <span>+1234567890</span>
                  </li>
                  <li className="flex mb-2">
                    <span className="font-bold w-1/4">Birth Date:</span>
                    <span>01/01/1990</span>
                  </li>
                  <li className="flex mb-2">
                    <span className="font-bold w-1/4">Address:</span>
                    <span>123 Main St, City, Country</span>
                  </li>
                </ul>
                <div className="flex mb-2 cursor-pointer">
                  <div
                    className="flex items-center text-green-600 relative top-[0rem] right-[-27rem]"
                    onClick={() => handleWhatsAppClick("919500319275")}
                    title="Chat via WhatsApp"
                  >
                    <WhatsApp />
                  </div>
                </div>
              </div>
              <Link to="/editclient">
                <div className="relative top-[-18rem] right-[-27rem]">
                  <FiEdit className="text-lg cursor-pointer" />
                </div>
              </Link>
            </div>
            <div className="border p-3 rounded-lg h-auto">
              <h2 className="text-xl font-bold">Emergency Contact Information</h2>
              <div className="mt-2">
                <ul className="emergency-contact-info">
                  <li className="flex mb-2">
                    <span className="font-bold w-1/4">Name:</span>
                    <span>Jane Doe</span>
                  </li>
                  <li className="flex mb-2">
                    <span className="font-bold w-1/4">Relationship:</span>
                    <span>Spouse</span>
                  </li>
                  <li className="flex mb-2">
                    <span className="font-bold w-1/4">Phone:</span>
                    <span>+1234567890</span>
                  </li>
                  <li className="flex mb-2">
                    <span className="font-bold w-1/4">Email:</span>
                    <span>janedoe@example.com</span>
                  </li>
                  <li className="flex mb-2">
                    <span className="font-bold w-1/4">Address:</span>
                    <span>123 Main St, Anytown, USA</span>
                  </li>
                </ul>
              </div>
              <Link to="/editclient">
                <div className="absolute top-5 right-5">
                  <FiEdit className="text-lg cursor-pointer" />
                </div>
              </Link>
            </div>
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
          </div>
        )}
        {activeTab === "attendance" && (
          <div className="h-auto">
            <p className="mb-5">Entry List(Attendance)</p>
            <div className="">
              <ClientAttendance/>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ClientProfile
