// Import modules
import React, { Component } from "react";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

am4core.useTheme(am4themes_animated);

class Pie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      chart: null,
      ready: false
    };
  }
  componentDidMount() {
    this.setState(
      { chart: am4core.create("chartdiv1", am4charts.PieChart) },
      () => this.newPie()
    );
  }

  newPie = () => {
    let chartdata = this.props.loggedInUser.shares;

    const chart = this.state.chart;
    chart.data = chartdata;
    this.setState({ chart: chart, data: chartdata }, () => {
      let pieSeries = this.state.chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "shares";
      pieSeries.dataFields.category = "company";

      this.chart = this.state.chart;
      this.setState({ ready: true });
    });
  };
  //getting the data

  render() {
    return (
      <>
        <Spinner
          animation="border"
          style={{
            display: this.state.ready ? "none" : "inherit"
          }}
        />
        <Row
          as="div"
          id="chartdiv1"
          style={{
            width: "100%",
            height: "100%",
            display: this.state.ready ? "inherit" : "none"
          }}
        ></Row>
      </>
    );
  }
}
export default Pie;

