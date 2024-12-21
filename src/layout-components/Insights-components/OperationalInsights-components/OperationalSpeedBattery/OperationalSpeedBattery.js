import React from "react";
import ReactApexChart from "react-apexcharts";

function OperationalSpeedBattery() {
  const seriesData = [
    {
      name: "Speed",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 65, 73],
    },
  ];

  const optionsData = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "0%-10%",
        "10%-20%",
        "20%-30%",
        "30%-40%",
        "40%-50%",
        "50%-60%",
        "60%-70%",
        "70%-80%",
        "80%-90%",
        "90%-100%",
      ],
      title: {
        text: "Battery Intervals",
      },
    },
    yaxis: {
      title: {
        text: "Speed",
      },
    },
    fill: {
      opacity: 1,
      colors: ["#9C68C5"],
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return +val + " Km/h";
        },
      },
    },
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={optionsData}
          series={seriesData}
          type="bar"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

export default OperationalSpeedBattery;
