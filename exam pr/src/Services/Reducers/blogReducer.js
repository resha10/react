// const initialState = {
//   students: [],
//   student: null,
//   isLoading: false,
//   isError: "",
//   isCreated: false,
//   isUpdated: false,
// };

// export const studentReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "LOADING":
//       return {
//         ...state,
//         isLoading: true,
//         isError: "",
//       };

//     case "ADD_STUDENT_SUC":
//       return {
//         ...state,
//         isCreated: true,
//         isLoading: false,
//       };

//     case "ADD_STUDENT_REJ":
//       return {
//         ...state,
//         isError: action.payload,
//         isLoading: false,
//       };

//     case "GET_ALL_STUDENTS_SUC":
//       return {
//         ...state,
//         students: action.payload,
//         isLoading: false,
//         isCreated: false,
//         isUpdated: false,
//         isError: "",
//       };

//     case "GET_ALL_STUDENTS_REJ":
//       return {
//         ...state,
//         isLoading: false,
//         isError: action.payload,
//       };

//     case "GET_STUDENT":
//       return {
//         ...state,
//         student: action.payload,
//         isLoading: false,
//       };

//     case "GET_STUDENT_REJ":
//       return {
//         ...state,
//         isLoading: false,
//         isError: action.payload,
//         student: null,
//       };

//     case "UPDATE_STUDENT":
//       return {
//         ...state,
//         isUpdated: true,
//         isLoading: false,
//       };

//     default:
//       return state;
//   }
// };




const initialState = {
  blogs: [],
  blog: null,
  isLoading: false,
  error: null,
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_BLOGS_SUCCESS":
      return { ...state, blogs: action.payload, isLoading: false, error: null };
    case "GET_ALL_BLOGS_ERROR":
      return { ...state, error: action.payload, isLoading: false };

    case "GET_BLOG_SUCCESS":
      return { ...state, blog: action.payload, isLoading: false, error: null };
    case "GET_BLOG_ERROR":
      return { ...state, error: action.payload, isLoading: false };

    case "ADD_BLOG_SUCCESS":
      return { ...state, blogs: [...state.blogs, action.payload], isLoading: false, error: null };
    case "ADD_BLOG_ERROR":
      return { ...state, error: action.payload, isLoading: false };

    case "UPDATE_BLOG_SUCCESS":
      return {
        ...state,
        blogs: state.blogs.map((b) => (b.id === action.payload.id ? action.payload : b)),
        blog: action.payload,
        isLoading: false,
        error: null,
      };
    case "UPDATE_BLOG_ERROR":
      return { ...state, error: action.payload, isLoading: false };

    case "DELETE_BLOG_SUCCESS":
      return {
        ...state,
        blogs: state.blogs.filter((b) => b.id !== action.payload),
        isLoading: false,
        error: null,
      };
    case "DELETE_BLOG_ERROR":
      return { ...state, error: action.payload, isLoading: false };

    default:
      return state;
  }
};

export default blogReducer;
