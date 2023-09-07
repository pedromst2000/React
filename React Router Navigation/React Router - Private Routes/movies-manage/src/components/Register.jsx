import React, { useEffect, useReducer, useRef, useState } from "react";
import Proptypes from "prop-types";
import useAuth from "../hooks/useAuthProvider";

export default function Register({ isClicked, setIsClicked }) {
  const { register } = useAuth();
  const [error, setError] = useState("");
  const [formData, setFormData] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  );
  const emailRef = useRef();

  useEffect(() => {
    emailRef.current.focus();

  }, [emailRef.current]);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {

      await register(
        formData.username,
        formData.email,
        formData.password,
        formData.confirmPassword
        );

      // catch rejected promises
    } catch (error) {
      setError(error);
    }
  };

  return (
    <form
      className="register-form"
    >
      <h3>Welcome to the Manage Movies App</h3>
      <input
        type="email"
        placeholder="email"
        ref={emailRef}
        onChange={(e) => {
          setFormData({ email: e.target.value });
        }}
      />

      <input
        type="text"
        placeholder="username"
        onChange={(e) => {
          setFormData({ username: e.target.value });
        }}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => {
          setFormData({ password: e.target.value });
        }}
      />

      <input
        type="password"
        placeholder="confirm password"
        onChange={(e) => {
          setFormData({ confirmPassword: e.target.value });
        }}
      />

        {
          error ? <p className="error">{error}</p> : null
        }

      <p
        onClick={() => {
          setIsClicked(!isClicked);
        }}
        className="auth-link"
      >
        Already have an account? Sign In
      </p>

      <button
        className="auth-btn"
        onClick={(e) => {
          handleRegister(e);
        }}
      >
        Sign up
      </button>
    </form>
  );
}

Register.propTypes = {
  isClicked: Proptypes.bool.isRequired,
  setIsClicked: Proptypes.func.isRequired,
};
