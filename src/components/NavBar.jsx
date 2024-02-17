import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { TextField } from "@mui/material"
import { IoIosNotifications } from "react-icons/io"
import { ThanksGreeting, UserProfileModal } from "../components"
import { IoChatbox, IoSettings } from "react-icons/io5"
import { BiSolidContact } from "react-icons/bi"
import { CiLogout } from "react-icons/ci"
import useMediaQuery from "@mui/material/useMediaQuery"
import { theme } from "../utils/index"
import { FiMenu } from "react-icons/fi"
import ActivPassImage from "../assets/images/ActivPass.png"
import { MdQrCodeScanner } from "react-icons/md"
import QRscanner from "../pages/QRscanner"
import Popup from "../pages/Popup"
import { MdOutlineSupportAgent } from "react-icons/md"

const NavBar = ({ user, setOpen }) => {
  const [showDropDown, setShowDropDown] = useState(false)
  const [showGreeting, setShowGreeting] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const userProfileModalRef = useRef(null)

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const navigate = useNavigate()

  const handleLogout = () => {
    setShowGreeting(true)
  }

  if (showGreeting) {
    setTimeout(() => {
      navigate("/login")
      localStorage.clear()
      // localStorage.removeItem("userId")
      // localStorage.removeItem("token")
    }, 1500)
    return <ThanksGreeting />
  }

  // const [isPopupVisible, setPopupVisible] = useState(false)

  const handleIconClick = () => {
    setShowModal(true)
  }

  if (showGreeting) {
    return <ThanksGreeting />
  }

  return (
    <nav className="dark:bg-gray-800 dark:text-white bg-white ">
      <div className="flex items-center justify-between w-full p-2 py-4">
        {!isMobile ? (
          <div className="flex items-center  gap-10 px-5">
            {/* <p className="text-xl font-bold">Dashboard</p> */}
            <TextField
              label="Search"
              size="small"
              InputProps={{
                style: {
                  backgroundColor: "#f6f6f6",
                  borderRadius: "50px",
                  width: "25rem",
                },
              }}
            />
          </div>
        ) : (
          <FiMenu className="text-3xl ml-5 my-3" onClick={() => setOpen(true)} />
        )}

        <div className="flex flex-row w-full justify-end gap-4">
          <div className=" ">
            <img src={ActivPassImage} className="sm:hidden h-10" alt="Logo" />
          </div>

          <div className="flex items-center">
            <div className="hidden md:block lg:block">
              <div onClick={handleIconClick} className="cursor-pointer">
                <MdQrCodeScanner className="text-2xl" />
              </div>
            </div>

            <Popup showModal={showModal} setShowModal={setShowModal}>
              <QRscanner />
            </Popup>
          </div>
          <div className="flex items-center ">
            <IoIosNotifications className=" text-2xl " />
          </div>
          <div className="flex items-center">
            <IoChatbox className=" text-2xl " />
          </div>
          <div className="dropdown dropdown-end">
            {user ? (
              // User is logged in, display profile icon with initials
              <label tabIndex={0} className="rounded" onClick={() => setShowDropDown(prev => !prev)}>
                <div className="text-md bg-amber-400 rounded-full mr-4 flex items-center justify-center h-8 w-8">
                  {user.partnerName && user.partnerName.slice(0, 1).toUpperCase()}
                </div>
              </label>
            ) : (
              // User is not logged in, display login link
              <Link to="/login">Login</Link>
            )}
            {showDropDown && (
              <ul tabIndex={0} className="dropdown-content z-[2] menu  shadow bg-base-100 rounded-box w-40">
                <div className="px-4">
                  <label tabIndex={0} className="rounded" onClick={() => setShowDropDown(prev => !prev)}>
                    <div className="text-md bg-amber-400 rounded-full mr-4 flex items-center justify-center h-8 w-8">
                      {user.partnerName && user.partnerName.slice(0, 1).toUpperCase()}
                    </div>
                  </label>
                  <div className="font-bold py-1">{user.partnerName}</div>
                  <div className="text-xs opacity-50">{user.name}</div>
                </div>
                <li>
                  <Link to="/settings/profile">
                    <BiSolidContact /> My Profile
                  </Link>
                  <Link to="/settings/accountsettings" onClick={() => setShowDropDown(false)}>
                    <IoSettings /> Settings
                  </Link>
                </li>
                <li>
                  <Link to="/support" onClick={() => setShowDropDown(false)}>
                    <MdOutlineSupportAgent /> Support
                  </Link>
                </li>
                <li>
                  <Link className="" onClick={() => handleLogout()}>
                    <CiLogout /> LogOut
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>

        <UserProfileModal userProfileModalRef={userProfileModalRef} user={user} />
      </div>
    </nav>
  )
}

export default NavBar
