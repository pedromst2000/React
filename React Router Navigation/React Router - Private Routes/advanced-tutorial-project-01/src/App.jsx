import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Movie from "./pages/movies/Movie";
import Movies from "./pages/movies/Movies";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Manage from "./pages/Manage";
import Layout from "./components/Layout";
import Authenticate from "./pages/Authenticate";
import RequiresAuth from "./components/RequiresAuth";
import IsLogged from "./components/IsLogged";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>

        {/* Public Routes */}
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route element={<IsLogged />}>
          <Route path="/authenticate" element={<Authenticate />} />
        </Route>

        {/* Protecting Private Routes */}
        <Route element={<RequiresAuth allowedRoles={["admin", "regular"]} />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

          <Route element={<RequiresAuth allowedRoles={["admin", "regular"]} />}>
          {/* nesting movies route */}
          <Route path="/movies">
            <Route index element={<Movies />} />
            <Route path=":id" element={<Movie />} />
          </Route>
        </Route>

        <Route element={<RequiresAuth allowedRoles={["admin"]} />}>
          <Route path="/manage" element={<Manage />} />
        </Route>

        {/* catch all invalid routes */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
