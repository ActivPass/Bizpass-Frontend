import React from "react";
import { Link } from "react-router-dom";
import navheader from "../assets/images/navheader.png";
import { BsDot } from "react-icons/bs";

function NavHeader({ current, previous }) {
  return (
    <div className="bg-[#ecf2ff] text-[#2a3547] p-4 py-8 mb-4 relative font-custom rounded-xl">
      <div className="flex flex-col items-start">
        <h4 className=" text-xl font-bold">{current.name}</h4>
        <div className="flex items-center gap-2 pt-4">
          {previous.map((item, index) => (
            <React.Fragment key={index}>
              <Link to={item.link} className="text-sm">
                {item.name}
              </Link>
              {index < previous.length - 1 && <BsDot />}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="absolute right-0 bottom-0 w-[20%] overflow-hidden">
        <img
          src={navheader}
          alt="bg"
          style={{
            width: "60%",
            marginBottom: "-20%",
          }}
        />
      </div>
    </div>
  );
}

export default NavHeader;
