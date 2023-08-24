import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
    <Navbar />
    {/* the only content to be changes between routes - Outlet Context */}
    <Outlet />
    <h4>Footer</h4>
    </>
  )
}

export default App
