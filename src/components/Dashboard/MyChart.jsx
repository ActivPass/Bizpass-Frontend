import React, { useEffect, useRef, useState } from 'react';
import ApexCharts from 'apexcharts';

const MyChart = () => {
  const chartRef = useRef(null);

  const [state, setState] = useState({
    series: [
      {
        name: 'Income',
        data: [14000, 13000, 7200, 27803, 11890,3400,1200],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 300,
       
      },
      xaxis: {
        categories: ["Monday","Tuesday","Wednesday","Thursday", "Friday","Saturday","Sunday"],
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
