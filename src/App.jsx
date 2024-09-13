import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Department from "./components/Pages/Department/Department";
import Profile from "./components/Pages/Profile/Profile";

function App() {
  return (
    <>
      <Sidebar />
      <Navbar />
      <div className=" fixed top-14 me-3 ms-[215px] pt-5 pb-[70px] w-[85%] p-2 ">
        <div className=" mainsec overflow-y-auto lg:h-[calc(100vh-70px)]">
          <p className="text-[#7D8592] text-[14px] tracking-wide mb-0">
            Welcome back, Rahul singh{" "}
          </p>
          <div className="grid grid-cols-2 place-content-between gap-4">
            <div>
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
          {/* <Department /> */}
          <Routes>
            <Route path="/" element={<Department />} />
            <Route path="/department" element={<Department />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
