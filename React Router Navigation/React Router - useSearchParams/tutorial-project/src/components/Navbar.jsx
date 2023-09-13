import React from "react";
import { NavLink } from "react-router-dom";
import useAuthProvider from "../hooks/useAuthProvider";

export default function Navbar() {
  const { User, logout } = useAuthProvider();

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        {User.isLogged ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
