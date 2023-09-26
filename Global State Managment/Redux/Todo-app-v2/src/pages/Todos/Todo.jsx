import React from "react";
import { useParams } from "react-router";

export default function Todo() {
  const { id } = useParams();

  return (
    <div>
      <h3>Todo Page {id}</h3>
    </div>
  );
}
