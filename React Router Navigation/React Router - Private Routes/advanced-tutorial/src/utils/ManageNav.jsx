import { useAuth } from "../auth/AuthWrap";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import { routes } from "../utils/Navigation";
import React from 'react'

export default function ManageNav() {
  
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const path = useLocation().pathname;
  
    console.log(path);
    
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

    const handlePrivateRoutes = () => {


        return (
            <h1>
                Private Routes
            </h1>
        )
    };
 


    return (
        <>
            {handleNavView()}
            {handlePrivateRoutes()}    
            </>
        )
}
