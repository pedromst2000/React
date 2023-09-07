import React from "react";
import useAuth from "../hooks/useAuthProvider";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export default function IsLogged() {
  const { User } = useAuth();
  const location = useLocation();

  return (
    <>
      {
        User.isLogged && location.pathname === "/authenticate" ? 
        <Navigate to="/profile" replace  />
        : 
        User.isLogged && location.pathname !== "/authenticate" ?
        <Navigate to="/profile" replace  />
        :
        <Outlet />
      }

    </>
  );
}
