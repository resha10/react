import { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Card,
  Container,
  Form,
  Pagination,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getStorageData, setStorageData } from "../Services/Service";

const Home = () => {
  const [productData, setProductData] = useState([]);
  const [sortField, setSortField] = useState("productName");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/edit-product/${id}`);
  };

  const handleDelete = (id) => {
    const data = getStorageData();
    const updated = data.filter((product) => product.id !== id);
    setStorageData(updated);
    setProductData(updated);
  };

  const sortData = (data, field, order) => {
    return [...data].sort((a, b) => {
      const aValue = a[field]?.toString().toLowerCase() || "";
      const bValue = b[field]?.toString().toLowerCase() || "";
      if (aValue < bValue) return order === "asc" ? -1 : 1;
      if (aValue > bValue) return order === "asc" ? 1 : -1;
      return 0;
    });
  };

  useEffect(() => {
    const data = getStorageData();
    const sorted = sortData(data, sortField, sortOrder);
    setProductData(sorted);
    setCurrentPage(1); 
  }, [sortField, sortOrder]);


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = productData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(productData.length / itemsPerPage);

  return (
    <Container className="py-4">
      <h2
        className="mb-4 text-center"
        style={{
          color: "#ac1a63ff",
          fontWeight: 700,
          fontFamily: "'Segoe UI', sans-serif",
        }}
      >
         Nykaa Products
      </h2>

      <div className="d-flex justify-content-center mb-4 gap-3">
        <Form.Select
          value={sortField}
          onChange={(e) => setSortField(e.target.value)}
          style={{ maxWidth: 200 }}
        >
          <option value="productName">PRODUCT NAME</option>
          <option value="category">Category</option>
          <option value="price">Price</option>
          <option value="offers">Offers</option>
        </Form.Select>

        <Form.Select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          style={{ maxWidth: 150 }}
        >
          <option value="asc">ASSENDING</option>
          <option value="desc">DESENDING</option>
        </Form.Select>
      </div>

      <div className="row g-4 justify-content-center">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
              <Card
                className="h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "12px",
                  backgroundColor: "#fa99c0ff",
                  transition: "all 0.3s",
                }}
              >
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.productName}
                  style={{
                    height: 200,
                    objectFit: "contain",
                    backgroundColor: "#f74a92ff",
                    borderTopLeftRadius: "9px",
                    borderTopRightRadius: "9px",
                    padding: 24,
                  }}
                />
                <Card.Body className="d-flex flex-column p-3">
                  <h5 className="mb-1" style={{ fontWeight: 600, color: "#787677ff" }}>
                    {product.productName}
                  </h5>

                  <p className="text-muted mb-2 small">{product.desc}</p>
                  <Badge
                    bg="light"
                    text="dark"
                    className="mb-3"
                    style={{
                      fontSize: "0.75rem",
                      padding: "0.4em 0.6em",
                      backgroundColor: "#f079a2ff",
                    }}
                  >
                    {product.category}

                  </Badge>
                  <p className="mb-1" style={{ color: "#534f51ff", fontWeight: 500 }}>
                    ₹{product.price}
                  </p>

                  <p className="text-secondary mb-1" style={{ fontSize: "0.85rem" }}>
                    Offer: <strong style={{ color: "#4d4c4cff" }}>{product.offers || "No current offers"}</strong>
                  </p>

                  <div className="mt-auto d-flex justify-content-between">
                    <Button
                      onClick={() => handleEdit(product.id)}
                      variant="outline-dark"
                      size="sm"
                      style={{
                        borderRadius: "10px",
                        color: "#101010ff",
                        borderColor: "#b20b5eff",
                      }}
                    >
                      ✏️ Edit
                    </Button>
                    <Button
                      onClick={() => handleDelete(product.id)}
                      variant="outline-danger"
                      size="sm"
                      style={{ borderRadius: "10px",
                        color: "#101010ff",
                        borderColor: "#b20b5eff",
                       }}
                    >
                      🗑 Delete
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <p className="text-center text-muted mt-4">No products found.</p>
        )}
      </div>

      {totalPages > 1 && (
        <Pagination className="justify-content-center mt-4" >
          {[...Array(totalPages)].map((_, idx) => (
            <Pagination.Item style={{backgroundColor:"lightpink", color:"pink"
            }}
              key={idx + 1}
              active={idx + 1 === currentPage}
              onClick={() => setCurrentPage(idx + 1)}
            >
              {idx + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      )}
    </Container>
  );
};

export default Home;