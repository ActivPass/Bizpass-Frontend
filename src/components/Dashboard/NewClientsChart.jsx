import React, { useEffect, useRef, useState } from "react"
import ApexCharts from "apexcharts"

const NewClientsChart = () => {
  const chartRef = useRef(null)

  const [state, setState] = useState({
    series: [
      {
        name: "New Clients",
        data: [41, 40, 42],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: ["March", "April", "May"],
      },
      yaxis: {
        show: false,
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

export default NewClientsChart
