import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

function Enquires() {
  const [enquiry, setenquiry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://polar-wave-85604.herokuapp.com/Enquiryforms"
        );

        if (response.ok) {
          const json = await response.json();
          //console.log(json);
          setenquiry(json);
        } else {
          setError("A server error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading content...</div>;
  }

  if (error) {
    return <div>ERROR: Ooops, an error has occured</div>;
  }

  return (
    <Container>
      {enquiry.map(function (enquiry) {
        const { fullname, email, checkin, checkout } = enquiry;
        return (
          <>
            <ListGroup>
              <ListGroup.Item>
                Name: {fullname}
              </ListGroup.Item>
              <ListGroup.Item>
                E-mail: {email}
              </ListGroup.Item>
              <ListGroup.Item>
                Dates: <br></br>
                <span>From {checkin}</span>
                <br></br> To <span>{checkout}</span>
              </ListGroup.Item>
            </ListGroup>
          </>
        );
      })}
    </Container>
  );
}

export default Enquires;
