import React from 'react'
import { NavLink } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export default function Navbar() {
  
  const {User, logout} = useAuth();
  
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
        </li> : null
           }
            <li>
                <NavLink to="/profile">
                    Profile
                </NavLink>
            </li>
            {
                User.isLogged ?
                <li>
                    <button
                        onClick={()=>{logout()}}
                    >
                        Logout
                    </button>
                </li> :
                 <li>
                 <NavLink to="/authenticate">
                     Log in 
                 </NavLink>
             </li>
            }
        </ul>
    </nav>
    )
}
