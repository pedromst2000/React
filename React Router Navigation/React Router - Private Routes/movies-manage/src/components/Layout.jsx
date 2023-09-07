import React from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';


export default function Layout() {
  
  const location = useLocation();
  
  return (
    <div className="app">
        <Navbar />
        <Outlet />
        {location.pathname !== "/authenticate" &&  <Footer />}
    </div>
    )
}
