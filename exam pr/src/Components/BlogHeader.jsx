// import { Navbar, Container, Nav, Button } from "react-bootstrap";
// import logo from "../assets/images/logo.jpg";
// import { Link } from "react-router-dom";

// const BlogHeader = () => {
//   return (
//     <Navbar
//       expand="lg"
//       fixed="top"
//       style={{ background: "#000", padding: "10px 0" }}
//     >
//       <Container style={{ maxWidth: "1300px" }}>
//         {/* Logo */}
//         <Link
//           to="/"
//           className="d-flex align-items-center text-decoration-none"
//         >
//           <img src={logo} alt="Logo" style={{ height: "100px" }} />
//         </Link>

//         {/* Mobile Toggle */}
//         <Navbar.Toggle
//           aria-controls="basic-navbar-nav"
//           style={{ backgroundColor: "#fff" }}
//         />
//         <Navbar.Collapse id="basic-navbar-nav">
//           {/* Nav Links */}
//           <Nav className="mx-auto gap-4 text-center">
//             {["WHO?", "UPDATES", "TOOLS", "BEST OF", "THE BLOG"].map(
//               (item, index) => (
//                 <Nav.Link
//                   key={index}
//                   as={Link}
//                   to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
//                   className="fw-bold nav-link-custom"
//                   style={{
//                     color: "#fff",
//                     fontSize: "14px",
//                     textTransform: "uppercase",
//                     letterSpacing: "0.8px",
//                     padding: "8px 0",
//                   }}
//                 >
//                   {item}
//                 </Nav.Link>
//               )
//             )}
//           </Nav>

//           {/* CTA Button */}
//           <Button
//             className="fw-bold cta-btn"
//             style={{
//               fontSize: "12px",
//               backgroundColor: "#000",
//               border: "2px solid #ffc107",
//               color: "#ffc107",
//               borderRadius: "4px",
//               padding: "8px 16px",
//               textTransform: "uppercase",
//             }}
//           >
//             ⭐ Starting a New Blog?
//           </Button>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default BlogHeader;
