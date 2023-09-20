import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Activities from "./pages/activities/Activities";
import Activity from "./pages/activities/Activity";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" index element={<Home />} />

            <Route path="/activities">
              <Route index element={<Activities />} />
              <Route
              path=":id" element={<Activity />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
