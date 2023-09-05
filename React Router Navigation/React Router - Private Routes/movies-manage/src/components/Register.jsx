import React, { useEffect, useReducer, useRef, useState } from "react";
import Proptypes from "prop-types";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { encryptPassword } from "../utils/encryptPassword";

export default function Register({ isClicked, setIsClicked }) {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [formData, setFormData] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  );
  const usernameRef = useRef();

  useEffect(() => {
    usernameRef.current.focus();
  }, [usernameRef.current]);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await register(
        formData.username,
        formData.email,
        encryptPassword(formData.password),
        formData.confirmPassword
      );
      navigate("/profile");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <form>
      <h3>Welcome to the Manage Movies App</h3>
      <input
        type="text"
        placeholder="username"
        ref={usernameRef}
        onChange={(e) => {
          setFormData({ username: e.target.value });
        }}
      />
      <input
        type="email"
        placeholder="email"
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

      <input
        type="password"
        placeholder="confirm password"
        onChange={(e) => {
          setFormData({ confirmPassword: e.target.value });
        }}
      />

      {error && <p className="error">{error}</p>}

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
