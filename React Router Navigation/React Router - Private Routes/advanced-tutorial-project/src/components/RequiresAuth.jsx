import React, { useEffect, useState } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";

function RequiresAuth({allowed}) {
  const { user } = useAuth();
  const location = useLocation();

  return (
    <>
        {
            user.isLogged && allowed.includes(user.role) ? 
            <Outlet /> :
            user.isLogged && !allowed.includes(user.role) ?
            <Navigate to="/" replace />  :
            <Navigate to={{ pathname: "/login", state: { from: location } }} replace />
}
    </>
  );
}

RequiresAuth.propTypes = {
  allowed: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RequiresAuth;
