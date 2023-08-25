import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
        <div className="logo">
                <h3>MovieFlix</h3>
            </div> 
            <div className="links">
                <ul>
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/movies">
                            Movies
                        </NavLink>
                    </li>
                </ul>
            </div>
    </nav>
  )
}
