// import { combineReducers } from "redux";
import counter from "./counter";
import { configureStore } from "@reduxjs/toolkit"; // toolkit

// const store = combineReducers({
//   counter,
// });

// toolkit version
const store = configureStore({
  reducer: {
    counter: counter.reducer,
  },
});

export default store;
