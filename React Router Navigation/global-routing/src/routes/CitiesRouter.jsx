import React from "react";
import { Route, Routes } from "react-router-dom";
import NavCities from "../pages/Cities/NavCities";
import MainCities from "../pages/Cities/MainCities";
import City from "../pages/Cities/City";

export default function CitiesRouter() {
  return (
    <>
        <NavCities />
      <Routes>        
          <Route index element={<MainCities />} />
          <Route path=":id" element={<City />} />
      </Routes>
    </>
  );
}
