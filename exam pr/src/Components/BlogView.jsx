import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  Button,
  Container,
  Spinner,
  Badge,
  Row,
  Col,
} from "react-bootstrap";
// import { getAllBlogAsync } from "../Services/Actions/blogAction";



const BlogView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { blogs = [], isLoading: loading } = useSelector(
    (state) => state.blog || {}
  );

  useEffect(() => {
    if (blogs.length === 0) {
      dispatch(getAllBlogsAsync());
    }
  }, [dispatch, blogs]);

  const blog = blogs.find((b) => b.id === id);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (!blog) {
    return <p className="text-center text-danger mt-5"> Blog not found!</p>;
  }

  return (
    <Container className="mt-5">
      <Card className="shadow-lg border-0 mx-auto blog-view-card">
   
        <div className="blog-header text-center">
          {blog.image ? (
            <img
              src={blog.image}
              alt={blog.title}
              className="blog-image"
            />
          ) : (
            <div className="placeholder-img">📝</div>
          )}
          <h3 className="blog-title mt-3">{blog.title}</h3>
          <p className="blog-author">
            By {blog.author || "Unknown"} |{" "}
            <Badge bg="light" text="dark">
              {blog.category || "General"}
            </Badge>
          </p>
        </div>

        <Card.Body className="p-4">
          <Row className="info-row">
            <Col>
              <p className="blog-content">{blog.content || "No content available."}</p>
            </Col>
          </Row>

     
          <div className="d-flex justify-content-center gap-3 mt-4">
            <Button
              variant="success"
              className="action-btn"
              onClick={() => navigate(`/blogs/edit/${blog.id}`)}
            >
              ✏ Edit
            </Button>
            <Button
              variant="outline-secondary"
              className="action-btn"
              onClick={() => navigate(-1)}
            >
              ⬅ Back
            </Button>
          </div>
        </Card.Body>
      </Card>

    </Container>
  );
};

export default BlogView;
