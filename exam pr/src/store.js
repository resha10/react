// import { createStore, applyMiddleware, combineReducers } from "redux";
// import { thunk } from "redux-thunk";
// import { rootReducer } from "./Services/Reducers";


// export const store = createStore(rootReducer, applyMiddleware(thunk));
// // export default store; 


// import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
// import thunk from "redux-thunk";
// import { rootReducer } from "./Services/Reducers";

// // You could also use Redux DevTools Extension
// import { composeWithDevTools } from "redux-devtools-extension";

// const middleware = [thunk];

// export const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(...middleware))
// );


import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import * as thunk from "redux-thunk";

const initialPostState = { posts: [] };
const postReducer = (state = initialPostState, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};


export const rootReducer = combineReducers({
  post: postReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk.default));
export default store;
