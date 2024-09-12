import React from "react";
import "@fontsource/nunito-sans/700.css";
import Department from "./Pages/Department";

function Main() {
  return (
    <>
      <div className="mainsec fixed top-14 me-3 ms-[215px] pt-5 pb-16 w-[84%] p-2 overflow-y-auto h-screen">
        <p className="text-[#7D8592] text-[14px] tracking-wide mb-0">
          Welcome back, Rahul singh{" "}
        </p>
        <div className="grid  grid-cols-2 gap-4 place-content-between ">
          <div className="">
            <h1 className="text-[34px] font-nunito font-semibold">
              Department
            </h1>
          </div>
          <div className=" text-end">
            <button className=" text-white font-nunito w-[200px] px-2 py-3 bg-[#3F8CFF] rounded-xl">
              + Add More Department
            </button>
          </div>
        </div>
        <Department />
      </div>
    </>
  );
}

export default Main;
