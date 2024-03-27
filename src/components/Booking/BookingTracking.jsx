import React, { useState } from "react"
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
  Toolbar,
  DateNavigator,
  TodayButton,
} from "@devexpress/dx-react-scheduler-material-ui"
import Grid from "@mui/material/Grid"
import Card from "./Card"
import EmpImg from "../../assets/images/employee.svg"
import Present from "../../assets/images/present.svg"
import Absent from "../../assets/images/absent.svg"
import Money from "../../assets/images/money.svg"
import { useAllBookings } from "../../api/hook"
import CircularProgress from "@mui/material/CircularProgress"

function BookingTracking() {
  const currentDate = new Date().toISOString().split("T")[0]
  const { data: bookingsData, isLoading } = useAllBookings()
  const bookingData = bookingsData?.data?.data?.map((data, index) => ({
    id: index + 1,
    courtId: data.court.name,
    startDate: data.startTime.split(".")[0].slice(0, -3),
    endDate: data.endTime.split(".")[0].slice(0, -3),
    title: `Booked by ${data.name}`,
    status: data.status,
  }))
  console.log(bookingData)
  const [showAppointmentTooltip, setShowAppointmentTooltip] = useState(false)
  const resources = [
    {
      fieldName: "courtId",
      title: "court",
      instances: [
        { id: "Court 1", text: "Court 1" },
        { id: "Court 2", text: "Court 2" },
        { id: "Court 3", text: "Court 3" },
      ],
    },
  ]

  const grouping = [{ resourceName: "courtId" }]

  const Incomes = [
    {
      id: 1,
      name: "Total Slots",
      price: "2",
      img: EmpImg,
      css: "bg-orange-50 text-orange-400",
    },
    {
      id: 2,
      name: "Booked Slots",
      sub: "Today",
      price: "11",
      img: Present,
      css: "bg-green-50 text-green-500",
    },
    {
      id: 3,
      name: "Estimated Revenue",
      sub: "Today",
      price: "500",
      img: Absent,
      css: "bg-rose-50 text-rose-500",
    },
    {
      id: 4,
      name: "Cancelled Slots",
      sub: "This Month",
      price: "28",
      img: Money,
      css: "bg-blue-50 text-blue-500",
    },
  ]

  const Content = ({ children, appointmentData, ...restProps }) => (
    <AppointmentTooltip.Content {...restProps} appointmentData={appointmentData}>
      <Grid container sx={{ display: "flex", justifyContent: "end", marginTop: "20px" }}>
        <Grid item xs={3}>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg" onClick={() => cancelBooking(appointmentData)}>
            Cancel
          </button>
        </Grid>
      </Grid>
    </AppointmentTooltip.Content>
  )

  const cancelBooking = cancelledBooking => {
    const updatedBookings = bookingData.filter(booking => booking.id !== cancelledBooking.id)
    // Update bookings state here
    setShowAppointmentTooltip(false)
  }

  const Appointment = ({ children, style, ...restProps }) => {
    const { status } = restProps.data

    let appointmentColor = "red"

    if (status === "paid") {
      appointmentColor = "green"
    }

    return (
      <Appointments.Appointment
        {...restProps}
        style={{
          ...style,
          backgroundColor: appointmentColor,
        }}
      >
        {children}
      </Appointments.Appointment>
    )
  }

  if (isLoading) {
    return (
      <div className="w-full h-[90vh] flex items-center justify-center">
        <CircularProgress />
      </div>
    )
  }

  return (
    <div className="p-1 sm:p-5 bg-[#F7F8F9] min-h-screen">
      <NavHeader
        current={{ name: "Booking Tracking" }}
        previous={[
          { name: "Home", link: "/" },
          { name: "Booking", link: "/bookingtracking" },
          { name: "Booking Settings", link: "/bookingsetting" },
        ]}
      />
      <section className="">
        <div className="grid sm:grid-cols-4 grid-flow-row pb-6 gap-6">
          {Incomes.map(obj => (
            <Card data={obj} key={obj.id}></Card>
          ))}
        </div>
      </section>
      <div className="p-1 sm:p-5">
        <Paper className="m-4">
          <Scheduler data={bookingData}>
            <ViewState defaultCurrentDate={currentDate} />
            <GroupingState grouping={grouping} />
            <DayView startDayHour={9} endDayHour={15} intervalCount={1} />
            {/* <MonthView /> */}
            <Appointments appointmentComponent={Appointment} />
            <Resources data={resources} mainResourceName="courtId" />
            <IntegratedGrouping />
            <Toolbar />
            <DateNavigator />
            <TodayButton />
            <AppointmentTooltip contentComponent={Content} showCloseButton />
            <GroupingPanel />
          </Scheduler>
        </Paper>
      </div>
    </div>
  )
}

export default BookingTracking
