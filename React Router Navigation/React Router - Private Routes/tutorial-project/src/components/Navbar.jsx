import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Navbar() {

 
    return (
    <nav>
        <h1>App</h1>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/premium">Premium</NavLink>
            </li>
            <li>
                <NavLink to="/forum">Forum</NavLink>
            </li>
            <li>
                <NavLink to="/login">Login</NavLink>
            </li>

        </ul>
    </nav>
    )
}
