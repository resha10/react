import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Alert, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerAsync } from "../../Services/Actions/userAction";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { error, isCreated } = useSelector((state) => state.userReducer || {});

  const [inputForm, setInputForm] = useState({
    email: "",
    password: "",
    cpass: "",
  });
  const [formError, setFormError] = useState("");

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });
    if (formError) setFormError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputForm.email || !inputForm.password || !inputForm.cpass) {
      setFormError("All fields are required");
      return;
    }
    if (inputForm.password !== inputForm.cpass) {
      setFormError("Passwords do not match");
      return;
    }

    setFormError("");
    dispatch(registerAsync(inputForm));
  };

  useEffect(() => {
    if (isCreated) {
      navigate("/signIn");
    }
  }, [isCreated, navigate]);

  return (
   <div
  style={{
    minHeight: "100vh",
    background: "linear-gradient(135deg, #eaecf4ff, #fdfbffff)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  }}
>
  <Container>
    <Row className="justify-content-center">
      <Col md={6} lg={5}>
        <Card
          className="p-5 shadow-lg border-0"
          style={{
            borderRadius: "20px",
            background: "rgba(167, 150, 236, 0.67)",
            backdropFilter: "blur(14px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            color: "#9879e4ff",
            boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.boxShadow =
              "0 12px 45px rgba(0,0,0,0.6)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 10px 40px rgba(0,0,0,0.3)";
          }}
        >
          {/* Title */}
          <h2
            className="text-center mb-2 fw-bold"
            style={{
              color: "#121213ff",
              fontSize: "2rem",
              letterSpacing: "1px",
            }}
          >
            Create an Account
          </h2>
          <p
            className="text-center mb-4"
            style={{ fontSize: "14px", color: "#0d0d0dff" }}
          >
            Sign up to get started
          </p>

          {formError && <Alert variant="warning">{formError}</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}

          {/* Form */}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "500", color: "#070707ff" }}>
                Email Address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={inputForm.email}
                onChange={handleChanged}
                className="p-3 rounded-3"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "#1a1919ff",
                  transition: "all 0.3s ease",
                }}
                onFocus={(e) => {
                  e.target.style.border = "1px solid #56a4e0ff";
                  e.target.style.boxShadow = "0 0 10px #94a4ecff";
                }}
                onBlur={(e) => {
                  e.target.style.border = "1px solid rgba(255,255,255,0.3)";
                  e.target.style.boxShadow = "none";
                }}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "500", color: "#1b1a1aff" }}>
                Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                value={inputForm.password}
                onChange={handleChanged}
                className="p-3 rounded-3"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "#141313ff",
                  transition: "all 0.3s ease",
                }}
                onFocus={(e) => {
                  e.target.style.border = "1px solid #667eea";
                  e.target.style.boxShadow = "0 0 10px #667eea";
                }}
                onBlur={(e) => {
                  e.target.style.border = "1px solid rgba(255,255,255,0.3)";
                  e.target.style.boxShadow = "none";
                }}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label style={{ fontWeight: "500", color: "#1b1a1aff" }}>
                Confirm Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                name="cpass"
                value={inputForm.cpass}
                onChange={handleChanged}
                className="p-3 rounded-3"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "#141313ff",
                  transition: "all 0.3s ease",
                }}
                onFocus={(e) => {
                  e.target.style.border = "1px solid #667eea";
                  e.target.style.boxShadow = "0 0 10px #667eea";
                }}
                onBlur={(e) => {
                  e.target.style.border = "1px solid rgba(255,255,255,0.3)";
                  e.target.style.boxShadow = "none";
                }}
                required
              />
            </Form.Group>

            <Button
              type="submit"
              className="w-100 py-2 fw-bold"
              style={{
                background: "linear-gradient(90deg, #9583faff, #7352dcff)",
                border: "none",
                color: "black",
                borderRadius: "12px",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(118,75,162,0.4)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(142, 110, 174, 0.6)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(142, 110, 174, 0.6)";
              }}
            >
              Sign Up
            </Button>
          </Form>

          {/* Footer */}
          <div className="mt-4 text-center">
            <span style={{ color: "#1b1b1cff" }}>Already have an account? </span>
            <Link
              to="/signIn"
              className="fw-bold"
              style={{ color: "#2c2c30ff", textDecoration: "none" }}
            >
              Sign In
            </Link>
          </div>
        </Card>
      </Col>
    </Row>
  </Container>
</div>

  );
};

export default SignUp;
