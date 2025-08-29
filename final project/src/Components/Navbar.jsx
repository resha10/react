import React from "react";
import { Link } from "react-router-dom";
import { Navbar as BsNavbar, Nav, Container } from "react-bootstrap";

function Navbar() {
  return (
    <BsNavbar bg="dark" variant="dark" expand="lg">
      <Container>
        <BsNavbar.Brand href="/">Blog App</BsNavbar.Brand>
        <Nav className="me-auto">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/add" className="nav-link">Add Post</Link>
          <Link to="/manage" className="nav-link">Manage Posts</Link>
        </Nav>
      </Container>
    </BsNavbar>
  );
}

export default Navbar;
