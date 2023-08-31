import React, { useReducer, useState, useRef, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();

  const navigate = useNavigate();

  const [formData, setFormData] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      username: "",
      password: "",
    }
  ); // initial state of the form data for the login

  const [error, setError] = useState("");

  const usernameInput = useRef(null);
  const passwordInput = useRef(null);

  useEffect(() => {

    usernameInput.current.focus();


  },
    [
      usernameInput.current,
    ]
  );

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await login(formData.username, formData.password);
      navigate("/profile");

      
    } catch (error) {
      // catch the error of the promise
      setError(error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="username"
        ref={usernameInput}
        onChange={(e) => setFormData({ username: e.target.value })}
      />
      <input
        type="password"
        placeholder="password"
        ref={passwordInput}
        onChange={(e) => setFormData({ password: e.target.value })}
      />
      <input className="login" type="submit" value="Login" />
      {
        // if there is an error, show the error
        error && <p className="error">{error}</p>
      }
    </form>
  );
}
