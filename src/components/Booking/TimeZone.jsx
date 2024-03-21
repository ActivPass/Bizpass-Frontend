import React from "react"
import dayjs from "dayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { TimePicker } from "@mui/x-date-pickers/TimePicker"

const TimeZone = ({ openingTime, closingTime, editable, onTimeChange }) => {
  const [closing, setClosing] = React.useState(dayjs(closingTime, "HH:mm") || dayjs("06:00", "HH:mm"))
  const [opening, setOpening] = React.useState(dayjs(openingTime, "HH:mm") || dayjs("21:00", "HH:mm"))
  const handleOpeningTimeChange = newValue => {
    setOpening(newValue)
    onTimeChange({ opening: newValue.format("HH:mm"), closing: closing.format("HH:mm") })
  }
  const handleClosingTimeChange = newValue => {
    setClosing(newValue)
    onTimeChange({ opening: opening.format("HH:mm"), closing: newValue.format("HH:mm") })
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker label="Opening" disabled={!editable} value={opening} onChange={handleOpeningTimeChange} />
      <TimePicker label="Closing" disabled={!editable} value={closing} onChange={handleClosingTimeChange} />
    </LocalizationProvider>
  )
}

export default TimeZone
