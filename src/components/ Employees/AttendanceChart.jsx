import React from 'react';
import Chart from 'react-apexcharts';

class AttendanceChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: 'donut',
          height: 350,
          toolbar: {
            show: false
          }
        },
        labels: ['Present', 'Leave', 'Overall']
      },
      series: [20, 5, 25] 
    };
  }

  render() {
    return (
      <div id="chart">
        <Chart options={this.state.options} series={this.state.series} type="donut" height={350} />
      </div>
    );
  }
}

export default AttendanceChart;
