import React from 'react';
import PropTypes from 'prop-types';

export default function Register({isClicked, setIsClicked}) {
  return (
    <div>
        <h3>
            Register Page
        </h3>
        <p 
            onClick={() => setIsClicked(!isClicked)}
        className="login-link">
            Already have an account? Sign In
        </p>
    </div>
  )
}

Register.propTypes = {
    isClicked: PropTypes.bool.isRequired,
    setIsClicked: PropTypes.func.isRequired
}

