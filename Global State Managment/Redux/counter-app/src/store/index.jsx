import { configureStore, createSlice } from "@reduxjs/toolkit";

// initial state of the counter
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.counter++;
    },

    decrement: (state, action) => {
      state.counter--;
    },

    addBy2: (state, action) => {
      state.counter += action.payload;
    },

    multiplyBy2: (state, action) => {
      state.counter *= action.payload;
    },

    reduceBy2: (state, action) => {
      state.counter -= action.payload;
    },
  },
});

export const actions = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
