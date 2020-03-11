import React, { Component } from "react";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import TradingServices from "../../../services/trading.services";

import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

am4core.useTheme(am4themes_animated);

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      chart: null,
      ready: false
    };

    this.tradingservices = new TradingServices();
  }

  componentDidMount() {
    this.setState({ chart: am4core.create("chartdiv", am4charts.XYChart) });

    this.tradingservices
      .daily(this.props.match.params.symbol)
      .then(theCompanies => {
        let values = Object.values(theCompanies);
        let dates = Object.keys(theCompanies);
        let result = values.map(a => Number(a["4. close"]));

        //Monta el data para el chart
        // let data = [];
        let chartdata = [];
        for (let i = 1; i < result.length; i++) {
          //Data tiene que ser: Array de obj con pares XY con un ¿name?
          //this.setState({ data: result[0] });
          chartdata.push({
            date: new Date(dates[0 + i]), //fecha del valor
            name: "name" + i,
            value: result[i] //valor de la accion
          });
          this.setState({ data: chartdata });
        }

        //console.log(this.props.match.params.symbol);
        //appenda el data al chart
        this.state.chart.data = this.state.data;

        //monta eje de fechas
        let dateAxis = this.state.chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;
        //monta eje de valores
        let valueAxis = this.state.chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.renderer.minWidth = 35;
        //monta la linea
        let series = this.state.chart.series.push(new am4charts.LineSeries());
        series.dataFields.dateX = "date";
        series.dataFields.valueY = "value";
        //valor en el cursor
        series.tooltipText = "{valueY.value}";
        this.state.chart.cursor = new am4charts.XYCursor();
        //scrollbar
        let scrollbarX = new am4charts.XYChartScrollbar();
        scrollbarX.series.push(series);
        this.state.chart.scrollbarX = scrollbarX;

        this.chart = this.state.chart;
        this.setState({ ready: true });
      })
      .catch(err => console.log(err));
  }

  //getting the data

  render() {
    return (
      <>
        <Spinner
          animation="border"
          style={{
            marginLeft: 500,
            marginTop: 200,
            marginBottom: 200,
            display: this.state.ready ? "none" : "inherit"
          }}
        />
        <Row
          as="div"
          id="chartdiv"
          style={{
            width: "100%",
            height: "500px",
            display: this.state.ready ? "inherit" : "none"
          }}
        ></Row>
      </>
    );
  }
}
export default Chart;
