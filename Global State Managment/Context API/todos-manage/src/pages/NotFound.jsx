import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <h3>404 - Not Found</h3>
      <br />
      <p>It seems you are lost. The page you are looking for does not exist.</p>
      <br />
      <button onClick={() => navigate("/")}>Go Home</button>
    </>
  );
}
