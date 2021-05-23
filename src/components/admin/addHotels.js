import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {TOKEN_PATH} from "../../constants/api";

export class AddHotels extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      Price: "",
      Guests: "",
      image: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleFileChange = (event) => {
    this.setState({image: event.target.files[0]});
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append(
      "data",
      JSON.stringify({
        name: this.state.name,
        description: this.state.description,
        price: this.state.price,
        guests: this.state.guests,
      }),
    );

     formData.append("files.image", this.state.image);


    try {
      const response = await fetch(
        "https://polar-wave-85604.herokuapp.com/hotels",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${TOKEN_PATH}`,
          },
          body: formData,
        }
      );
      const data = await response.json();
      console.log("data", data);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Container className="AddHotel">
        <Form onSubmit={this.handleSubmit}>
          <h3>Add New Hotel</h3>
          <Form.Label> Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <Form.Label> Description:</Form.Label>
          <Form.Control
            type="text"
            name="description"
            id="description"
            onChange={this.handleChange}
            value={this.state.description}
          />
          <Form.Label> Price:</Form.Label>
          <Form.Control
            type="number"
            name="Price"
            id="price"
            onChange={this.handleChange}
            value={this.state.price}
          />
          <Form.Label> Guests:</Form.Label>
          <Form.Control
            type="number"
            name="Guests"
            id="guests"
            onChange={this.handleChange}
            value={this.state.guests}
          />
          <Form.Label> Image:</Form.Label>
          <Form.Control
            type="file"
            name="image"
            id="image"
            onChange={this.handleFileChange}
          />

          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default AddHotels;