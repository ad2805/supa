// import React, { useState } from "react";
// import ReactApexChart from "react-apexcharts";

// const StaticAnalysisDTE = () => {
//   const [series] = useState([
//     {
//       name: "DTE",
//       data: [120, 98, 87, 65, 58, 50, 42, 25, 16, 8],
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
//       offsetY: -20,
//       style: {
//         fontSize: "12px",
//         colors: ["#304758"],
//       },
//     },
//     xaxis: {
//       categories: [
//         "100%",
//         "90%",
//         "80%",
//         "70%",
//         "60%",
//         "50%",
//         "40%",
//         "30%",
//         "20%",
//         "10%",
//       ],
//       title: {
//         text: "Battery %",
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
//           return val + " km";
//         },
//       },
//     },
//     title: {
//       text: "Average DTE Based on Remaining Battery",
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

// export default StaticAnalysisDTE;

import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const OperationalInsightDTE = () => {
  const [series] = useState([
    {
      name: "Km",
      data: [120, 98, 87, 65, 58, 50, 42, 25, 16, 8],
    },
  ]);

  const [options] = useState({
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },

    xaxis: {
      categories: [
        "100%",
        "90%",
        "80%",
        "70%",
        "60%",
        "50%",
        "40%",
        "30%",
        "20%",
        "10%",
      ],
      title: {
        text: "Km",
        floating: true, // Make the title float
        offsetY: 15,
        style: {
          fontSize: "16px", // Set the font size for x-axis labels
        },
      },
    },
    yaxis: {
      title: {
        text: "Battery %",
        style: {
          fontSize: "16px", // Set the font size for x-axis labels
        },
      },
    },
    title: {
      text: "Average DTE Based on Remaining Battery", // Add the title for the chart
      align: "center",
      floating: true, // Make the title float
      offsetY: 2,
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
    fill: {
      opacity: 1,
      colors: ["#E0B92C"],
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default OperationalInsightDTE;
