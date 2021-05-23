import Heading from "../layout/heading";
import Container from "react-bootstrap/Container";
import AddHotels from "./addHotels";
import ContactList from "./contactList";
import Enquires from "./enquires";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Admin() {
  return (
    <>
      <Heading className="heroheading" title="Admin dashboard" />
      <Container>
        <AddHotels />
      </Container>
      <Container className="message-wrapper">
        <div className="contact">
        <h3>New messages</h3>
          <ContactList />
        </div>
        <div className="enquires">
          <h3>New enquires</h3>
          <Enquires />
        </div>
      </Container>
    </>
  );
}
