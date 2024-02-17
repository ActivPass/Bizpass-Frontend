import React, { useState } from "react"
import { HiMenuAlt3, HiChevronDown, HiChevronUp } from "react-icons/hi"
import { Link } from "react-router-dom"
import ActivPassImage from "../assets/images/ActivPass.png"
import { MENUS } from "../utils/index"

const SideBar = () => {
  const [active, setActive] = useState(0)
  const [subActive, setSubActive] = useState(null)
  const [open, setOpen] = useState(true)

  return (
    <section className="flex h-screen overflow-y-scroll scrollbar-hide gap-6 border border-l-gray-100 p-3">
      <div
        className={`bg-white dark:bg-gray-800 dark:text-white  ${
          open ? "w-50" : "w-16"
        } text-black `}
      >
        <div className="flex justify-end py-3">
          <Link to="/" className="flex flex-col items-center justify-center">
            <img src={ActivPassImage} className={`${open ? "h-11" : "hidden"}`} alt="Logo" />
            <p className={`${open ? "text-center" : "hidden"} tracking-wider`}>BizPass</p>
          </Link>
          <HiMenuAlt3 size={30} className="cursor-pointer" onClick={() => setOpen(!open)} />
        </div>
        <div className={`relative flex flex-col gap-4 ${open ? "mt-4" : "mt-[3.4rem]"} }`}>
          {MENUS.map((menu, i) => (
            <div key={i}>
              <Link
                onClick={() => {
                  setActive(active === i ? null : i)
                  setSubActive(null)
                }}
                to={menu.link}
                className={` ${menu.margin && "mt-3"} group flex    ${
                  active === i ? "bg-[#5D87FF] text-white" : "bg-white text-black"
                } text-base gap-3 font-medium p-2 hover:bg-[#e6f2ff] hover:text-[#3b5bb1] rounded-md ${
                  open ? "w-[13rem]" :"w-[3rem] px-3"
                }`}
              >
                <div>{React.createElement(menu.icon, { size: "20" })}</div>
                <h2
                  className={`whitespace-pre ${!open && "opacity-0 translate-x-28 overflow-hidden"} ${
                    active === i ? "text-white" : ""
                  }`}
                >
                  {menu.name}
                </h2>
                {menu.submenu && (
                  <div className={` ${open ? "ml-auto" : "hidden"}`}>
                    {React.createElement(active === i ? HiChevronUp : HiChevronDown, { size: "20" })}
                  </div>
                )}
              </Link>

              {menu.submenu && active === i && (
                <div className="relative">
                  {menu.submenu.map((subMenuItem, j) => (
                    <Link
                      key={j}
                      onClick={() => {
                        setSubActive(j === subActive ? null : j)
                      }}
                      to={subMenuItem.link}
                      className={` ${subMenuItem.margin && "mt-5"} ${
                        subActive === j ? "bg-[#e6f2ff] text-[#3b5bb1] mt-2" : ""
                      } group flex items-center text-sm gap-2 mt-2 ${
                        open ? "" : "w-[3rem]"
                      } p-2 rounded-md hover:bg-[#e6f2ff] hover:text-[#3b5bb1]`}
                    >
                      {/* <div>{React.createElement(subActive === j ? HiChevronUp : HiChevronDown, { size: "20" })}</div> */}
                      <h2 className={`whitespace-pre ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>
                        <div className="flex flex-row gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-point"
                            width="1rem"
                            height="1rem"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="12" cy="12" r="4" />
                          </svg>
                          <div className="">{subMenuItem.name}</div>
                        </div>
                      </h2>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SideBar
