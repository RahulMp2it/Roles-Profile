import React, { useState } from "react";

function EmployeesCard({ image, depart, position, title, fname }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-[#F4F9FD] rounded-[22px] overflow-hidden flex flex-col items-center justify-center pt-6 pb-2 relative">
      {/* Checkbox - Top Left Corner */}
      <div className="absolute top-2 left-2">
        <input
          type="checkbox"
          className="w-7 h-7 shadow-custom-blue border-inherit rounded-md"
        />
      </div>

      {/* Dropdown Icon */}
      <div className="absolute top-2 right-3">
        <button
          onClick={toggleDropdown}
          className="focus:outline-none text-gray-600"
        >
          <img
            src="dropicone.png" // Use any image passed as a prop for the dropdown icon
            alt="dropdown"
            className="w-7 h-7"
          />
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <ul className="py-1" role="menu">
              <li
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Edit
              </li>
              <li
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                View
              </li>
              <li
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Add
              </li>
              <li
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Delete
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Profile Image */}
      <div className="relative w-[75px] h-[75px] bg-progress-img bg-center bg-[length:100%_100%] justify-center ">
        {/* Rounded Image */}
        <img
          className="absolute top-[6px] left-[6px] h-[63px] w-[63px] object-cover rounded-full"
          src={image}
          alt={title}
        />
      </div>

      {/* Full name */}
      <p className="mb-1 text-[16px] leading-4 py-2 flex justify-center text-center font-nunito text-[#0A1629] dark:text-white h-[18px]">
        {fname}
      </p>

      {/* Position */}
      <p className="mb-1 text-[16px] leading-4 py-2 flex justify-center text-center font-nunito text-[#3F8CFF] dark:text-white h-[18px]">
        {position}
      </p>

      {/* Department */}
      <p className="mb-1 text-[16px] leading-4 py-2 flex justify-center text-center font-nunito text-[#0A1629D6] dark:text-white h-[18px]">
        {depart}
      </p>

      {/* Title */}
      <h2 className="mb-1 text-[15px] leading-4 py-2 flex justify-center text-center font-nunito text-[#0A1629] dark:text-white h-[18px]">
        {title}
      </h2>
    </div>
  );
}

export default EmployeesCard;
