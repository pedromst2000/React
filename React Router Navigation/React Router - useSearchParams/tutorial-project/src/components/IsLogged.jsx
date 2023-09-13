import React from 'react'
import useAuthProvider from '../hooks/useAuthProvider'
import { Navigate, Outlet } from 'react-router-dom'


export default function IsLogged() {
  
    const { User } = useAuthProvider();
  
    return (
        <>
        {
            User.isLogged ? <Outlet /> : <Navigate to="/login" replace />
        }
        </>
        )
}
