import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavCities() {
  return (
    <div>
        <ul>
            <li><NavLink to="/cities/1">City 1</NavLink></li>
            <li><NavLink to="/cities/2">City 2</NavLink></li>
        </ul>
    </div>
  )
}
