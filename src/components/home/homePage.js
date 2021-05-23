// Homepage
import Heading from "../layout/heading";
import Search from "./hotelSearch";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import floibanen from "../../Images/floibanen.jpg";
import fishmarket from "../../Images/fishmarket.jpg";
import cruise from "../../Images/cruise.jpg";

export default function Home() {
  return (
    <>
      <div className="home home-bg">
        <Heading className="heroheading1" content="Home" title="Holidaze" />
        <h3>Find the perfect Hotels anywhere in Bergen</h3>
        <div className="searchbox">
          <Search />
        </div>
        <button className="cta-btn btn">
         <a className="cta-link" href="#explore">Explore</a>
         </button>
      </div>
      <Container className="home-todo">
        <Row className="home-row" id="explore">
          <Col>
            <Card className="hotel-card" style={{ width: "20rem" }}>
              <Card.Img variant="top" className="hotel-image" src={floibanen} />
              <Card.Body>
                <Card.Title>Fløibanen</Card.Title>
                <Card.Text>
                  Fløyen is connected to the town by a funicular, Fløibanen,
                  that will take you to the top in less than eight minutes. Once
                  at the top, you are free to enjoy spectacular views of Bergen
                  and the surrounding landscape.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="hotel-card" style={{ width: "20rem" }}>
              <Card.Img
                variant="top"
                className="hotel-image"
                src={fishmarket}
              />
              <Card.Body>
                <Card.Title>Fish Market</Card.Title>
                <Card.Text>
                  The outdoor Fish Market in the middle of the city centre to
                  one of Norway’s most-visited outdoor attractions, the Fish
                  Market offers an abundance of fish, fruit, vegetables and
                  hand-made crafts for you to see.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="hotel-card" style={{ width: "20rem" }}>
              <Card.Img variant="top" className="hotel-image" src={cruise} />
              <Card.Body>
                <Card.Title>Fjord Cruise</Card.Title>
                <Card.Text>
                  There are several cruise companies stationed in Bergen, eager
                  to show you the wonders of the famous Norwegian landscape or
                  to offer you simple transportation to nearby towns and cities.
                  Go explore!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Jumbotron className="hotel-offer">
        <Container>
          <h1>3 nights for 2</h1>
          <p>
            Choose from over 100 properties around Bergem -
            holiday rentals, resorts, hotel chains and more!
          </p>
        </Container>
      </Jumbotron>
    </>
  );
}
