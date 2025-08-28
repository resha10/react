import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deletePost } from '../Services/Actions/postActions';
import { useSelector as useAuthSelector } from 'react-redux';

export default function PostDetails() {
  const { id } = useParams();
  const post = useSelector(s => s.posts.items.find(p => String(p.id) === String(id)));
  const { isAuthenticated } = useSelector(s => s.auth);
  const dispatch = useDispatch();
  const nav = useNavigate();

  if (!post) return <div className="container p-4">Post not found.</div>;

  const handleDelete = async () => {
    if (window.confirm('Delete this post?')) {
      await dispatch(deletePost(post.id));
      nav('/');
    }
  };

  return (
    <div className="container my-4">
      <img src={post.image} alt={post.title} className="img-fluid rounded mb-3" />
      <h2>{post.title}</h2>
      <div className="text-muted mb-2">{post.category} • {new Date(post.date).toDateString()}</div>
      <p className="lead">{post.description}</p>

      {isAuthenticated && (
        <div className="d-flex gap-2">
          <Link className="btn btn-warning" to={`/edit/${post.id}`}>Edit</Link>
          <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
}
