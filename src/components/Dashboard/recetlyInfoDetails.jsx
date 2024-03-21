import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import dayjs from "dayjs"

const RecentInfoDetails = ({ log, expanded, getIdToExpand, keyIdentifier }) => {
  return (
    <>
      <Accordion expanded={expanded === keyIdentifier} onChange={() => getIdToExpand(keyIdentifier)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${keyIdentifier + 1}bh-content`}
          id={`panel${keyIdentifier + 1}bh-header`}
          className="flex justify-center items-center"
        >
          <div className="text-md bg-blue-400 text-white rounded-full mr-4 flex items-center justify-center h-8 w-8">
            {log?.user?.userName.slice(0, 1).toUpperCase()}
          </div>
          <Typography className="text-black font-semibold flex">{log?.user?.userName}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontSize={14} fontWeight={600} className=" text-gray-400 flex items-center justify-center">
            Tap Date : {dayjs(log?.createdAt).format("DD-MM-YYYY")}
          </Typography>
          {log?.status.toLowerCase() === "rejected".toLowerCase() ? (
            <Typography fontSize={13} fontWeight={600} className="flex py-1 items-center justify-center text-red-600">
              {log?.message}
            </Typography>
          ) : (
            <Typography fontSize={13} fontWeight={600} className=" text-gray-400 flex items-center justify-center py-1">
              Tap Time : {dayjs(log?.createdAt).format("HH:MM A")}
            </Typography>
          )}
          <Typography
            fontSize={13}
            margin={"auto"}
            className={` ${
              log?.status.toLowerCase() === "approved" ? "bg-green-500" : "bg-red-500"
            } w-max px-6 rounded-sm text-white`}
          >
            {log?.status}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default RecentInfoDetails
