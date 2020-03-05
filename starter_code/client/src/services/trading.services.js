import axios from "axios";

export default class Services {
  constructor() {
    this.service = axios.create({
      baseURL: "http://localhost:5000/api/trading"
    });
  }

  search = query =>
    this.service.post("/search", { query }).then(response => {
      
      return response.data;
    });

  daily = symbol => {
    
    return this.service.post("/daily", { symbol }).then(response => {
      return response.data;
    });
  };
  weekly = symbol =>
    this.service.post("/weekly", { symbol }).then(response => response.data);

  monthly = symbol =>
    this.service.post("/monthly", { symbol }).then(response => response.data);

  intraday = (symbol, interval) =>
    this.service
      .post("/intraday", { symbol, interval })
      .then(response => response.data);

  latest = ({ symbol }) =>
    this.service
      .post("/latest", { symbol })
      .then(response => response.data)
      .catch(err => console.log(err));
}
