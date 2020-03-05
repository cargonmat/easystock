import React, { Component } from "react";
import CompanyCard from "./CompanyCard";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import TradingServices from "../../../services/trading.services";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      listComp: [],
      searchBar: ""
    };
    this.services = new TradingServices();
  }
  // componentDidMount = () => this.addData();

  handleChange = e => {
    this.setState({ searchBar: e.target.value });
  };

  addData = e => {
    e.preventDefault();
    this.services
      .search(this.state.searchBar)
      .then(theCompanies => {
        this.setState({ data: theCompanies });
      })
      .catch(err => console.log(err));
  };

  render() {
    const compFilter = this.state.data.filter(elm => {
      elm["2. name"].includes(this.state.searchBar);
    });
    let cash = this.props.loggedInUser.cash
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

    return (
      <Container>
        <Row>
          <h1>Bienvenido {this.props.loggedInUser.username}</h1>
        </Row>
        <Row>
          {" "}
          <p>Your cash: {cash} USD</p>
        </Row>
        <Row>
          <Form onSubmit={this.addData}>
            <Form.Group>
              <Form.Label>Empresas</Form.Label>
              <Form.Control
                type="text"
                name="searchBar"
                value={this.state.searchBar}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button variant="dark" type="submit">
              Buscar{" "}
            </Button>
          </Form>
        </Row>
        <Row>
          <table>
            {this.state.data.map((elm, idx) => (
              <CompanyCard key={idx} {...elm} />
            ))}
          </table>
        </Row>
      </Container>
    );
  }
}

export default Profile;
