import React, { useState } from "react"
import { FiEdit } from "react-icons/fi"
import { Link } from "react-router-dom"
import NavHeader from "../NavHeader"
import RowNavigation from "./RowNavigation"
import UserProfile from "../../assets/images/userProfile.png"
import { CgProfile } from "react-icons/cg";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile")
  const [image, setImage] = useState(null)

  const handleTabChange = tab => {
    setActiveTab(tab)
  }

  const handleUpload = e => {
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onloadend = () => {
      setImage(reader.result)
    }

    if (file) {
      reader.readAsDataURL(file)
    }
  }

  const handleReset = () => {
    setImage(null)
    const input = document.getElementById("profileImageUpload")
    if (input) {
      input.value = null
    }
  }

  const handleUploadButtonClick = () => {
    const input = document.getElementById("profileImageUpload")
    if (input) {
      input.click()
    }
  }

  return (
    <div className="container mx-auto pt-5 pb-5">
      <div className="">
        <RowNavigation />
      </div>
      <NavHeader
        current={{ name: "Account Setting" }}
        previous={
          [
            //   { name: "Home", link: "/" },
            //   { name: "Clients", link: "/clients" },
          ]
        }
      />
      <div className="p-4 mb-5 border rounded-md">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="mr-4">
              <a href="#">
                <img
                  alt=""
                  className="rounded-full"
                  src="data:image/jpeg;base64,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"
                />
              </a>
            </div>
            <div className=" space-y-1">
              <h3 className="">Wolf Fitness Studio ( Unisex )</h3>
              <h6 className="opacity-50">Gym</h6>
              <div className="text-xs opacity-50">Partner ID : FT-0001</div>
              <div className="text-xs opacity-50">Date of Join : 1st Jan 2024</div>
            </div>
          </div>
          <Link to="/editclient">
            <div className="relative top-[-4rem] right-[-28rem]">
              <FiEdit className="text-lg cursor-pointer" />
            </div>
          </Link>
          <div className="">
            <ul className="personal-info">
              <li className="flex mb-2 cursor-pointer">
                <div className="w-1/4 font-bold">Phone:</div>
                <div className="opacity-80">9655292466</div>
              </li>
              <li className="flex mb-2 cursor-pointer">
                <div className="w-1/4 font-bold">Email:</div>
                <div className="opacity-80">teamwolf@gmail.com</div>
              </li>
              <li className="flex mb-2">
                <div className="w-1/4 font-bold">Address:</div>
                <div className="">
                  <div className="opacity-80"> 399H+CX6, K Chettipalayam,</div>
                  <div className="opacity-80">Tiruppur, Tamil Nadu 641605</div>
                </div>
              </li>
            </ul>
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
          Profile info
        </div>
        <div
          className={`mr-6 cursor-pointer flex items-center gap-1 ${
            activeTab === "Notification"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500 hover:text-blue-500 hover:border-b-2 hover:border-blue-500"
          }`}
          onClick={() => handleTabChange("Notification")}
        >
          <MdOutlineNotificationsActive />
          Notification
        </div>
        <div
          className={`cursor-pointer flex items-center gap-1 ${
            activeTab === "Security"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500 hover:text-blue-500 hover:border-b-2 hover:border-blue-500"
          }`}
          onClick={() => handleTabChange("Security")}
        >
          <MdLockOutline />
          Security
        </div>
      </div>
      <div className="p-4 border rounded-md">
        {activeTab === "profile" && (
          <div className="relative ">
            <div className="grid grid-cols-2 gap-5 h-auto">
              <div className="border p-3 rounded-lg h-auto">
                <div className="space-y-2 m-2">
                  <h2 className="text-xl font-bold">Change Profile Image</h2>
                  <p className="text-xs opacity-60">Change your Profile image here</p>
                </div>
                <div className="mt-4">
                  <div className="">
                    <div className=" flex items-center justify-center">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleUpload}
                        className="hidden"
                        id="profileImageUpload"
                      />
                      <label htmlFor="profileImageUpload" className="cursor-pointer">
                        {image ? (
                          <img
                            src={image}
                            alt="Profile"
                            className="w-[200px] h-[200px] rounded-full border border-gray-400 p-1 cursor-pointer"
                          />
                        ) : (
                          <img
                            src={UserProfile}
                            alt="Upload"
                            className="w-[200px] h-[200px] rounded-full border border-gray-400 p-1 cursor-pointer"
                          />
                        )}
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center gap-5 mt-5">
                    <button
                      type="button"
                      onClick={handleUploadButtonClick}
                      className="mt-2 px-4 py-1 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Upload
                    </button>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="mt-2 px-6 py-1 text-blue-500 rounded-md shadow-md border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
              <div className="border p-3 rounded-lg h-auto">
                <h2 className="text-xl font-bold">Personal Information</h2>
                <div className="mt-2">
                  <ul className="personal-info">
                    <li className="flex mb-2">
                      <span className="font-bold w-1/4">Name:</span>
                      <span>Sakthi Pandiyan</span>
                    </li>
                    <li className="flex mb-2">
                      <span className="font-bold w-1/4">Email:</span>
                      <span>sakthipandiyan@gmail.com</span>
                    </li>
                    <li className="flex mb-2">
                      <span className="font-bold w-1/4">Phone:</span>
                      <span>9655292466</span>
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
                      <div>
                        <p>399H+CX6, K Chettipalayam,</p>
                        <p>Tiruppur, Tamil Nadu 641605</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="relative top-[-15.5rem] right-[-28rem]">
                  <FiEdit className="text-lg cursor-pointer" />
                </div>
              </div>
              {/* <div className="border p-3 rounded-lg h-auto"></div> */}
            </div>
            <div className="flex flex-row gap-5 items-center justify-center mt-5">
              <button className="bg-blue-500 text-white border border-blue-500 hover:bg-blue-600 px-6 py-1 rounded-md">Save</button>
              <button className="border border-orange-500 text-orange-500 px-4 py-1 rounded-md">Cencel</button>
            </div>
          </div>
        )}
        {activeTab === "Notification" && <div className="h-auto"></div>}
        {activeTab === "Security" && <div className="h-auto"></div>}
      </div>
    </div>
  )
}

export default Settings
