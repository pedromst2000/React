import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import useAuth from "../hooks/useAuth"

const Layout = () => {
    
    const { user } = useAuth();
    
    return (
        <main className="App">
            <Navbar />
            <Outlet />
        </main>
    )
}

export default Layout