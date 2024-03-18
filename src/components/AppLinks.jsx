import React, { useState, useRef, useEffect } from "react"
import { Typography } from "@mui/material"
import { MENUS } from "../utils/index"
import { Link } from "react-router-dom"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { FaArrowTrendUp } from "react-icons/fa6";

function AppLinks({ closeMenu }) {
  const [active, setActive] = useState(null)
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null)
  const [activeSubMenu, setActiveSubMenu] = useState(null)
  const menuRef = useRef()

  const toggleSubMenu = index => {
    setOpenSubMenuIndex(prevIndex => (prevIndex === index ? null : index))
  }

  const handleClickOutside = event => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu()
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [menuRef, handleClickOutside])

  return (
    <div
      ref={menuRef}
      className="absolute left-[15%] top-10 z-50  w-5/6 lg:w-3/6 bg-white p-5 rounded-lg border border-gray-200"
    >
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-12">
        {MENUS.map((menuItem, index) => (
          <div key={index} className="sm:col-span-6">
            <div onMouseEnter={() => toggleSubMenu(index)} onMouseLeave={() => toggleSubMenu(index)}>
              <Link
                to={menuItem.link}
                className={`block p-2  rounded-md   ${
                  active === index ? "bg-[#5D87FF] text-white" : "text-black"
                }`}
                onClick={() => {
                  setActive(index)
                  setActiveSubMenu(null)
                }}
              >
                <div className="flex items-center">
                  <div className="bg-[#e6f2ff] text-[#5D87FF] rounded-lg mr-3">
                    {menuItem.icon && <menuItem.icon className="m-3 text-xl" />}
                  </div>
                  <Typography
                    variant="subtitle2"
                    className={`text-base font-medium hover:text-[#3b5bb1] ${
                      active === index ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {menuItem.name}
                  </Typography>
                  {/* {menuItem.submenu && (
                    <span className="ml-2">{openSubMenuIndex === index ? <FiChevronUp /> : <FiChevronDown />}</span>
                  )} */}
                </div>
              </Link>
              {menuItem.submenu && openSubMenuIndex === index && (
                <div className="relative">
                  {menuItem.submenu.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.link}
                      className={`p-2 rounded-md   hover:bg-[#e6f2ff] hover:text-[#3b5bb1]  group flex items-center text-sm gap-2 mt-2 ${
                        activeSubMenu === subIndex ? "bg-[#e6f2ff] text-[#3b5bb1]" : "text-black"
                      }`}
                      onClick={() => setActiveSubMenu(subIndex)}
                    >
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
                          <div className="">{subItem.name}</div>
                        </div>
                      </h2>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 mt-5 flex items-center gap-3 cursor-pointer">
        <Link to={"/faq"} className="flex items-center gap-3">
        <p className="hover:text-[#3b5bb1] font-medium text-base">Frequently Asked Questions</p>
        <FaArrowTrendUp className="text-[#3b5bb1]" />
        </Link>
      </div>
    </div>
  )
}

export default AppLinks
