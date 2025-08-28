// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchPosts, updatePost, deletePost } from "../Services/Actions/postAction.js";
// import { Row, Col, Card, Button, Form } from "react-bootstrap";


// function ManagePosts() {
//   const dispatch = useDispatch();
//   const posts = useSelector((state) => state.posts.posts);

//   const [editingPost, setEditingPost] = useState(null);

//   useEffect(() => {
//     dispatch(fetchPosts());
//   }, [dispatch]);

//   const handleEditClick = (post) => {
//     setEditingPost(post);
//   };

//   const handleChange = (e) => {
//     setEditingPost({ ...editingPost, [e.target.name]: e.target.value });
//   };

//   const handleUpdate = (e) => {
//     e.preventDefault();
//     dispatch(updatePost(editingPost.id, editingPost));
//     setEditingPost(null);
//   };

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this post?")) {
//       dispatch(deletePost(id));
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h3>Manage Posts</h3>
//       <Row>
//         {posts.map((p) => (
//           <Col md={6} key={p.id} className="mb-3">
//             <Card>
//               <Card.Img variant="top" src={p.image} height={150} />
//               <Card.Body>
//                 {editingPost && editingPost.id === p.id ? (
//                   <Form onSubmit={handleUpdate}>
//                     <Form.Group className="mb-2">
//                       <Form.Control
//                         name="title"
//                         value={editingPost.title}
//                         onChange={handleChange}
//                       />
//                     </Form.Group>
//                     <Form.Group className="mb-2">
//                       <Form.Control
//                         name="description"
//                         value={editingPost.description}
//                         onChange={handleChange}
//                       />
//                     </Form.Group>
//                     <Form.Group className="mb-2">
//                       <Form.Control
//                         type="date"
//                         name="date"
//                         value={editingPost.date}
//                         onChange={handleChange}
//                       />
//                     </Form.Group>
//                     <Form.Group className="mb-2">
//                       <Form.Control
//                         name="image"
//                         value={editingPost.image}
//                         onChange={handleChange}
//                       />
//                     </Form.Group>
//                     <Form.Group className="mb-2">
//                       <Form.Control
//                         name="category"
//                         value={editingPost.category}
//                         onChange={handleChange}
//                       />
//                     </Form.Group>
//                     <Button type="submit" size="sm" variant="warning">
//                       Update
//                     </Button>{" "}
//                     <Button
//                       size="sm"
//                       variant="secondary"
//                       onClick={() => setEditingPost(null)}
//                     >
//                       Cancel
//                     </Button>
//                   </Form>
//                 ) : (
//                   <>
//                     <Card.Title>{p.title}</Card.Title>
//                     <Card.Text>{p.description}</Card.Text>
//                     <Card.Text>
//                       <small>{p.date} | {p.category}</small>
//                     </Card.Text>
//                     <Button
//                       variant="warning"
//                       size="sm"
//                       className="me-2"
//                       onClick={() => handleEditClick(p)}
//                     >
//                       Edit
//                     </Button>
//                     <Button
//                       variant="danger"
//                       size="sm"
//                       onClick={() => handleDelete(p.id)}
//                     >
//                       Delete
//                     </Button>
//                   </>
//                 )}
//               </Card.Body>
//             </Card>
//           </Col>
//         // ))}
//       </Row>
//     </div>
//   );
// }

// export default ManagePosts;
