import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <h3>404 - Not Found</h3>

      <br />
      <p>It Seems that you are lost.</p>
      <br />
      <button
        style={{ padding: "10px", borderRadius: "5px",  cursor: "pointer"}}
        onClick={()=>navigate('/')}
      >Go Home</button>
    </div>
  );
}
