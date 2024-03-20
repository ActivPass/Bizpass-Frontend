import React, { useState } from "react"
import NavHeader from "../NavHeader"
import RowNavigation from "./RowNavigation"
import { CgProfile } from "react-icons/cg"
import { MdOutlineNotificationsActive } from "react-icons/md"
import { MdLockOutline } from "react-icons/md"
import ProfileCard from "./ProfileCard"
import ProfileInfo from "./ProfileInfo"
import Notification from "./Notification"
import Security from "./Security"
import { RiLockPasswordFill } from "react-icons/ri"
import ChangePassword from "./ChangePassword"

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
        <ProfileCard />
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
          className={`mr-6 cursor-pointer flex items-center gap-1 ${
            activeTab === "Security"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500 hover:text-blue-500 hover:border-b-2 hover:border-blue-500"
          }`}
          onClick={() => handleTabChange("Security")}
        >
          <MdLockOutline />
          Security
        </div>
        <div
          className={`cursor-pointer flex items-center gap-1 ${
            activeTab === "changePassword"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500 hover:text-blue-500 hover:border-b-2 hover:border-blue-500"
          }`}
          onClick={() => handleTabChange("changePassword")}
        >
          <RiLockPasswordFill />
          Change Password
        </div>
      </div>
      <div className="p-4 border rounded-md">
        {activeTab === "profile" && (
          <ProfileInfo
            image={image}
            handleUpload={handleUpload}
            handleReset={handleReset}
            handleUploadButtonClick={handleUploadButtonClick}
          />
        )}
        {activeTab === "Notification" && <Notification />}
        {activeTab === "Security" && <Security />}
        {activeTab === "changePassword" && <ChangePassword />}
      </div>
    </div>
  )
}

export default Settings
