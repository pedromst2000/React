import React from 'react'
import { Link } from 'react-router-dom'

export default function Movies() {
  return (
    <div>
        <h3>
            Movies Page
        </h3>
        
        <ul>
    <li>
        <Link to="/movies/1">Movie 1</Link>
    </li>
    <li>
        <Link to="/movies/2">Movie 2</Link>
    </li>
    <li>
        <Link to="/movies/3">Movie 3</Link>
    </li>
        </ul>

    </div>
  )
}
