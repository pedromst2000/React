import React, { useEffect, useReducer, useRef, useState } from "react";
import Proptypes from "prop-types";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login({ isClicked, setIsClicked }) {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [formData, setFormData] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      email: "",
      password: "",
    }
  );
  const emailRef = useRef();

    useEffect(() => {
    emailRef.current.focus();
    }
    , [emailRef.current]
    );

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await login(formData.email, formData.password);
      navigate("/profile");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <form>
      <h3>Welcome back!</h3>
      <input
        type="email"
        placeholder="email"
        ref={emailRef}
        onChange={(e) => {
          setFormData({ email: e.target.value });
        }}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => {
          setFormData({ password: e.target.value });
        }}
      />
      {error && <p className="error">{error}</p>}

      <p
        onClick={() => {
          setIsClicked(!isClicked);
        }}
        className="auth-link"
      >
        Don´t have an account? Sign up
      </p>

      <button
        className="auth-btn"
        onClick={(e) => {
          handleLogin(e);
        }}
      >
        Sign In
      </button>
    </form>
  );
}

Login.propTypes = {
  isClicked: Proptypes.bool.isRequired,
  setIsClicked: Proptypes.func.isRequired,
};
