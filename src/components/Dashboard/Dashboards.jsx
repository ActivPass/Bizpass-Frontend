import React, { useState, useEffect } from "react"
import Card from "./Card"
import WelcomeGreeting from "../Greeting/WelcomeGreeting"
import MyChart from "./MyChart"
import { Typography, Select, MenuItem } from "@mui/material"
import EmpImg from "../../assets/images/employee.svg"
import Present from "../../assets/images/present.svg"
import Absent from "../../assets/images/absent.svg"
import Money from "../../assets/images/money.svg"
import RowNavigation from "./RowNavigation"
import RecentInfoDetails from "./recetlyInfoDetails"
import { nanoid } from "nanoid"
import EmployeeChart from "./EmployeeChart"
import NewClientsChart from "./NewClientsChart"
import AppDownload from "./AppDownload"
import IncomeExpenseChart from "./IncomeExpenseChart"

const Dashboard = () => {
  const [showWelcomePopup, setShowWelcomePopup] = useState(false)
  const [expanded, setExpanded] = useState(null)
  const [period, setPeriod] = React.useState(1)
  const [day, setDay] = React.useState(1)
  const [year, setYear] = React.useState(2023)
  const [month, setMonth] = React.useState("March")

  const handleChange = event => {
    setPeriod(event.target.value)
  }

  const handleChangeDay = event => {
    setDay(event.target.value)
  }

  const handleChangemonth = event => {
    setMonth(event.target.value)
  }

  const handleChangeyear = event => {
    setYear(event.target.value)
  }

  let Incomes = [
    {
      id: 1,
      name: "Total Clients",
      sub: "Over All",
      price: "1200",
      img: EmpImg,
      css: "bg-orange-50 text-orange-400",
    },
    {
      id: 2,
      name: "Client Entries",
      sub: "Today Tap",
      price: "845",
      img: Present,
      css: "bg-blue-50 text-blue-500",
    },
    {
      id: 3,
      name: "Total Earnings",
      sub: "This Month",
      price: "400234",
      img: Absent,
      css: "bg-emerald-50 text-emerald-500",
    },

    {
      id: 4,
      name: "Total Expenses",
      sub: "This Month",
      price: "224,74",
      img: Money,
      css: "bg-rose-50 text-rose-500",
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

  const recentLogsInfoData = [
    {
      user: {
        userName: "John Doe",
      },
      createdAt: "2024-03-17T08:30:00Z",
      status: "approved",
      message: "",
    },
    {
      user: {
        userName: "Jane Smith",
      },
      createdAt: "2024-03-16T14:45:00Z",
      status: "rejected",
      message: "Invalid entry",
    },
  ]
  const periods = [
    { value: 1, label: "Today" },
    { value: 7, label: "This Week" },
    { value: 30, label: "This Month" },
  ]
  const daysOfWeek = [
    { value: 1, label: "Monday" },
    { value: 2, label: "Tuesday" },
    { value: 3, label: "Wednesday" },
    { value: 4, label: "Thursday" },
    { value: 5, label: "Friday" },
    { value: 6, label: "Saturday" },
    { value: 7, label: "Sunday" },
  ]
  const yearsAndMonths = [
    { year: 2023, month: "March" },
    { year: 2023, month: "Feb" },
    { year: 2023, month: "Jan" },
    { year: 2022, month: "Dec" },
    { year: 2022, month: "Nov" },
  ]
  const years = [2023, 2022, 2021]

  return (
    <>
      <RowNavigation />
      <section className="p-1 sm:p-5">
        {/* Welcome Popup */}
        <WelcomeGreeting showWelcomePopup={showWelcomePopup} closeWelcomePopup={closeWelcomePopup} />
        <div className="sm:grid sm:grid-cols-10 grid grid-flow-row gap-8">
          <div className="col-span-12">
            <section className="">
              <div className="grid sm:grid-cols-4 grid-flow-row pb-6 gap-6">
                {Incomes.map(obj => {
                  return <Card data={obj} key={obj.id}></Card>
                })}
              </div>
            </section>
            <div className="flex justify-between gap-3">
              <div className="h-auto w-[30%] border-slate-200 border-solid border-2 rounded-sm p-2 overflow-auto scrollbar-hide">
                <div className="flex justify-between items-center py-2">
                  <p className="m-0 p-1 text-center font-bold">Recent Entries</p>
                  <Select value={period} label="Today" sx={{ width: "40%", height: "40px" }} onChange={handleChange}>
                    {periods.map(({ value, label }) => (
                      <MenuItem key={value} value={value}>
                        {label}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
                <hr className="py-2" />
                {recentLogsInfoData.map((log, index) => {
                  const keyIdentifier = nanoid()
                  return (
                    <RecentInfoDetails
                      log={log}
                      expanded={expanded}
                      getIdToExpand={data => {
                        expanded === data ? setExpanded(null) : setExpanded(data)
                      }}
                      keyIdentifier={index}
                      key={keyIdentifier}
                    />
                  )
                })}
              </div>
              <section className="h-auto w-[70%] rounded-md border">
                <div className="px-2 py-4 flex justify-between">
                  <div>
                    <p className="font-bold">Most Visited Hours</p>
                    <p>based on visits to this place</p>
                  </div>
                  <Select value={day} label="Monday" sx={{ width: "20%", height: "40px" }} onChange={handleChangeDay}>
                    {daysOfWeek.map(({ value, label }) => (
                      <MenuItem key={value} value={value}>
                        {label}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
                <MyChart />
              </section>
            </div>

            {/* today */}
            <div className="h-auto rounded-md border">
              <div className="px-2 py-4 flex justify-between">
                <div>
                  <p className="font-bold">Revenue Updates</p>
                  <p>Overview of Profits</p>
                </div>
                <Select value={month} label="2023" sx={{ width: "40%", height: "40px" }} onChange={handleChangemonth}>
                  {yearsAndMonths.map(({ year, month }) => (
                    <MenuItem key={month} value={month}>
                      {`${month} ${year}`}
                    </MenuItem>
                  ))}
                </Select>
              </div>
              <IncomeExpenseChart />
            </div>
            {/* latest */}
            <div className="flex justify-between mt-4 gap-3">
              <div className="h-auto w-[35%] rounded-md border">
                <div className="px-2 py-4 flex justify-between">
                  <div>
                    <p className="font-bold">Employee Salary</p>
                    <p>Every Month</p>
                  </div>
                  <Select value={year} label="2023" sx={{ width: "40%", height: "40px" }} onChange={handleChangeyear}>
                    {years.map(value => (
                      <MenuItem value={value} key={value}>
                        {value}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
                <EmployeeChart />
              </div>

              <div className="h-auto w-[35%] px-2 rounded-md border">
                <div className="px-2 py-4 flex justify-between">
                  <div>
                    <p className="font-bold">New Clients</p>
                    <p>Last 3 Months</p>
                  </div>
                </div>
                <NewClientsChart />
              </div>

              <div className="h-auto w-[35%] px-2 rounded-md border bg-blue-500 text-white">
                <AppDownload />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Dashboard
