import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";


function ContactList() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://polar-wave-85604.herokuapp.com/Contactforms"
        );

        if (response.ok) {
          const json = await response.json();
          //console.log(json);
          setMessages(json);
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
      {messages.map(function (messages) {
        const { name, Email, Message } = messages;
        return (
          <>
            <div className="list-items">
              <ListGroup.Item>Name: {name}</ListGroup.Item>
              <ListGroup.Item>E-mail: {Email}</ListGroup.Item>
              <ListGroup.Item>Message: {Message}</ListGroup.Item>
            </div>
          </>
        );
      })}
    </Container>
  );
}

export default ContactList;
