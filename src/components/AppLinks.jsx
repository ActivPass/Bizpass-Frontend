import React, { useState } from "react"
import { Typography } from "@mui/material"
import { MENUS } from "../utils/index"
import { Link } from "react-router-dom"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"

function AppLinks() {
  const [active, setActive] = useState(null)
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null)
  const [activeSubMenu, setActiveSubMenu] = useState(null)

  const toggleSubMenu = index => {
    setOpenSubMenuIndex(prevIndex => (prevIndex === index ? null : index))
  }

  return (
    <div className="absolute z-50 grid grid-cols-2 gap-3 sm:grid-cols-12 w-3/6 bg-white p-5 rounded-lg border border-gray-200" >
      {MENUS.map((menuItem, index) => (
        <div key={index} className="sm:col-span-6">
          <div onMouseEnter={() => toggleSubMenu(index)} onMouseLeave={() => toggleSubMenu(index)}>
            <Link
              to={menuItem.link}
              className={`block p-2 border border-gray-300 rounded-md  hover:bg-[#e6f2ff] hover:text-[#3b5bb1] ${
                active === index ? "bg-[#5D87FF] text-white" : "text-black"
              }`}
              onClick={() => {
                setActive(index)
                setActiveSubMenu(null)
              }}
            >
              <div className="flex items-center">
                {menuItem.icon && <menuItem.icon className="w-6 h-6 mr-2" />}
                <Typography
                  variant="subtitle2"
                  className={`text-base font-medium ${active === index ? "text-white" : "text-gray-900"}`}
                >
                  {menuItem.name}
                </Typography>
                {menuItem.submenu && (
                  <span className="ml-2">{openSubMenuIndex === index ? <FiChevronUp /> : <FiChevronDown />}</span>
                )}
              </div>
            </Link>
            {menuItem.submenu && openSubMenuIndex === index && (
              <div className="ml-8 relative">
                {menuItem.submenu.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    to={subItem.link}
                    className={`p-2  border border-gray-300 rounded-md   hover:bg-[#e6f2ff] hover:text-[#3b5bb1]  group flex items-center text-sm gap-2 mt-2 ${
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
  )
}

export default AppLinks
