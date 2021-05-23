import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";


function HotelDetail({ id, name, description, Price, Guests, image}) {
 
  return (
    <Card className="hotel-card" style={{ width: "18rem" }}>
      <Card.Img variant="top" className="hotel-image" src={image.url} />
      <Card.Body>
        <Badge className="info-pill" pill variant="info">
          ${Price}
        </Badge>
        <Badge className="info-pill" pill variant="info">
          Max {Guests} guests <i className="fas fa-users"></i>
        </Badge>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button className="btn" href={`hotels/${id}`} variant="primary">
          Read more
        </Button>
      </Card.Body>
    </Card>
  );
}

export default HotelDetail;
