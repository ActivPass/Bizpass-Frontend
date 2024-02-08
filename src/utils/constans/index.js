import { MdTrackChanges } from "react-icons/md"
import { MdHomeFilled } from "react-icons/md"
import { MdCardMembership } from "react-icons/md"
import { HiSpeakerphone } from "react-icons/hi"
import { IoAnalyticsOutline } from "react-icons/io5"
import { TbWorld } from "react-icons/tb"
import { createTheme } from "@mui/material"
export const MENUS = [
  { name: "Dashboard", link: "/", icon: MdHomeFilled },
  { name: "Clients", link: "/clients", icon: MdTrackChanges },
  { name: "Finance", link: "/finance", icon: IoAnalyticsOutline },
  { name: "Marketing Items", link: "/marketing", icon: HiSpeakerphone },
  { name: "Membership", link: "/membership", icon: MdCardMembership },
  { name: "Leave Management", link: "/leavemanage", icon: TbWorld },
]

export const theme = createTheme({
  typography: {
    fontFamily: "Kollektif, sans-serif",
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          "&.Mui-expanded": {
            margin: 0,
            ":before": {
              opacity: 1,
            },
          },
          ":before": {
            backgroundColor: "gray",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        content: {
          "&.Mui-expanded": {
            margin: "12px 0",
          },
        },
        root: {
          "&.Mui-expanded": {
            minHeight: "48px",
          },
        },
      },
    },
  },
})
