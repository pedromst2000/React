import About from "../pages/About";
import AdminManage from "../pages/AdminManage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Premium from "../pages/Premium";
import Profile from "../pages/Profile";

// isMenu = true => show in navigation

export const routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
    index: true,
    isLogged: false,
    isVisible: true,
    isPrivate: false,
  },
  {
      path: "/about",
      name: "About",
      element: <About />,
      isLogged: true,
      isVisible: true,
      isPrivate: false
    },
  {
      path: "/admin",
      name: "Admin",
      element: <AdminManage />,
      isLogged: true,
      isVisible: false,
      isPrivate: true,
      isAdmin: true
    },
  {
    path: "/premium",
    name: "Premium",
    element: <Premium />,
    isLogged: true,
    isVisible: true,
    isPrivate: true,
  },
  {
      path: "/profile",
      name: "Profile",
      element: <Profile />,
      isLogged: true,
      isVisible: false,
      isPrivate: true
    },
  {
      path: "/login",
      name: "Login",
      element: <Login />,
      isLogged: true,
      isVisible: true,
      isPrivate: false  
    }
];
