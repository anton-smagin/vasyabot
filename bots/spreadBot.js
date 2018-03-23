'use strict'

require('dotenv').config();
const SpreadTrade = require('../models/spreadTrade.js');

const ccxt = require('ccxt');


const exchange = new ccxt.binance({
  apiKey: process.env.BINANCE_API_KEY,
  secret: process.env.BINANCE_API_SECRET,
});

const spreadTrade = new SpreadTrade({
  stopLoss: 1.0,
  takeProfit: 1.2,
  status: 'new',
  trades: [{ status: 'new', buyPrice: 0.9, sellPrice: 1 }],
  balanceBefore: 0.01,
  balanceAfter: 0.015,
});

spreadTrade.save(function (err) {
  if (err) throw err;

  console.log('spread saved')
})
// for each symbols make 3 limit buy order

// write spread object to db
//
