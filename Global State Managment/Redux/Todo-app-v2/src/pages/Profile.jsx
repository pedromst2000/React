import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/UsersSlice";

export default function Profile() {
  const dispatch = useDispatch();
  const User = useSelector((state) => state.users.User);
  const users = useSelector((state) => state.users.users);
  const todos = useSelector((state) => state.todos.todos);

  useEffect(() => {
    console.log(todos);

  }, [User, todos]);


  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <div className="profile-info">
        {users.map((user) => {
          if (user.username === User.username) {
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
        {/* modal for changing the password */}
      </div>
        <div className="todos-static">
            {/* todo static with all todos, completed todos, pending todos */}
        </div>
        </div>
  );
}
