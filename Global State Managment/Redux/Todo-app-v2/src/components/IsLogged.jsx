import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate, useLocation} from 'react-router-dom'

export default function IsLogged() {
  
    const location = useLocation(); // get current location
    const User = useSelector((state) => state.users.User); // get User state

    return (
        <>
        {
            User?.isLogged && location.pathname === "/authentication" ? <Navigate to="/" /> : <Outlet />
        }
        </>
        )
}
