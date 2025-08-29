// import axios from "axios";

// // Replace the endpoint to point to students
// const API_URL = "http://localhost:3000/students";

// // ------------------ Basic Action Creators ------------------ //
// export const loading = () => ({
//   type: "LOADING",
// });

// export const addStudentSUC = () => ({
//   type: "ADD_STUDENT_SUC",
// });

// export const addStudentRej = (err) => ({
//   type: "ADD_STUDENT_REJ",
//   payload: err,
// });

// export const getAllStudents = (data) => ({
//   type: "GET_ALL_STUDENTS_SUC",
//   payload: data,
// });

// export const getStudentsRej = (err) => ({
//   type: "GET_ALL_STUDENTS_REJ",
//   payload: err,
// });

// export const getStudent = (data) => ({
//   type: "GET_STUDENT",
//   payload: data,
// });

// export const updateStudent = () => ({
//   type: "UPDATE_STUDENT",
// });

// // ------------------ Async Action Creators ------------------ //

// // Get all students
// export const getAllStudentAsync = () => {
//   return async (dispatch) => {
//     dispatch(loading());
//     try {
//       const res = await axios.get(API_URL);
//       dispatch(getAllStudents(res.data));
//     } catch (error) {
//       dispatch(getStudentsRej(error.message));
//     }
//   };
// };

// // Add new student
// export const addStudentAsync = (data) => {
//   return async (dispatch) => {
//     dispatch(loading());
//     try {
//       await axios.post(API_URL, data);
//       dispatch(addStudentSUC());
//     } catch (error) {
//       dispatch(addStudentRej(error.message));
//     }
//   };
// };

// // Delete student
// export const deleteStudentAsync = (id) => {
//   return async (dispatch) => {
//     dispatch(loading());
//     try {
//       await axios.delete(`${API_URL}/${id}`);
//       dispatch(getAllStudentAsync()); // Refresh the list
//     } catch (error) {
//       dispatch(addStudentRej(error.message));
//     }
//   };
// };

// // Get single student by ID
// export const getStudentAsync = (id) => {
//   return async (dispatch) => {
//     dispatch(loading());
//     try {
//       const res = await axios.get(`${API_URL}/${id}`);
//       dispatch(getStudent(res.data));
//     } catch (error) {
//       dispatch(addStudentRej(error.message));
//     }
//   };
// };

// // Update student
// export const updateStudentAsync = (data) => {
//   return async (dispatch) => {
//     dispatch(loading());
//     try {
//       await axios.put(`${API_URL}/${data.id}`, data);
//       dispatch(updateStudent());
//     } catch (error) {
//       dispatch(addStudentRej(error.message));
//     }
//   };
// };



// import axios from "axios";

// // Replace the endpoint to point to blogs
// const API_URL = "http://localhost:3000/blogs";

// // ------------------ Basic Action Creators ------------------ //
// export const loading = () => ({
//   type: "LOADING",
// });

// export const addBlogSUC = () => ({
//   type: "ADD_BLOG_SUC",
// });

// export const addBlogRej = (err) => ({
//   type: "ADD_BLOG_REJ",
//   payload: err,
// });

// export const getAllBlogs = (data) => ({
//   type: "GET_ALL_BLOGS_SUC",
//   payload: data,
// });

// export const getBlogsRej = (err) => ({
//   type: "GET_ALL_BLOGS_REJ",
//   payload: err,
// });

// export const getBlog = (data) => ({
//   type: "GET_BLOG",
//   payload: data,
// });

// export const updateBlog = () => ({
//   type: "UPDATE_BLOG",
// });

// // ------------------ Async Action Creators ------------------ //

// // Get all blogs
// export const getAllBlogsAsync = () => {
//   return async (dispatch) => {
//     dispatch(loading());
//     try {
//       const res = await axios.get(API_URL);
//       dispatch(getAllBlogs(res.data));
//     } catch (error) {
//       dispatch(getBlogsRej(error.message));
//     }
//   };
// };

// // Add new blog
// export const addBlogAsync = (data) => {
//   return async (dispatch) => {
//     dispatch(loading());
//     try {
//       await axios.post(API_URL, data);
//       dispatch(addBlogSUC());
//     } catch (error) {
//       dispatch(addBlogRej(error.message));
//     }
//   };
// };

// // Delete blog
// export const deleteBlogAsync = (id) => {
//   return async (dispatch) => {
//     dispatch(loading());
//     try {
//       await axios.delete(`${API_URL}/${id}`);
//       dispatch(getAllBlogsAsync()); // Refresh the list
//     } catch (error) {
//       dispatch(addBlogRej(error.message));
//     }
//   };
// };

// // Get single blog by ID
// export const getBlogAsync = (id) => {
//   return async (dispatch) => {
//     dispatch(loading());
//     try {
//       const res = await axios.get(`${API_URL}/${id}`);
//       dispatch(getBlog(res.data));
//     } catch (error) {
//       dispatch(addBlogRej(error.message));
//     }
//   };
// };

// // Update blog
// export const updateBlogAsync = (data) => {
//   return async (dispatch) => {
//     dispatch(loading());
//     try {
//       await axios.put(`${API_URL}/${data.id}`, data);
//       dispatch(updateBlog());
//     } catch (error) {
//       dispatch(addBlogRej(error.message));
//     }
//   };
// };

// src/Services/Actions/blogAction.js
import axios from "axios";

// 👉 Get all blogs
export const getAllBlogAsync = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/blogs");
    dispatch({ type: "GET_ALL_BLOGS_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "GET_ALL_BLOGS_ERROR", payload: error.message });
  }
};

// 👉 Get single blog
export const getBlogAsync = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:5000/blogs/${id}`);
    dispatch({ type: "GET_BLOG_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "GET_BLOG_ERROR", payload: error.message });
  }
};

// 👉 Add a new blog
export const addBlogAsync = (blog) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:5000/blogs", blog);
    dispatch({ type: "ADD_BLOG_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "ADD_BLOG_ERROR", payload: error.message });
  }
};

// 👉 Update a blog
export const updateBlogAsync = (blog) => async (dispatch) => {
  try {
    const res = await axios.put(`http://localhost:5000/blogs/${blog.id}`, blog);
    dispatch({ type: "UPDATE_BLOG_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "UPDATE_BLOG_ERROR", payload: error.message });
  }
};

// 👉 Delete a blog
export const deleteBlogAsync = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5000/blogs/${id}`);
    dispatch({ type: "DELETE_BLOG_SUCCESS", payload: id });
  } catch (error) {
    dispatch({ type: "DELETE_BLOG_ERROR", payload: error.message });
  }
};
