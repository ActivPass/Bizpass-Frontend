import React, { useState } from "react"
import NavHeader from "../NavHeader"
import { Typography, Button, Switch } from "@mui/material"
import { Unstable_NumberInput as BaseNumberInput, numberInputClasses } from "@mui/base/Unstable_NumberInput"
import { styled } from "@mui/system"
import TimeZone from "./TimeZone"
import dayjs from "dayjs"
function BookingSetting() {
  const [value, setValue] = React.useState(0)

  const [timingsState, settimingsState] = useState({
    monday: { isOpen: true, open: "09:00", close: "17:00" },
    tuesday: { isOpen: true, open: "09:00", close: "17:00" },
    wednesday: { isOpen: true, open: "09:00", close: "17:00" },
    thursday: { isOpen: true, open: "09:00", close: "17:00" },
    friday: { isOpen: true, open: "09:00", close: "17:00" },
    saturday: { isOpen: false, open: "", close: "" }, // Closed on Saturday
    sunday: { isOpen: false, open: "", close: "" }, // Closed on Sunday
  })
  const isEditing = true

  const dayOfWeek = dayjs().format("dddd")
  const currentTime = dayjs().format("HH:mm")
  let currentStatus = false

  if (timingsState[dayOfWeek.toLocaleLowerCase()].isOpen) {
    const openingTime = timingsState[dayOfWeek.toLowerCase()]["open"]
    const closingTime = timingsState[dayOfWeek.toLowerCase()]["close"]
    const openTimeObject = dayjs(openingTime, "HH:mm")
    let closeTimeObject = dayjs(closingTime, "HH:mm")
    const currentTimeObject = dayjs(currentTime, "HH:mm")
    let isBetween
    if (closeTimeObject.isBefore(openTimeObject)) {
      const newCloseTimeObject = closeTimeObject.add(1, "day")
      isBetween = currentTimeObject.isAfter(openTimeObject) && currentTimeObject.isBefore(newCloseTimeObject)
    } else isBetween = currentTimeObject.isAfter(openTimeObject) && currentTimeObject.isBefore(closeTimeObject)
    currentStatus = isBetween ? true : false
  } else {
    currentStatus = false
  }

  const handleTimeChange = (day, newTimes) => {
    settimingsState(prevTimingsState => ({
      ...prevTimingsState,
      [day.toLowerCase()]: {
        ...prevTimingsState[day.toLowerCase()],
        open: newTimes.opening,
        close: newTimes.closing,
      },
    }))
  }

  const CustomNumberInput = React.forwardRef(function CustomNumberInput(props, ref) {
    return (
      <BaseNumberInput
        slots={{
          root: StyledInputRoot,
          input: StyledInputElement,
          incrementButton: StyledButton,
          decrementButton: StyledButton,
        }}
        slotProps={{
          incrementButton: {
            children: "▴",
          },
          decrementButton: {
            children: "▾",
          },
        }}
        {...props}
        ref={ref}
      />
    )
  })

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
      <div>
        <div>
          <Typography variant="h4" sx={{ marginY: "15px" }}>
            Booking Settings
          </Typography>
        </div>
        <div className="bg-white rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
            <div className="mb-4">
              <label htmlFor="minimumBookingTime" className="block text-sm font-medium text-gray-700">
                Minium Booking Time
              </label>
              <input
                type="text"
                id="minimumBookingTime"
                name="minimumBookingTime"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter Minium Booking Time"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="noOfCourts" className="block text-sm font-medium text-gray-700">
                No of Courts
              </label>
              <CustomNumberInput placeholder="No of Court" />
            </div>

            {/* Start and end time fields for each day */}
            <div className="col-span-2 w-full">
              <p className="text-lg font-semibold">Working Hours</p>
              {Object.keys(timingsState).map(day => {
                day = day.charAt(0).toUpperCase() + day.slice(1)
                return (
                  <div key={day} className="flex items-center gap-[13px] pb-4 sm:gap-7 mb-2">
                    <span className="sm:hidden w-3">{day.slice(0, 3)}</span>
                    <span className="sm:mr-2 hidden  sm:text-base sm:w-12">{day}</span>
                    <span className="hidden sm:inline sm:text-base sm:w-12 sm:mr-2">{day}</span>
                    <Switch
                      disabled={!isEditing}
                      className="transform sm:scale-100 scale-75 mx-2"
                      checked={timingsState[day.toLocaleLowerCase()].isOpen}
                      onChange={() =>
                        settimingsState({
                          ...timingsState,
                          [day.toLocaleLowerCase()]: { isOpen: !timingsState[day.toLocaleLowerCase()].isOpen },
                        })
                      }
                      size="small"
                    />
                    <div
                      className={` ${
                        !timingsState[day.toLocaleLowerCase()].isOpen && "opacity-50"
                      } w-[1.7rem] ml-[-1rem] text-xs sm:text-base sm:w-[3.5rem]`}
                    >
                      {timingsState[day.toLocaleLowerCase()].isOpen ? "Open" : "Closed"}
                    </div>
                    {timingsState[day.toLocaleLowerCase()].isOpen && (
                      <TimeZone
                        openingTime={timingsState[day.toLocaleLowerCase()].open}
                        closingTime={timingsState[day.toLocaleLowerCase()].close}
                        editable={isEditing}
                        onTimeChange={newTimes => handleTimeChange(day, newTimes)}
                      />
                    )}
                  </div>
                )
              })}
            </div>

            <div className="mb-4">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="text"
                id="price"
                name="price"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter Price"
              />
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <Button sx={{ backgroundColor: "#EADDFF", color: "black", textTransform: "none" }}>Cancel</Button>
            <Button
              sx={{
                backgroundColor: "#7539FF",
                color: "white",
                ":hover": { backgroundColor: "white", color: "#7539FF" },
                border: "solid",
                borderColor: "#7539FF",
                textTransform: "none",
              }}
            >
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Styled components...

export default BookingSetting

const blue = {
  100: "#DAECFF",
  200: "#80BFFF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
}

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
}

const StyledInputRoot = styled("div")(
  ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 400;
    border-radius: 8px;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0px 2px 4px ${theme.palette.mode === "dark" ? "rgba(0,0,0, 0.5)" : "rgba(0,0,0, 0.05)"};
    display: grid;
    grid-template-columns: 1fr 19px;
    grid-template-rows: 1fr 1fr;
    overflow: hidden;
    column-gap: 8px;
    padding: 2px;
  
    &.${numberInputClasses.focused} {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === "dark" ? blue[700] : blue[200]};
    }
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
)

const StyledInputElement = styled("input")(
  ({ theme }) => `
    font-size: 0.875rem;
    font-family: inherit;
    font-weight: 400;
    line-height: 1.5;
    grid-column: 1/2;
    grid-row: 1/3;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: inherit;
    border: none;
    border-radius: inherit;
    padding: 8px 12px;
    outline: 0;
  `
)

const StyledButton = styled("button")(
  ({ theme }) => `
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    appearance: none;
    padding: 0;
    width: 19px;
    height: 19px;
    font-family: system-ui, sans-serif;
    font-size: 0.875rem;
    line-height: 1;
    box-sizing: border-box;
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 0;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
  
    &:hover {
      background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
      cursor: pointer;
    }
  
    &.${numberInputClasses.incrementButton} {
      grid-column: 2/3;
      grid-row: 1/2;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      border: 1px solid;
      border-bottom: 0;
      border-color: ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
      background: ${theme.palette.mode === "dark" ? grey[900] : grey[50]};
      color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
  
      &:hover {
        cursor: pointer;
        color: #FFF;
        background: ${theme.palette.mode === "dark" ? blue[600] : blue[500]};
        border-color: ${theme.palette.mode === "dark" ? blue[400] : blue[600]};
      }
    }
  
    &.${numberInputClasses.decrementButton} {
      grid-column: 2/3;
      grid-row: 2/3;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      border: 1px solid;
      border-color: ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
      background: ${theme.palette.mode === "dark" ? grey[900] : grey[50]};
      color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
    }
  
    &:hover {
      cursor: pointer;
      color: #FFF;
      background: ${theme.palette.mode === "dark" ? blue[600] : blue[500]};
      border-color: ${theme.palette.mode === "dark" ? blue[400] : blue[600]};
    }
  
    & .arrow {
      transform: translateY(-1px);
    }
  
    & .arrow {
      transform: translateY(-1px);
    }
  `
)
