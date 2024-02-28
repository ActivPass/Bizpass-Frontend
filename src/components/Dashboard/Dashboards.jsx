import React, { useState, useEffect } from "react"
import Card from "./Card"
import WelcomeGreeting from "../Greeting/WelcomeGreeting"
import MyChart from "./MyChart"
import { LineChart } from "./LineChart"
import { Typography } from "@mui/material"
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6"
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const Dashboard = () => {
  const [showWelcomePopup, setShowWelcomePopup] = useState(false)

  let Incomes = [
    {
      id: 1,
      name: "Total Clients",
      sub: "Over All",
      price: "1200",
      css: "bg-orange-50 text-orange-400",
    },
    {
      id: 2,
      name: "Client Entries",
      sub: "Today Tap",
      price: "845",
      css: "bg-blue-50 text-blue-500",
    },
    {
      id: 3,
      name: "New Clients  Entries",
      sub: "This Month",
      price: "400",
      css: "bg-emerald-50 text-emerald-500",
    },

    {
      id: 4,
      name: "Monthly Revenue",
      sub: "This Month",
      price: "224,74",
      css: "bg-rose-50 text-rose-500",
    },
    {
      id: 5,
      name: "Payroll",
      sub: "This Month",
      price: "474,45",
      css: "bg-green-50 text-green-500",
    },
    {
      id: 6,
      name: "Reports",
      sub: "This Month",
      price: "845",
      css: "bg-blue-50 text-blue-500",
    },
  ]

  // Function for welcome popup
  const closeWelcomePopup = () => {
    setShowWelcomePopup(false)
  }

  useEffect(() => {
    setShowWelcomePopup(true)
    const timeoutId = setTimeout(() => {
      closeWelcomePopup()
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      <section className="p-1 sm:p-5">
        {/* Welcome Popup */}
        <WelcomeGreeting showWelcomePopup={showWelcomePopup} closeWelcomePopup={closeWelcomePopup} />
        <div className="sm:grid sm:grid-cols-10 grid grid-flow-row gap-8">
          <div className="col-span-12">
            <section className="">
              <div className="grid sm:grid-cols-6 grid-flow-row pb-6 gap-6">
                {Incomes.map(obj => {
                  return <Card data={obj} key={obj.id}></Card>
                })}
              </div>
            </section>
            <div className="flex justify-between gap-7">
              <section className="h-auto w-[65%] rounded-md border border-gray-100 bg-gray-100">
                <p className="py-7 px-2 font-bold">Weekly Income</p>
                <div className="mt-[-3rem]"></div>
                <MyChart />
              </section>
              <div className="w-[35%] flex flex-col gap-10 rounded-lg">
                <div className="flex h-[50%] w-full justify-around items-center bg-slate-100">
                  <div className="w-[50%]">
                    <Typography style={{ fontSize: "20px", paddingBottom: "18px" }}>Yearly Breakup</Typography>
                    <Typography>$ 36,358</Typography>
                    <div className="flex gap-5 items-center py-2">
                      <FaArrowTrendUp />
                      <Typography>+9% last year</Typography>
                    </div>
                  </div>
                  <div className="w-[20%]">
                    <CircularProgressbar value={75} />
                  </div>
                </div>
                <div className="flex h-[50%] justify-between items-center p-4 bg-slate-100">
                  <div className="w-[50%]">
                    <Typography style={{ fontSize: "20px", paddingBottom: "18px" }}>Monthly Earnings</Typography>
                    <Typography>$ 6,820</Typography>
                    <div className="flex gap-5 items-center py-2">
                      <FaArrowTrendDown />
                      <Typography>+9% last year</Typography>
                    </div>
                  </div>
                  <div className="w-[20%]">
                    <CircularProgressbar value={55} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LineChart />
      </section>
    </>
  )
}

export default Dashboard
