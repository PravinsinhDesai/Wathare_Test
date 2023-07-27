const ChartData = require('../models/ChartData');

exports.getChartData = async (req, res) => {
  try {
    const data = await ChartData.find().sort({ timestamp: -1 }).limit(50);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
};