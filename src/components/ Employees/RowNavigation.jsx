import React from 'react';
import { Link } from 'react-router-dom'; 
import { FaHome, FaUser, FaCalendarAlt } from 'react-icons/fa'; 

const RowNavigation = () => {
  return (
    <div className="flex justify-left gap-5 text-[14px] p-4 my-1">
      <Link to="/" className="flex items-center bg-[#5D87FF] p-2 rounded-md text-white">
        <FaHome className="h-4 w-4 mr-2" />
        <span className="">Dashboard</span>
      </Link>
      <Link to="/employees" className="flex items-center p-2 rounded-md hover:bg-[#e6f2ff]">
        <FaUser className="h-4 w-4 mr-2" />
        <span className="">Employee Info</span>
      </Link>
      <Link to="/attendance-info" className="flex items-center p-2 rounded-md hover:bg-[#e6f2ff]">
        <FaCalendarAlt className="h-4 w-4 mr-2" /> 
        <span className="">Attendance Info</span>
      </Link>
    </div>
  );
};

export default RowNavigation;
