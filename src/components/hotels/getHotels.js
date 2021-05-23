import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { API } from "../../constants/api";
import HotelDetail from "./hotelCard";
import Spinner from "react-bootstrap/Spinner";

function GetHotels() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(API);

        if (response.ok) {
          const json = await response.json();
          //console.log(json);
          setHotels(json);
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
    return (
      <div>
        <Spinner animation="border" />
      </div>
    );
  }

  if (error) {
    return <div>ERROR: Ooops, an error has occured</div>;
  }

  return (
    <Container className="hotel-wrapper">
      {hotels.map(function (hotels) {
        const { id, name, description, Price, Guests, image } = hotels;
        return (
          <HotelDetail
            key={id}
            id={id}
            name={name}
            description={description}
            Price ={Price}
            Guests={Guests}
            image={image}
          />
        );
      })}
    </Container>
  );
}

export default GetHotels;
