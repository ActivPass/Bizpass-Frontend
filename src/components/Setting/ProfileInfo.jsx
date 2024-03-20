import React, { useState } from 'react';
import { FiEdit } from "react-icons/fi";
import UserProfile from "../../assets/images/userProfile.png";

const ProfileInfo = ({ image, handleUpload, handleReset, handleUploadButtonClick }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    name: "Sakthi Pandiyan",
    email: "sakthipandiyan@gmail.com",
    phone: "9655292466",
    gender: "Male",
    birthDate: "01/01/1990",
    address: {
      line1: "399H+CX6, K Chettipalayam",
      line2: "",
      city: "Tiruppur",
      state: "Tamil Nadu",
      zip: "641605"
    }
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleChange = (e, key, subKey) => {
    const { value } = e.target;
    if (subKey) {
      setPersonalInfo(prevInfo => ({
        ...prevInfo,
        [key]: {
          ...prevInfo[key],
          [subKey]: value
        }
      }));
    } else {
      setPersonalInfo(prevInfo => ({
        ...prevInfo,
        [key]: value
      }));
    }
  };

  return (
    <div className="relative">
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
              {Object.entries(personalInfo).map(([key, value]) => (
                <li key={key} className="flex mb-2">
                  <label className="font-bold w-1/4">{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
                  <div className="opacity-80">
                    {isEditing ? (
                      <input
                        type="text"
                        className="text-black border-none outline-none"
                        value={typeof value === 'object' ? Object.values(value).join(', ') : value}
                        onChange={(e) => typeof value === 'object' ? handleChange(e, key) : handleChange(e, key)}
                      />
                    ) : (
                      typeof value === 'object' ? (
                        <>
                          {Object.values(value).map((subValue, index) => (
                            <div key={index}>{subValue}</div>
                          ))}
                        </>
                      ) : value
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={`relative ${isEditing ? "top-[-13.5rem] right-[-28rem]" : "top-[-18rem] right-[-28rem]"}  `}>
            <FiEdit className="text-lg cursor-pointer" onClick={handleEditClick} />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-5 items-center justify-center mt-5">
        {isEditing && (
          <button onClick={handleSave} className="bg-blue-500 text-white border border-blue-500 hover:bg-blue-600 px-6 py-1 rounded-md">
            Save
          </button>
        )}
        <button className="border border-orange-500 text-orange-500 px-4 py-1 rounded-md">Cancel</button>
      </div>
    </div>
  );
}

export default ProfileInfo;
