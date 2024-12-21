// import React, { useState } from "react";
// import ReactApexChart from "react-apexcharts";

// const StaticAnalysisFingerPrint = () => {
//   const [series] = useState([
//     {
//       name: "Age Segments",
//       data: [21005, 25840, 18050, 11078, 0, 0],
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
//         return val + " Users";
//       },
//       offsetY: -20,
//       style: {
//         fontSize: "12px",
//         colors: ["#304758"],
//       },
//     },
//     xaxis: {
//       categories: [
//         "15-25 Years",
//         "25-35 Years",
//         "35-45 Years",
//         "45-55 Years",
//         "55-65 Years",
//         "65-75 Years",
//       ],
//       title: {
//         text: "Age Group",
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
//           return val + " Users";
//         },
//       },
//     },
//     title: {
//       text: "Percentage of Users by Age Group Using Fingerprint Authentication",
//       floating: true,
//       offsetY: 330,
//       align: "center",
//       style: {
//         color: "#444",
//       },
//     },
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

// export default StaticAnalysisFingerPrint;

import { Paper } from "@mantine/core";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const UserInsightFingerPrint = () => {
  const [chartData] = useState({
    series: [
      {
        data: [
          { x: "18-25 Years", y: 65004 },
          { x: "25-35 Years", y: 62156 },
          { x: "35-45 Years", y: 45346 },
          { x: "45-55 Years", y: 33561 },
          { x: "55-65 Years", y: 1752 },
        ],
      },
    ],
  options: {
    legend: {
      show: false,
    },
    chart: {
      height: 350,
      type: "treemap",
    },
    title: {
      text: "Fingerprint Users by Age Group",
      offsetY: 5
    },
  },
});

  return (
    <Paper w="99%">
      <Paper id="chart" ml="lg">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="treemap"
          height={350}
        />
      </Paper>
      <div id="html-dist"></div>
    </Paper>
  );
};

export default UserInsightFingerPrint;

// import { useEffect, useState } from "react";

// import { Paper } from "@mantine/core";
// import ReactApexChart from "react-apexcharts";
// import fingerPrintData from "./../../../data/StaticAnalysisFingerPrint/StaticAnalysisFingerPrint.json"; // Import the JSON file

// const StaticAnalysisFingerPrint = () => {
//   const [chartData, setChartData] = useState(null);

//   useEffect(() => {
//     // Set the chart data from the imported JSON
//     setChartData({
//       series: [{ data: fingerPrintData }],
//       options: {
//         legend: { show: false },
//         chart: { height: 350, type: "treemap" },
//         title: { text: "Fingerprint Users by Age Group", offsetY: 5 },
//       },
//     });
//   }, []);

//   return (
//     <div>
//       <Paper id="chart" ml="lg">
//         {chartData && (
//           <ReactApexChart
//             options={chartData.options}
//             series={chartData.series}
//             type="treemap"
//             height={350}
//           />
//         )}
//       </Paper>
//       <div id="html-dist"></div>
//     </div>
//   );
// };

// export default StaticAnalysisFingerPrint;
