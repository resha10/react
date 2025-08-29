import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, updatePost } from '../redux/actions/postActions';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const PostForm = () => {
  const [postData, setPostData] = useState({ title: '', description: '', image: '', category: '' });
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { posts } = useSelector(state => state.posts);

  useEffect(() => {
    if (id) {
      const existingPost = posts.find(p => p.id === parseInt(id));
      if (existingPost) setPostData(existingPost);
    }
  }, [id, posts]);

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updatePost(id, postData));
    } else {
      dispatch(addPost({ ...postData, date: new Date().toISOString() }));
    }
    navigate('/');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="title" value={postData.title} onChange={handleChange} required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" name="description" value={postData.description} onChange={handleChange} required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="text" name="image" value={postData.image} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" name="category" value={postData.category} onChange={handleChange} />
      </Form.Group>
      <Button variant="success" type="submit">{id ? 'Update Post' : 'Add Post'}</Button>
    </Form>
  );
};

export default PostForm;
