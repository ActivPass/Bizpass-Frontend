import React from "react"
import EmailSvg from "../../assets/images/Email.svg"
import ZoneSVG from "../../assets/images/zone.svg"
import Switch from "@mui/material/Switch"

const Notification = () => {
  return (
    <div className="h-auto w-[45vw] p-5 rounded-lg">
      <header className="">
        <h2 className="text-xl font-bold">Notification Preferences</h2>
        <p className="text-[14px] opacity-60">Choose your notification preference</p>
      </header>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 my-5">
          <img src={EmailSvg} alt="Email" />
          <header className="">
            <h2 className="text-base font-bold">Email Notification</h2>
            <p className="text-xs opacity-60">Enable to receive email notifications.</p>
          </header>
        </div>
        <Switch />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 my-5">
          <img src={ZoneSVG} alt="Email" />
          <header className="">
            <h2 className="text-base font-bold">4 Zones Notification</h2>
            <p className="text-xs opacity-60">Enable to receive 4 zone notifications.</p>
          </header>
        </div>
        <Switch />
      </div>

      <div className="ml-12">
        <ol type="1">
          <li className="my-1 font-semibold flex items-center justify-between">
            1. Client Zone
            <Switch />
          </li>
          <li className="font-semibold flex items-center justify-between">
            2. Employee Zone
            <Switch />
          </li>
          <li className="my-1 font-semibold flex items-center justify-between">
            3. Finance Zone
            <Switch />
          </li>
          <li className="font-semibold flex items-center justify-between">
            4. Membership Zone
            <Switch />
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Notification
