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
