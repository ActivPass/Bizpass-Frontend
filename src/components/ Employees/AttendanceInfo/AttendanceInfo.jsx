import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
import { FaHome } from "react-icons/fa";

const AttendanceInfo = () => {
    const [attendanceData] = useState([
      { name: "Aakash", attendance: [true, false, true, false, true, false, false, true, false, true, false, true, true, false, false, true, false, true, true, false, true, false, true, false, true, true, false, false, true, true], reasons: ["", "Go Temple With Family", "", "Vacation", "", "", "", "", "Personal", "", "", "", "", "Sick", "Go Temple With Family", "", "", "", "", "", "Personal", "", "", "", "", "", "", "", "Family", ""] },
      { name: "Krishna", attendance: [false, true, true, false, true, true, false, false, true, false, false, true, false, true, true, false, true, false, true, false, false, true, true, false, true, true, false, true, false, true], reasons: ["Vacation", "", "", "Go Temple With Family", "", "", "", "", "", "Personal", "Personal", "", "Sick", "", "", "", "", "", "", "Sick", "Sick", "", "", "Family", "", "", "", "", ""] },
      { name: "Devan", attendance: [true, true, false, true, false, false, true, false, false, true, false, true, false, true, true, false, true, false, false, true, false, true, true, false, true, true, false, false, true, true], reasons: ["", "", "Go Temple With Family", "", "Vacation", "Personal", "", "Sick", "", "", "", "", "", "", "Personal", "", "", "", "Sick", "", "", "", "", "Vacation", "", "", "", "Sick", ""] },
      { name: "Sathish", attendance: [false, true, true, false, false, true, false, true, false, false, true, true, false, true, true, false, true, false, true, false, false, true, false, true, false, true, true, false, true, false], reasons: ["Vacation", "", "", "Go Temple With Family", "Sick", "", "Personal", "", "Sick", "Sick", "", "", "Family", "", "", "Sick", "", "", "", "Vacation", "", "Sick", "", "", "Personal", "", "", "Sick", ""] },
      { name: "Stephen", attendance: [true, false, true, false, true, false, true, true, false, true, false, true, true, false, false, true, false, true, true, false, true, false, true, false, true, true, false, false, true, true], reasons: ["", "Go Temple With Family", "", "Vacation", "", "Personal", "", "", "", "", "", "", "", "Sick", "Sick", "", "", "", "", "", "Personal", "", "", "", "", "Sick", "", "", "", "Family"] }
    ]);
  
    const getReason = (reasons, dayIndex) => {
      return reasons[dayIndex] ? reasons[dayIndex] : "No reason provided";
    };
  
    return (
      <div className="p-1 md:p-5">
        <div className="flex items-center align-middle mb-4">
          <p className="text-2xl font-bold">
            Attendance Info<span className="text-3xl opacity-40"> |</span>{" "}
          </p>
          &nbsp;&nbsp;
          <Link to={"/"}>
            <FaHome className="sm:text-2xl" />
          </Link>
          &nbsp;
          <GoChevronRight className="sm:text-xl opacity-40 " />
          <Link to={"/"} className=" text-xs sm:text-base font-semibold opacity-40">
            Home
          </Link>
          <GoChevronRight className="sm:text-xl opacity-40 " />
          <div className=" text-xs sm:text-base">Attendance Info</div>
        </div>
        <div className="w-[80%] overflow-x-scroll">
          <table className="">
            <thead>
              <tr>
                <th className="px-4 py-2">Employee</th>
                {[...Array(31).keys()].map((day) => (
                  <th key={day} className="px-4 py-2 text-center">
                    {day + 1}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((employee, employeeIndex) => (
                <tr key={employeeIndex} className={employeeIndex % 2 === 0 ? "bg-gray-100" : ""}>
                  <Link to={"/attendance-log"}>
                  <td className="px-4 py-2 underline text-blue-500">{employee.name}</td>         
                  </Link>
                  {employee.attendance.map((isPresent, dayIndex) => (
                    <td key={dayIndex} className="px-4 py-4 text-center" >
                      {isPresent ? (
                        <FaCheckCircle className="text-green-500" />
                      ) : (
                        <FaTimesCircle title={getReason(employee.reasons, dayIndex)} className="text-red-500" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

export default AttendanceInfo;
