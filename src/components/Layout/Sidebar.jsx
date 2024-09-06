import React from "react";
import { Link } from "react-router-dom";
import { FaCalendar } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";

function Sidebar() {
  return (
    <div className="flex min-h-screen">
      {/* sideBar */}
      <div className="bg-white text-white w-60 space-y-2 py-7 px-2 m-3 rounded-2xl">
        <Link to={"/"}>
          <div className="bg-[#3F8CFF] w-14 rounded-xl ml-5">
            <img src="mprw logo-01 1.png" alt="Logo" />
          </div>
        </Link>

        <div className="text-gray-600 m-0 pt-2">
          <Link to={"/"}>
            <div className="flex py-3 px-4 rounded transition duration-200 hover:bg-gray-700 items-center gap-x-2">
              <IoPersonSharp />
              <span>Employees</span>
            </div>
          </Link>
          <Link to={"/"}>
            <div className="flex py-3 px-4 rounded transition duration-200 hover:bg-gray-700 items-center gap-x-2">
              <FaCalendar />
              <span>Profile</span>
            </div>
          </Link>
          <Link to={"/"}>
            <div className="flex py-3 px-4 rounded transition duration-200 hover:bg-gray-700 items-center gap-x-2">
              <RxDashboard />
              <span>Department</span>
            </div>
          </Link>
          <Link to={"/"}>
            <div className="flex py-3 px-4 rounded transition duration-200 hover:bg-gray-700 items-center gap-x-2">
              <RxDashboard />
              <span>Designation</span>
            </div>
          </Link>
          <Link to={"/"}>
            <div className="flex py-3 px-4 rounded transition duration-200 hover:bg-gray-700 items-center gap-x-2">
              <RxDashboard />
              <span>Profile Assign</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
