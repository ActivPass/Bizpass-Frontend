import React, { useState, useEffect } from "react"
import Card from "./Card"
import WelcomeGreeting from "../Greeting/WelcomeGreeting"
import MyChart from "./MyChart"


const Dashboard = () => {
  const [showWelcomePopup, setShowWelcomePopup] = useState(false)

  let Incomes = [
    {
      id: 1,
      name: "Total Clients",
      sub: "Over All",
      price: "1200",
      css:"bg-orange-50 text-orange-400",
    },
    {
      id: 2,
      name: "Client Entries",
      sub: "Today Tap",
      price: "845",
      css:"bg-blue-50 text-blue-500",
    },
    {
      id: 3,
      name: "New Clients  Entries",
      sub: "This Month",
      price: "400",
      css:"bg-emerald-50 text-emerald-500",
    },
    
    {
      id: 4,
      name: "Monthly Revenue",
      sub: "This Month",
      price: "224,74",
      css:"bg-rose-50 text-rose-500",
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
          <div className="col-span-8">
            <section className="">
              <div className="grid sm:grid-cols-4 grid-flow-row pb-6 gap-6">
                {Incomes.map(obj => {
                  return <Card data={obj} key={obj.id}></Card>
                })}
              </div>
            </section>
            <section className=" h-auto  rounded-md border border-gray-100 bg-gray-100">
              <p className="py-7 px-2 font-bold">Today&apos; s Income</p>
              <div className="mt-[-3rem]"></div>
              <MyChart />
            </section>
          </div>
          <div className="sm:col-span-2 col-span-8 bg-blue-50  overflow-hidden h-[30rem]">
          </div> 
        </div>
      </section>
    </>
  )
}

export default Dashboard
