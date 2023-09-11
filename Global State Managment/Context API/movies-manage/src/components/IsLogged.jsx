import React from "react";
import useAuthProvider from "../hooks/useAuthProvider";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export default function IsLogged() {
  const { User } = useAuthProvider();
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
