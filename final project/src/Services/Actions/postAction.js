import axios from "axios";

const API_URL = "http://localhost:5000/posts";

export const fetchPosts = () => async (dispatch) => {
  dispatch({ type: "FETCH_POSTS_REQUEST" });
  try {
    const response = await axios.get(API_URL);
    dispatch({ type: "FETCH_POSTS_SUCCESS", payload: response.data });
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export const addPost = (post) => async (dispatch) => {
  const response = await axios.post(API_URL, post);
  dispatch({ type: "ADD_POST", payload: response.data });
};

export const updatePost = (post) => async (dispatch) => {
  const response = await axios.put(`${API_URL}/${post.id}`, post);
  dispatch({ type: "UPDATE_POST", payload: response.data });
};

export const deletePost = (id) => async (dispatch) => {
  await axios.delete(`${API_URL}/${id}`);
  dispatch({ type: "DELETE_POST", payload: id });
};
