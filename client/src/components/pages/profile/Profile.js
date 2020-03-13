import React, { Component } from "react";
import CompanyCard from "./CompanyCard";
import SharesCard from "./SharesCard";
import GrowthCard from "./GrowthCard";
import Pie from "./Pie";

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
      searchBar: "",
      actualValue: []
    };
    this.tradingservices = new TradingServices();
  }
  componentDidMount() {
    for (let i = 0; i < this.props.loggedInUser.shares.length; i++) {
      this.tradingservices
        .daily(this.props.loggedInUser.shares[i].company)
        .then(theCompanies => {
          let values = Object.values(theCompanies).map(a =>
            Number(a["4. close"])
          );

          let newObject = {
            company: this.props.loggedInUser.shares[i].company,
            value: values[0],
            growth:
              (values[0] - this.props.loggedInUser.shares[i].actualvalue) / 100
          };
          let newArr = this.state.actualValue;
          newArr.push(newObject);
          this.setState({ actualValue: newArr });
        })
        .catch(err => console.log(err));
    }
  }

  handleChange = e => this.setState({ searchBar: e.target.value });

  addData = e => {
    e.preventDefault();
    this.tradingservices
      .search(this.state.searchBar)
      .then(theCompanies => {
        if (theCompanies === "") {
          this.setState({ data: [] });
        } else {
          this.setState({ data: theCompanies });
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    let cash = this.props.loggedInUser.cash
      .toFixed(2)
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    let growth = (
      (this.props.loggedInUser.cash.toFixed(4) - 100000) /
      100
    ).toFixed(2);
    let benefits = (this.props.loggedInUser.cash.toFixed(4) - 100000).toFixed(
      2
    );
    return (
      <Container>
        <Row>
          <h1>Bienvenido {this.props.loggedInUser.username}</h1>
        </Row>
        <Row>
          <Col md={5} lg={5}>
            <Row>
              <p>Tus ahorros: {cash} USD</p>
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
          <Col md={7} lg={7}>
            <table>
              {this.props.loggedInUser.shares.map((elm, idx) => (
                <SharesCard key={idx} {...elm} />
              ))}
            </table>
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <Col md={4} lg={4}>
            <Row>
              <p>Crecimiento actual: </p>
              <p style={{ color: growth >= 0 ? "green" : "red" }}>{growth}%</p>
            </Row>
            <Row>
              <p>Beneficio actual: </p>
              <p style={{ color: benefits >= 0 ? "green" : "red" }}>
                {benefits} USD
              </p>
            </Row>
            <Row>
              <Col>
                <table>
                  {this.state.actualValue.map((elm, idx) => (
                    <GrowthCard key={idx} {...elm} />
                  ))}
                </table>
              </Col>
            </Row>
          </Col>
          <Col md={8} lg={8}>
            <h3>Diversificación de cartera</h3>
            <p>
              Cuanto mayor sea la variedad de empresas, más seguras estarán tus
              inversiones.
            </p>
            <Pie {...this.props} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Profile;
