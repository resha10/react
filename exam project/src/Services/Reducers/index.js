import { combineReducers } from "redux";
import { productReducer } from "./blogReducer";
// import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    productReducer,
  //   userReducer
})