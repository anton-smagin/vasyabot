'use strict'

require('dotenv').config()

var Twitter = require('twitter')
var ccxt = require('ccxt')

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var binanceTwitterId = 877807935493033984


client.get(
  'statuses/user_timeline',
  { screen_name: 'binance', count: 10 },
  (error, tweets, response) => {
    console.log(error)
    if(error) throw error;
    // console.log(tweets);  // The favorites.
    // console.log(response);  // Raw response object.
  }
)
  let exchange = new ccxt.binance({
    apiKey: process.env.BINANCE_API_KEY,
    secret: process.env.BINANCE_API_SECRET,
})

// (async () => {

debugger
//     await exchange.loadMarkets ()
// }) ()
// exchange.createOrder('ELECBTC', 'MARKET', 1, 'buy')
console.log((async () => {
  await exchange.loadMarkets ()
  console.log(await exchange.fetchOrderBook('STORM/BTC'))
  console.log(await exchange.fetchClosedOrders('STORM/BTC'))
})())
// async () => {

//     console.log (await exchange.loadMarkets ())

//     let btcusd1 = exchange.markets['BTC/USD']     // get market structure by symbol
//     let btcusd2 = exchange.market ('BTC/USD')     // same result in a slightly different way

//     let btcusdId = exchange.marketId ('BTC/USD')  // get market id by symbol

//     let symbols = exchange.symbols                // get an array of symbols
//     let symbols2 = Object.keys (exchange.markets) // same as previous line

//     console.log (exchange.id, symbols)            // print all symbols

//     let currencies = exchange.currencies          // a list of currencies

//     let bitfinex = new ccxt.bitfinex ()
//     await bitfinex.loadMarkets ()

//     bitfinex.markets['BTC/USD']                   // symbol → market (get market by symbol)
//     bitfinex.markets_by_id['XRPBTC']              // id → market (get market by id)

//     bitfinex.markets['BTC/USD']['id']             // symbol → id (get id by symbol)
//     bitfinex.markets_by_id['XRPBTC']['symbol']    // id → symbol (get symbol by id)

// }
