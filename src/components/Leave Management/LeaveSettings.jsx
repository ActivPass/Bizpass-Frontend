import React, { useState } from "react"
import { TextField, Button, FormControlLabel, Card, CardContent } from "@mui/material"
import { styled } from "@mui/material/styles"
import Switch, { switchClasses } from "@mui/material/Switch"
import { GoChevronRight } from "react-icons/go"
import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"


// Styled Switch component

const SwitchTextTrack = styled(Switch)({
  width: 80,
  height: 48,
  padding: 8,
  [`& .${switchClasses.switchBase}`]: {
    padding: 11,
    color: "#ff6a00",
  },
  [`& .${switchClasses.thumb}`]: {
    width: 26,
    height: 26,
    backgroundColor: "#fff",
  },
  [`& .${switchClasses.track}`]: {
    background: "linear-gradient(to right, #ee0979, #ff6a00)",
    opacity: "1 !important",
    borderRadius: 20,
    position: "relative",
    "&:before, &:after": {
      display: "inline-block",
      position: "absolute",
      top: "50%",
      width: "50%",
      transform: "translateY(-50%)",
      color: "#fff",
      textAlign: "center",
      fontSize: "0.75rem",
      fontWeight: 500,
    },
    "&:before": {
      content: '"ON"',
      left: 4,
      opacity: 0,
    },
    "&:after": {
      content: '"OFF"',
      right: 4,
    },
  },
  [`& .${switchClasses.checked}`]: {
    [`&.${switchClasses.switchBase}`]: {
      color: "#185a9d",
      transform: "translateX(32px)",
      "&:hover": {
        backgroundColor: "rgba(24,90,257,0.08)",
      },
    },
    [`& .${switchClasses.thumb}`]: {
      backgroundColor: "#fff",
    },
    [`& + .${switchClasses.track}`]: {
      background: "linear-gradient(to right, #43cea2, #185a9d)",
      "&:before": {
        opacity: 1,
      },
      "&:after": {
        opacity: 0,
      },
    },
  },
})

const LeaveSettings = () => {
  const [leaveTypes, setLeaveTypes] = useState({
    "Annual leave": { days: 20, show: true, logData: true },
    "Sick Leave": { days: 10, show: true, logData: true },
    "Casual Leave": { days: 5, show: true, logData: true },
    "Maternity Leave": { days: 90, show: true, logData: true },
    "Paternity leave": { days: 5, show: true, logData: true },
    "Bereavement leave": { days: 5, show: true, logData: true },
    "Marriage leave": { days: 7, show: true, logData: true },
    "Unpaid leave ( LOP )": { days: 0, show: true, logData: true },
  })

  const [editMode, setEditMode] = useState(null)
  const [editedLeaveTypes, setEditedLeaveTypes] = useState({ ...leaveTypes })

  const saveLeaveSettings = leaveType => {
    console.log("Leave settings saved successfully:", editedLeaveTypes[leaveType])
    setLeaveTypes(editedLeaveTypes)
    setEditMode(null)
  }

//   const cancelEdit = () => {
//     setEditMode(null)
//   }

  const handleSwitchToggle = leaveType => {
    const newEditedLeaveTypes = { ...editedLeaveTypes }
    newEditedLeaveTypes[leaveType].logData = !newEditedLeaveTypes[leaveType].logData
    if (newEditedLeaveTypes[leaveType].logData) {
      console.log(`Logging data for ${leaveType}`)
    }
    setEditedLeaveTypes(newEditedLeaveTypes)
  }

  return (
    <div className="p-1 md:p-5">
        <div className="flex items-center align-middle mb-5">
        <p className="text-2xl font-bold">
          Leave Settings <span className="text-3xl opacity-40"> |</span>{" "}
        </p>
        &nbsp;&nbsp;
        <Link to={"/"}>
          <FaHome className="sm:text-2xl" />
        </Link>
        &nbsp;
        <GoChevronRight className="sm:text-xl opacity-40 " />
        <Link to={"/"} className=" text-xs sm:text-base font-semibold opacity-40">
          Home
        </Link>
        <GoChevronRight className="sm:text-xl opacity-40 " />
        <Link to={"/leavemanagement"} className=" text-xs sm:text-base font-semibold opacity-40">
           Leave Management 
        </Link>
        <GoChevronRight className="sm:text-xl opacity-40 " />
        <div className=" text-xs sm:text-base ">Leave Settings</div>
      </div>

      <div className="bg-white p-4 w-3/4 mx-auto rounded shadow">
          <h2 className="mb-4">Leave Settings</h2>
          {Object.entries(leaveTypes).map(([leaveType, { days, show, logData }]) => (
            <Card key={leaveType} className="mb-4">
              <CardContent>
                <div className="flex items-center">
                  <div className="flex-grow">
                    <TextField
                      id={`leaveType_${leaveType}`}
                      label={leaveType}
                      variant="outlined"
                      className="w-full"
                      value={editMode === leaveType ? editedLeaveTypes[leaveType].days : days}
                      disabled={editMode !== leaveType}
                      onChange={e => {
                        const newEditedLeaveTypes = { ...editedLeaveTypes }
                        newEditedLeaveTypes[leaveType].days = e.target.value
                        setEditedLeaveTypes(newEditedLeaveTypes)
                      }}
                    />
                  </div>
                  <div className="ml-2">
                    {editMode !== leaveType && (
                      <FormControlLabel
                        control={
                          <SwitchTextTrack
                            checked={logData}
                            onChange={() => handleSwitchToggle(leaveType)}
                            color="primary"
                          />
                        }
                        // label="Log Data"
                      />
                    )}
                  </div>
                  <div className="ml-2">
                    <Button
                      variant="contained"
                      color={editMode === leaveType ? "secondary" : "primary"}
                      onClick={() => {
                        setEditMode(editMode === leaveType ? null : leaveType)
                      }}
                    >
                      {editMode === leaveType ? "Cancel" : "Edit"}
                    </Button>
                  </div>
                </div>
                {editMode === leaveType && (
                  <div className="mt-2">
                    <Button variant="contained" color="primary" onClick={() => saveLeaveSettings(leaveType)}>
                      Save
                    </Button>
                    {/* <Button variant="contained" color="secondary" style={{ marginLeft: "8px" }} onClick={cancelEdit}>
                      Cancel
                    </Button> */}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  )
}

export default LeaveSettings
