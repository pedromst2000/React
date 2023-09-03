import React from 'react'
import useAuth from '../hooks/useAuth'
import {Outlet, Navigate, useLocation} from 'react-router-dom'

export default function IsLogged() {
  
  const { User } = useAuth();
  const location = useLocation();


    return (
        <>
        {
            // if the user is logged in, redirect to the home page
            User.isLogged && location.pathname === "/authenticate" ? (
                <Navigate to="/profile" replace/>
            ) : (
                <Outlet />
            )
        }
        </>
        )
}
