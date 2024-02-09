import React, { useEffect, useRef, useState } from 'react';
import ApexCharts from 'apexcharts';

const MyChart = () => {
  const chartRef = useRef(null);

  const [state, setState] = useState({
    series: [
      {
        name: 'income',
        data: [14000, 13000, 7200, 2780, 11890,3400],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 300,
       
      },
      xaxis: {
        categories: ["Morning", "Mid-Day", "Afternoon", "Evening", "Night","Mid-Night"],
        labels: {
          style: {
            fontSize: '10px',
            fontWeight: 700,
          },
        },
      },
    },
  });

  useEffect(() => {
    const chartOptions = {
      ...state.options,
      series: state.series,
    };

    const chart = new ApexCharts(chartRef.current, chartOptions);
    chart.render();

    // Cleanup when the component unmounts
    return () => {
      chart.destroy();
    };
  }, [state]);

  return <div ref={chartRef} />;
};

export default MyChart;
