import React from "react";
import ReactApexChart from "react-apexcharts";

function SerivePreciction() {
  const seriesData = [
    {
      name: "",
      data: [2563, 10540, 35056],
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
      categories: ["3 Months", "6 Months", "1 Year"],
      title: {
        text: "Time",
      },
    },
    yaxis: {
      title: {
        text: "Bikes Count",
      },
    },
    title: {
      text: "Predicted Bike Service Requirements",
      floating: true,
      align: "center",
    },
    fill: {
      opacity: 1,
      colors: ["#71B6B2"],
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return +val + " Bikes";
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
          height={367}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

export default SerivePreciction;
