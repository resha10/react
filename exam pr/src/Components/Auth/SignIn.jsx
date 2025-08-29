// import React, { useState } from "react";
// import { Button, Card, Container, Form } from "react-bootstrap";
// import { useNavigate, Link } from "react-router-dom";

// const SignIn = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { email, password } = formData;

//     if (!email || !password) {
//       setError("⚠️ Please fill in all fields.");
//       return;
//     }

//     localStorage.setItem("user", JSON.stringify({ email }));
//     setError("");
//     navigate("/");
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "linear-gradient(-45deg, #1d11cbff, #2575fc, #7b7ff3ff, #ee0979)",
//         backgroundSize: "400% 400%",
//         animation: "gradientMove 12s ease infinite",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         padding: "20px",
//       }}
//     >
//       <style>
//         {`
//           @keyframes gradientMove {
//             0% { background-position: 0% 50%; }
//             50% { background-position: 100% 50%; }
//             100% { background-position: 0% 50%; }
//           }

//           .glass-card {
//             backdrop-filter: blur(20px);
//             background: rgba(255, 255, 255, 0.15);
//             border: 1px solid rgba(255, 255, 255, 0.3);
//             box-shadow: 0px 8px 32px rgba(0,0,0,0.25);
//           }

//           .form-control {
//             border-radius: 12px;
//             padding: 14px;
//             background: rgba(255,255,255,0.9);
//             border: none;
//             box-shadow: inset 2px 2px 6px rgba(0,0,0,0.1),
//                         inset -2px -2px 6px rgba(255,255,255,0.6);
//             transition: all 0.3s ease-in-out;
//           }

//           .form-control:focus {
//             box-shadow: 0px 0px 8px rgba(37, 117, 252, 0.6);
//             transform: scale(1.02);
//           }

//           .btn-login {
//             border-radius: 14px;
//             background: linear-gradient(45deg, #2575fc, #6a11cb);
//             border: none;
//             font-weight: 600;
//             padding: 14px;
//             transition: 0.3s;
//             color: #fff;
//             box-shadow: 0px 4px 12px rgba(37, 117, 252, 0.5);
//           }

//           .btn-login:hover {
//             background: linear-gradient(45deg, #6a11cb, #2575fc);
//             box-shadow: 0px 6px 16px rgba(106, 17, 203, 0.6);
//             transform: translateY(-2px);
//           }
//         `}
//       </style>

//       <Container
//         className="d-flex justify-content-center align-items-center"
//         style={{ minHeight: "90vh" }}
//       >
//         <Card
//           style={{ width: "420px", borderRadius: "20px" }}
//           className="p-4 glass-card"
//         >
//           <h2 className="text-center fw-bold mb-2" style={{ color: "#fff" }}>
//             🔐 Welcome Back
//           </h2>
//           <p className="text-center text-light mb-4" style={{ opacity: "0.85" }}>
//             Sign in to continue to your dashboard
//           </p>

//           <Form onSubmit={handleSubmit}>
//             <Form.Group className="mb-3">
//               <Form.Label className="fw-semibold text-white">
//                 Email address
//               </Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter your email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label className="fw-semibold text-white">
//                 Password
//               </Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Enter your password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>

//             {error && (
//               <div className="text-danger mb-3 text-center fw-semibold">
//                 {error}
//               </div>
//             )}

//             <div className="d-grid mb-3">
//               <Button type="submit" className="btn-login">
//                  Login
//               </Button>
//             </div>

//             <div className="text-center mt-3">
//               <span className="text-white">Don’t have an account?</span>{" "}
//               <Link to="/signup" style={{ color: "#ffeb3b", fontWeight: "600" }}>
//                 Sign Up
//               </Link>
//             </div>
//           </Form>
//         </Card>
//       </Container>
//     </div>
//   );
// };

// export default SignIn;


import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    if (!email || !password || !confirmPassword) {
      setError("⚠️ All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("❌ Passwords do not match.");
      return;
    }

    const registeredUser = { email, password };
    localStorage.setItem("registeredUser", JSON.stringify(registeredUser));
    navigate("/signin");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(-45deg, #4facfe, #00f2fe, #ff4b8b, #ff6a95)",
        backgroundSize: "400% 400%",
        animation: "gradientBG 12s ease infinite",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Card
        className="shadow-lg border-0"
        style={{
          width: "420px",
          borderRadius: "20px",
          backdropFilter: "blur(20px)",
          background: "rgba(255, 255, 255, 0.1)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          color: "#fff",
        }}
      >
        <Card.Body className="p-5">
          <h2
            className="text-center fw-bold mb-3"
            style={{ color: "#df197cff", letterSpacing: "1px" }}
          >
            📝 Create Account
          </h2>
          <p className="text-center mb-4" style={{ color: "#d9e7ff" }}>
            Join us and explore the dashboard
          </p>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="rounded-pill px-3 py-2"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "#fff",
                }}
                onFocus={(e) =>
                  (e.target.style.boxShadow = "0 0 12px rgba(30, 129, 215, 0.8)")
                }
                onBlur={(e) => (e.target.style.boxShadow = "none")}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
                className="rounded-pill px-3 py-2"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "#fff",
                }}
                onFocus={(e) =>
                  (e.target.style.boxShadow = "0 0 12px rgba(55, 32, 183, 0.8)")
                }
                onBlur={(e) => (e.target.style.boxShadow = "none")}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                placeholder="Re-enter password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="rounded-pill px-3 py-2"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "#fff",
                }}
                onFocus={(e) =>
                  (e.target.style.boxShadow = "0 0 12px rgba(255,106,149,0.8)")
                }
                onBlur={(e) => (e.target.style.boxShadow = "none")}
              />
            </Form.Group>

            {error && (
              <div
                className="text-warning text-center mb-3"
                style={{ fontSize: "14px", fontWeight: "600" }}
              >
                {error}
              </div>
            )}

            <div className="d-grid mb-3">
              <Button
                type="submit"
                className="fw-bold"
                style={{
                  borderRadius: "30px",
                  padding: "12px 0",
                  background: "linear-gradient(90deg, #7516cdff, #ff4b8b)",
                  border: "none",
                  transition: "0.4s",
                  letterSpacing: "1px",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.background =
                    "linear-gradient(90deg, #ff4b8b, #7516cdff)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.background =
                    "linear-gradient(90deg, #7516cdff, #ff4b8b)")
                }
              >
                Register
              </Button>
            </div>

            <div className="text-center" style={{ color: "#eee" }}>
              Already have an account?{" "}
              <Link
                to="/signin"
                style={{
                  color: "#7516cdff",
                  fontWeight: "700",
                  textDecoration: "none",
                }}
              >
                Sign In
              </Link>
            </div>
          </Form>
        </Card.Body>
      </Card>

 
    </div>
  );
};

export default SignUp;
