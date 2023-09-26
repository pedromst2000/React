import { createSlice } from "@reduxjs/toolkit";
import categoriesData from "../data/categories.json";

// persisting data with localStorage
const categories = localStorage.getItem("categories")
  ? JSON.parse(localStorage.getItem("categories"))
  : categoriesData;

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: categories,
  },
  // state and actions
  reducers: {
    // Add - Create
    addCategory: (state, action) => {
      // body
      const newCategory = {
        id: state.categories.length + 1,
        name: action.payload.name,
      };

      state.categories = [...state.categories, newCategory]; // state.categories.push(newCategory);

      // updating the state in localStorage
      localStorage.setItem("categories", JSON.stringify(state.categories));
    },
  },
});

// actions
export const categoriesActions = categoriesSlice.actions;
