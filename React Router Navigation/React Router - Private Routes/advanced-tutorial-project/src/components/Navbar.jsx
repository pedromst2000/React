import React from 'react'
import { NavLink } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export default function Navbar() {

    const { user, logout } = useAuth();


  return (
        <nav>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
              {
                user.isLogged && user.role === "admin" ? 
                <li>
                    <NavLink to="/admin">Admin</NavLink>
                </li> : null
              }
            <li>
                <NavLink to="/premium">Premium</NavLink>
            </li>
                {
                    user.isLogged && user.role === "regular" || user.role === "admin" ?
                    <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li> : null
                }
                {
                    user.isLogged ?
                    <li>
                    <button onClick={logout}>Logout</button>
                </li> : <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                }
        </ul>
        </nav>
  )
}
