import React, { createContext, useEffect, useState } from "react";
import users from "../data/users.json";

const AuthContext = createContext({});

export function AuthProvider({ children }) {

  const [User, setUser] = useState(() => {
    const loggedUser = sessionStorage.getItem("loggedUser");

    return JSON.parse(loggedUser) || {
      username: "",
      password: "",
      isLogged: false,
    };
  });


  useEffect(() => {

    sessionStorage.setItem("loggedUser", JSON.stringify(User));
  }, [User.username, User.password, User.isLogged]);

  const login = (username, password) => {
    return new Promise((resolve, reject) => {
      const user = users.find(
        (user) => user.username === username && user.password === password
      );


      if(username === "" || password === "") {
        reject("Please fill in all fields");
        return;
      }


      if (!user) {
        reject("Username or password is incorrect");
        return;
      }

      setUser({
        username: user.username,
        password: user.password,
        isLogged: true,
      });

      resolve("Login successful");
    });
  };

  const logout = () => {

    setUser({
      username: "",
      password: "",
      isLogged: false,
    });

  };

  return (
    <AuthContext.Provider value={{ User,  login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
