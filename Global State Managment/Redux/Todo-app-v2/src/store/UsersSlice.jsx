import { createSlice } from "@reduxjs/toolkit";
import usersData from "../data/users.json";

// persisting data with localStorage
const users =
  localStorage.getItem("users") === null
    ? localStorage.setItem("users", JSON.stringify(usersData))
    : JSON.parse(localStorage.getItem("users"));

// persisting the state of the user
const loggedUser =
  sessionStorage.getItem("loggedUser") === null
    ? sessionStorage.setItem(
        "loggedUser",
        JSON.stringify({
          username: "",
          role: "",
          isLogged: false,
        })
      )
    : JSON.parse(sessionStorage.getItem("loggedUser"));

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: users,
    User: loggedUser,
  },

  // state and actions
  reducers: {

    login: (state, action) => {
      const { username, role, isLogged } = action.payload;

      const newLoggedUser = {
        ...state,
        User: {
          username: username,
          role: role,
          isLogged: isLogged,
        },
      };

      sessionStorage.setItem("loggedUser", JSON.stringify(newLoggedUser.User));

      return newLoggedUser;
    },

    register: (state, action) => {
      const { username, email, password } = action.payload;

      const newUser = {
        User: {
          username: username,
          role: "unsigned",
          isLogged: true,
        },
        newUser: {
          id: state.users.length + 1,
          username: username,
          email: email,
          password: password,
          role: "unsigned",
        },
      };

      const newUsers = {
        ...state,
        users: [...state.users, newUser.newUser],
        User: newUser.User,
      };

      localStorage.setItem("users", JSON.stringify(newUsers.users));
      sessionStorage.setItem("loggedUser", JSON.stringify(newUsers.User));

      return newUsers;
    },
    logout: (state, action) => {
      const { username, role, isLogged } = action.payload;

      const newState = {
        ...state,
        User: {
          username: username,
          role: role,
          isLogged: isLogged,
        },
      };

      sessionStorage.setItem("loggedUser", JSON.stringify(newState.User));

      return newState;
    },

    changePassword: (state, action) => {
      const { newPassword } = action.payload;
   
      const newUsers = state.users.map((user) => {
        if (user.username === state.User.username) {
          return {
            ...user,
            password: newPassword,
          };
        } else {
          return user;
        }
      });

      const newState = {
        ...state,
        users: newUsers,
      };
  
      localStorage.setItem("users", JSON.stringify(newState.users));

      return newState
    },
  },
});

export const authActions = usersSlice.actions;
