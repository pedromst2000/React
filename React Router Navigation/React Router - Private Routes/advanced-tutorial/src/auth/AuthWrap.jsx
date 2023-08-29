import { createContext, useContext, useState, useEffect } from "react";
import usersData from "../data/users.json"; // user data from the data folder
import RenderRoutes from "../utils/PublicRoutes";
import Navbar from "../components/Navbar";
import { routes } from "../utils/Navigation";
import { useNavigate, useLocation } from "react-router-dom";

const AuthContext = createContext();
// exporting the context - to use in other components of the app
export const useAuth = () => useContext(AuthContext); // custom hook to use the context

export default function AuthWrap() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    isLogged: false,
    isAdmin: false,
  }); // initial state of the user


  const navigate = useNavigate();
  const location = useLocation().pathname;

  // In this tutorial we will use the username and password from the users.json file to manage the login for checking the username and password

  // !! Usually we would do a call to the authtentication API to check the username and password and get the token for the user

  const login = (username, password) => {
    return new Promise((resolve, reject) => {
      // find the user in the users.json file
      const userFound = usersData.find(
        (user) => user.username === username && user.password === password
      );

      //if the user is admin
      if (userFound && userFound.role === "admin") {
        setUser({
          username: userFound.username,
          password: userFound.password,
          isLogged: true,
          isAdmin: true,
        });
        resolve("sucess"); // resolve the promise
      }

      //if the user is not admin
      if (userFound && userFound.role === "user") {
        setUser({
          username: userFound.username,
          password: userFound.password,
          isLogged: true,
          isAdmin: false,
        });
        resolve("sucess"); // resolve the promise
      }

      // if the username is not found
      if (!userFound) {
        reject("User not found");
      }

      // if the password is incorrect
      if (userFound && userFound.password !== password) {
        reject("Password incorrect");
      }
    });
  };

  const logout = () => {
    setUser({
      username: "",
      password: "",
      isLogged: false,
      isAdmin: false,
    });
  };

useEffect(() => {
    // If the user is not logged and the route is private
    if (!user.isLogged && routes.find((route) => route.isPrivate )) {
      navigate("/login"); // Redirect to login for private routes
    }
  }, [user.isLogged,  location]);

  // Conditionally render the private routes if the user is logged in
  const renderRoutes = user.isLogged ? <RenderRoutes /> : null;

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <Navbar />
    {
      renderRoutes
    }
    </AuthContext.Provider>
  );
}
