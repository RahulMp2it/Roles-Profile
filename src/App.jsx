import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import DepartmentCards from "./utils/DepartmentCards";

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Navbar />
        <div className="fixed top-20 me-3 ms-[215px] py-[30px] w-[85%]">
          <p>Welcome back, Rahul singh </p>
          <h2>Department</h2>
          <div className="border border-blue-500 mx-[200px] px-3 py-3 bg-[#3F8CFF] rounded-xl">
            <button>+ Add More Department</button>
          </div>
        </div>

        {/* <Routes>
        <Route></Route>
      </Routes> */}
      </BrowserRouter>
    </>
  );
}

export default App;
