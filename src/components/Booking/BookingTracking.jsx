import React from "react"
import NavHeader from "../NavHeader"
import Paper from "@mui/material/Paper"
import { ViewState, GroupingState, IntegratedGrouping } from "@devexpress/dx-react-scheduler"
import {
  Scheduler,
  Resources,
  Appointments,
  AppointmentTooltip,
  GroupingPanel,
  DayView,
  AppointmentForm,
} from "@devexpress/dx-react-scheduler-material-ui"

function BookingTracking() {
  // Get the current date in ISO format (YYYY-MM-DD)
  const currentDate = new Date().toISOString().split("T")[0]

  const data = [
    {
      id: 1,
      startDate: currentDate + "T10:00",
      endDate: currentDate + "T11:00",
      title: "Booked by Devan",
      courtId: 1,
    },
    {
      id: 2,
      startDate: currentDate + "T13:00",
      endDate: currentDate + "T14:30",
      title: "Booked by aakash",
      courtId: 2,
    },
    {
      id: 3,
      startDate: currentDate + "T12:00",
      endDate: currentDate + "T13:30",
      title: "Booked by aakash",
      courtId: 3,
    },
  ]

  const resources = [
    {
      fieldName: "courtId",
      title: "court",
      instances: [
        { id: 1, text: "Court 1", color: "#6b5b95" },
        { id: 2, text: "Court 2", color: "#feb236" },
        { id: 3, text: "Court 3", color: "#6b5b95" },
      ],
    },
  ]

  const grouping = [{ resourceName: "courtId" }]

  return (
    <div>
      <NavHeader
        current={{ name: "Booking Tracking" }}
        previous={[
          { name: "Home", link: "/" },
          { name: "Booking", link: "/bookingtracking" },
          { name: "Booking Settings", link: "/bookingsetting" },
        ]}
      />

      <div className="p-1 sm:p-5">
        <Paper className="m-4">
          <Scheduler data={data}>
            <ViewState defaultCurrentDate={currentDate} />
            <GroupingState grouping={grouping} />
            <DayView startDayHour={9} endDayHour={15} intervalCount={1} />
            <Appointments />
            <Resources data={resources} mainResourceName="courtId" />
            <IntegratedGrouping />
            <AppointmentTooltip showOpenButton />
            <AppointmentForm />
            <GroupingPanel />
          </Scheduler>
        </Paper>
      </div>
    </div>
  )
}

export default BookingTracking
