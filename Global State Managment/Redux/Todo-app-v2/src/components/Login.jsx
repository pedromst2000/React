import React, { useState } from 'react'
import Proptypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../store/UsersSlice'
import { checkEmail } from "../utils/checkEmail";

export default function Login({isClicked, setIsClicked}) {
  
    const users = useSelector(state => state.users.users);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
  
    const handleLogin =  (email, password) => {

        if(email === '' || password === '') {
            setMessage('Please fill all fields');
            setIsSuccess(false);
            return;
        }

        if(!checkEmail(email)) {
            setMessage('Invalid email');
            setIsSuccess(false);
            return;
        }

       else if(!users.some(user => user.email === email)) {
            setMessage('Email not found');
            setIsSuccess(false);
            return;
       }

         else if(!users.some(user => user.password === password)) {
            setMessage('Wrong password');
            setIsSuccess(false);
            return;
         }

         else{
            setMessage('Login success');
            setIsSuccess(true);
         setTimeout(() => {
            dispatch(authActions.login({
                username: users.find(user => user.email === email).username,
                role: users.find(user => user.email === email).role,
                isLogged: true
            }));
         }, 2000);
         }
    };


    return (
   <form
        onSubmit={(e) => {
            e.preventDefault();
            handleLogin(email, password);
        }}
   >
        <h2>Login</h2>
        
        <input type="text" placeholder='email'
            onChange={(e) => setEmail(e.target.value)}
        />
        <input type="password" placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
        />
    
    <p 
            onClick={() => setIsClicked(!isClicked)}
        className='auth-link'>
            Don´t have an account? Sign Up 
        </p>
        {
            message && isSuccess ? <p className='message-success'>{message}</p> : <p className='message-error'>{message}</p>
        }
        <input type="submit" value="Sign In" />
   </form>
    )
}

Login.propTypes = {
    isClicked: Proptypes.bool.isRequired,
    setIsClicked: Proptypes.func.isRequired
}
