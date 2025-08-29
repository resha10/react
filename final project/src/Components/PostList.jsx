import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../Services/Actions/postAction";
import { Card, Button, Row, Col } from "react-bootstrap";

function PostList() {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <h3>Loading...</h3>;

  return (
    <Row>
      {posts.map((post) => (
        <Col md={4} key={post.id} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.content}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default PostList;
