// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addPost } from "../Services/Actions/postAction";
// import { Form, Button, Container } from "react-bootstrap";

// function AddPost() {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (title && content) {
//       dispatch(addPost({ title, content }));
//       setTitle("");
//       setContent("");
//     }
//   };

//   return (
//     <Container className="mt-4">
//       <h2>Add New Post</h2>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3">
//           <Form.Label>Title</Form.Label>
//           <Form.Control
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder="Enter post title"
//           />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Content</Form.Label>
//           <Form.Control
//             as="textarea"
//             rows={4}
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             placeholder="Enter post content"
//           />
//         </Form.Group>
//         <Button type="submit" variant="primary">
//           Add Post
//         </Button>
//       </Form>
//     </Container>
//   );
// }

// export default AddPost;



import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../Services/Actions/postAction";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content };
    dispatch(addPost(newPost));
    navigate("/");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3>Add New Post</h3>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">Add Post</Button>
    </Form>
  );
}

export default AddPost;
