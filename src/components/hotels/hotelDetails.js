import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { API } from "../../constants/api";
import EnquiryForm from "../enquiry/enquiryForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

function HotelsDetails() {
  
  const [hotels, setHotels] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let history = useHistory();

  const { id } = useParams();

  if (!id) {
    history.push("/");
  }

  const url = API + "/" + id;

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(url);

          if (response.ok) {
            const json = await response.json();
            console.log(json);
            setHotels(json);
          } else {
            setError("An error occured");
          }
        } catch (error) {
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      fetchData();
    },
    [url]
  );

  if (loading) {
    return <div>Loading content...</div>;
  }

  if (error) {
    return <div>ERROR: Ooops, an error has occured</div>;
  }

  return (
    <>
      <Container className="hotel-jumbotron">
        <Row className="hotel-info">
          <Col>
            <img
              className="hotel-image"
              src={hotels.image.url}
              alt="hotel image"
            />
          </Col>
          <Col>
            <h1>{hotels.name}</h1>
            <h5>
              <Badge className="info-pill" pill variant="info">
                Max {hotels.Guests} guests
              </Badge>
              <Badge className="info-pill" pill variant="info">
                ${hotels.Price} pr. night
              </Badge>
            </h5>
            <div className="info">
              <p>{hotels.description}</p>
              <p>
                <i className="fas fa-wifi"></i> Free wifi
              </p>
              <p>
                <i className="far fa-clock"></i> 24hr open reception
              </p>
              <p>
                <i className="fas fa-utensils"></i> Kitchen for self-catering
              </p>
            </div>
          </Col>
        </Row>
        <div className="enquiryform">
          <EnquiryForm />
        </div>
      </Container>
    </>
  );
}


export default HotelsDetails;
