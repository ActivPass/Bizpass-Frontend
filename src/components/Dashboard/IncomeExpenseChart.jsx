import React, { useEffect, useRef, useState } from "react"
import ApexCharts from "apexcharts"

const IncomeExpenseChart = () => {
  const chartRef = useRef(null)

  const [state, setState] = useState({
    series: [
      {
        name: "Income",
        data: [10, 11, 23, 13, 10], // Example data, replace with actual data
      },
      {
        name: "Expense",
        data: [5, 6, 7, 3, 4], // Example data, replace with actual data
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          colors: {
            ranges: [
              {
                from: -100,
                to: -46,
                color: "#F15B46",
              },
              {
                from: -45,
                to: 0,
                color: "#FEB019",
              },
            ],
          },
          columnWidth: "50%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      yaxis: {
        title: {
          text: "Growth",
        },
        labels: {
          formatter: function (y) {
            return Math.abs(y).toFixed(0) + "%" // Display absolute value
          },
        },
      },
      xaxis: {
        categories: ["2023-03-27", "2023-03-28", "2023-03-29", "2023-03-30", "2023-03-31"],
        labels: {
          rotate: -90,
        },
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

export default IncomeExpenseChart
