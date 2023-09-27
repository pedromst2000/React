import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Outlet, Navigate, useLocation } from "react-router-dom";

function IsAuthenticated({ roles }) {
  const location = useLocation(); // get current location
  const User = useSelector((state) => state.users.User); // get User state

  return (
    <>
      {User.isLogged && roles.includes(User.role) ? (
        <Outlet />
      ) : User.isLogged && !roles.includes(User.role) ? (
        <Navigate to="/" />
      ) : (
        <Navigate
          to={{ pathname: "/authentication", state: { from: location } }}
        />
      )}
    </>
  );
}

IsAuthenticated.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default IsAuthenticated;
