import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Navbar />
        <Main />

        {/* <Routes>
        <Route></Route>
      </Routes> */}
      </BrowserRouter>
    </>
  );
}

export default App;
