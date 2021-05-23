// Search bar typeahead component
import React, { Component } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { withRouter } from "react-router-dom";
import "react-bootstrap-typeahead/css/Typeahead.css";

class HotelSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelArray: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetch("https://polar-wave-85604.herokuapp.com/hotels")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        //console.log("result", result);

        const searchOptions = result.map((hotel) => {
          return { id: hotel.id, label: hotel.name };
        });

        this.setState({
          hotelArray: searchOptions,
          loading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.setState({
          loading: false,
        });
      });
  }

  handleChange = (selected) => {
    const id = selected[0].id;
    this.props.history.push(`/hotels/${id}`);
  };

  render() {
    return (
      <Typeahead
        id="search-bar"
        className="Search"
        onChange={(selected) => {
          this.handleChange(selected);
        }}
        options={this.state.hotelArray}
        placeholder="Search for a hotel....&#x1F50E;"
      />
    );
  }
}

export default withRouter(HotelSearch);
