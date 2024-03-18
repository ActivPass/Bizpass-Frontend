import React from 'react'
import { FiEdit } from "react-icons/fi"
import GymProfile from "../../assets/images/GymProfile.jpeg"


const ProfileCard = () => {
  return (
    <div>
         <div className="flex justify-between items-center mb-4">
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
              <h3 className="">Wolf Fitness Studio ( Unisex )</h3>
              <h6 className="opacity-50">Gym</h6>
              <div className="text-xs opacity-50">Partner ID : FT-0001</div>
              <div className="text-xs opacity-50">Date of Join : 1st Jan 2024</div>
            </div>
          </div>
          <div className="relative top-[-4rem] right-[-28rem]">
            <FiEdit className="text-lg cursor-pointer" />
          </div>
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
  )
}

export default ProfileCard;