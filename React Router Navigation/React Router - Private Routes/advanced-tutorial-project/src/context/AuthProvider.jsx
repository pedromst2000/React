import { createContext, useState } from "react";
import usersData from "../data/users.json";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({
        username: "",
        password: "",
        isLogged: false,
        role: "",
      }); // initial state of the user
  
       // In this tutorial we will use the username and password from the users.json file to manage the login for checking the username and password

  // !! Usually we would do a call to the authtentication API to check the username and password and get the token for the user

  const login = (username, password) => {
    return new Promise((resolve, reject) => {
      // find the user in the users.json file
      const userFound = usersData.find(
        (user) => user.username === username && user.password === password && user.role === "admin" || user.role === "regular"
      );

      //if the user is admin
      if (userFound && userFound.role === "admin") {
        setUser({
          username: userFound.username,
          password: userFound.password,
          isLogged: true,
          role: userFound.role, // admin
        });

        console.log(user);
        resolve("sucess"); // resolve the promise
      }

      //if the user is not admin
      if (userFound && userFound.role === "regular") {
        setUser({
          username: userFound.username,
          password: userFound.password,
          isLogged: true,
          role: userFound.role, // regular
        });
        console.log(user);
        resolve("sucess"); // resolve the promise
    }

      // if the username is not found
      if (!userFound) {
        reject("User not found");
      }

      // if the password is incorrect
      else if (userFound && userFound.password !== password) {
        reject("Password incorrect");
      }

      // if are empty fields
      else if (username === "" || password === "") {
        reject("Please fill all the fields");
      }

    });

  };

  const logout = () => {
    setUser({
      username: "",
      password: "",
      isLogged: false,
      role: "",
    });
  };


    return (
        <AuthContext.Provider value={{ user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;