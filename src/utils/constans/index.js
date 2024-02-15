import { LuUser } from "react-icons/lu"
import { LiaUsersSolid } from "react-icons/lia"
import { MdHomeFilled } from "react-icons/md"
import { MdCardMembership } from "react-icons/md"
import { HiSpeakerphone } from "react-icons/hi"
import { IoAnalyticsOutline } from "react-icons/io5"
import { BsClipboard2 } from "react-icons/bs"
import { FaRegMoneyBillAlt } from "react-icons/fa"
import { createTheme } from "@mui/material"
export const MENUS = [
  { name: "Dashboard", link: "/", icon: MdHomeFilled },
  {
    name: "Employees",
    link: "/employees",
    icon: LuUser,
    submenu: [
      { name: "Leave Management", link: "/leavemanagement", icon: BsClipboard2 },
      { name: "Leave Settings", link: "/leave-setting", icon: BsClipboard2 },
    ],
  },
  { name: "Clients", link: "/clients", icon: LiaUsersSolid },
  {
    name: "Payroll",
    link: "/payroll",
    icon: FaRegMoneyBillAlt,
    submenu: [{ name: "Payslip", link: "/Payslip", icon: BsClipboard2 }],
  },
  { name: "Finance", link: "/finance", icon: IoAnalyticsOutline },
  { name: "Marketing Items", link: "/marketing", icon: HiSpeakerphone },
  { name: "Membership", link: "/membership", icon: MdCardMembership },
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
