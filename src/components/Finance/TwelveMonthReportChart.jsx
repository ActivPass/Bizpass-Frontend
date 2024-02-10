import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const generateMonthlyData = (startYear, months) => {
  const data = [];
  for (let i = 0; i < months; i++) {
    data.push(Math.floor(Math.random() * 10000) + 1);
  }
  return data;
};

const generateMonthLabels = (startYear, months) => {
  const labels = [];
  for (let i = 0; i < months; i++) {
    labels.push(new Date(startYear, i).toLocaleString('default', { month: 'short' }));
  }
  return labels;
};

const MyChart = () => {
  const [selectedYear, setSelectedYear] = useState(2024);

  const chartData = {
    series: [{
      name: 'Income',
      data: generateMonthlyData(selectedYear, 12)
    }],
    options: {
      chart: {
        type: 'bar',
        height: 250
      },
      xaxis: {
        categories: generateMonthLabels(selectedYear, 12),
        labels: {
          style: {
            fontSize: '10px',
            fontWeight: 700
          }
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 8,
          columnWidth: '50%',
          colors: {
            ranges: [{
              from: 0,
              to: 10000,
              color: '#2E93fA'
            }]
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      yaxis: {
        show: true
      },
      grid: {
        show: true,
        borderColor: '#f1f1f1'
      }
    }
  };

  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="">Monthly Report</div>
        <div>
          <label>Select Year: </label>
          <select className='outline-none' value={selectedYear} onChange={(e) => setSelectedYear(parseInt(e.target.value))}>
            <option value={2024}>2024</option>
            <option value={2025}>2025</option>
            <option value={2026}>2026</option>
          </select>
        </div>
      </div>
      <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={250} />
    </div>
  );
};

export default MyChart;
