// // // import { useState } from "react";
// // // import { useDispatch } from "react-redux";
// // // import { addPost } from "../Services/Actions/BlogAction.js"; // correct path
// // // import { useNavigate } from "react-router-dom";
// // // import { Form, Button } from "react-bootstrap";

// // // function AddPost() {
// // //   const dispatch = useDispatch();
// // //   const navigate = useNavigate();

// // //   const [post, setPost] = useState({
// // //     title: "",
// // //     description: "",
// // //     date: "",
// // //     image: "",
// // //     category: "",
// // //     author: "Admin",
// // //   });

// // //   const handleChange = (e) => {
// // //     setPost({ ...post, [e.target.name]: e.target.value });
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     dispatch(addPost(post));
// // //     navigate("/manage"); // redirect to Edit/Delete page
// // //   };

// // //   return (
// // //     <div className="container mt-4">
// // //       <h3>Add New Post</h3>
// // //       <Form onSubmit={handleSubmit}>
// // //         <Form.Group className="mb-3">
// // //           <Form.Label>Title</Form.Label>
// // //           <Form.Control
// // //             name="title"
// // //             value={post.title}
// // //             onChange={handleChange}
// // //             required
// // //           />
// // //         </Form.Group>

// // //         <Form.Group className="mb-3">
// // //           <Form.Label>Description</Form.Label>
// // //           <Form.Control
// // //             name="description"
// // //             value={post.description}
// // //             onChange={handleChange}
// // //             required
// // //           />
// // //         </Form.Group>

// // //         <Form.Group className="mb-3">
// // //           <Form.Label>Date</Form.Label>
// // //           <Form.Control
// // //             type="date"
// // //             name="date"
// // //             value={post.date}
// // //             onChange={handleChange}
// // //             required
// // //           />
// // //         </Form.Group>

// // //         <Form.Group className="mb-3">
// // //           <Form.Label>Image URL</Form.Label>
// // //           <Form.Control
// // //             name="image"
// // //             value={post.image}
// // //             onChange={handleChange}
// // //             required
// // //           />
// // //         </Form.Group>

// // //         <Form.Group className="mb-3">
// // //           <Form.Label>Category</Form.Label>
// // //           <Form.Control
// // //             name="category"
// // //             value={post.category}
// // //             onChange={handleChange}
// // //             required
// // //           />
// // //         </Form.Group>

// // //         <Button type="submit" variant="primary">
// // //           Add Post
// // //         </Button>
// // //       </Form>
// // //     </div>
// // //   );
// // // }

// // // export default AddPost;



// // // // src/Components/BlogAdd.jsx
// // // import React, { useState } from 'react';
// // // import { useDispatch } from 'react-redux';
// // // import { addPost } from '../Services/Actions/postAction';

// // // export default function BlogAdd() {
// // //   const [title, setTitle] = useState('');
// // //   const [description, setDescription] = useState('');
// // //   const [image, setImage] = useState('');
// // //   const [category, setCategory] = useState('');
// // //   const dispatch = useDispatch();

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();

// // //     const newPost = {
// // //       title,
// // //       description,
// // //       image,
// // //       category,
// // //       date: new Date().toISOString()
// // //     };

// // //     dispatch(addPost(newPost));

// // //     // Clear form
// // //     setTitle('');
// // //     setDescription('');
// // //     setImage('');
// // //     setCategory('');
// // //   };

// // //   return (
// // //     <div className="container mt-4">
// // //       <h3>Add New Blog</h3>
// // //       <form onSubmit={handleSubmit}>
// // //         <input
// // //           type="text"
// // //           className="form-control mb-3"
// // //           placeholder="Title"
// // //           value={title}
// // //           onChange={(e) => setTitle(e.target.value)}
// // //         />
// // //         <textarea
// // //           className="form-control mb-3"
// // //           placeholder="Description"
// // //           value={description}
// // //           onChange={(e) => setDescription(e.target.value)}
// // //         ></textarea>
// // //         <input
// // //           type="text"
// // //           className="form-control mb-3"
// // //           placeholder="Image URL"
// // //           value={image}
// // //           onChange={(e) => setImage(e.target.value)}
// // //         />
// // //         <input
// // //           type="text"
// // //           className="form-control mb-3"
// // //           placeholder="Category"
// // //           value={category}
// // //           onChange={(e) => setCategory(e.target.value)}
// // //         />
// // //         <button type="submit" className="btn btn-primary">Add Post</button>
// // //       </form>
// // //     </div>
// // //   );
// // // }


// // import { useState } from "react";
// // import { useDispatch } from "react-redux";
// // import { addPost } from "../Services/Actions/BlogAction.js"; // Make sure this path is correct
// // import { useNavigate } from "react-router-dom";
// // import { Form, Button } from "react-bootstrap";

// // function AddPost() {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();

// //   const [post, setPost] = useState({
// //     title: "",
// //     description: "",
// //     date: "",
// //     image: "",
// //     category: "",
// //     author: "Admin",
// //   });

// //   const handleChange = (e) => {
// //     setPost({ ...post, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     dispatch(addPost(post));
// //     navigate("/manage"); // Redirect to Manage page
// //   };

// //   return (
// //     <div className="container mt-4">
// //       <h3>Add New Post</h3>
// //       <Form onSubmit={handleSubmit}>
// //         <Form.Group className="mb-3">
// //           <Form.Label>Title</Form.Label>
// //           <Form.Control
// //             name="title"
// //             value={post.title}
// //             onChange={handleChange}
// //             required
// //           />
// //         </Form.Group>

// //         <Form.Group className="mb-3">
// //           <Form.Label>Description</Form.Label>
// //           <Form.Control
// //             as="textarea"
// //             rows={4}
// //             name="description"
// //             value={post.description}
// //             onChange={handleChange}
// //             required
// //           />
// //         </Form.Group>

// //         <Form.Group className="mb-3">
// //           <Form.Label>Date</Form.Label>
// //           <Form.Control
// //             type="date"
// //             name="date"
// //             value={post.date}
// //             onChange={handleChange}
// //             required
// //           />
// //         </Form.Group>

// //         <Form.Group className="mb-3">
// //           <Form.Label>Image URL</Form.Label>
// //           <Form.Control
// //             name="image"
// //             value={post.image}
// //             onChange={handleChange}
// //             required
// //           />
// //         </Form.Group>

// //         <Form.Group className="mb-3">
// //           <Form.Label>Category</Form.Label>
// //           <Form.Control
// //             name="category"
// //             value={post.category}
// //             onChange={handleChange}
// //             required
// //           />
// //         </Form.Group>

// //         <Button type="submit" variant="primary">
// //           Add Post
// //         </Button>
// //       </Form>
// //     </div>
// //   );
// // }

// // export default AddPost;


// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addPost } from "../Services/Actions/postAction";
// import { Form, Button } from "react-bootstrap";

// function AddPost() {
//   const dispatch = useDispatch();
//   const [newPost, setNewPost] = useState({
//     title: "",
//     description: "",
//     date: "",
//     image: "",
//     category: ""
//   });

//   const handleChange = (e) => {
//     setNewPost({ ...newPost, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addPost(newPost)); // Call Redux action to add post
//     setNewPost({ title: "", description: "", date: "", image: "", category: "" });
//   };

//   return (
//     <div className="container mt-4">
//       <h3>Add New Post</h3>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3">
//           <Form.Control
//             type="text"
//             name="title"
//             placeholder="Enter title"
//             value={newPost.title}
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Control
//             type="text"
//             name="description"
//             placeholder="Enter description"
//             value={newPost.description}
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Control
//             type="date"
//             name="date"
//             value={newPost.date}
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Control
//             type="text"
//             name="image"
//             placeholder="Enter image URL"
//             value={newPost.image}
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Control
//             type="text"
//             name="category"
//             placeholder="Enter category"
//             value={newPost.category}
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Button type="submit" variant="primary">Add Post</Button>
//       </Form>
//     </div>
//   );
// }

// export default AddPost;
