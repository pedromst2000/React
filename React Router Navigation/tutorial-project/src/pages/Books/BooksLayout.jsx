import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function BooksLayout() {
  return (
        <>
        <ul>
            <li>
                <Link to="/books/1">book 1</Link>
            </li>
            <li>
            <Link to="/books/2">book 2</Link>                
            </li>
            <li>
            <Link to="/books/add">Add Book</Link>                               
            </li>
        </ul>
        <Outlet context={{book: "World"}}/>
        </>
    )
}
