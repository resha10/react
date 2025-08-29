// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchPosts, deletePost, updatePost } from "../Services/Actions/postAction";
// import { Table, Button, Modal, Form } from "react-bootstrap";

// function ManagePosts() {
//   const dispatch = useDispatch();
//   const posts = useSelector((state) => state.posts);
//   const [show, setShow] = useState(false);
//   const [editData, setEditData] = useState({ id: "", title: "", content: "" });

//   useEffect(() => {
//     dispatch(fetchPosts());
//   }, [dispatch]);

//   const handleDelete = (id) => {
//     dispatch(deletePost(id));
//   };

//   const handleEditClick = (post) => {
//     setEditData(post);
//     setShow(true);
//   };

//   const handleUpdate = () => {
//     dispatch(updatePost(editData.id, { title: editData.title, content: editData.content }));
//     setShow(false);
//   };

//   return (
//     <div className="container mt-4">
//       <h2>Manage Posts</h2>
//       <Table bordered hover>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Content</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {posts.map((post) => (
//             <tr key={post.id}>
//               <td>{post.title}</td>
//               <td>{post.content}</td>
//               <td>
//                 <Button variant="warning" className="me-2" onClick={() => handleEditClick(post)}>
//                   Edit
//                 </Button>
//                 <Button variant="danger" onClick={() => handleDelete(post.id)}>
//                   Delete
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       {/* Edit Modal */}
//       <Modal show={show} onHide={() => setShow(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Post</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3">
//               <Form.Label>Title</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={editData.title}
//                 onChange={(e) => setEditData({ ...editData, title: e.target.value })}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Content</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 value={editData.content}
//                 onChange={(e) => setEditData({ ...editData, content: e.target.value })}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShow(false)}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={handleUpdate}>
//             Update
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default ManagePosts;


import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, updatePost, deletePost } from "../Services/Actions/postAction";
import { Table, Button, Form } from "react-bootstrap";

function EditDeletePost() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const [editId, setEditId] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleEdit = (post) => {
    setEditId(post.id);
    setTitle(post.title);
    setContent(post.content);
  };

  const handleUpdate = () => {
    dispatch(updatePost({ id: editId, title, content }));
    setEditId(null);
    setTitle("");
    setContent("");
  };

  return (
    <>
      <h3>Manage Posts</h3>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.title}</td>
              <td>{post.content}</td>
              <td>
                <Button variant="warning" size="sm" onClick={() => handleEdit(post)}>Edit</Button>{" "}
                <Button variant="danger" size="sm" onClick={() => dispatch(deletePost(post.id))}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {editId && (
        <div>
          <h4>Edit Post</h4>
          <Form>
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
            <Button variant="primary" onClick={handleUpdate}>Update Post</Button>
          </Form>
        </div>
      )}
    </>
  );
}

export default EditDeletePost;
