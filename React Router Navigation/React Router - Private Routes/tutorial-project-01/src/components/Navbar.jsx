import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function Navbar({ isUserLoggedIn, setIsUserLoggedIn }) {
  return (
    <nav>
      <h1>Logo</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/private">Private</NavLink>
        </li>
        {isUserLoggedIn ? (
          <li>
            <button onClick={() => setIsUserLoggedIn(false)}>Logout</button>
          </li>
        ) : (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  isUserLoggedIn: PropTypes.bool.isRequired,
  setIsUserLoggedIn: PropTypes.func.isRequired,
};
