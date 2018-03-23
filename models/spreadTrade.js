const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/vasyabot');
const { Schema } = mongoose;

const tradeSchema = new Schema({
  status: String,
  buyPrice: Number,
  sellPrice: Number,
});

const spreadTradeSchema = new Schema({
  stopLoss: Number,
  takeProfit: Number,
  status: String,
  trades: [tradeSchema],
  balanceBefore: Number,
  balanceAfter: Number,
});

const SpreadTrade = mongoose.model('SpreadTrade', spreadTradeSchema);

module.exports = SpreadTrade;
