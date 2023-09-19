import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import useAuthProvider from '../hooks/useAuthProvider'
import {useNavigate} from 'react-router-dom'

function Login() {

  const { login } = useAuthProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

const handeLogin = async (e) => {

    await login(email, password).then((res) => {
      setSuccess(res);
      setTimeout(() => {
        navigate("/todos");
      }, 2000);
      setError("");
    }).catch((err) => {
      setError(err);

      setTimeout(() => {
        setError("");
      }, 2000);

      setSuccess("");
    });
};


  return (
    <>
      <LoginForm 
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        error={error}
        success={success}
        handeLogin={handeLogin}
      />
    </>
  )
}


export default Login
