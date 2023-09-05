import React from "react";
import useAuth from "../hooks/useAuth";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export default function IsLogged() {
  const { User } = useAuth();
  const location = useLocation();

  return (
    <>
      {
        User.isLogged && location.pathname === "/authenticate" ? 
        <Navigate to="/" replace  />
        : 
        User.isLogged && location.pathname !== "/authenticate" ?
        <Navigate to="/" replace  />
        :
        <Outlet />
      }

    </>
  );
}
