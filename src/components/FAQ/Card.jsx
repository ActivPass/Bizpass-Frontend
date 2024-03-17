import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function Card(props) {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick(props.data.Faq);
    }
  };

  return (
    <div
      className={`h-[130px] w-[130px] p-2 rounded-md text-center ${props.data.css} flex flex-col justify-center items-center space-y-1 bg-blue-100 `}
      onClick={handleClick}
    >
      <img src={props.data.img} alt="img" className="max-w-full w-[40px] h-[40px] max-h-full object-contain" />
      <p className="text-xs">{props.data.name}</p>
      <div className="flex flex-row gap-0 items-center">
        <p className="text-xs cursor-pointer">{props.data.sub}</p>
        <MdOutlineKeyboardArrowDown className="text-xl" />
      </div>
    </div>
  );
}

export default Card;
