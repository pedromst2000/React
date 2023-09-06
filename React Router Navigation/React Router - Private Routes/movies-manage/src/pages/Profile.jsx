import React from 'react'
import useAuth from '../hooks/useAuth'

export default function Profile() {
  
  const {User, editProfile} = useAuth();
  


  const handleEditProfile =  async () => {

    let password = prompt("Enter new password");
    let confirmPassword = prompt("Confirm new password");

  
    // while loop to make sure the user enters the same password twice and that the password is not empty
    while (password !== confirmPassword || password === "") {
      alert("Passwords do not match or are empty");
      password = prompt("Enter new password");
      confirmPassword = prompt("Confirm new password");
    }

    await editProfile(password)
    .then((message)=>{
      alert(message);
    }
    )
    .catch((error)=>{
      alert(error);
    }
    )

  };


  return (
    <div>
        <h3>
            Profile Page
        </h3>

    <p>
      Username: <b>{User.username}</b>
    </p>
    <p>
      Role: <b>{User.role}</b>
    </p>

    <button 
    onClick={()=>{handleEditProfile()}}
    className='edit-btn'>
      Edit Profile
    </button>

    </div>
  )
}
