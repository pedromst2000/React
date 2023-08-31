import React from 'react'
import { Outlet, Navigate, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export default function IsLogged() {
  
  const { user } = useAuth();
  const location = useLocation().pathname;

  return (
        <>
            {
                user.isLogged && location === "/login" ?
                <Navigate to="/profile" replace /> :
                user.isLogged && location !== "/login" ?
                <Outlet /> :
                <Outlet />
}
        </>
  )
}
