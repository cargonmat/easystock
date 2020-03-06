import React, { Component } from "react";
import CompanyCard from "./CompanyCard";
import SharesCard from "./SharesCard";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
    this.tradingservices = new TradingServices();
  }
  // componentDidMount = () => this.addData();

  handleChange = e => this.setState({ searchBar: e.target.value });

  addData = e => {
    e.preventDefault();
    this.tradingservices
      .search(this.state.searchBar)
      .then(theCompanies => {
        this.setState({ data: theCompanies });
      })
      .catch(err => console.log(err));
  };

  render() {
    let cash = this.props.loggedInUser.cash
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

    return (
      <Container>
        <Row>
          <h1>Bienvenido {this.props.loggedInUser.username}</h1>
        </Row>
        <Row>
          <Col>
            <Row>
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
                  Buscar
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
          </Col>
          <Col>
            <table>
              <thead>
                <tr>
                  <th>Companny</th>
                  <th>Acciones</th>
                  <th>Valor</th>
                </tr>
              </thead>
              {this.props.loggedInUser.shares.map((elm, idx) => (
                <SharesCard key={idx} {...elm} />
              ))}
            </table>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Profile;
