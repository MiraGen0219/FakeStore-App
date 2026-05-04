import { useState } from "react";
import { Container, Form, Button, Card, Alert, Spinner } from "react-bootstrap";

function AddProduct() {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProduct((previousProduct) => ({
      ...previousProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitting(true);
    setSuccessMessage("");
    setError("");

    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to create product.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Created product:", data);

        setSuccessMessage("Product created successfully!");

        setProduct({
          title: "",
          price: "",
          description: "",
          category: "",
        });
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Container className="py-5">
      <Card className="shadow-sm p-4">
        <h2 className="text-center mb-4">Add New Product</h2>

        {successMessage && (
          <Alert variant="success">{successMessage}</Alert>
        )}

        {error && (
          <Alert variant="danger">{error}</Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="productTitle">
            <Form.Label>Product Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={product.title}
              onChange={handleChange}
              placeholder="Enter product title"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="productPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              placeholder="Enter price"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="productDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="description"
              value={product.description}
              onChange={handleChange}
              placeholder="Enter product description"
              required
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="productCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              name="category"
              value={product.category}
              onChange={handleChange}
              placeholder="Enter category"
              required
            />
          </Form.Group>

          <Button type="submit" variant="primary" disabled={submitting}>
            {submitting ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  className="me-2"
                />
                Creating...
              </>
            ) : (
              "Create Product"
            )}
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default AddProduct;