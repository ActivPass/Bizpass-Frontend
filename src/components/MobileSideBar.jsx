import React, { useState } from "react"
import Drawer from "@mui/material/Drawer"
import { Link } from "react-router-dom"
import { MENUS } from "../utils/index"
import ActivPassImage from "../assets/images/ActivPass.png"
import { IoCloseOutline } from "react-icons/io5"

const MobileSideBar = ({ open, setOpen }) => {
    const [active, setactive] = useState(0)

    const [subActive, setSubActive] = useState(null)
    // console.log(subActive, active)

    return (
        <div >
            <Drawer
                anchor={"left"}
                open={open}
                onClose={() => setOpen(false)}
            >
                <div className="flex flex-row items-center justify-center my-3">
                    <Link to="/" className="flex-1">
                        <img src={ActivPassImage} className={` h-10`} alt="Logo" />
                        {/* <p className="text-center">Partner Zone</p> */}
                    </Link>
                    <IoCloseOutline className="text-3xl m-2" onClick={() => setOpen(false)} />
                </div>

                {MENUS.map((menu, i) => (
                    <div key={i}>
                        <Link
                            onClick={() => {
                                setactive(i)
                                setSubActive(null)
                                setOpen(false)
                            }}
                            to={menu.link}
                            className={`mt-3 group flex items-center ${active === i ? "bg-black text-white" : "bg-white text-black"
                                } text-sm gap-3.5 font-medium p-2 hover-bg-gray-800 rounded-md w-[14rem] `}
                        >
                            <div>{React.createElement(menu.icon, { size: "20" })}</div>
                            <h2
                                style={{
                                    transitionDelay: `${i + 3}00ms`,
                                }}
                                className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}
                            >
                                {menu.name}
                            </h2>
                        </Link>

                        {menu.submenu && active === i && (
                            <div className="relative  top-0 mt-2 ">
                                {menu.submenu.map((subMenuItem, j) => (
                                    <Link
                                        key={j}
                                        onClick={() => {
                                            setSubActive(j)
                                            setOpen(false)
                                        }}
                                        to={subMenuItem.link}
                                        className={`mt-3 ${subActive === j ? "font-bold bg-gray-200" : ""
                                            } group flex items-center text-sm gap-3.5  p-2 pl-5  rounded-md `}
                                    >
                                        <div>{React.createElement(subMenuItem.icon, { size: "20" })}</div>
                                        <h2
                                            style={{
                                                transitionDelay: `${i + 3}00ms`,
                                            }}
                                            className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}
                                        >
                                            {subMenuItem.name}
                                        </h2>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </Drawer>
        </div>
    )
}

export default MobileSideBar
