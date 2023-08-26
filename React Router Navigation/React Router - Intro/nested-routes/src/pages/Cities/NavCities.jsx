import React from "react";
import { Link } from "react-router-dom";

export default function NavCities() {
  return (
    <ul>
      <li>
        <Link to="/cities/1">City 1</Link>
      </li>
      <li>
        <Link to="/cities/2">City 2</Link>
      </li>
    </ul>
  );
}
