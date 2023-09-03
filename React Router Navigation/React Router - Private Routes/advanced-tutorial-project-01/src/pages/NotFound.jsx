import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <h3>404 - Not Found Page !!</h3>
      <p>It seems you are lost. The page you are looking for does not exist.</p>
      <br />
      <button
        onClick={() => {
          navigate("/"); // Navigate to the home page
        }}
      >
        Go Home
      </button>
    </div>
  );
}
