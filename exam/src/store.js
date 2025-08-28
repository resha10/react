
// import { createStore, applyMiddleware, combineReducers } from "redux";
// import { thunk } from "redux-thunk";
// import { rootReducer } from "./Services/Reducers";


// export const store = createStore(rootReducer, applyMiddleware(thunk));



import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
