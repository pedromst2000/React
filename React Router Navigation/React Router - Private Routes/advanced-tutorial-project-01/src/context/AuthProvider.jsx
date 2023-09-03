import React, { createContext, useEffect, useState } from "react";
import usersData from "../data/users.json";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  
  const [users, setUsers] = useState(usersData);
  
  
  const [User, setUser] = useState(() => {
    // save the user state on the session storage
    const loggedUser = sessionStorage.getItem("loggedUser");

    return loggedUser
      ? JSON.parse(loggedUser)
      : {
          username: "",
          password: "",
          isLogged: true,  
          role: "regular",
        };
  });

  useEffect(() => {

    console.log(users);

    const encryptPassword = (password) => {
      let encryptedPassword = "";
      for (let i = 0; i < password.length; i++) {
        encryptedPassword += "*";
      }
      return encryptedPassword;
    };

    return sessionStorage.setItem(
      "loggedUser",
      JSON.stringify({
        username: User.username,
        password: encryptPassword(User.password),
        isLogged: User.isLogged,
        role: User.role,
      })
    );
  }, [User.username, User.password, User.isLogged, User.role]);

  const login = (username, password) => {
    return new Promise((resolve, reject) => {
      // handle the reject cases
      if (username === "" || password === "") {
        reject("Username and password are required");
      }

      const user = usersData.find((user) => user.username === username);

      if (!user) {
        reject("User not found");
      }

      if (user.password !== password) {
        reject("Password is incorrect");
      }

      // handle the resolve case
      setUser({
        username: user.username,
        password: user.password,
        isLogged: true,
        role: user.role,
      });

      resolve("User logged in successfully");
    });
  };

  const register = (username, password, confirmPassword) => {
    return new Promise((resolve, reject) => {
      if (username === "" || password === "" || confirmPassword === "") {
        reject("Username and password are required");
      }

      if (password !== confirmPassword) {
        reject("Passwords don't match");
      }

      const user = usersData.find((user) => user.username === username);

      if (user) {
        reject("User already exists");
      }

      
      setUsers(...users, {
        id: users.length + 1,
        username: username,
        password: password,
        role: "regular"
      });


      resolve("User registered successfully");

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
    <AuthContext.Provider value={{ User, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
