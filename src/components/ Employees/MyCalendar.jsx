import React, { useState } from "react"
import dayjs from "dayjs"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar"

function MyCalendar() {
  const [selectedDate, setSelectedDate] = useState(dayjs())
  const [employeeData, setEmployeeData] = useState({
    id: 1,
    name: "Sakthivel",
    leaveDates: [1, 2, 4, 3],
  })

  const calculateDays = month => {
    const totalDays = dayjs(month).daysInMonth()
    let presentDays = totalDays
    let leaveDays = 0

    employeeData.leaveDates.forEach(date => {
      if (dayjs(month).date(date).isSame(month, "month")) {
        presentDays--
        leaveDays++
      }
    })

    return { presentDays, leaveDays }
  }

  const getCellColor = day => {
    const { leaveDates } = employeeData
    const dayOfMonth = dayjs(day).date()
    if (leaveDates.includes(dayOfMonth)) {
      return "red"
    } else {
      return "green"
    }
  }

  return (
    <section className="p-1 sm:p-5">
      <div className="flex py-7">
        <div className="flex flex-col bg-gray-200 rounded">
          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                value={selectedDate}
                onChange={newSelectedDate => {
                  setSelectedDate(newSelectedDate)
                }}
                components={{
                  day: ({ day, ...dayComponentProps }) => {
                    const style = {
                      backgroundColor: getCellColor(day),
                    }
                    return (
                      <div {...dayComponentProps} style={style}>
                        {day.day}
                      </div>
                    )
                  },
                }}
              />
            </LocalizationProvider>
          </div>
          {/* <div className="text-center p-2">
            <div className="bg-white p-2">
                <p>Name: {employeeData.name}</p>
                <p>Present Days: {calculateDays(selectedDate).presentDays}</p>
                <p>Leave Days: {calculateDays(selectedDate).leaveDays}</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default MyCalendar
