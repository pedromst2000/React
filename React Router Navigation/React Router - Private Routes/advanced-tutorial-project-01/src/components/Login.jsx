import React from "react";
import Proptype from "prop-types";

export default function Login({isClicked, setIsClicked}) {

  return (
    <div>
      <h3>Login Page</h3>

      <p 
        onClick={() => setIsClicked(!isClicked)}
      className="register-link">
        Don't have an account? Sign Up
      </p>
    </div>
  );
}


Login.propTypes = {
  isClicked: Proptype.bool.isRequired,
  setIsClicked: Proptype.func.isRequired
};
