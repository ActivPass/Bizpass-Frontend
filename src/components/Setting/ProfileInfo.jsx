import React from 'react'
import { FiEdit } from "react-icons/fi"
import UserProfile from "../../assets/images/userProfile.png"

const ProfileInfo = ({image, handleUpload, handleReset, handleUploadButtonClick}) => {
  return (
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
              <button className="bg-blue-500 text-white border border-blue-500 hover:bg-blue-600 px-6 py-1 rounded-md">
                Save
              </button>
              <button className="border border-orange-500 text-orange-500 px-4 py-1 rounded-md">Cencel</button>
            </div>
          </div>
  )
}

export default ProfileInfo;