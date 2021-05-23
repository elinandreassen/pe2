import React from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export class EnquiryForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modifiedData: {
        name: "",
        description: "",
      },
      error: null,
    };
  }

  
  handleInputChange = ({ target: { name, value } }) => {
    this.setState((prev) => ({
      ...prev,
      modifiedData: {
        ...prev.modifiedData,
        [name]: value,
      },
    }));
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://polar-wave-85604.herokuapp.com/Enquiryforms",
        this.state.modifiedData
      );
      console.log(response);
    } catch (error) {
      this.setState({ error });
    }
  };


  render() {
    const { error, modifiedData } = this.state;

    if (error) {
      return <div>An error occured: {error.message}</div>;
    }

    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              name="fullname"
              onChange={this.handleInputChange}
              value={modifiedData.fullname}
            />
            <Form.Label>E-mail:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={this.handleInputChange}
              value={modifiedData.email}
            />
            <Form.Label>Check-in:</Form.Label>
            <Form.Control
              type="date"
              name="checkin"
              onChange={this.handleInputChange}
              value={modifiedData.checkin}
            />
            <Form.Label>Check-out:</Form.Label>
            <Form.Control
              type="date"
              name="checkout"
              onChange={this.handleInputChange}
              value={modifiedData.checkout}
            />
            <Button className="btn" type="submit">Send</Button>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default EnquiryForm;
