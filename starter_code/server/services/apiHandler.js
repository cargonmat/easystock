const axios = require("axios");

class Services {
  constructor() {
    this.service = axios.create({
      baseURL: "https://www.alphavantage.co/query"
    });
  }

  search(searchType, query) {
    return this.service
      .get(
        `?function=${searchType}&keywords=${query}&apikey=${process.env.APIKEY}`
      )
      .then(result => {
        return result.data.bestMatches;
      })
      .catch(err => console.error({ err }));
  }

  time(searchType, symbol, interval) {
    if (interval) {
      return this.service
        .get(
          `?function=${searchType}&symbol=${symbol}&interval=${interval}&apikey=${process.env.APIKEY}`
        )
        .then(result => {
          return result.data["Time Series (Daily)"];
        })
        .catch(err => console.error({ err }));
    }
    return this.service
      .get(
        `?function=${searchType}&symbol=${symbol}&apikey=${process.env.APIKEY}`
      )
      .then(result => {
      
        return result.data["Time Series (Daily)"];
      })
      .catch(err => console.error({ err }));
  }
}

module.exports = Services;
