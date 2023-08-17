import { Route, Routes, NavLink } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import MainCities from "./Pages/Cities/MainCities";
import City from "./Pages/Cities/City";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/cities">Cities</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cities" element={<MainCities/>} />
        <Route path="/cities/:id" element={<City/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  );
}

export default App;
