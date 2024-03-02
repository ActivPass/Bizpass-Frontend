import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
import { FaHome } from "react-icons/fa";

const AttendanceInfo = () => {
  const [attendanceData, setAttendanceData] = useState([
    { name: "Aakash", attendance: [true, false, true, false, true, false, false, true, false, true, false, true, true, false, false, true, false, true, true, false, true, false, true, false, true, true, false, false, true, true] },
    { name: "Krishna", attendance: [false, true, true, false, true, true, false, false, true, false, false, true, false, true, true, false, true, false, true, false, false, true, true, false, true, true, false, true, false, true] },
    { name: "Devan", attendance: [true, true, false, true, false, false, true, false, false, true, false, true, false, true, true, false, true, false, false, true, false, true, true, false, true, true, false, false, true, true] },
    { name: "Sathish", attendance: [false, true, true, false, false, true, false, true, false, false, true, true, false, true, true, false, true, false, true, false, false, true, false, true, false, true, true, false, true, false] },
    { name: "Stephen", attendance: [true, false, true, false, true, false, true, true, false, true, false, true, true, false, false, true, false, true, true, false, true, false, true, false, true, true, false, false, true, true] }
  ]);

  const toggleAttendance = (employeeIndex, dayIndex) => {
    const updatedAttendanceData = [...attendanceData];
    updatedAttendanceData[employeeIndex].attendance[dayIndex] = !updatedAttendanceData[employeeIndex].attendance[dayIndex];
    setAttendanceData(updatedAttendanceData);
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
                <td className="px-4 py-2">{employee.name}</td>
                {employee.attendance.map((isPresent, dayIndex) => (
                  <td key={dayIndex} className="px-4 py-4 text-center">
                    {isPresent ? (
                      <FaCheckCircle
                        className="text-green-500 cursor-pointer"
                        onClick={() => toggleAttendance(employeeIndex, dayIndex)}
                      />
                    ) : (
                      <FaTimesCircle
                        className="text-red-500 cursor-pointer"
                        onClick={() => toggleAttendance(employeeIndex, dayIndex)}
                      />
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
