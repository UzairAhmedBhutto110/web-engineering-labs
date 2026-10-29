
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function Hero() {
  const headline = 'Build Your Future with SindhTech';

  return (
    <section className="hero-section" id="home">
      <Container className="text-center">
        <span className="hero-badge">LEARN • GROW • SUCCEED</span>

        <h1 className="hero-title mt-4">{headline}</h1>

        <p className="hero-description mt-3">
          Discover learning resources, prepare for exams, and explore
          career opportunities to take the next step toward your future.
        </p>

        <div className="mt-4">
          <Button size="lg" variant="primary" href="#features">
            Explore Features
          </Button>

          <Button
            size="lg"
            variant="outline-dark"
            href="#about"
            className="ms-2"
          >
            Learn More
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
