import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, updatePost, fetchPosts } from '../Services/Actions/postActions';
import { useNavigate, useParams } from 'react-router-dom';

export default function PostForm() {
  const { id } = useParams();
  const editing = Boolean(id);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const { items } = useSelector(s => s.posts);
  const existing = items.find(p => String(p.id) === String(id));

  const [form, setForm] = useState({
    title: '',
    description: '',
    image: '',
    category: '',
    date: new Date().toISOString().slice(0, 10)
  });

  useEffect(() => { if (!items.length) dispatch(fetchPosts()); }, [dispatch, items.length]);
  useEffect(() => { if (editing && existing) setForm(existing); }, [editing, existing]);

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async e => {
    e.preventDefault();
    if (!form.title.trim() || !form.description.trim()) {
      alert('Title and description are required');
      return;
    }
    if (editing) {
      await dispatch(updatePost({ ...form, id: Number(id) }));
    } else {
      await dispatch(addPost(form));
    }
    nav('/');
  };

  return (
    <div className="container mt-4" style={{ maxWidth: 720 }}>
      <h3 className="mb-3">{editing ? 'Edit Post' : 'Add Post'}</h3>
      <form onSubmit={submit}>
        <input name="title" value={form.title} onChange={onChange} className="form-control mb-3" placeholder="Title" />
        <textarea name="description" value={form.description} onChange={onChange} rows="5" className="form-control mb-3" placeholder="Description"></textarea>
        <input name="image" value={form.image} onChange={onChange} className="form-control mb-3" placeholder="Image URL" />
        <input name="category" value={form.category} onChange={onChange} className="form-control mb-3" placeholder="Category" />
        <input type="date" name="date" value={form.date} onChange={onChange} className="form-control mb-3" />
        <button className="btn btn-primary">{editing ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
}
