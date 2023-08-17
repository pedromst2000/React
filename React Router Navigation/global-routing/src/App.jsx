import { Route, Routes, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import CitiesRouter from "./routes/CitiesRouter";
import NotFound from "./pages/NotFound";

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
            <NavLink end to="/cities">Cities</NavLink>
          </li>
        </ul>
      </nav>

      {/* Routing handling */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cities/*" element={<CitiesRouter/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  );
}

export default App;
