import React from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import PropTypes from 'prop-types';
import emailPropType from 'email-prop-type';

export class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modifiedData: {
        name: "",
        Email: "",
        Message: "",
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
        "https://polar-wave-85604.herokuapp.com/Contactforms",
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
          <Form.Label> Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            onChange={this.handleInputChange}
            value={modifiedData.name}
          />
          <Form.Label>E-mail:</Form.Label>
          <Form.Control
            type="email"
            name="Email"
            onChange={this.handleInputChange}
            value={modifiedData.email}
          />
          <Form.Label>Message:</Form.Label>
          <Form.Control
            as="textarea" rows={6}
            type="text"
            name="Message"
            onChange={this.handleInputChange}
            value={modifiedData.message}
          />
          <Button className="btn" type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}

ContactForm.propTypes = {
  name: PropTypes.string,
  Email: emailPropType.isRequired,
  Message: PropTypes.string
};

export default ContactForm;