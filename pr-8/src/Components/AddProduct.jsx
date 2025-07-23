import generateUniqueId from "generate-unique-id";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { getStorageData, setStorageData } from "../Services/Service";

const AddProduct = () => {
  const navigate = useNavigate();
  const initialState = {
    productName: "",
    price: "",
    delivery: "",
    image: "",
    offers: "",
    category: "",
  };

  const [inputForm, setInputForm] = useState(initialState);

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = generateUniqueId({ length: 6, useLetters: false });
    inputForm.id = id;
    let data = getStorageData();
    data.push(inputForm);
    setStorageData(data);
    navigate("/");
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <div
        style={{
          borderRadius: "1rem",
          padding: "35px",
          maxWidth: "920px",
          width: "100%",
          background: "linear-gradient(to bottom right, #f47babff, #ffe3ec)",
          boxShadow: "0 12px 30px rgba(255, 105, 180, 0.2)",
          fontFamily: "'Segoe UI', sans-serif",
        }}
      >
        <h2
          className="text-center mb-4"
          style={{ color: "#981255ff", fontWeight: "700" }}
        >
           Add Nykaa Product
        </h2>

        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col>
              <Form.Label style={{ color: "#f5399dff" }}>Product Name *</Form.Label>
              <Form.Control
                className="squre-pill shadow-sm"
                type="text"
                placeholder="Enter product name"
                name="productName"
                value={inputForm.productName}
                onChange={handleChanged}
                required
              />
            </Col>
            <Col>
              <Form.Label style={{ color: "#f5399dff" }}>Price (₹)</Form.Label>
              <Form.Control
                className="squre-pill shadow-sm"
                type="number"
                placeholder="Enter price"
                name="price"
                value={inputForm.price}
                onChange={handleChanged}
                required
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Label style={{ color: "#f5399dff" }}>Description *</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="product description"
                name="desc"
                value={inputForm.desc}
                onChange={handleChanged}
                required
                style={{ borderRadius: "1rem", boxShadow: "0 0 6px #f8bbd0" }}
              />
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label style={{ color: "#f5399dff" }}>Category</Form.Label>
            <Form.Select
              name="category"
              value={inputForm.category}
              onChange={handleChanged}
              className="squre-pill shadow-sm"
              required
            >
              <option value="" disabled hidden>Select Category</option>
              <option value="makeup">Makeup</option>
              <option value="skin">Skin</option>
              <option value="hair">Hair</option>
              <option value="appliances">Appliances</option>
              <option value="Bath & Body">Bath & Body</option>
              <option value="Natural">Natural</option>
              <option value="mom & baby">Mom & Baby</option>
              <option value="Health & Wellness">Health & Wellness</option>
              <option value="men">Men</option>
              <option value="fragrance">Fragrance</option>
              <option value="Lingerie & Accessories">Lingerie & Accessories</option>
            </Form.Select>
          </Form.Group>

          <Row className="mb-3">
            <Col>
              <Form.Label style={{ color: "#f5399dff" }}>Offers</Form.Label>
              <Form.Control
                className="squre-pill shadow-sm"
                type="text"
               placeholder="offers"
                name="offers"
                value={inputForm.offers}
                onChange={handleChanged}
              />
            </Col>
          </Row>

           <Row className="mb-3">
            <Col>
              <Form.Label style={{ color:"#f5399dff"}}>Image URL *</Form.Label>
              <Form.Control
                className="squre-pill shadow-sm"
                type="text"
                placeholder="url"
                name="image"
                value={inputForm.image}
                onChange={handleChanged}
                required
              />
            </Col>
          </Row>

          <div className="d-flex justify-content-center mt-4">
            <Button
              type="submit"
              style={{
                backgroundColor: "#f5399dff",
                border: "none",
                padding: "0.6rem 2rem",
                borderRadius: "50px",
                fontWeight: "bold",
                fontSize: "19px",
              }}
            >
              🛒 Add To Bag
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default AddProduct;
