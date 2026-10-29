
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const features = [
  {
    number: '01',
    icon: '📚',
    title: 'Learn New Skills',
    description:
      'Explore educational resources and develop practical skills for your future.',
    button: 'Start Learning',
    link: '#about',
  },
  {
    number: '02',
    icon: '🎯',
    title: 'Prepare for Exams',
    description:
      'Strengthen your knowledge with practice questions and focused preparation.',
    button: 'Practice Now',
    link: '#features',
  },
  {
    number: '03',
    icon: '🚀',
    title: 'Explore Careers',
    description:
      'Discover opportunities and take the next step toward your career goals.',
    button: 'Explore More',
    link: '#contact',
  },
];

function Features() {
  return (
    <section className="features-section" id="features">
      <Container>
        <div className="text-center mb-5">
          <span className="section-label">WHAT WE OFFER</span>
          <h2 className="section-title mt-2">Everything You Need to Grow</h2>
          <p className="section-description">
            Useful resources to support your learning and career journey.
          </p>
        </div>

        <Row className="g-4">
          {features.map((feature) => (
            <Col key={feature.number} xs={12} md={4}>
              <Card className="feature-card h-100">
                <Card.Body className="d-flex flex-column p-4">
                  <div className="feature-icon">{feature.icon}</div>

                  <span className="feature-number">{feature.number}</span>

                  <Card.Title className="feature-title">
                    {feature.title}
                  </Card.Title>

                  <Card.Text className="feature-description">
                    {feature.description}
                  </Card.Text>

                  <Button
                    href={feature.link}
                    variant="outline-primary"
                    className="mt-auto align-self-start"
                  >
                    {feature.button} →
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Features;
