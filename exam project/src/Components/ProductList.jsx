import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions/postActions';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';

const PostList = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Row>
      {posts.map(post => (
        <Col md={4} key={post.id} className="mb-4">
          <Card>
            <Card.Img variant="top" src={post.image} />
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.description.substring(0, 80)}...</Card.Text>
              <Button as={Link} to={`/post/${post.id}`} variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default PostList;
