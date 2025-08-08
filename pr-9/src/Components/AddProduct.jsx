import { Button, Col, Container, Form, Row, Card } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import generateUniqueId from "generate-unique-id";
import { useDispatch } from "react-redux";
import { addProduct } from "../Services/Actions/productAction";

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialState = {
    id: "",
    productName: "",
    desc: "",
    unit: "",
    price: "",
    category: "",
    image: "",
    offer: "",
    deliveryTime: "",
  };

  const [inputForm, setInputForm] = useState(initialState);

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = generateUniqueId({ length: 6, useLetters: false });
    inputForm.id = id;
    dispatch(addProduct(inputForm));
    navigate("/");
  };

  return (
    <Container style={{ maxWidth: "720px", marginTop: "50px" }}>
      <Card className="shadow p-4 border-0 rounded-4" style={{
          maxWidth: "750px",
          background: "linear-gradient(to right, #e18ee8ff, #dbb7ceff)",
          borderRadius: "16px",
        }}>
        <h2 className="text-center mb-4 fw-bold text-success">🛒 Add Product</h2>

        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={12} className="mb-3">
              <Form.Label className="fw-semibold">Product Name</Form.Label>
              <Form.Control
                type="text"
                name="productName"
                placeholder=" Fresh things"
                value={inputForm.productName}
                onChange={handleChanged}
                required
              />
            </Col>


            <Col md={12} className="mb-3">
              <Form.Label className="fw-semibold">Description</Form.Label>
              <Form.Control
                type="text"
                name="desc"
                placeholder=" Juicy & Sweet"
                value={inputForm.desc}
                onChange={handleChanged}
                required
              />
            </Col>

          

            <Col md={6} className="mb-3">
              <Form.Label className="fw-semibold">Unit</Form.Label>
              <Form.Control
                type="text"
                name="unit"
                placeholder="500g, 1L"
                value={inputForm.unit}
                onChange={handleChanged}
                required
              />
            </Col>

            <Col md={12} className="mb-3">
              <Form.Label className="fw-semibold">Category</Form.Label>
              <Form.Select
                name="category"
                value={inputForm.category}
                onChange={handleChanged}
                required
              >
                <option value="" disabled hidden>Select a category</option>
                <option value="paan">Paan</option>
                <option value="dairy">Dairy</option>
                <option value="fruits">Fruits</option>
                <option value="drinks">Drinks</option>
                <option value="snacks">Snacks</option>
                <option value="breakfast">Breakfast</option>
                <option value="sweet">Sweet</option>
                <option value="bakery">Bakery</option>
                <option value="tea">Tea</option>
                <option value="atta">Atta</option>
                <option value="masala">Masala</option>
                <option value="sauces">Sauces</option>
                <option value="meat">Meat</option>
                <option value="organic">Organic</option>
                <option value="baby">Baby</option>
                <option value="pharma">Pharma</option>
                <option value="cleaning">Cleaning</option>
                <option value="home">Home</option>
                <option value="personal">Personal</option>
                <option value="pet">Pet</option>
              </Form.Select>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Label className="fw-semibold">Delivery Time</Form.Label>
              <Form.Control
                type="text"
                name="deliveryTime"
                placeholder=" 15 mins"
                value={inputForm.deliveryTime}
                onChange={handleChanged}
              />
            </Col>

            <Col md={6} className="mb-3">
              <Form.Label className="fw-semibold">Offer (%)</Form.Label>
              <Form.Control
                type="text"
                name="offer"
                placeholder=" 20% off"
                value={inputForm.offer}
                onChange={handleChanged}
              />
            </Col>

          

            <Col md={12} className="mb-3">
              <Form.Label className="fw-semibold">Image URL</Form.Label>
              <Form.Control
                type="text"
                name="image"
                placeholder="Paste a valid image URL"
                value={inputForm.image}
                onChange={handleChanged}
                required
              />
            </Col>
          </Row>

          <div className="d-grid mt-4">
            <Button
              type="submit"
              size="lg"
              style={{
                color:"black",
                backgroundColor: "#ecdaedff",
                border: "none",
                fontWeight: "bold",
                letterSpacing: "1px",
              }}
            >
              Add Product
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default AddProduct;