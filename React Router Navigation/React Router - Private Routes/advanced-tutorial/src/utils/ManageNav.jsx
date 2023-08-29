import { useAuth } from "../auth/AuthWrap";
import { NavLink } from "react-router-dom";
import { routes } from "../utils/Navigation";
import React from 'react'

export default function ManageNav() {
  
    const { user, logout } = useAuth();
  
    const handleNavView = () => {

        if(!user.isLogged && !user.isAdmin){
            return (
                <ul>
                    {routes.filter((route) => !route.isLogged || route.isVisible).map((route, index) => (
                        <li key={index}>
                            <NavLink to={route.path}  end={route.index}>
                                {route.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )
        }

    };
 


    return (
        <>
            {handleNavView()}
            </>
        )
}
