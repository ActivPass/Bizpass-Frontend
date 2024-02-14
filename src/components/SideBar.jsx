import React, { useState } from "react"
import { HiMenuAlt3 } from "react-icons/hi"
import { Link } from "react-router-dom"
import ActivPassImage from "../assets/images/ActivPass.png"
import { MENUS } from "../utils/index"

const SideBar = () => {
  const [active, setactive] = useState(0)
  const [subActive, setSubActive] = useState(null)
  const [open, setOpen] = useState(true)

  // const open = true

  return (
    <section className="flex h-screen gap-6">
      <div
        className={`bg-white dark:bg-gray-800 dark:text-white  ${
          open ? "w-50" : "w-16"
        } text-black px-4 shadow-xl ring-gray-300 ring-offset-4`}
      >
        <div className="flex justify-end py-3">
          <Link to="/" className="flex flex-col items-center justify-center">
            <img src={ActivPassImage} className={`${open ? "h-11" : "hidden"}`} alt="Logo" />
            <p className={`${open ? "text-center" : "hidden"} tracking-wider` }>BizPass</p>
          </Link>
          <HiMenuAlt3 size={30} className="cursor-pointer" onClick={() => setOpen(!open)} />
        </div>
        <div className={`relative flex flex-col gap-4 ${open ? "mt-4" : "mt-[3.4rem]"} }`}>
          {MENUS.map((menu, i) => (
            <div key={i}>
              <Link
                onClick={() => {
                  setactive(i)
                  setSubActive(null)
                }}
                to={menu.link}
                className={` ${menu.margin && "mt-3"} group flex items-center ${
                  active === i ? "bg-[#5D87FF] text-white" : "bg-white text-black"
                } text-base gap-3 font-medium p-2 hover:bg-[#e6f2ff] hover:text-[#3b5bb1] rounded-md ${open && "w-[13rem]"}`}
              >
                <div>{React.createElement(menu.icon, { size: "20" })}</div>
                <h2
                  // style={{
                  //   transitionDelay: `${i + 3}00ms`,
                  // }}
                  className={`whitespace-pre  ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}
                >
                  {menu.name}
                </h2>
              </Link>

              {menu.submenu && active === i && (
                // <div className={`relative ${subActive === null ? "bg-gray-200" : "bg-gray-200"} `}>
                <div className="relative   ">
                  {menu.submenu.map((subMenuItem, j) => (
                    <Link
                      key={j}
                      onClick={() => {
                        setSubActive(j)
                      }}
                      to={subMenuItem.link}
                      className={` ${subMenuItem.margin && "mt-5"} ${
                        subActive === j ? "bg-[#e6f2ff] text-[#3b5bb1] mt-2" : ""
                      } group flex items-center text-sm gap-2 mt-2 ${open ? "pl-10" : ""} p-2 rounded-md hover:bg-[#e6f2ff] hover:text-[#3b5bb1]`}
                    >
                      {/* <div>{React.createElement(subMenuItem.icon, { size: "20" })}</div> */}
                      <h2
                        // style={{
                        //   transitionDelay: `${i + 3}00ms`,
                        // }}
                        className={`whitespace-pre  ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}
                      >
                        {subMenuItem.name}
                      </h2>
                    </Link>
                  ))}
                </div>
                // </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SideBar
