// import { useEffect, useState } from "react";
// import { Button, Col, Container, Form, Row, Alert, Card } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router";
// import { signInAsync, signInWithGoogleAsync } from "../../Services/Actions/userAction";

// const SignIn = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { user, error } = useSelector((state) => state.userReducer);

//   const [inputForm, setInputForm] = useState({ email: "", password: "" });
//   const [validationError, setValidationError] = useState("");

//   const handleChanged = (e) => {
//     const { name, value } = e.target;
//     setInputForm({ ...inputForm, [name]: value });
//     if (validationError) setValidationError("");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!inputForm.email || !inputForm.password) {
//       setValidationError("Please fill all fields");
//       return;
//     }
//     dispatch(signInAsync(inputForm));
//   };

//   const handleGoogleLogin = () => {
//     dispatch(signInWithGoogleAsync());
//   };

//   useEffect(() => {
//     if (user) navigate("/");
//   }, [user, navigate]);

//   return (
//    <div
//   style={{
//     minHeight: "100vh",
//     background: "linear-gradient(135deg, #eaecf4ff, #fdfbffff)",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: "20px",
//   }}
// >
//   <Container>
//     <Row className="justify-content-center">
//       <Col md={6} lg={5}>
//         <Card
//           className="p-5 shadow-lg border-0"
//           style={{
//             borderRadius: "20px",
//             background: "rgba(167, 150, 236, 0.67)",
//             backdropFilter: "blur(14px)",
//             border: "1px solid rgba(255, 255, 255, 0.2)",
//             color: "#9879e4ff",
//             boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
//             transition: "transform 0.3s ease, box-shadow 0.3s ease",
//           }}
//           onMouseOver={(e) => {
//             e.currentTarget.style.transform = "translateY(-8px)";
//             e.currentTarget.style.boxShadow =
//               "0 12px 45px rgba(0,0,0,0.6)";
//           }}
//           onMouseOut={(e) => {
//             e.currentTarget.style.transform = "translateY(0)";
//             e.currentTarget.style.boxShadow =
//               "0 10px 40px rgba(0,0,0,0.3)";
//           }}
//         >
//           {/* Title */}
//           <h2
//             className="text-center mb-2 fw-bold"
//             style={{
//               color: "#121213ff",
//               fontSize: "2rem",
//               letterSpacing: "1px",
//             }}
//           >
//             Sign In
//           </h2>
//           <p
//             className="text-center mb-4"
//             style={{ fontSize: "14px", color: "#0d0d0dff" }}
//           >
//             Welcome back! Please login to continue
//           </p>

//           {error && <Alert variant="danger">{error}</Alert>}
//           {validationError && <Alert variant="warning">{validationError}</Alert>}

//           {/* Form */}
//           <Form onSubmit={handleSubmit}>
//             <Form.Group className="mb-3">
//               <Form.Label style={{ fontWeight: "500", color: "#070707ff" }}>
//                 Email Address
//               </Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter your email"
//                 name="email"
//                 value={inputForm.email}
//                 onChange={handleChanged}
//                 className="p-3 rounded-3"
//                 style={{
//                   background: "rgba(255,255,255,0.1)",
//                   border: "1px solid rgba(255,255,255,0.3)",
//                   color: "#1a1919ff",
//                   transition: "all 0.3s ease",
//                 }}
//                 onFocus={(e) => {
//                   e.target.style.border = "1px solid #56a4e0ff";
//                   e.target.style.boxShadow = "0 0 10px #94a4ecff";
//                 }}
//                 onBlur={(e) => {
//                   e.target.style.border = "1px solid rgba(255,255,255,0.3)";
//                   e.target.style.boxShadow = "none";
//                 }}
//                 required
//               />
//             </Form.Group>

//             <Form.Group className="mb-4">
//               <Form.Label style={{ fontWeight: "500", color: "#1b1a1aff" }}>
//                 Password
//               </Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Enter your password"
//                 name="password"
//                 value={inputForm.password}
//                 onChange={handleChanged}
//                 className="p-3 rounded-3"
//                 style={{
//                   background: "rgba(255,255,255,0.1)",
//                   border: "1px solid rgba(255,255,255,0.3)",
//                   color: "#141313ff",
//                   transition: "all 0.3s ease",
//                 }}
//                 onFocus={(e) => {
//                   e.target.style.border = "1px solid #667eea";
//                   e.target.style.boxShadow = "0 0 10px #667eea";
//                 }}
//                 onBlur={(e) => {
//                   e.target.style.border = "1px solid rgba(255,255,255,0.3)";
//                   e.target.style.boxShadow = "none";
//                 }}
//                 required
//               />
//             </Form.Group>

//             <Button
//               type="submit"
//               className="w-100 py-2 fw-bold"
//               style={{
//               background: "linear-gradient(90deg, #9583faff, #7352dcff)",
//                 border: "none",
//                 color:"black",
//                 borderRadius: "12px",
//                 transition: "all 0.3s ease",
//                 boxShadow: "0 4px 15px rgba(118,75,162,0.4)",
//               }}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.transform = "scale(1.05)";
//                 e.currentTarget.style.boxShadow =
//                   "0 6px 20px rgba(142, 110, 174, 0.6)";
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.transform = "scale(1)";
//                 e.currentTarget.style.boxShadow =
//                   "0 6px 20px rgba(142, 110, 174, 0.6)";
//               }}
//             >
//               Login
//             </Button>
//           </Form>

//           {/* Divider */}
//           <div className="text-center my-3" style={{ color: "#0d0c0cff" }}>
//             — OR —
//           </div>

//           {/* Google Login */}
//           <Button
//             onClick={handleGoogleLogin}
//             className="w-100 py-2 fw-bold"
//             style={{
//               background: "linear-gradient(90deg, #9583faff, #7352dcff)",
//               border: "none",
//               borderRadius: "12px",
//               transition: "all 0.3s ease",
//               boxShadow: "0 4px 15px rgba(159, 160, 162, 0.86)",
//               color: "#111111ff",
//             }}
//             onMouseOver={(e) => {
//               e.currentTarget.style.transform = "scale(1.05)";
//               e.currentTarget.style.boxShadow =
//                 "0 6px 20px rgba(131, 135, 143, 0.93)";
//             }}
//             onMouseOut={(e) => {
//               e.currentTarget.style.transform = "scale(1)";
//               e.currentTarget.style.boxShadow =
//                 "0 6px 20px rgba(174, 181, 193, 0.6)";
//             }}
//           >
//             <i className="bi bi-google me-2"></i> Sign in with Google
//           </Button>

      
//           <div className="text-center mt-4">
//             <span style={{ color: "#1b1b1cff" }}>Don't have an account? </span>
//             <Link
//               to="/signup"
//               className="fw-bold"
//               style={{ color: "#2c2c30ff", textDecoration: "none" }}
//             >
//               Create one
//             </Link>
//           </div>
//         </Card>
//       </Col>
//     </Row>
//   </Container>
// </div>

//   );
// };

// export default SignIn;
