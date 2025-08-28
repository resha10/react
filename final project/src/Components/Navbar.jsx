// // import { Link } from "react-router-dom";
// // import { useDispatch, useSelector } from "react-redux";

// // export default function Navbar() {
// //   const dispatch = useDispatch();
// //   const { isAuth } = useSelector(state => state.auth);

// //   return (
// //     <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
// //       <Link className="navbar-brand" to="/">BlogApp</Link>
// //       <div className="navbar-nav">
// //         <Link className="nav-link" to="/">Posts</Link>
// //         {isAuth && <Link className="nav-link" to="/add">Add Post</Link>}
// //         {isAuth ? (
// //           <button className="btn btn-danger btn-sm ms-2" onClick={() => dispatch({type:"LOGOUT"})}>Logout</button>
// //         ) : (
// //           <Link className="nav-link" to="/login">Login</Link>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // }



// // src/Components/BlogNavbar.jsx
// import React from "react";
// import { Navbar, Container, Nav, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

// const BlogNavbar = () => {
//   return (
//     <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
//       <Container className="d-flex justify-content-between">
//         {/* Logo */}
//         <Navbar.Brand as={Link} to="/" className="fw-bold text-danger">
//           BLOG<span className="text-white">TYRANT</span>
//         </Navbar.Brand>

//         {/* Menu items */}
//         <Nav className="mx-auto gap-4 fw-semibold">
//           <Nav.Link as={Link} to="/who" className="text-white">
//             WHO?
//           </Nav.Link>
//           <Nav.Link as={Link} to="/updates" className="text-white">
//             UPDATES
//           </Nav.Link>
//           <Nav.Link as={Link} to="/tools" className="text-white">
//             TOOLS
//           </Nav.Link>
//           <Nav.Link as={Link} to="/best-of" className="text-white">
//             BEST OF
//           </Nav.Link>
//           <Nav.Link as={Link} to="/the-blog" className="text-white">
//             THE BLOG
//           </Nav.Link>
//         </Nav>

//         {/* Right side button */}
//         <Button
//           as={Link}
//           to="/add-blog"
//           style={{
//             backgroundColor: "#000",
//             border: "2px solid #ffc107",
//             color: "#ffc107",
//             fontWeight: "600",
//           }}
//         >
//           ⭐ STARTING A NEW BLOG?
//         </Button>
//       </Container>
//     </Navbar>
//   );
// };
// export default BlogNavbar;


import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Services/Actions/authActions';

export default function Navbar() {
  const { isAuthenticated, user } = useSelector(s => s.auth);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    nav('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">BlogApp</Link>

        <div className="ms-auto navbar-nav">
          <Link className="nav-link" to="/">Home</Link>
          {isAuthenticated && <Link className="nav-link" to="/add">Add Post</Link>}
          {!isAuthenticated ? (
            <Link className="nav-link" to="/login">Sign In</Link>
          ) : (
            <>
              <span className="navbar-text text-white me-2">Hi, {user.username}</span>
              <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>Sign Out</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
