import React, { useEffect, useRef, useState } from "react"
import ApexCharts from "apexcharts"

const RadialChart = ({ value }) => {
  const chartRef = useRef(null)

  var options = {
    series: [value],
    chart: {
      height: 200,
      type: "radialBar",
      toolbar: {
        show: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: "50%",
          background: "#fff",
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: "front",
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24,
          },
        },
        track: {
          background: "#fff",
          strokeWidth: "67%",
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35,
          },
        },

        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: "#888",
            fontSize: "10px",
          },
          value: {
            formatter: function (val) {
              return parseInt(val)
            },
            color: "#111",
            fontSize: "20px",
            show: true,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: ["#ABE5A1"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Percent"],
  }

  useEffect(() => {
    const chart = new ApexCharts(chartRef.current, options)
    chart.render()

    // Cleanup when the component unmounts
    return () => {
      chart.destroy()
    }
  }, [])

  return (
    <div>
      <div ref={chartRef} />{" "}
    </div>
  )
}

export default RadialChart
