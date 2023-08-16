import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import CitiesRouter from "./routes/CitiesRouter";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/cities">Cities</Link>
          </li>
        </ul>
      </nav>

      {/* Routing handling */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cities/*" element={<CitiesRouter/>} />
        <Route path="*" element={<h3>404 Not Found Page</h3>} />
      </Routes>
    </>
  );
}

export default App;
