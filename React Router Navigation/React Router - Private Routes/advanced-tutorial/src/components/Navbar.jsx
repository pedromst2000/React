import React from "react";
import ReactLogo from "../assets/react.svg";
import ManageNav from "../utils/ManageNav";

export default function Navbar() {

  return (
    <nav>
      <div className="logo">
        <img src={ReactLogo} alt="logo" />
        <h4>Logo</h4>
      </div>
      <ManageNav />
    </nav>
  );
}
