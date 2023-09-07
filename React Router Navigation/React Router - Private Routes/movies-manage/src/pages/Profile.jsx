import React from 'react'
import useAuth from '../hooks/useAuthProvider'

export default function Profile() {
  
  const {User, editProfile} = useAuth();
  


  const handleEditProfile =  async () => {

    const confirmEdit = window.confirm("Do you want to change your password?");

  
    if (confirmEdit) {

      let newPassword = prompt("Enter your new password");
      let confirmPassword = prompt("Confirm your new password");

      if (newPassword) {
          
          if (newPassword === confirmPassword) {
  
            const response = await editProfile(newPassword);
  
            alert(response);
  
          } else {
  
            alert("Passwords do not match");
  
          }

      }

      if(!newPassword){
        alert("Operation canceled")
      }

    }


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
      change password
    </button>

    </div>
  )
}
