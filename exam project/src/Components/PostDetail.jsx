import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../redux/actions/postActions';
import { Button } from 'react-bootstrap';

const PostDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const post = useSelector(state => state.posts.posts.find(p => p.id === parseInt(id)));

  if (!post) return <h3>Post not found</h3>;

  const handleDelete = () => {
    dispatch(deletePost(post.id));
    navigate('/');
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <img src={post.image} alt={post.title} style={{ width: '100%', maxHeight: '400px' }} />
      <p>{post.description}</p>
      <Button as={Link} to={`/edit/${post.id}`} variant="warning" className="me-2">Edit</Button>
      <Button variant="danger" onClick={handleDelete}>Delete</Button>
    </div>
  );
};

export default PostDetails;
