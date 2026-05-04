import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Image, Button, Spinner, Alert, Card } from "react-bootstrap";
import ConfirmationModal from "./ConfirmationModal";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

useEffect(() => {
  setLoading(true);
  setError("");

  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((response) => {
        console.log("API RESPONE:", response.data);
      setProduct(response.data);
    })
    .catch(() => {
      setError("Unable to load product. Please try again.");
    })
    .finally(() => {
      setLoading(false);
    });
}, [id]);


  const handleAddToCart = () => {
    alert(`${product.title} added to cart!`);
  };

  const handleDeleteProduct = () => {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete product.");
        }
        return response.json();
      })
      .then(() => {
        setDeleteMessage("Product deleted successfully.");
        setTimeout(() => {
          navigate("/products");
        }, 1500);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" />
        <p className="mt-3">Loading product details...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      {deleteMessage && (
        <Alert variant="success">{deleteMessage}</Alert>
      )}

      <Card className="shadow-sm p-4">
        <Row className="align-items-center">
          <Col md={5} className="text-center mb-4 mb-md-0">
            <Image
              src={product.image}
              alt={product.title}
              fluid
              style={{
                maxHeight: "350px",
                objectFit: "contain",
              }}
            />
          </Col>

          <Col md={7}>
            <h2>{product.title}</h2>

            <p className="text-muted text-capitalize">
              {product.category}
            </p>

            <h4 className="mb-3">${product.price}</h4>

            <p>{product.description}</p>

            <div className="d-flex gap-3 mt-4">
              <Button variant="primary" onClick={handleAddToCart}>
                Add to Cart
              </Button>

              <Button variant="secondary" onClick={() => navigate("/products")}>
                Back to Products
              </Button>

              <Button variant="warning" onClick={() => navigate(`/products/${product.id}/edit`)}>
                Edit Product
              </Button>

              <Button variant="danger" onClick={() => setShowModal(true)}>DELETE product</Button>

              <ConfirmationModal
              showModal={showModal}
              handleCloseModal={()=> setShowModal(false)}
              handleConfirmDelete={handleDeleteProduct}
              productTitle={product.title}
              />
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default ProductDetails;