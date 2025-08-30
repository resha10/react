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
