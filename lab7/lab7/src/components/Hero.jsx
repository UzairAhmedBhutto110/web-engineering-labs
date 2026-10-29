
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function Hero() {
  return (
    <div className="bg-light py-5" id="home">
      <Container className="text-center py-5">
        <h1 className="display-4 fw-bold">
          Build Your Future with SindhTech
        </h1>

        <p className="lead mt-3">
          Discover useful resources, develop new skills, and prepare
          yourself for exciting opportunities.
        </p>

        <Button variant="primary" size="lg" href="#features" className="mt-3">
          Explore Features
        </Button>
      </Container>
    </div>
  );
}

export default Hero;
