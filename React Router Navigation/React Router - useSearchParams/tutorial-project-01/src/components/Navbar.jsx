import React from "react";
import { NavLink } from "react-router-dom";
import useAuthProvider from "../hooks/useAuthProvider";

export default function Navbar() {
  const { User, logout } = useAuthProvider();

  return (
    <nav>
      <h3>TodosApp</h3>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/todos">Todos</NavLink>
        </li>
        {User.isLogged ? (
          <li>
            <button
              onClick={() => {
                logout();
              }}
            >
              Logout
            </button>
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
