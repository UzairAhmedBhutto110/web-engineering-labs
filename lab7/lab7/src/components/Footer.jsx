
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <Container>
        <div className="footer-content">
          <div>
            <a href="#home" className="footer-brand">
              SindhTech
            </a>

            <p className="footer-description" id="about">
              Learn new skills, prepare for exams, and discover
              opportunities for a brighter future.
            </p>
          </div>

          <Nav className="footer-links">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="mailto:hello@example.com">Contact</Nav.Link>
          </Nav>
        </div>

        <hr className="footer-divider" />

        <p className="copyright">
          © {new Date().getFullYear()} SindhTech. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
