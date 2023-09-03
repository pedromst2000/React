import React from "react";
import useAuth from "../hooks/useAuth";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export default function RequiresAuth({allowedRoles}) {
  
    const { User } = useAuth();
    const location = useLocation();


  return (
    <>
    {
        User.isLogged && allowedRoles.includes(User.role) ?
        <Outlet /> :
        User.isLogged && !allowedRoles.includes(User.role) ?
        <Navigate to="/profile" state={{ from: location }} /> :
        <Navigate to="/authenticate" state={{ from: location }} />
    }        
    </>
  )
}

RequiresAuth.propTypes = {
    allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired
}
