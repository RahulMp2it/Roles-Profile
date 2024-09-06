import { BrowserRouter, Route, Routes } from "react-router-dom"
import Sidebar from "./components/Layout/Sidebar"
import Navbar from "./components/Layout/Navbar"

function App() {

  return (
   <>
    <BrowserRouter>

      <Sidebar />
      <Navbar />

      {/* <Routes>
        <Route></Route>
      </Routes> */}
    
    </BrowserRouter>
   </>
  )
}

export default App
