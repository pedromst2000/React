import React from "react";
import ReactLogo from "../assets/react.svg";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Navbar() {
  
  const { User, logout } = useAuth();
  
  return (
    <nav>
      <div className="logo">
        <img src={ReactLogo} alt="React Logo" />
      </div>
      <div className="links">
        <ul>
          <li>
            <NavLink to="/">
                Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
                About
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies">
                Movies
            </NavLink>
          </li>
        {
          User.isLogged && User.role === "admin" ? 
          <li>
          <NavLink to="/manage">
              Manage
          </NavLink>
        </li>
        : null
        }
          <li>
            <NavLink to="/profile">
                Profile
            </NavLink>
          </li>
          {
            User.isLogged ?
            <button
              onClick={() => logout()}
            >
              Logout
            </button> :
                      <li>
                      <NavLink to="/authenticate">
                          Sign In
                      </NavLink>
                    </li>
          
          }
        </ul>
      </div>
    </nav>
  );
}
