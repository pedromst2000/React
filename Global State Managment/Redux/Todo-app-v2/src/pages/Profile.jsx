import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/UsersSlice";


export default function Profile() {
  const dispatch = useDispatch();
  const User = useSelector((state) => state.users.User);
  const users = useSelector((state) => state.users.users);
  const todos = useSelector((state) => state.todos.todos);

  const handleChangePassword = () => {

    const newPassword = prompt("Enter your new password");

    if(newPassword == null){
        return;
    }

    if( newPassword == ""){
        alert("Please enter a valid password");
        return;
    }

    else {
        dispatch(authActions.changePassword({ newPassword: newPassword}));
    }
  
  };


  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <div className="profile-info">
        {users?.map((user) => {
          if (user.username === User?.username) {
            return (
              <div key={user.id}>
                <p> <b>Username:</b> {user.username}</p>
                <p><b>Email:</b> {user.email}</p>
                <p><b>role:</b> {user.role}</p>
              </div>
            );
          }
        })}
      </div>
      <div className="profile-actions">
        <button
          onClick={() => {
            handleChangePassword();
          }}
        >
          Change Password
        </button>
      </div>
        <div className="todos-static">
          <p><b>Total Tasks: </b> 
            {users?.map((user) => {
              if (user.username === User?.username) {
                return todos?.filter((todo) => todo.creatorID === user.id).length;
              }
            })}
          </p>
          <p><b>Tasks Completed: </b> 
            {users?.map((user) => {
              if (user.username === User?.username) {
                return todos?.filter((todo) => todo.creatorID === user.id && todo.completed == true).length;
              }
            })}
          </p>
          <p><b>Tasks Pending: </b> 
            {users?.map((user) => {
              if (user.username === User?.username) {
                return todos?.filter((todo) => todo.creatorID === user.id && todo.completed == false).length;
              }
            })}
          </p>
        </div>
        </div>
  );
}
