import React, { createContext, useEffect, useReducer, useState } from "react";
import usersData from "../data/users.json";
import validateEmail from "../utils/validateEmail";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [User, setUser] = useState(() => {
    const loggedUser = sessionStorage.getItem("loggedUser");

    return loggedUser
      ? JSON.parse(loggedUser)
      : {
          username: "",
          isLogged: false,
        };
  });

  const [users, setUsers] = useState(usersData);

  useEffect(() => {
    setUser(User);
    setUsers(users);

    sessionStorage.setItem("loggedUser", JSON.stringify(User));
  }, [User, users]);

  const AuthReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          loggedUser: setUser({
            username: action.payload.username,
            isLogged: action.payload.isLogged,
          }),
        };
      case "LOGOUT":
        return {
          ...state,
          loggedUser: setUser({
            username: "",
            isLogged: false,
          }),
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(AuthReducer, User);

  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      if (email == "" || password == "") {
        reject("Email or password is empty");
      } else if (!validateEmail(email)) {
        reject("Email is not valid");
      } else if (!users.some((user) => user.email === email)) {
        reject("User not found");
      } else if (!users.some((user) => user.password === password)) {
        reject("Password is incorrect");
      } else {
        const user = users.find((user) => user.email === email);

        dispatch({
          type: "LOGIN",
          payload: {
            username: user.username,
            isLogged: true,
          },
        });

        resolve("Logged in successfully");
      }
    });
  };


  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        User
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
