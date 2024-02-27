import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { IoIosNotifications } from "react-icons/io"
import { ThanksGreeting, UserProfileModal } from "../components"
import { IoChatbox, IoSettings } from "react-icons/io5"
import { BiSolidContact } from "react-icons/bi"
import { CiLogout } from "react-icons/ci"
import useMediaQuery from "@mui/material/useMediaQuery"
import { theme } from "../utils/index"
import { FiMenu } from "react-icons/fi"
import ActivPassImage from "../assets/images/ActivPass.png"
import UpgradeImage from "../assets/images/upgrade.png"
import { MdQrCodeScanner } from "react-icons/md"
import QRscanner from "../pages/QRscanner"
import Popup from "../pages/Popup"
import { MdOutlineSupportAgent } from "react-icons/md"
import { FaSearch } from "react-icons/fa"
import AppLinks from "./AppLinks"
import { HiChevronDown } from "react-icons/hi"

const NavBar = ({ user, setOpen }) => {
  const [showDropDown, setShowDropDown] = useState(false)
  const [showGreeting, setShowGreeting] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const userProfileModalRef = useRef(null)
  const [showAppLinks, setShowAppLinks] = useState(false)

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
            <img src={ActivPassImage} className={"h-11"} alt="Logo" />
            {/* <p className="text-xl font-bold">Dashboard</p> */}
            {/* <TextField
              label="Search"
              size="small"
              InputProps={{
                style: {
                  backgroundColor: "#f6f6f6",
                  borderRadius: "50px",
                  width: "25rem",
                },
              }}
            /> */}
            <div className="search-box sm:absolute sm:left-[13%] sm:top-9 md:block xl:absolute xl:left-1/6 xl:top-1.7">
              <input className="search-text" type="text" placeholder="Search Anything" />
              <a href="#" className="search-btn">
                <FaSearch />
              </a>
            </div>
          </div>
        ) : (
          <FiMenu className="text-3xl ml-5 my-3" onClick={() => setOpen(true)} />
        )}

        <div className="ml-[6%]">
          <ul className="flex flex-row gap-5 items-center">
            <li
              className="flex flex-row gap-1 items-center align-middle"
              onClick={() => setShowAppLinks(!showAppLinks)}
            >
              <a href="#" className="">
                Apps{" "}
              </a>
              <HiChevronDown />
            </li>
            <li>
              <a href="#" className="">
                Chat
              </a>
            </li>
            <li>
              <a href="#" className="">
                Calendar
              </a>
            </li>
            <li>
              <a href="#" className="">
                Email
              </a>
            </li>
          </ul>

          {showAppLinks && <AppLinks />}
        </div>

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
              <ul tabIndex={0} className="dropdown-content z-[2] menu  shadow bg-base-100 rounded-box w-76 text-[16px]">
                <div className="px-4 flex flex-row">
                  <label tabIndex={0} className="rounded" onClick={() => setShowDropDown(prev => !prev)}>
                    <div className="text-3xl bg-amber-400 rounded-full mr-4 flex items-center justify-center h-20 w-20">
                      {user.partnerName && user.partnerName.slice(0, 1).toUpperCase()}
                    </div>
                  </label>
                  <div className="my-2">
                    <div className="font-bold py-1">{user.partnerName}</div>
                    <div className="text-xs opacity-50">{user.name}</div>
                    <div className="flex flex-row py-1">
                      <p className="text-xs opacity-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-mail"
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                          <polyline points="3 7 12 13 21 7"></polyline>
                        </svg>
                      </p>
                      <p className="text-xs opacity-50 ml-1">{user.email}</p>
                    </div>
                  </div>
                </div>
                <hr className="my-4" />
                <li>
                  <Link to="/settings/profile" className="hover:text-[#5D87FF]">
                    <div className="bg-[#e6f2ff] text-[#5D87FF] rounded-lg">
                      <BiSolidContact className="m-3 text-xl" />
                    </div>{" "}
                    My Profile
                  </Link>
                  <Link
                    to="/settings/accountsettings"
                    className="hover:text-[#5D87FF]"
                    onClick={() => setShowDropDown(false)}
                  >
                    <div className="bg-[#e6f2ff] text-[#5D87FF] rounded-lg">
                      <IoSettings className="m-3 text-xl" />
                    </div>
                    Account Setting
                  </Link>
                </li>
                <li>
                  <Link to="/support" className="hover:text-[#5D87FF]" onClick={() => setShowDropDown(false)}>
                    <div className="bg-[#e6f2ff] text-[#5D87FF] rounded-lg">
                      <MdOutlineSupportAgent className="m-3 text-xl" />
                    </div>
                    Support
                  </Link>
                </li>
                <div className="flex flex-row rounded-md">
                  <div className="h-[150px] bg-[#e6f2ff] my-4 p-4 w-[150px]">
                    <p className="text-xl">Unlimited Access</p>
                    <Link to="/upgrade">
                      <button
                        className="bg-[#5D87FF] text-white border border-[#5D87FF] hover:bg-[#456bd3] p-2 rounded-lg flex items-center my-4"
                        type="button"
                      >
                        {" "}
                        Upgrade
                      </button>
                    </Link>
                  </div>

                  <img src={UpgradeImage} className="h-[150px] bg-[#e6f2ff] my-4 w-[150px]" alt="upgrade_img" />
                </div>
                <li>
                  <Link to="/" onClick={() => handleLogout()}>
                    <button className="text-[#5D87FF] border border-[#5D87FF] hover:bg-[#5D87FF] hover:text-white px-[90px] py-2 rounded-lg flex items-center ">
                      <CiLogout className="mr-2" /> Logout
                    </button>
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
