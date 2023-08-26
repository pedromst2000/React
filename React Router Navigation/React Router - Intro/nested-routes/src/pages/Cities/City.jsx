import React from "react";
import { useParams } from "react-router-dom";
import NavCities from "./NavCities";

export default function City() {
  const { id } = useParams();

  return (
    <div>

      <NavCities/>
      <h3>City Page {id}</h3>
    </div>
  );
}
