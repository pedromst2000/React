import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
        <div className="logo">
            <h1>MovieFlix</h1>
            </div>
            <div className="nav-links">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </div>
    </nav>
  )
}

export default Navbar
