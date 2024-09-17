import { Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Department from "./components/Pages/Department/Department";
import Profile from "./components/Pages/Profile/Profile";
import Designation from "./components/Pages/Designation/Designation";
import ProfileAssign from "./components/Pages/ProfileAssign/ProfileAssign";
import Employees from "./components/Pages/Employees/Employees";
import { useEffect, useState } from "react";
import SubDepartment from "./components/Pages/Department/SubDepartment";
import RDposition from "./components/Pages/Department/RDposition";
import RDprofile from "./components/Pages/Department/RDprofile";
import RDemployee from "./components/Pages/Department/RDemployee";

function App() {
  const [heading, setHeading] = useState("Department");
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/Employees":
        setHeading("Employees");
        break;
      case "/department":
        setHeading("Department");
        break;
      case "/profile":
        setHeading("Profile");
        break;
      case "/Designation":
        setHeading("Designation");
        break;
      case "/ProfileAssign":
        setHeading("Profile Assign");
        break;
      case "/SubDepartment":
        setHeading("Department/Sub-Department");
        break;
      case "/RDPosition":
        setHeading("Department/Sub-Department/R&D Department Position");
        break;
      case "/RDprofile":
        setHeading("Department/Sub-Department/R&D Department Profile");
        break;
      case "/RDemployee":
        setHeading("Department/Sub-Department/R&D Department Employee");
        break;
      default:
        setHeading("Department");
    }
  }, [location.pathname]);

  return (
    <>
      <Sidebar />
      <Navbar />
      <div className=" fixed top-14 me-3 ms-[215px] pt-5 pb-[100px] w-[85%] p-2 ">
        <div className=" overflow-y-auto no-scrollbar lg:h-[calc(100vh-90px)]">
          <p className="text-[#7D8592] text-[14px] tracking-wide mb-0">
            Welcome back, Rahul singh{" "}
          </p>
          <div className="grid grid-cols-2 place-content-between gap-4">
            <div>
              <h1 className="text-[34px] font-nunito font-semibold">
                {heading}
              </h1>
            </div>
            <div className=" text-end">
              <button className=" text-white font-nunito w-[200px] px-2 py-3 bg-[#3F8CFF] rounded-xl">
                {"+ Add  " + heading}
              </button>
            </div>
          </div>
          {/* <Department /> */}
          <Routes>
            <Route path="/" element={<Department />} />
            <Route path="/Employees" element={<Employees />} />
            <Route path="/department" element={<Department />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/Designation" element={<Designation />} />
            <Route path="/ProfileAssign" element={<ProfileAssign />} />
            <Route path="/SubDepartment" element={<SubDepartment />} />
            <Route path="/RDPosition" element={<RDposition />} />
            <Route path="/RDprofile" element={<RDprofile />} />
            <Route path="/RDemployee" element={<RDemployee />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
