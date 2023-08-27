import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthRoutes() {

    const userAuth = localStorage.getItem("loggedIn");


    const userLogged = {isLogged: userAuth ? JSON.parse(userAuth) : false};
    
    
    
  return <>{userLogged.isLogged ? <Outlet /> : <Navigate to="/login" />}</>;
}
