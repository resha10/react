import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBlogAsync,
  getAllBlogAsync,
} from "../Services/Actions/blogAction";

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

  const itemsPerPage = 6;

  useEffect(() => {
    dispatch(getAllBlogAsync());
  }, [dispatch]);

  const handleView = (id) => navigate(`/blogs/view/${id}`);
  const handleEdit = (id) => navigate(`/blogs/edit/${id}`);
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      dispatch(deleteBlogAsync(id));
    }
  };

  // Filter & Sort
  const filteredBlogs = blogs.filter((blog) => {
    return (
      blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.author?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.category?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

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
         Blog Dashboard
      </h2>

    
      <Row className="mb-5">
        <Col md={6}>
          <Form.Group>
            <Form.Label className="fw-semibold text-muted">Sort By</Form.Label>
            <Form.Select
              className="shadow-sm rounded-pill"
              value={sortField}
              onChange={(e) => setSortField(e.target.value)}
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
              className="shadow-sm rounded-pill"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="asc">🔼 Ascending</option>
              <option value="desc">🔽 Descending</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

     
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : paginatedBlogs.length === 0 ? (
        <p className="text-center text-muted">No blog posts found.</p>
      ) : (
        <>
          <Row xs={1} sm={2} md={2} lg={3} className="g-4">
            {paginatedBlogs.map((blog, index) => (
              <Col key={blog.id}>
                <Card className="glass-card h-100 shadow-lg border-0">
                  {/* Blog Image */}
                  <div className="image-wrapper">
                    <Card.Img
                      variant="top"
                      src={
                        blog.image ||
                        "https://via.placeholder.com/300x200?text=No+Image"
                      }
                      alt={blog.title}
                    />
                  </div>

                
                  <Card.Header
                    className="text-white fw-bold text-center fs-5"
                    style={{
                      background: `linear-gradient(135deg, ${
                        [
                          "#6a11cb, #2575fc",
                          "#11998e, #38ef7d",
                          "#6249c8ff, #ee0979",
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
                      ✍ <strong>Author:</strong>{" "}
                      <span className="text-muted">{blog.author || "Unknown"}</span>
                    </Card.Text>

                    <Card.Text className="mb-2">
                      📂 <strong>Category:</strong>{" "}
                      <span className="text-muted">{blog.category || "General"}</span>
                    </Card.Text>

                    <Card.Text className="mb-2">
                      📅 <strong>Date:</strong>{" "}
                      <span className="text-muted">{blog.date || "N/A"}</span>
                    </Card.Text>
                    
                    <Card.Text className="mb-3">
                      {blog.excerpt || blog.content?.substring(0, 100) + "..."}
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

       
          {totalPages > 1 && (
            <div className="d-flex justify-content-center mt-5">
              <Pagination className="shadow-sm rounded-pill">
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
    </Container>
  );
};

export default BlogHome;
