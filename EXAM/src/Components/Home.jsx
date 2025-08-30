// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   deleteStudentAsync,
//   getAllStudentAsync,
// } from "../Services/Actions/studentAction";
// import {
//   Button,
//   Card,
//   Container,
//   Row,
//   Col,
//   Spinner,
//   Pagination,
//   Form,
// } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// const Home = ({ searchTerm = "" }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { students = [], isLoading: loading } = useSelector(
//     (state) => state.student || {}
//   );

//   const [currentPage, setCurrentPage] = useState(1);
//   const [sortField, setSortField] = useState("fullname");
//   const [sortOrder, setSortOrder] = useState("asc");

//   const itemsPerPage = 4;

//   useEffect(() => {
//     dispatch(getAllStudentAsync());
//   }, [dispatch]);

//   const handleView = (id) => navigate(`/students/view/${id}`);
//   const handleEdit = (id) => navigate(`/edit-student/${id}`);
//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this student?")) {
//       dispatch(deleteStudentAsync(id));
//     }
//   };

//   // Filter & Sort
//   const filteredStudents = students.filter((student) => {
//     return (
//       student.fullname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       student.rollnumber?.toString().includes(searchTerm) ||
//       student.class?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       student.section?.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   });

//   const sortedStudents = [...filteredStudents].sort((a, b) => {
//     let valA = a[sortField]?.toString().toLowerCase() || "";
//     let valB = b[sortField]?.toString().toLowerCase() || "";
//     if (valA < valB) return sortOrder === "asc" ? -1 : 1;
//     if (valA > valB) return sortOrder === "asc" ? 1 : -1;
//     return 0;
//   });

//   const totalPages = Math.ceil(sortedStudents.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const paginatedStudents = sortedStudents.slice(
//     startIndex,
//     startIndex + itemsPerPage
//   );

//   return (
//     <Container className="mt-5">
//       <h2 className="text-center fw-bold mb-5 gradient-heading">
//         🎓 Student Management Dashboard
//       </h2>

//       {/* Sorting Filters */}
//       <Row className="mb-5">
//         <Col md={6}>
//           <Form.Group>
//             <Form.Label className="fw-semibold text-muted">Sort By</Form.Label>
//             <Form.Select
//               className="shadow-sm rounded-pill"
//               value={sortField}
//               onChange={(e) => setSortField(e.target.value)}
//             >
//               <option value="fullname">Full Name</option>
//               <option value="rollnumber">Roll Number</option>
//               <option value="class">Class</option>
//               <option value="section">Section</option>
//               <option value="age">Age</option>
//             </Form.Select>
//           </Form.Group>
//         </Col>
//         <Col md={6}>
//           <Form.Group>
//             <Form.Label className="fw-semibold text-muted">Order</Form.Label>
//             <Form.Select
//               className="shadow-sm rounded-pill"
//               value={sortOrder}
//               onChange={(e) => setSortOrder(e.target.value)}
//             >
//               <option value="asc">🔼 Ascending</option>
//               <option value="desc">🔽 Descending</option>
//             </Form.Select>
//           </Form.Group>
//         </Col>
//       </Row>

//       {/* Student Cards */}
//       {loading ? (
//         <div className="text-center">
//           <Spinner animation="border" variant="primary" />
//         </div>
//       ) : paginatedStudents.length === 0 ? (
//         <p className="text-center text-muted">No students found.</p>
//       ) : (
//         <>
//           <Row xs={1} sm={2} md={2} lg={3} className="g-4">
//             {paginatedStudents.map((student, index) => (
//               <Col key={student.id}>
//                 <Card className="glass-card h-100 shadow-lg border-0">
//                   {/* Student Image */}
//                   <div className="image-wrapper">
//                     <Card.Img
//                       variant="top"
//                       src={
//                         student.image ||
//                         "https://via.placeholder.com/300x200?text=No+Image"
//                       }
//                       alt={student.name}
//                     />
//                   </div>

//                   {/* Card Header */}
//                   <Card.Header
//                     className="text-white fw-bold text-center fs-5"
//                     style={{
//                       background: `linear-gradient(135deg, ${
//                         [
//                           "#6a11cb, #2575fc",
//                           "#11998e, #38ef7d",
//                           "#ff6a00, #ee0979",
//                           "#00c6ff, #0072ff",
//                         ][index % 4]
//                       })`,
//                       borderRadius: "0",
//                     }}
//                   >
//                     {student.name}
//                   </Card.Header>

//                   {/* Card Body */}
//                   <Card.Body className="d-flex flex-column p-4">
//                     <Card.Text className="mb-2">
//                       🆔 <strong>Roll No:</strong>{" "}
//                       <span className="text-muted">
//                         {student.rollNumber || "N/A"}
//                       </span>
//                     </Card.Text>
//                     <Card.Text className="mb-2">
//                       🏫 <strong>Class:</strong>{" "}
//                       <span className="text-muted">{student.class || "N/A"}</span>
//                     </Card.Text>
//                     <Card.Text className="mb-2">
//                       🔖 <strong>Section:</strong>{" "}
//                       <span className="text-muted">
//                         {student.section || "N/A"}
//                       </span>
//                     </Card.Text>
//                     <Card.Text className="mb-2">
//                       🎂 <strong>Age:</strong>{" "}
//                       <span className="text-muted">{student.age || "N/A"}</span>
//                     </Card.Text>
//                     <Card.Text className="mb-2">
//                       🏠 <strong>Address:</strong>{" "}
//                       <span className="text-muted">
//                         {student.address || "N/A"}
//                       </span>
//                     </Card.Text>
//                     <Card.Text className="mb-2">
//                       📞 <strong>Phone:</strong>{" "}
//                       <span className="text-muted">
//                         {student.phonenumber || "Not Provided"}
//                       </span>
//                     </Card.Text>

//                     {/* Buttons */}
//                     <div className="d-flex justify-content-between mt-auto gap-2">
//                       <Button
//                         variant="outline-info"
//                         size="sm"
//                         className="rounded-pill px-3"
//                         onClick={() => handleView(student.id)}
//                       >
//                         👁 View
//                       </Button>
//                       <Button
//                         variant="outline-success"
//                         size="sm"
//                         className="rounded-pill px-3"
//                         onClick={() => handleEdit(student.id)}
//                       >
//                         ✏ Edit
//                       </Button>
//                       <Button
//                         variant="outline-danger"
//                         size="sm"
//                         className="rounded-pill px-3"
//                         onClick={() => handleDelete(student.id)}
//                       >
//                         🗑 Delete
//                       </Button>
//                     </div>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>

//           {/* Pagination */}
//           {totalPages > 1 && (
//             <div className="d-flex justify-content-center mt-5">
//               <Pagination className="shadow-sm rounded-pill">
//                 {Array.from({ length: totalPages }, (_, i) => (
//                   <Pagination.Item
//                     key={i + 1}
//                     active={i + 1 === currentPage}
//                     onClick={() => setCurrentPage(i + 1)}
//                   >
//                     {i + 1}
//                   </Pagination.Item>
//                 ))}
//               </Pagination>
//             </div>
//           )}
//         </>
//       )}

//       {/* Extra Styling */}
//       <style>{`
//         .gradient-heading {
//           font-size: 2.5rem;
//           background: linear-gradient(90deg, #ff6a00, #ee0979);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           letter-spacing: 1px;
//           text-transform: uppercase;
//         }

//         .glass-card {
//           border-radius: 20px;
//           backdrop-filter: blur(12px);
//           background: rgba(255, 255, 255, 0.8);
//           transition: all 0.3s ease-in-out;
//         }
//         .glass-card:hover {
//           transform: translateY(-8px) scale(1.03);
//           box-shadow: 0px 12px 30px rgba(0,0,0,0.25);
//         }

//         .image-wrapper {
//           overflow: hidden;
//           border-radius: 20px 20px 0 0;
//         }
//         .image-wrapper img {
//           height: 200px;
//           width: 100%;
//           object-fit: cover;
//           transition: transform 0.4s ease;
//         }
//         .image-wrapper img:hover {
//           transform: scale(1.1);
//         }
//       `}</style>
//     </Container>
//   );
// };

// export default Home;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBlogAsync, getBlogsAsync } from "../Services/Actions/blogAction";
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  Spinner,
  Pagination,
  Form,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const BlogHome = ({ searchTerm = "" }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { blogs = [], isLoading: loading } = useSelector(
    (state) => state.blog || {}
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");
  const itemsPerPage = 4;

  // Fetch blogs on mount
  useEffect(() => {
    dispatch(getBlogsAsync());
  }, [dispatch]);

  const handleView = (id) => navigate(`/blogs/view/${id}`);
  const handleEdit = (id) => navigate(`/edit-blog/${id}`);
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      dispatch(deleteBlogAsync(id));
    }
  };

  // Filter blogs
  const filteredBlogs = blogs.filter((blog) => {
    return (
      blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.author?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.date?.toString().includes(searchTerm)
    );
  });

  // Sort blogs
  const sortedBlogs = [...filteredBlogs].sort((a, b) => {
    let valA = a[sortField]?.toString().toLowerCase() || "";
    let valB = b[sortField]?.toString().toLowerCase() || "";
    if (valA < valB) return sortOrder === "asc" ? -1 : 1;
    if (valA > valB) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  const totalPages = Math.ceil(sortedBlogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedBlogs = sortedBlogs.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Container className="mt-5">
      <h2 className="text-center fw-bold mb-5 gradient-heading">
        📝 Blog Management Dashboard
      </h2>

      {/* Sorting */}
      <Row className="mb-4">
        <Col md={6}>
          <Form.Group>
            <Form.Label className="fw-semibold text-muted">Sort By</Form.Label>
            <Form.Select
              value={sortField}
              onChange={(e) => setSortField(e.target.value)}
              className="shadow-sm rounded-pill"
            >
              <option value="title">Title</option>
              <option value="author">Author</option>
              <option value="category">Category</option>
              <option value="date">Date</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label className="fw-semibold text-muted">Order</Form.Label>
            <Form.Select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="shadow-sm rounded-pill"
            >
              <option value="asc">🔼 Ascending</option>
              <option value="desc">🔽 Descending</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      {/* Blog Cards */}
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : paginatedBlogs.length === 0 ? (
        <p className="text-center text-muted">No blogs found.</p>
      ) : (
        <>
          <Row xs={1} sm={2} md={2} lg={3} className="g-4">
            {paginatedBlogs.map((blog, index) => (
              <Col key={blog.id}>
                <Card className="glass-card h-100 shadow-lg border-0">
                  {blog.image && (
                    <div className="image-wrapper">
                      <Card.Img
                        variant="top"
                        src={blog.image}
                        alt={blog.title}
                        style={{ height: "180px", objectFit: "cover" }}
                      />
                    </div>
                  )}
                  <Card.Header
                    className="text-white fw-bold text-center fs-5"
                    style={{
                      background: `linear-gradient(135deg, ${
                        [
                          "#6a11cb, #2575fc",
                          "#11998e, #38ef7d",
                          "#ff6a00, #ee0979",
                          "#00c6ff, #0072ff",
                        ][index % 4]
                      })`,
                      borderRadius: "0",
                    }}
                  >
                    {blog.title}
                  </Card.Header>
                  <Card.Body className="d-flex flex-column p-4">
                    <Card.Text className="mb-2">
                      ✍️ <strong>Author:</strong> {blog.author || "N/A"}
                    </Card.Text>
                    <Card.Text className="mb-2">
                      📂 <strong>Category:</strong> {blog.category || "N/A"}
                    </Card.Text>
                    <Card.Text className="mb-2">
                      📅 <strong>Date:</strong> {blog.date || "N/A"}
                    </Card.Text>
                    <Card.Text className="mb-2">
                      📝 <strong>Content:</strong>{" "}
                      {blog.content?.slice(0, 80) || "No content"}...
                    </Card.Text>

                    <div className="d-flex justify-content-between mt-auto gap-2">
                      <Button
                        variant="outline-info"
                        size="sm"
                        className="rounded-pill px-3"
                        onClick={() => handleView(blog.id)}
                      >
                        👁 View
                      </Button>
                      <Button
                        variant="outline-success"
                        size="sm"
                        className="rounded-pill px-3"
                        onClick={() => handleEdit(blog.id)}
                      >
                        ✏ Edit
                      </Button>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        className="rounded-pill px-3"
                        onClick={() => handleDelete(blog.id)}
                      >
                        🗑 Delete
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="d-flex justify-content-center mt-4">
              <Pagination>
                {Array.from({ length: totalPages }, (_, i) => (
                  <Pagination.Item
                    key={i + 1}
                    active={i + 1 === currentPage}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </Pagination.Item>
                ))}
              </Pagination>
            </div>
          )}
        </>
      )}

      {/* Extra Styling */}
      <style>{`
        .gradient-heading {
          font-size: 2.5rem;
          background: linear-gradient(90deg, #ff6a00, #ee0979);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .glass-card {
          border-radius: 20px;
          backdrop-filter: blur(12px);
          background: rgba(255, 255, 255, 0.8);
          transition: all 0.3s ease-in-out;
        }
        .glass-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0px 12px 30px rgba(0,0,0,0.25);
        }
        .image-wrapper {
          overflow: hidden;
          border-radius: 20px 20px 0 0;
        }
        .image-wrapper img {
          width: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .image-wrapper img:hover {
          transform: scale(1.1);
        }
      `}</style>
    </Container>
  );
};

export default BlogHome;
