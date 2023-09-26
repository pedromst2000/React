import { createSlice } from "@reduxjs/toolkit";
import usersData from "../data/users.json";
import { checkEmail } from "../utils/checkEmail";

// persisting data with localStorage
const users = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : usersData;

const loggedUser = sessionStorage.getItem("loggedUser")
  ? JSON.parse(sessionStorage.getItem("loggedUser"))
  : {
      username: "",
      role: "regular",
      isLogged: true,
    };

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: users,
    User: loggedUser,
  },

  // state and actions
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;

      try {
        if (email == "" || password == "")
          throw new Error("Please fill all fields");

        if (!checkEmail(email)) throw new Error("Invalid email");
        else if (state.users.some((user) => user.email !== email)) {
          throw new Error("Email not found");
        } else if (state.users.some((user) => user.password !== password)) {
          throw new Error("Incorrect password");
        } else {
          const loggedUser = state.users.find((user) => user.email === email);

          state.User.username = loggedUser.username;
          state.User.role = loggedUser.role;
          state.User.isLogged = true;

          localStorage.setItem("loggedUser", JSON.stringify(state.User));

          return state.User;
        }
      } catch (error) {
        if (error) {
          return error.message;
        }
      }
    },
    register: (state, action) => {
      const { username, email, password } = action.payload;

      try {
        if (username == "" || email == "" || password == "")
          throw new Error("Please fill all fields");
        else if (
          state.users.some(
            (user) => user.username.toLowerCase() === username.toLowerCase()
          )
        ) {
          throw new Error("Username already exists");
        } else if (!checkEmail(email)) throw new Error("Invalid email");
        else if (
          state.users.some(
            (user) => user.email.toLowerCase() === email.toLowerCase()
          )
        ) {
          throw new Error("Email already exists");
        } else if (
          state.users.some(
            (user) => user.email.toLowerCase() === email.toLowerCase()
          )
        ) {
          throw new Error("Email already exists");
        } else {
          const newUser = {
            id: state.users.length + 1,
            username: username,
            email: email,
            password: password,
            role: "user",
          };

          state.users = [...state.users, newUser];

            localStorage.setItem("users", JSON.stringify(state.users));

            return newUser;
        }
      } catch (error) {
        if (error) {
          return error.message;
        }
      }
    },
    logout: (state, action) => {

      const { username, role, isLogged } = action.payload;

      state.User.username = username;
      state.User.role = role;
      state.User.isLogged = isLogged;

      sessionStorage.removeItem("loggedUser");

      return state.User;


    },
  },
});


export const authActions = usersSlice.actions;