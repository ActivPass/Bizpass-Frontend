import React from "react"
import EmailSvg from "../../assets/images/Email.svg"
import MobileSVG from "../../assets/images/Mobile friendly.svg"
import ManageSVG from "../../assets/images/Vector.svg"
import { FiMoreVertical } from "react-icons/fi"

import Switch from "@mui/material/Switch"
import ChangePassword from "./ChangePassword"

const Security = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      <div className="h-auto col-span-2  p-5 rounded-lg border">
        <header className="">
          <h2 className="text-xl font-bold">Security Settings</h2>
          <p className="text-[14px] opacity-60">Change your security settings</p>
        </header>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 my-5">
            <img src={EmailSvg} alt="Email" />
            <header className="">
              <h2 className="text-base font-bold">Two-factor Authentication</h2>
              <p className="text-xs opacity-60">Enable two-factor authentication to enhance security.</p>
            </header>
          </div>
          <Switch />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 my-5">
            <img src={EmailSvg} alt="Email" />
            <header className="">
              <h2 className="text-base font-bold">Email recovery</h2>
              <p className="text-xs opacity-60">Enable email recovery to securely backup and recover your account.</p>
            </header>
          </div>
          <Switch />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 my-5">
            <img src={MobileSVG} alt="Email" />
            <header className="">
              <h2 className="text-base font-bold">Mobile number recovery</h2>
              <p className="text-xs opacity-60">
                Enable mobile number recovery to securely recover access to your account.
              </p>
            </header>
          </div>
          <Switch />
        </div>
      </div>

      <div className="h-auto p-5 rounded-lg border">
        <header className="space-y-3">
          <h2 className="text-xl font-bold">Manage Devices</h2>
          <p className="text-[14px] opacity-60">Change your security settings</p>
          <button className="px-4 py-2 my-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md">
            Sign out form All the Devices
          </button>
        </header>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 my-5">
            <img src={ManageSVG} alt="Email" />
            <header className="">
              <h2 className="text-base font-bold">iPhone 14y</h2>
              <p className="text-xs opacity-60">London UK, Oct 23 at 1:15 AM</p>
            </header>
          </div>
          <div className="relative">
            <div className="dropdown dropdown-right">
              <div tabIndex={0}>
                {" "}
                <FiMoreVertical className="text-2xl cursor-pointer" />
              </div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a>Revoke Access</a>
                </li>
                <li>
                  <a>View Details</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 my-5">
            <img src={ManageSVG} alt="Email" />
            <header className="">
              <h2 className="text-base font-bold">Macbook Air</h2>
              <p className="text-xs opacity-60">Gujarat India, Oct 24 at 3:15 AM</p>
            </header>
          </div>
          <div className="relative">
            <div className="dropdown dropdown-right">
              <div tabIndex={0}>
                {" "}
                <FiMoreVertical className="text-2xl cursor-pointer" />
              </div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a>Revoke Access</a>
                </li>
                <li>
                  <a>View Details</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="h-auto col-span-2 p-5 rounded-lg border">
        <header className="mb-5">
          <h2 className="text-xl font-bold">Change Your Password</h2>
          <p className="text-[14px] opacity-60">Change your password</p>
        </header>
      </div>
    </div>
  )
}

export default Security
