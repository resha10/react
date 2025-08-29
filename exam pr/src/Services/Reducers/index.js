// import { combineReducers } from "redux";
// import { studentReducer } from './blogReducer';

// export const rootReducer = combineReducers({
//   student: studentReducer,
// });
// src/index.js


import { combineReducers } from "redux";
import blogReducer from "./blogReducer.js"; 

export const rootReducer = combineReducers({
  blog: blogReducer,
});
