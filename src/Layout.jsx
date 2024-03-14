import { useState } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { NavBar, SideBar } from "./components"
import { Loading, Error } from "./utils/components"
import MobileSideBar from "./components/MobileSideBar"
import useMediaQuery from "@mui/material/useMediaQuery"
import { theme } from "./utils/index"
import { useNavigate } from "react-router-dom"
// import { useSelector } from "react-redux"
import MobileQRscanner from "./pages/MobileQRscanner"

const is2faEnabled = localStorage.getItem("is2faEnabled")
// console.log(is2faEnabled)
const isVerified = localStorage.getItem("isVerified")
// console.log(isVerified)

const Layout = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [errorPageRedirectingCount, setErrorPageRedirectingCount] = useState(5)

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  // const isVerified = useSelector(state => state.twoFactorAuth.value.isVerified)
  // console.log(isVerified)
  const token = localStorage.getItem("token")
  if (!token) {
    return <Navigate to="/login" />
  }
  //if (!token) return <Navigate to="/login" />
  // if (isVerified === "false") {
  //   // console.log("Is verified ", isVerified)
  //   return <Navigate to="/2fa" />
  // }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const { data, isLoading, error } = usePartner()
  const isLoading = false
  const error = false
  const data = {
    partner: {
      partnerName: "John Doe",
      name: "John",
      email: "john@example.com",
      userId: "123456",
      age: 30,
      address: "123 Main Street",
      role: "user",
    },
  }

  if (isLoading)
    return (
      <div className="h-screen w-screen grid place-items-center">
        <Loading />
      </div>
    )
  if (error) {
    setTimeout(() => navigate("/login"), 5000)
    const redirectInterval = setInterval(() => setErrorPageRedirectingCount(errorPageRedirectingCount - 1), 1000)
    setTimeout(() => {
      clearInterval(redirectInterval)
      localStorage.clear()
    }, 5000)
    return (
      <div className="h-screen w-screen grid place-items-center">
        <Error error={error} redirect={true} seconds={errorPageRedirectingCount} />
      </div>
    )
  }

  return (
    <div className="flex h-screen dark:bg-gray-600 dark:text-white  overflow-x-hidden ">
      {/* <div className="">{isMobile ? <MobileSideBar open={open} setOpen={setOpen} /> : <SideBar />}</div> */}
      <div className="z-0 flex-grow">
        <nav className="fixed top-0 z-50">
          <NavBar user={data.partner} setOpen={setOpen} />
        </nav>
        <div className="md:h-[90vh] h-[100%] flex flex-col items-center mt-20 mx-0 scrollbar-hide">
          <div className="w-[65rem]">
            {<Outlet />} {<MobileQRscanner />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
