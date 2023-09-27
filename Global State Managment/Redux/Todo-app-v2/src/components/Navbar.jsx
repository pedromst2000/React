import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { authActions } from '../store/UsersSlice'

export default function Navbar() {
  
  const User = useSelector((state) => state.users.User); // get User state
  const dispatch = useDispatch(); // actions
  
    useEffect(() => {

      console.log(User);

    }, [User]);

    const handleLogout = () => {
      dispatch(authActions.logout({
        username: "",
        role: "",
        isLogged: false,
      }));
    };

  return (
    <nav>
        <h3>Todo App</h3>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/todos">Todos</NavLink></li>
            {
              User.role === "admin" ? <li><NavLink to="/manage">Manage</NavLink></li> : null
            }
              {
                User.isLogged ? <li><NavLink to="/profile">Profile</NavLink></li> : null
              }
            {
              User.isLogged ? 
              <li
                onClick={() => {
                  handleLogout();
                }}
              >
                <button>
                  Sign Out
                </button>
              </li>
              :
              <li><NavLink to="/authentication">Sign In</NavLink></li>
            }        
        </ul>
    </nav>
    )
  }

  