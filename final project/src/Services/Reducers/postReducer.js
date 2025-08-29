// const initialState = {
//   posts: [],
//   loading: false,
//   error: null
// };

// export const postReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'FETCH_POSTS_REQUEST':
//       return { ...state, loading: true };
//     case 'FETCH_POSTS_SUCCESS':
//       return { ...state, loading: false, posts: action.payload };
//     case 'FETCH_POSTS_FAILURE':
//       return { ...state, loading: false, error: action.payload };
//     case 'ADD_POST':
//       return { ...state, posts: [...state.posts, action.payload] };
//     case 'UPDATE_POST':
//       return {
//         ...state,
//         posts: state.posts.map(post =>
//           post.id === action.payload.id ? action.payload : post
//         )
//       };
//     case 'DELETE_POST':
//       return { ...state, posts: state.posts.filter(post => post.id !== action.payload) };
//     default:
//       return state;
//   }
// };

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS_REQUEST":
      return { ...state, loading: true };
    case "FETCH_POSTS_SUCCESS":
      return { ...state, loading: false, posts: action.payload };
    case "ADD_POST":
      return { ...state, posts: [...state.posts, action.payload] };
    case "UPDATE_POST":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
      };
    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    default:
      return state;
  }
};

export default postReducer;
