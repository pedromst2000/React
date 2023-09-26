import { configureStore } from "@reduxjs/toolkit";
import { todosSlice } from "./TodosSlice";
import { categoriesSlice } from "./CategoriesSlice";
import { usersSlice } from "./UsersSlice";

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer, // todos state store
    categories: categoriesSlice.reducer, // categories state store
    users: usersSlice.reducer, // users state store
  },
});

export default store;
