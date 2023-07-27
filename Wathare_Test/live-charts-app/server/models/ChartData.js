const mongoose = require('mongoose');

const ChartDataSchema = new mongoose.Schema({
  // Define your data fields here
  timestamp: {
    type: Date,
    default: Date.now,
  },
  value: {
    type: Number,
    required: true,
  },
});

const ChartData = mongoose.model('ChartData', ChartDataSchema);

module.exports = ChartData;