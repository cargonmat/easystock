import React, { Component } from "react";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import TradingServices from "../../../services/trading.services";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

am4core.useTheme(am4themes_animated);

class Details extends Component {
  constructor(props) {
    super(props);
    this.cash = this.props.loggedInUser.cash
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    this.services = new TradingServices();
    this.actualValue = 0;
  }
  componentDidMount() {
    //Crea chart en ID de html, tipo de chart
    let chart = am4core.create("chartdiv", am4charts.XYChart);
    //styles
    chart.paddingRight = 20;

    //getting the data
    this.services
      .daily(this.props.match.params.symbol)
      .then(theCompanies => {
        let values = Object.values(theCompanies);
        let dates = Object.keys(theCompanies);
        let result = values.map(a => Number(a["4. close"]));
        console.log(result[0]);
        this.actualValue = result[0];
        console.log(this.actualValue);
        //Monta el data para el chart
        let data = [];
        for (let i = 1; i < result.length; i++) {
          //Data tiene que ser: Array de obj con pares XY con un ¿name?
          data.push({
            date: new Date(dates[0 + i]), //fecha del valor
            name: "name" + i,
            value: result[i] //valor de la accion
          });
        }

        //console.log(this.props.match.params.symbol);
        //appenda el data al chart
        chart.data = data;

        //monta eje de fechas
        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;
        //monta eje de valores
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.renderer.minWidth = 35;
        //monta la linea
        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.dateX = "date";
        series.dataFields.valueY = "value";
        //valor en el cursor
        series.tooltipText = "{valueY.value}";
        chart.cursor = new am4charts.XYCursor();
        //scrollbar
        let scrollbarX = new am4charts.XYChartScrollbar();
        scrollbarX.series.push(series);
        chart.scrollbarX = scrollbarX;

        this.chart = chart;
      })
      .catch(err => console.log(err));
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <>
        {this.cash && (
          <Container>
            <h1>Trading data</h1>
            <h3>{this.props.match.params.symbol}</h3>
            <Row
              id="chartdiv"
              style={{ width: "100%", height: "500px" }}
            ></Row>{" "}
            <Row>
              {" "}
              <p>Tus ahorros: {this.cash} USD</p>
            </Row>{" "}
            <Row> {/* //<p>Valor actual: {this.result[0]} USD</p> */}</Row>{" "}
            <Row>
              <Form onSubmit={this.addData}>
                <Form.Group>
                  <Form.Label>Adquirir Acciones</Form.Label>
                  <Form.Control
                    type="text"
                    name="cuantifier"
                    //onChange={this.handleChange}
                  />
                </Form.Group>
                <p>Valor actual {this.actualValue}</p>
                <Button variant="dark" type="submit">
                  Comprar{" "}
                </Button>
              </Form>
            </Row>
          </Container>
        )}
      </>
    );
  }
}

export default Details;
