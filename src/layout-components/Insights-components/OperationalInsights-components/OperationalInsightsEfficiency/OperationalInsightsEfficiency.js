// import React, { useState } from "react";
// import ReactApexChart from "react-apexcharts";

// const StaticAnalysisEfficiency = () => {
//   const [series] = useState([
//     {
// name: "Range",
// data: [12, 10, 9, 9, 8, 8, 7.5, 7.3, 7, 5],
//     },
//   ]);

//   const [options] = useState({
//     chart: {
//       height: 350,
//       type: "bar",
//     },
//     plotOptions: {
//       bar: {
//         borderRadius: 10,
//         dataLabels: {
//           position: "top", // top, center, bottom
//         },
//       },
//     },
//     dataLabels: {
//       enabled: true,
//       formatter: function (val) {
//         return val + " km";
//       },
//       offsetY: 5,
//       style: {
//         fontSize: "12px",
//         colors: ["#FFFFFF"],
//       },
//     },
//     xaxis: {
//       // title: "BAttery"
// categories: [
//   "100-90%",
//   "90-80%",
//   "80-70%",
//   "70-60%",
//   "60-50%",
//   "50-40%",
//   "40-30%",
//   "30-20%",
//   "20-10%",
//   "10-0%",
// ],
//       title: {
//         text: "Battery Intervals",
//         offsetY: -5,
//         style: {
//           fontSize: "14px",
//           fontWeight: 600,
//         },
//       },
//       position: "top",
//       axisBorder: {
//         show: false,
//       },
//       axisTicks: {
//         show: false,
//       },
//       crosshairs: {
//         fill: {
//           type: "gradient",
//           gradient: {
//             colorFrom: "#D8E3F0",
//             colorTo: "#BED1E6",
//             stops: [0, 100],
//             opacityFrom: 0.4,
//             opacityTo: 0.5,
//           },
//         },
//       },
//       tooltip: {
//         enabled: true,
//       },
//       labels: {
//         style: {
//           fontSize: "14px", // Adjust the font size here
//         },
//       },
//     },
//     yaxis: {
//       axisBorder: {
//         show: false,
//       },
//       axisTicks: {
//         show: false,
//       },
//       labels: {
//         show: false,
//         formatter: function (val) {
//           return val + " km";
//         },
//       },
//     },
    // title: {
    //   text: "Average Battery Efficiency at Each Interval",
    //   floating: true,
    //   offsetY: 330,
    //   align: "center",
    //   style: {
    //     color: "#444",
    //   },
    // },
//   });

//   return (
//     <div>
//       <div id="chart">
//         <ReactApexChart
//           options={options}
//           series={series}
//           type="bar"
//           height={350}
//         />
//       </div>
//       <div id="html-dist"></div>
//     </div>
//   );
// };

// export default StaticAnalysisEfficiency;

import React from "react";
import ReactApexChart from "react-apexcharts";

function OperationalInsightsEfficiency() {
  const seriesData = [
    {
      name: "Range",
      data: [12, 10, 9, 9, 8, 8, 7.5, 7.3, 7, 5],
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
        "100-90%",
        "90-80%",
        "80-70%",
        "70-60%",
        "60-50%",
        "50-40%",
        "40-30%",
        "30-20%",
        "20-10%",
        "10-0%",
      ],
      title: {
        text: "Battery Intervals",
      },
    },
    yaxis: {
      title: {
        text: "Efficiency",
      },
    },
    title: {
      text: "Average Battery Efficiency at Each Interval",
      floating: true,
      align: "center",
    },
    fill: {
      opacity: 1,
      colors: ['#71B6B2'] 
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

export default OperationalInsightsEfficiency;
