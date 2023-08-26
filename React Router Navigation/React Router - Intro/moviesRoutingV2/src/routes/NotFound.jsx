import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>404 Not Found!</h1>
      <span>
        It seems that you are lost. The page you are looking for does not exist.
      </span>
      <br />
      <button>
        <Link to="/">Go Back Home</Link>
      </button>
    </div>
  );
}
