import React from "react";
import useAuthProvider from "../hooks/useAuthProvider";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Proptypes from "prop-types";

export default function RequiresAuth({ allowedRoles }) {
  const { User } = useAuthProvider();
  const location = useLocation();

  return (
    <>
      {User.isLogged && allowedRoles.includes(User.role) ? (
        <Outlet />
      ) : User.isLogged && !allowedRoles.includes(User.role) ? (
        <Navigate to="/profile" replace state={{ from: location }} />
        ) : (
        <Navigate to="/authenticate" replace state={{ from: location }} />
)}
    </>
  );
}

RequiresAuth.propTypes = {
  allowedRoles: Proptypes.arrayOf(Proptypes.string).isRequired,
};
