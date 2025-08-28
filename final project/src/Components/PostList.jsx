// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchPosts } from '../actions/postActions';
// import { Link } from 'react-router-dom';
// import { Card, Button, Row, Col } from 'react-bootstrap';

// function PostList() {
//   const dispatch = useDispatch();
//   const posts = useSelector(state => state.posts.posts);

//   useEffect(() => {
//     dispatch(fetchPosts());
//   }, [dispatch]);

//   return (
//     <Row>
//       {posts.map(post => (
//         <Col md={4} key={post.id}>
//           <Card className="mb-3">
//             <Card.Img variant="top" src={post.image} />
//             <Card.Body>
//               <Card.Title>{post.title}</Card.Title>
//               <Card.Text>{post.description}</Card.Text>
//               <Card.Text><small>{post.date}</small></Card.Text>
//               <Link to={`/edit/${post.id}`}><Button variant="primary">Edit</Button></Link>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   );
// }

// export default PostList;


import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../Services/Actions/postActions';
import { Link } from 'react-router-dom';

export default function PostList() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(s => s.posts);

  const [sortBy, setSortBy] = useState('date_desc');
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');

  useEffect(() => { dispatch(fetchPosts()); }, [dispatch]);

  const categories = useMemo(() => ['all', ...new Set(items.map(p => p.category))], [items]);

  const visible = useMemo(() => {
    let list = [...items];

    if (category !== 'all') list = list.filter(p => p.category === category);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(p => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    }

    if (sortBy === 'date_desc') list.sort((a,b)=> new Date(b.date) - new Date(a.date));
    if (sortBy === 'date_asc') list.sort((a,b)=> new Date(a.date) - new Date(b.date));
    if (sortBy === 'title') list.sort((a,b)=> a.title.localeCompare(b.title));

    return list;
  }, [items, category, search, sortBy]);

  return (
    <div className="container my-4">
      <h1 className="display-5 fw-bold text-center mb-4">My Best Articles to Help You Build a Successful Blog</h1>

      {/* Controls */}
      <div className="row g-2 mb-3">
        <div className="col-md-4">
          <input className="form-control" placeholder="Search…" value={search} onChange={e=>setSearch(e.target.value)} />
        </div>
        <div className="col-md-4">
          <select className="form-select" value={category} onChange={e=>setCategory(e.target.value)}>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div className="col-md-4">
          <select className="form-select" value={sortBy} onChange={e=>setSortBy(e.target.value)}>
            <option value="date_desc">Sort by Newest</option>
            <option value="date_asc">Sort by Oldest</option>
            <option value="title">Sort by Title</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      {loading && <p>Loading…</p>}
      {error && <div className="alert alert-danger">{error}</div>}

      <div className="row">
        {visible.map(post => (
          <div className="col-md-4 mb-4" key={post.id}>
            <div className="card h-100 shadow-sm">
              <img src={post.image} className="card-img-top" alt={post.title} />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.description.slice(0, 120)}…</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="badge text-bg-secondary">{post.category}</span>
                  <Link className="btn btn-sm btn-primary" to={`/post/${post.id}`}>Read</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        {!loading && visible.length === 0 && <p>No posts match your filters.</p>}
      </div>
    </div>
  );
}
