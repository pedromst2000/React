import React from 'react'
import { useNavigate } from 'react-router'


export default function NotFound() {
 
 const navigate = useNavigate();
 
    return (
    <div>
        <h3>
            404 Not Found !!
        </h3>
        <br />
        <p>
            It seems that you are lost.
        </p>
        <br />
        <button
        onClick={()=> {
            navigate('/') // navigate to home page
        }}
        >
            Go to Home
        </button>
    </div>
    )
}
