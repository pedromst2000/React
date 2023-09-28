import React, { useState } from "react";
import Proptypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/UsersSlice";
import { checkUsername } from "../utils/checkUsername";
import { checkEmail } from "../utils/checkEmail";

export default function Register({ isClicked, setIsClicked }) {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

const handleRegister = (username, email, password) => {

    if(username == '' || email == '' || password == '') {
        setMessage('Please fill all fields');
        setIsSuccess(false);
        return;
    }

    if(!checkUsername(username)) {
        setMessage('Invalid username');
        setIsSuccess(false);
        return;
    }

    
     if(!checkEmail(email)){
        setMessage('Invalid email');
        setIsSuccess(false);
        return;
    }

     else if(users.some(user => user.username === username)) {
        setMessage('Username already exists');
        setIsSuccess(false);
        return;
    }


    else if(users.some(user => user.email === email)) {
        setMessage('Email already exists');
        setIsSuccess(false);
        return;
    }

    else {
        setMessage('Register success');
        setIsSuccess(true);
        setTimeout(() => {
            dispatch(authActions.register({
                username: username,
                email: email,
                password: password,
            }));
        }, 2000);
    }

};



  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <form
        onSubmit={(e) => {
            e.preventDefault();
            handleRegister(username, email, password);
        }}
    >
      <h3>Register</h3>

        <input type="text" name="username" placeholder="username" 
            onChange={(e) => setUsername(e.target.value)}
        />

        <input type="text" name="email" placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
        />

        <input type="password" name="password" placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
        />

      <p onClick={() => setIsClicked(!isClicked)} className="auth-link">
        Already have an account? Sign In
      </p>
      {message && isSuccess ? (
        <p className="message-success">{message}</p>
        ) : (
        <p className="message-error">{message}</p>
        )}
        <input type="submit" value="Sign Up" />
    </form>
  );
}

Register.propTypes = {
  isClicked: Proptypes.bool.isRequired,
  setIsClicked: Proptypes.func.isRequired,
};
