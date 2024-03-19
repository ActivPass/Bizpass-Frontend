import React, { useState } from 'react';
import { FiEdit } from "react-icons/fi";
import GymProfile from "../../assets/images/GymProfile.jpeg";

const profileData = {
  gymName: "Wolf Fitness Studio ( Unisex )",
  gymType: "Gym",
  partnerId: "FT-0001",
  joinDate: "1st Jan 2024",
  phone: "9655292466",
  email: "teamwolf@gmail.com",
  address: {
    line1: "399H+CX6, K Chettipalayam",
    line2: "Tiruppur",
    city: "Tamil Nadu",
    zip: "641605"
  }
};

const ProfileCard = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4 h-[10rem]">
        <div className="flex items-center">
          <div className="mr-4">
            <a href="#">
              <img
                alt=""
                className="rounded-full"
                src={GymProfile}
              />
            </a>
          </div>
          <div className=" space-y-1">
            <h3 className="">{profileData.gymName}</h3>
            <h6 className="opacity-50">{profileData.gymType}</h6>
            <div className="text-xs opacity-50">Partner ID: {profileData.partnerId}</div>
            <div className="text-xs opacity-50">Date of Join: {profileData.joinDate}</div>
          </div>
        </div>
        <div className="relative top-[-4rem] right-[-28rem]">
          <FiEdit className="text-lg cursor-pointer" onClick={handleEditClick} />
        </div>
        <div className="w-[18rem]">
          <ul className="personal-info">
            <li className="flex mb-2">
              <label className="w-1/4 font-bold">Phone:</label>
              <div className="opacity-80">{isEditing ? <input type="text" className='text-black border-none outline-none w-[10rem]' defaultValue={profileData.phone} /> : profileData.phone}</div>
            </li>
            <li className="flex mb-2">
              <label className="w-1/4 font-bold">Email:</label>
              <div className="opacity-80">{isEditing ? <input type="text"  className='text-black border-none outline-none' defaultValue={profileData.email} /> : profileData.email}</div>
            </li>
            <li className="flex">
              <label className="w-1/4 font-bold">Address:</label>
              <div className="">
                <div className="opacity-80">{isEditing ? <input type="text" className='text-black border-none outline-none' defaultValue={profileData.address.line1} /> : profileData.address.line1}</div>
                <div className="opacity-80">{isEditing ? <input type="text" className='text-black border-none outline-none' defaultValue={profileData.address.line2} /> : profileData.address.line2}</div>
                <div className="opacity-80">{isEditing ? <input type="text" className='text-black border-none outline-none' defaultValue={profileData.address.city} /> : profileData.address.city} {isEditing ? <input type="text" className='text-black border-none outline-none' defaultValue={profileData.address.zip} /> : profileData.address.zip}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
