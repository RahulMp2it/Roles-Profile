import React from "react";

const Card = ({ image, progress, title, buttonText }) => {
  return (
    <div className="w-[200px] h-[240] bg-[#F4F9FD] rounded-[18px] shadow-md overflow-hidden m-5">
      <div className="relative flex flex-col items-center justify-center pt-[20px] pb-3">
        {/* Rounded Image */}
        <img
          className=" h-[67] w-[63px] mb-3 object-cover rounded-full mx-auto mt-4"
          src={image}
          alt={title}
        />
        {/* Progress Bar Overlay */}
        <div className="absolute top-3 left-0 w-[65] h-2 bg-gray-200 rounded-lg">
          <div
            className="h-full bg-blue-500 rounded-lg"
            style={{ width: `${progress.png}%` }}
          ></div>
        </div>
      </div>
      {/* Title and Button */}
      <h2 className="mb-1 text-[15px] leading-4 flex justify-center text-center font-nunito text-[#0A1629] dark:text-white">
        {title}
      </h2>
      <div className="p-4 text-center">
        <button className="inline-flex items-center border  border-gray-500 px-4 py-.5 text-sm font-nunito text-center text-gray-500 bg-white rounded-[5px] focus:ring-4 focus:outline-none">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
