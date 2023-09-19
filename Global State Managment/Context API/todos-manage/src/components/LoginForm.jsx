import React from "react";
import PropTypes from "prop-types";

function LoginForm({ ...props }) {
  


  
  
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.handeLogin(props.email, props.password);
      }}
    >
      <h3>Login</h3>
      <input
        type="email"
        placeholder="email"
        value={props.email}
        onChange={(e) => props.setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={props.password}
        onChange={(e) => props.setPassword(e.target.value)}
      />
      {props.success ? (
        <p className="success-login">{props.success}</p>
      ) : props.error ? (
        <p className="error-login">{props.error}</p>
      ) : null}
      <button type="submit">Login</button>
    </form>
  );
}

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  success: PropTypes.string.isRequired,
  handeLogin: PropTypes.func.isRequired
};

export default LoginForm;
