import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/products");
  };

  return (
    <Container className="text-center mt-5">
      <h1>Welcome to Our Store 🛍️</h1>
      
      <p className="lead">
        Discover high-quality products curated just for you.
        Browse our collection and find something you’ll love!
      </p>

      <Button 
        variant="primary" 
        size="lg" 
        className="mt-4"
        onClick={handleNavigation}
      >
        Shop
      </Button>
    </Container>
  );
}

export default Home;