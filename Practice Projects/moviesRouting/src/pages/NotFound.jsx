import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>404 - Not Found</h1>

        <p>Sorry, the page you are looking for does not exist.</p>

            {/* redirect to home page */}
            <button>
                <Link to="/">Go to Home </Link>
            </button>
    </div>
  );
}
