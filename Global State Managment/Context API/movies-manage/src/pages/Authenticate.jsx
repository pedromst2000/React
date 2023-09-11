import React, { useState } from 'react'
import Login from '../components/Login';
import Register from '../components/Register';


export default function Authenticate() {
  
  
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div className="auth-container">
            
            {
                isClicked ?
                <Register
                isClicked={isClicked}
                setIsClicked={setIsClicked}
                /> :
                <Login
                isClicked={isClicked}
                setIsClicked={setIsClicked}
                />
            }

            </div>

        )
}
