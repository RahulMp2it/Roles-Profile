import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

function Navbar() {
  return (
    <nav className="navbar fixed top-0 grid grid-cols-12 gap-x-5 me-2 ms-[215px]  w-[83%] " >

      {/* Search Bar */}
      <div className="search-bar col-span-9 relative ">
      {/* <FiSearch /> */}
        <input type="text" className="w-full rounded-[8px] pl-9 pr-3 py-1.5 border-0" placeholder="Search" />
        <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-black-900">
          <FiSearch />
        </span>
      </div>


      {/* Notification  */}
      <div className="user-controls col-span-1 py-1.5 bg-white px-2 rounded-[8px] ">
        <button className="notification-btn w-full flex justify-center"><IoMdNotificationsOutline className="w-5 h-5" /> </button>
      </div>

      <div className="col-span-2">
        <div className="dropdown dropdown-end w-full">
          <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn flex justify-center items-center ">
            {/* image */}
            <div class="avatar">
              <div class="w-5 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <span>Rahul Singh</span>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </div>
      </div>


    </nav>
  );
}

export default Navbar;
