import React, { createContext, useEffect, useState } from "react";
import validEmail from "../utils/validEmail";
import { usersNewData } from "../utils/protectUsers";
import { encryptPassword } from "../utils/encryptPassword";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [users, setUsers] = useState(() => {
    const localUsers = localStorage.getItem("users");

    return localUsers ? JSON.parse(localUsers) : usersNewData;
  });


  // session of the user info for the app
  const [User, setUser] = useState(() => {
    const loggedUser = localStorage.getItem("loggedUser");

    return loggedUser
      ? JSON.parse(loggedUser)
      : {
          username: "",
          email: "",
          role: "",
          isLogged: false,
        };
  });

  useEffect(() => {
    localStorage.setItem(
      "loggedUser",
      JSON.stringify({
        username: User.username,
        email: User.email,
        role: User.role,
        isLogged: User.isLogged,
      })
    );

    localStorage.setItem("users", JSON.stringify(users));

  }, [User.username, User.email, User.role, User.isLogged, users]);



  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      if (email == "" || password == "") {
        reject("All fields are required");
      } else if (!validEmail(email)) {
        reject("Email is not valid");
      } else if (!users.some((user) => user.email === email)) {
        reject("Invalid Email");
      } else if (!users.some((user) => user.password === password)) {
        reject("Invalid Password");
      }

      const user = users.find(
        (user) => user.email === email && encryptPassword(user.password) === encryptPassword(password)
      );

      setUser({
        username: user.username,
        email: user.email,
        role: user.role,
        isLogged: true,
      });

      resolve("Login successful");
    });
  };

  const register = (username, email, password, confirmPassword) => {
    return new Promise((resolve, reject) => {
      // Check if any required field is empty
      if (
        username === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === ""
      ) {
        reject("All fields are required");
      } else if (!validEmail(email)) {
        reject("Email is not valid");
      } else if (users.some((user) => user.email === email)) {
        reject("Email already exists");
      } else if (users.some((user) => user.username === username)) {
        reject("Username already exists");
      } else if (password !== confirmPassword) {
        reject("Passwords do not match");
      } else {

        const newUser = {
          id: users.length + 1,
          username,
          email,
          password: encryptPassword(password),
          role: "unsigned",
        };

        setUsers([...users, newUser]);

        setUser({
          username: newUser.username,
          email: newUser.email,
          role: newUser.role,
          isLogged: true,
        });

        resolve("Registration successful");
      }
    });
  };

  const logout = () => {
    setUser({
      username: "",
      email: "",
      role: "",
      isLogged: false,
    });
  };

  const editProfile = (password) => {

      return new Promise((resolve, reject) => {


          const userIndex = users.findIndex((user) => user.email === User.email);

          const newUsers = [...users];

          newUsers[userIndex].password = encryptPassword(password);

          setUsers(newUsers);

          resolve("Profile edited successfully");

      });
  };

  const changeRole = (id, role) => {

    return new Promise((resolve, reject) => {

      const userIndex = users.findIndex((user) => user.id === id);

        const newUsers = [...users];

        newUsers[userIndex].role = role;

        setUsers(newUsers);

        resolve("Role changed successfully");

    });

  };

  return (
    <AuthContext.Provider value={{ User, login, register, logout, users, editProfile, changeRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
