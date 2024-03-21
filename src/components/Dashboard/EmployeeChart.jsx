import React, { useEffect, useRef, useState } from "react"
import ApexCharts from "apexcharts"

const EmployeeChart = () => {
  const chartRef = useRef(null)

  const [state, setState] = useState({
    series: [
      {
        name: "hours",
        data: [14000, 13000, 7200, 27803, 11890, 13400],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 300,
      },
      xaxis: {
        categories: ["Apr", "May", "June", "July", "Aug", "Sept"],
        labels: {
          style: {
            fontSize: "10px",
            fontWeight: 700,
          },
        },
      },
      yaxis: {
        show: false,
      },
      plotOptions: {
        bar: {
          columnWidth: "30%",
          borderRadius: "5",
        },
      },
      dataLabels: {
        enabled: false,
      },
    },
  })

  useEffect(() => {
    const chartOptions = {
      ...state.options,
      series: state.series,
    }

    const chart = new ApexCharts(chartRef.current, chartOptions)
    chart.render()

    // Cleanup when the component unmounts
    return () => {
      chart.destroy()
    }
  }, [state])

  return <div ref={chartRef} />
}

export default EmployeeChart
