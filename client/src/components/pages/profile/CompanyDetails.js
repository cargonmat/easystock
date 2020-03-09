import React, { Component } from "react";

import TradingServices from "../../../services/trading.services";
import AuthServices from "../../../services/auth.services";
import Chart from "./Chart";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
      numCash: this.props.loggedInUser.cash,
      cash: this.props.loggedInUser.cash
        .toString()
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","),
      actualValue: 0
    };
    this.tradingservices = new TradingServices();
    this.authservices = new AuthServices();
  }
  componentDidMount() {
    this.tradingservices
      .daily(this.props.match.params.symbol)
      .then(theCompanies => {
        let values = Object.values(theCompanies).map(a =>
          Number(a["4. close"])
        );
        this.setState({ actualValue: values[0] });
      })
      .catch(err => console.log(err));
  }

  handleChange = e => this.setState({ quantity: e.target.value });

  buyShares = e => {
    e.preventDefault();
    let buy = (this.state.numCash -=
      Number(this.state.quantity) * this.state.actualValue);
    let shares = {
      company: this.props.match.params.symbol,
      shares: Number(this.state.quantity),
      actualvalue: this.state.actualValue
    };

    // let index = this.props.loggedInUser.shares.indexOf(this.props.match.params.symbol)
    // index > -1 ?
    this.authservices.buyshares(buy, shares);
    this.setState({ cash: buy });

    console.log(this.props.match.params.shares);
  };

  sellShares = e => {
    e.preventDefault();
    let sell = (this.state.numCash +=
      Number(this.state.quantity) * this.state.actualValue);
    let shares = {
      company: this.props.match.params.symbol,
      shares: this.state.quantity,
      actualvalue: this.state.actualValue
    };

    // let index = this.props.loggedInUser.shares.indexOf(this.props.match.params.symbol)
    // index > -1 ?
    this.authservices.sellshares(sell, shares);
    this.setState({ cash: sell });

    console.log(sell);
  };

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <>
        {this.state.cash && (
          <Container>
            <h1>Trading data</h1>
            <h3>{this.props.match.params.symbol}</h3>
            {/* //<Row id="chartdiv" style={{ width: "100%", height: "500px" }}></Row> */}
            <Chart {...this.props} />
            <Row>
              <Col>
                {" "}
                <p>Tus ahorros: {this.state.cash} USD</p>
              </Col>

              <Col>
                <p>Valor actual de acciones {this.state.actualValue} USD</p>
              </Col>
            </Row>
            <Row> {/* //<p>Valor actual: {this.result[0]} USD</p> */}</Row>
            <Row>
              <Col>
                <Form onSubmit={this.buyShares}>
                  <Form.Group>
                    <Form.Label>Adquirir Acciones</Form.Label>
                    <Form.Control
                      type="number"
                      name="quantity"
                      value={this.state.quantity}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Button variant="dark" type="submit">
                    Comprar
                  </Button>
                </Form>
              </Col>
              <Col>
                <Form onSubmit={this.sellShares}>
                  <Form.Group>
                    <Form.Label>Vender Acciones</Form.Label>
                    <Form.Control
                      type="number"
                      name="quantity"
                      value={this.state.quantity}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Button variant="dark" type="submit">
                    Vender
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        )}
      </>
    );
  }
}

export default Details;
