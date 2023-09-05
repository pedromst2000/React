import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  
  const navigate = useNavigate();
  
    return (
    <div>
        <h3>
            404 Page Not Found !!
        </h3>
        <br />  
        <p>
            It seems that page you are looking for is not available.
        </p>
        <br />
        <button
            onClick={()=>{navigate('/')}} // navigate to home page
        >
            Go home
        </button>
    </div>
        )
}
