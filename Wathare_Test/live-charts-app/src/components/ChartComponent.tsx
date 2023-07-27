import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const ChartComponent: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/chartdata');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Prepare data for the chart
  const chartData = {
    labels: data.map((item) => item.timestamp),
    datasets: [
      {
        label: 'Value',
        data: data.map((item) => item.value),
        borderColor: 'blue',
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default ChartComponent;