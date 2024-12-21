import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const StaticAnalysisSpeed = () => {
  const [series] = useState([
    {
      name: "Average Speed",
      data: [
        [0, 0],
        [18, 40],
        [20, 43],
        [25, 41],
        [30, 39],
        [35, 45],
        [40, 49],
        [45, 41],
        [50, 52],
        [55, 0],
        [60, 0],
      ],
    },
  ]);

  const [options] = useState({
    chart: {
      height: 350,
      type: "line",
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#DC8585"],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "Average Speed based on Age",
      align: "left",
    },
    grid: {
      borderColor: "#e7e7e7",
      row: {
        colors: ["#EBEBEB", "transparent"],
        opacity: 0.5,
      },
    },
    markers: {
      size: 1,
    },
    xaxis: {
      title: {
        text: "Age",
      },
    },
    yaxis: {
      title: {
        text: "Speed",
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={350}
          width="98%"
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default StaticAnalysisSpeed;
