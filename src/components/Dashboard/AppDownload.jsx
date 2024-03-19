import { Button, Typography } from "@mui/material"
import LinearProgress from "@mui/material/LinearProgress"
import React from "react"
import downloadPhone from "../../assets/images/downloadPhone.png"

function AppDownload() {
  return (
    <div className="flex flex-col justify-around p-4 gap-1">
      <div>
        <Typography>Mobile Application</Typography>
        <Typography>All in one App</Typography>
      </div>
      <div className="flex justify-center">
        <img width={"80%"} src={downloadPhone} alt="downloadPhone" />
      </div>
      <div className="bg-white text-black p-5">
        <Typography>Total Downloads</Typography>
        <Typography sx={{ fontSize: "16px", fontWeight: "light", paddingBottom: "10px" }}>568</Typography>
        <LinearProgress variant="determinate" value={60} sx={{ marignBottom: "10px" }} />
        <Button variant="contained" sx={{ marginTop: "10px", width: "100%", backgroundColor: "#3B82F6" }}>
          Download The App Now
        </Button>
      </div>
    </div>
  )
}

export default AppDownload
