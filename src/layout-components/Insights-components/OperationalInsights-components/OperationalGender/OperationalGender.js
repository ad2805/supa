import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const OperationalGender = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Men",
        data: [0, 245, 45035, 49456, 15156, 1456, 35, 21, 0, 0],
      },
      {
        name: "Women",
        data: [0, 1058, 35015, 15234, 2567, 846, 35, 15, 0, 0],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area", // Set chart type to "line"
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth", // Use smooth curve for line
      },
      xaxis: {
        categories: [
          "0-10 Km/h",
          "10-20 Km/h",
          "20-30 Km/h",
          "30-40 Km/h",
          "40-50 Km/h",
          "50-60 Km/h",
          "60-70 Km/h",
          "70-80 Km/h",
          "80-90 Km/h",
          "90-100 Km/h",
        ],
        title: {
          text: "Speed",
        },
      },
      yaxis: {
        title: {
          text: "Bike User Count",
        },
      },
      tooltip: {
        x: {
          show: false,
        },
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="area"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default OperationalGender;

