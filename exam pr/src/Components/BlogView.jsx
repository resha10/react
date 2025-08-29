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
    return <p className="text-center text-danger mt-5">❌ Blog not found!</p>;
  }

  return (
    <Container className="mt-5">
      <Card className="shadow-lg border-0 mx-auto blog-view-card">
        {/* Blog Header with Image */}
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

          {/* Buttons */}
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

      {/* Extra Styling */}
      <style>{`
        .blog-view-card {
          max-width: 750px;
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s ease-in-out;
          background: #fff;
        }
        .blog-view-card:hover {
          transform: translateY(-6px);
          box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2);
        }
        .blog-header {
          background: linear-gradient(135deg, #ff9966, #ff5e62);
          color: white;
          padding: 40px 20px;
          border-bottom-left-radius: 50% 20%;
          border-bottom-right-radius: 50% 20%;
        }
        .blog-image {
          width: 150px;
          height: 150px;
          border-radius: 12px;
          object-fit: cover;
          border: 5px solid #fff;
          box-shadow: 0 6px 15px rgba(0,0,0,0.3);
        }
        .placeholder-img {
          width: 120px;
          height: 120px;
          border-radius: 12px;
          background: rgba(255,255,255,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          border: 5px solid #fff;
        }
        .blog-title {
          font-size: 1.8rem;
          font-weight: bold;
        }
        .blog-author {
          font-size: 1rem;
          color: rgba(255,255,255,0.85);
        }
        .info-row {
          margin-bottom: 15px;
        }
        .blog-content {
          font-size: 1.05rem;
          color: #333;
          line-height: 1.6;
          white-space: pre-line;
        }
        .action-btn {
          padding: 10px 20px;
          border-radius: 12px;
          font-weight: 500;
          transition: 0.3s;
        }
        .action-btn:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </Container>
  );
};

export default BlogView;
