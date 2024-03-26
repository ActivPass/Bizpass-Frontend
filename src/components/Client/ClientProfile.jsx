import React, { useState } from "react"
import { FiEdit } from "react-icons/fi"
import { Link } from "react-router-dom"
import NavHeader from "../NavHeader"
import { WhatsApp } from "@mui/icons-material"
import ClientAttendance from "./ClientAttendance"
import { Button } from "@mui/material"
import PaymentsTable from "./PaymentsTable"
import { CgProfile } from "react-icons/cg"
import { MdCardMembership } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";

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
          { name: "Home", link: "/clients" },
          // { name: "Clients", link: "/clients" },
        ]}
      />
      <div className="p-4 mb-5 border rounded-md">
        <div className="flex items-center gap-[8rem] mb-4">
          <div className="flex items-center">
            <div className="mr-4">
              <Link to="#">
                <img
                  alt=""
                  className="rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsS1-3_Ivzo_62VnIjQPOr_50iztWmlxsZdg&usqp=CAU"
                />
              </Link>
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-2xl">John Doe</h3>
              <h6 className="opacity-50">Web Designer</h6>
              <div className="text-xs opacity-50">Client ID : FT-0001</div>
              <div className="text-xs opacity-50">Date of Join : 1st Jan 2024</div>
            </div>
          </div>
          <Link to="#">
            <div className="relative top-[-6rem] right-[-28rem]">
              <FiEdit className="text-lg cursor-pointer" />
            </div>
          </Link>
          <div className="">
            <div className="flex mb-2 cursor-pointer">
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleWhatsAppClick("919500319275")}
                title="Chat via WhatsApp"
                sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
              >
                Send Message
                <WhatsApp className="ml-2 text-white" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-left mb-4">
        <div
          className={`mr-6 cursor-pointer flex items-center gap-1 ${
            activeTab === "profile"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500 hover:text-blue-500 hover:border-b-2 hover:border-blue-500"
          }`}
          onClick={() => handleTabChange("profile")}
        >
          <CgProfile />
          Profile
        </div>
        <div
          className={`mr-6 cursor-pointer flex items-center gap-1 ${
            activeTab === "bank"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500 hover:text-blue-500 hover:border-b-2 hover:border-blue-500"
          }`}
          onClick={() => handleTabChange("bank")}
        >
          <MdCardMembership />
          Membership
        </div>
        <div
          className={`cursor-pointer flex items-center gap-1 ${
            activeTab === "attendance"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500 hover:text-blue-500 hover:border-b-2 hover:border-blue-500"
          }`}
          onClick={() => handleTabChange("attendance")}
        >
          <FaCalendarAlt />
          Entry List (Attendance)
        </div>
      </div>
      <div className="p-4 border rounded-md">
        {activeTab === "profile" && (
          <div className="h-auto">
            <div className="grid grid-cols-2 gap-5">
              <div className="border p-3 rounded-lg h-auto">
                <h2 className="text-xl font-bold">Personal Information</h2>
                <div className="mt-2">
                  <ul className="personal-info">
                    <li className="flex mb-2 cursor-pointer">
                      <div className="font-bold w-1/4">Phone:</div>
                      <a href="tel:+919500319275" className="text-blue-700">
                        +91 9500319275
                      </a>
                    </li>
                    <li className="flex mb-2 cursor-pointer">
                      <div className="font-bold w-1/4">Email:</div>
                      <div className="text-blue-700" onClick={() => handleEmailClick("johndoe@example.com")}>
                        johndoe@example.com
                      </div>
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
                      <span className="font-bold w-1/4">Birth Date:</span>
                      <span>01/01/1990</span>
                    </li>
                    <li className="flex mb-2">
                      <span className="font-bold w-1/4">Address:</span>
                      <span>123 Main St, City, Country</span>
                    </li>
                  </ul>
                </div>
                <Link to="#">
                  <div className="relative top-[-13.5rem] right-[-27rem]">
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
                <Link to="#">
                  <div className="relative top-[-11.5rem] right-[-27rem]">
                    <FiEdit className="text-lg cursor-pointer" />
                  </div>
                </Link>
              </div>
              <div className="border p-3 rounded-lg h-auto">
                <h2 className="text-xl font-bold">Health and Fitness Information</h2>
                <div className="mt-2">
                  <ul className="emergency-contact-info">
                    <li className="flex mb-2">
                      <span className="font-bold w-1/4">Height:</span>
                      <span>7.2</span>
                    </li>
                    <li className="flex mb-2">
                      <span className="font-bold w-1/4">Weight:</span>
                      <span>70 kg</span>
                    </li>
                    <li className="flex mb-2">
                      <span className="font-bold w-1/4">Medical Conditions:</span>
                      <span>Normal</span>
                    </li>
                    <li className="flex mb-2">
                      <span className="font-bold w-1/4">Allergies:</span>
                      <span>No</span>
                    </li>
                    <li className="flex mb-2">
                      <span className="font-bold w-1/4">Injuries:</span>
                      <span>No</span>
                    </li>
                    <li className="flex mb-2">
                      <span className="font-bold w-1/4">Fitness Level:</span>
                      <span>Biginner</span>
                    </li>
                  </ul>
                </div>
                <Link to="#">
                  <div className="relative top-[-15rem] right-[-27rem]">
                    <FiEdit className="text-lg cursor-pointer" />
                  </div>
                </Link>
              </div>
              <div className="border p-3 rounded-lg h-auto">
                <h2 className="text-xl font-bold">Goals and Preferences Information</h2>
                <div className="mt-2">
                  <ul className="emergency-contact-info">
                    <li className="flex mb-2">
                      <span className="font-bold w-1/4">Fitness Goals:</span>
                      <span>Weight Loss, Muscle Gain</span>
                    </li>
                    <li className="flex mb-2">
                      <span className="font-bold w-1/4">Class:</span>
                      <span>Day (Monday - Sunday)</span>
                    </li>
                    <li className="flex mb-2">
                      <span className="font-bold w-1/4">Time:</span>
                      <span>6 AM - 8 AM </span>
                    </li>
                    <li className="flex mb-2">
                      <span className="font-bold w-1/4">Instructor:</span>
                      <span>Yes/No</span>
                    </li>
                    <li className="flex mb-2">
                      <span className="font-bold w-1/4">Additional Services</span>
                      <span>Nutritional Counselling</span>
                    </li>
                  </ul>
                </div>
                <Link to="#">
                  <div className="relative top-[-13rem] right-[-27rem]">
                    <FiEdit className="text-lg cursor-pointer" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex flex-row gap-5 items-center justify-center mt-5">
              <button className="bg-blue-500 text-white border border-blue-500 hover:bg-blue-600 px-6 py-1 rounded-md">
                Save
              </button>

              <button className="border border-orange-500 text-orange-500 px-4 py-1 rounded-md">Cancel</button>
            </div>
          </div>
        )}
        {activeTab === "bank" && (
          <div className="relative h-auto mb-5">
            <div class="bg-gray-100 rounded-lg p-6 shadow-lg">
              <h2 class="text-2xl font-bold mb-6 text-gray-800">Membership Details</h2>
              <div class="flex flex-wrap mb-4">
                <div class="w-full md:w-1/2 mb-4">
                  <label class="block text-sm font-bold text-gray-700 mb-1">Membership Type:</label>
                  <p class="text-gray-800">Monthly</p>
                </div>
                <div class="w-full md:w-1/2 mb-4">
                  <label class="block text-sm font-bold text-gray-700 mb-1">Membership Start Date:</label>
                  <p class="text-gray-800">March 25, 2024</p>
                </div>
              </div>
              <div class="flex flex-wrap mb-4">
                <div class="w-full md:w-1/2 mb-4">
                  <label class="block text-sm font-bold text-gray-700 mb-1">Payment Method:</label>
                  <p class="text-gray-800">UPI </p>
                </div>
                <div class="w-full md:w-1/2 mb-4">
                  <label class="block text-sm font-bold text-gray-700 mb-1">Payment Frequency:</label>
                  <p class="text-gray-800">Recurring</p>
                </div>
              </div>
              <div class="flex flex-wrap mb-4">
                <div class="w-full md:w-1/2 mb-4">
                  <label class="block text-sm font-bold text-gray-700 mb-1">Membership Status:</label>
                  <p class="text-gray-800">Active</p>
                </div>
                <div class="w-full md:w-1/2 mb-4">
                  <label class="block text-sm font-bold text-gray-700 mb-1">Renewal Date:</label>
                  <p class="text-gray-800">March 25, 2025</p>
                </div>
              </div>
              <div class="mb-4">
                <label class="block text-sm font-bold text-gray-700 mb-1">Subscription Tier:</label>
                <p class="text-gray-800">Gold</p>
              </div>
              <Link to="#">
                <div className="relative top-[-21.5rem] right-[-57rem]">
                  <FiEdit className="text-lg cursor-pointer" />
                </div>
              </Link>
            </div>

            <PaymentsTable />
          </div>
        )}
        {activeTab === "attendance" && (
          <div className="h-auto">
            <p className="mb-5">Entry List(Attendance)</p>
            <div className="">
              <ClientAttendance />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ClientProfile
