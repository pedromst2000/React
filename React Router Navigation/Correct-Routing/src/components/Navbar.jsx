import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <h1>
            Logo
        </h1>
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
            <li>
                <NavLink to="/newsletter">
                    NewsLetter
                </NavLink>
            </li>
        </ul>
    </nav>
    )
}
