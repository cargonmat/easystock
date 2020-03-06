const express = require("express");
const router = express.Router();
const TradingAPIService = require("../services/apiHandler");
const TradingAPI = new TradingAPIService();

router.post("/search", (req, res, next) => {
  TradingAPI.search("SYMBOL_SEARCH", req.body.query)
    .then(result => res.json(result))
    .catch(err => console.log(err));
});

router.post("/daily", (req, res, next) => {
  TradingAPI.time("TIME_SERIES_DAILY", req.body.symbol)
    .then(result => res.json(result))
    .catch(err => console.log(err));
});

router.post("/weekly", (req, res, next) => {
  TradingAPI.time("TIME_SERIES_WEEKLY", req.body.symbol)
    .then(result => res.json(result))
    .catch(err => console.log(err));
});

router.post("/monthly", (req, res, next) => {
  TradingAPI.time("TIME_SERIES_MONTHLY", req.body.symbol)
    .then(result => res.json(result))
    .catch(err => console.log(err));
});

router.post("/intraday", (req, res, next) => {
  TradingAPI.time("TIME_SERIES_INTRADAY", req.body.symbol, req.body.interval)
    .then(result => res.json(result))
    .catch(err => console.log(err));
});

router.post("/latest", (req, res, next) => {
  TradingAPI.time("GLOBAL_QUOTE", req.body.symbol)
    .then(result => res.json(result))
    .catch(err => console.log(err));
});

module.exports = router;
