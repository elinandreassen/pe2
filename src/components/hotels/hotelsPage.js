import Heading from "../layout/heading";
import GetHotels from "../hotels/getHotels"
import Container from "react-bootstrap/Container"

export function Hotels() {
  return (
    <>
      <Container className="hotelpage">
        <div className="Hotels__img"></div>
        <div className="Hotels__txt">
          <Heading content="Hotels" title="Hotels" />
          <p>Find the perfect Hotels anywhere in Bergen</p>
        </div>
        <GetHotels />
      </Container>

      <div className="Hotels-footer"></div>
    </>
  );
}

export default Hotels;