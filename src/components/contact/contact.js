import ContactForm from "./contactForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function Contact() {
  return (
    <>
      <Container className="contact">
        <Row className="contact contact-info">
          <Col>
            <h1>Contact us</h1>
            <p>
              If you have any questions or queries a member of staff will always
              be happy to help. Feel free to contact us by telephone or email
              and we will be sure to get back to you as soon as possible.
            </p>
            <div className="contact-details">
              <p>
                <i className="fas fa-phone-alt"></i> (+47) 456 99 789
              </p>
              <p>
                <i className="fas fa-envelope"></i> support@holidaze.com
              </p>
              <p>
                <i className="fas fa-map-marker-alt"></i> Holidaze Inc, 1234 Bergen
              </p>
            </div>
          </Col>
          <Col>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </>
  );
}
