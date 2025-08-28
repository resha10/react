import axios from 'axios';
const API = 'http://localhost:5000/posts';

export const fetchPosts = () => async dispatch => {
  dispatch({ type: 'POSTS_REQUEST' });
  try {
    const { data } = await axios.get(API);
    dispatch({ type: 'POSTS_SUCCESS', payload: data });
  } catch (e) {
    dispatch({ type: 'POSTS_FAILURE', payload: e.message });
  }
};

export const addPost = post => async dispatch => {
  const withDate = { ...post, date: post.date || new Date().toISOString().slice(0, 10) };
  const { data } = await axios.post(API, withDate);
  dispatch({ type: 'ADD_POST_SUCCESS', payload: data });
};

export const updatePost = post => async dispatch => {
  const { data } = await axios.put(`${API}/${post.id}`, post);
  dispatch({ type: 'UPDATE_POST_SUCCESS', payload: data });
};

export const deletePost = id => async dispatch => {
  await axios.delete(`${API}/${id}`);
  dispatch({ type: 'DELETE_POST_SUCCESS', payload: id });
};
