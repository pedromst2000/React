import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <h3>Logo</h3>
        <ul>
            <li>
                <NavLink to="/">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/activities">
                    Activities
                </NavLink>
            </li>
        </ul>  
    </nav>
    )
}
