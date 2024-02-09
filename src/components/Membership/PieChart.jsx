import React, { useEffect, useRef, useState } from 'react';
import ApexCharts from 'apexcharts';

const MyChart = () => {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  const chartData = {
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }
  };

  useEffect(() => {
    if (!chartInstance) {
      const chart = new ApexCharts(chartRef.current, chartData.options);
      chart.render();
      setChartInstance(chart);
    } else {
      chartInstance.updateOptions(chartData.options);
      chartInstance.updateSeries(chartData.series);
    }
  }, [chartInstance, chartData]);

  useEffect(() => {
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [chartInstance]);

  return <div ref={chartRef} />;
};

export default MyChart;
