import { useState } from "react";
import "./Feedback.css";

const Feedback = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    rating: "",
    review: "",
  });

  const [formError, setFormError] = useState({});
  const [submissions, setSubmissions] = useState([]);
  const [successMessage, setSuccessMessage] = useState(""); 

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let errors = {};
    if (formData.username === "") {
      errors.username = "Username is required.";
    } else if (formData.username.length < 5) {
      errors.username = "Username must be at least 5 characters.";
    }

    if (formData.email === "") {
      errors.email = "Email is required.";
    }

    if (formData.rating === "") {
      errors.rating = "Rating is required.";
    }

    if (formData.review === "") {
      errors.review = "Review is required.";
    }

    setFormError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmissions([...submissions, formData]);
      setFormData({
        username: "",
        email: "",
        rating: "",
        review: "",
      });
      setFormError({});
      setSuccessMessage("Form submitted successfully! ✅");

      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  return (
        <>
          <form onSubmit={handleSubmit}>
      <h1>Feedback & Review Form</h1>

      <label>Username: </label>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChanged}
      />
      <p style={{ color: "red" }}>{formError.username}</p>

      <label>Email:</label>
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChanged}
      />
      <p style={{ color: "red" }}>{formError.email}</p>

      <label>Rating:</label>
      <select
        name="rating"
        value={formData.rating}
        onChange={handleChanged}
      >
        <option value="">Select Rating</option>
        <option value="1">1 - Poor</option>
        <option value="2">2 - Fair</option>
        <option value="3">3 - Good</option>
        <option value="4">4 - Very Good</option>
        <option value="5">5 - Excellent</option>
      </select>
      <p style={{ color: "red" }}>{formError.rating}</p>

      <label>Review:</label>
      <input
        type="text"
        name="review"
        value={formData.review}
        onChange={handleChanged}
      />
      <p style={{ color: "red" }}>{formError.review}</p>

      <button type="submit" style={{ marginTop: "10px", padding: "8px 16px" }}>
        Submit
      </button>

      {successMessage && (
        <p style={{ color: "green", fontWeight: "bold", marginTop: "10px" }}>
          {successMessage}
        </p>
      )}
    </form>


      <div style={{ marginTop: "30px" }}>
        <h2 style={{ color: "black" }}>Submitted Feedback</h2>
        {submissions.map((entry, index) => (
          <div
            key={index}
            style={{
              border: "2px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "10px",
              background: "plum",
            }}
          >
            <p>Username: {entry.username}</p>
            <p>Email: {entry.email}</p>
            <p>Rating: {entry.rating}</p>
            <p>Review: {entry.review}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Feedback;


