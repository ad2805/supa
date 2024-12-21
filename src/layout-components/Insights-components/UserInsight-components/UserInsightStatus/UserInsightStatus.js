// import React from "react";
// import ReactApexChart from "react-apexcharts";

// function StaticAnalysisStatus() {
//   const revenueData = [
//     {
//       name: "Errors",
//       data: [76, 85],
//     },
//   ];

//   const profitData = [
//     {
//       name: "Cruise Control",
//       data: [44, 55],
//     },
//   ];

//   const optionsData = {
//     chart: {
//       type: "bar",
//       height: 350,
//     },
//     plotOptions: {
//       bar: {
//         horizontal: false,
//         columnWidth: "55%",
//         endingShape: "rounded",
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       show: true,
//       width: 2,
//       colors: ["transparent"],
//     },
//     xaxis: {
//       categories: [
//         "ON",
//         "OFF",
//       ],
//     },
//     yaxis: {
//       title: {
//         text: "$ (thousands)",
//       },
//     },
//     fill: {
//       opacity: 1,
//     },
//     tooltip: {
//       y: {
//         formatter: function (val) {
//           return "$ " + val + " thousands";
//         },
//       },
//     },
//   };

//   return (
//     <div>
//       <div id="revenue-chart">
//         <ReactApexChart
//           options={optionsData}
//           series={revenueData}
//           type="bar"
//           height={170}
//         />
//       </div>
//       <div id="profit-chart">
//         <ReactApexChart
//           options={optionsData}
//           series={profitData}
//           type="bar"
//           height={170}
//         />
//       </div>
//     </div>
//   );
// }

// export default StaticAnalysisStatus;

import React from "react";
import ReactApexChart from "react-apexcharts";

function UserInsightStatus() {
  const revenueData = [
    {
      name: "Errors",
      data: [74566, 38755],
    },
  ];

  const profitData = [
    {
      name: "Cruise Control",
      data: [6453, 87461],
    },
  ];

  const errorOptions = {
    chart: {
      type: "bar",
      height: 170,
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
      categories: ["ON", "OFF"],
      title: {
        text: "Errors & Alarm",
      },
    },
    yaxis: {
      title: {
        text: "Bikes Count",
      },
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

  const cruiseOptions = {
    chart: {
      type: "bar",
      height: 170,
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
      categories: ["ON", "OFF"],
      title: {
        text: "Cruise Control",
      },
    },
    yaxis: {
      title: {
        text: "Bikes Count",
      },
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
      <div id="revenue-chart">
        <ReactApexChart
          options={errorOptions}
          series={revenueData}
          type="bar"
          height={200}
        />
      </div>
      <div id="profit-chart">
        <ReactApexChart
          options={cruiseOptions}
          series={profitData}
          type="bar"
          height={200}
        />
      </div>
    </div>
  );
}

export default UserInsightStatus;
