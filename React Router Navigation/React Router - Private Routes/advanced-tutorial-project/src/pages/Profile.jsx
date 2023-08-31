import React, { useEffect } from 'react'
import useAuth from '../hooks/useAuth'


export default function Profile() {
  
  const { user } = useAuth();

  
    return (
    <div>
        <h3>
            My account
        </h3>
        
        <h4>
          Username: {user.username}
        </h4>

        <h4>
            Role : {user.role}
        </h4>
    </div>
  )
}
