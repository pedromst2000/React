import React, { useEffect, useRef, useState } from "react";
import useAuthProvider from "../hooks/useAuthProvider";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuthProvider();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const usernameRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    usernameRef.current.focus();
  }, [usernameRef.current]);

  const handleLogin = async (e) => {
    e.preventDefault();

    await login(username, password)
      .then((response) => {
        if (response) {
        setMessage(response) 
        setTimeout(() => {
          navigate("/");
        }, 2000);
        }
      })
      .catch((error) => {
        setMessage(error);
      });
  };

  return (
    <form className="form-container">
      <h3>Login</h3>

      <input
        type="text"
        name="username"
        placeholder="username"
        ref={usernameRef}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {message == "Login successful" ? 
      <div className="success">{message}</div> :
      <div className="error">{message}</div>
      }
      <button type="submit" onClick={handleLogin}>
        Login
      </button>
    </form>
  );
}
