import React from 'react'
import { useAuth } from "../auth/AuthWrap";

export default function Profile() {
  
    const { user } = useAuth(); // get the user from the context
  
  
    return (
    <div>
        <h3>
            Profile Page
        </h3>

        <div className="user-info">

            <p>
                <b>Username:</b>
                {user.username}
            </p>
        </div>
    </div>
    )
}