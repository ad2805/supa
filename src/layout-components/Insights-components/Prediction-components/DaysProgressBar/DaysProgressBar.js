// import React, { useEffect } from "react";
// import ApexCharts from "apexcharts";

// const DaysProgressBar = () => {
//   useEffect(() => {
//     const maxValue = 96; // Maximum value for the gauge
//     const value = 24; // Value for the gauge (adjust as needed)

//     const options = {
//       series: [(value / maxValue) * 100],
//       chart: {
//         height: 300,
//         type: "radialBar",
//         offsetY: -10,
//       },
//       plotOptions: {
//         radialBar: {
//           startAngle: -135,
//           endAngle: 135,
//           dataLabels: {
//             name: {
//               fontSize: "16px",
//               color: undefined,
//               offsetY: 120,
//             },
//             value: {
//               offsetY: 76,
//               fontSize: "22px",
//               color: undefined,
//               formatter: function () {
//                 return value.toString() + " Months";
//               },
//             },
//           },
//         },
//       },
//       fill: {
//         type: "solid",
//         color: "#6B5FEC", // Adjust color as needed
//       },
//       stroke: {
//         dashArray: 4,
//       },
//       labels: ["Predicted Time"],
//     };

//     const chart = new ApexCharts(document.querySelector("#chart"), options);
//     chart.render();

//     // Cleanup
//     return () => chart.destroy();
//   }, []); // Empty dependency array to run effect only once

//   return <div id="chart" />;
// };

// export default DaysProgressBar;

import React, { useEffect, useState } from "react";
import ApexCharts from "apexcharts";

const DaysProgressBar = ({ batteryHealth }) => {
  const [predictedMonths, setPredictedMonths] = useState(24);

  useEffect(() => {
    // Map slider values to corresponding data values
    const valueMap = {
      0: 8,
      20: 24,
      40: 39,
      60: 48,
      80: 64,
      100: 94,
    };

    // Set predicted months based on batteryHealth
    const newPredictedMonths = valueMap[batteryHealth]; // Default value of 24 if lookup fails
    // console.log("New Predicted Months:", newPredictedMonths);
    setPredictedMonths(newPredictedMonths);
  }, [batteryHealth]);

  useEffect(() => {
    const maxValue = 96; // Maximum value for the gauge

    const options = {
      series: [(predictedMonths / maxValue) * 100],
      chart: {
        height: 300,
        type: "radialBar",
        offsetY: -10,
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              fontSize: "16px",
              color: undefined,
              offsetY: 120,
            },
            value: {
              offsetY: 76,
              fontSize: "22px",
              color: undefined,
              formatter: function () {
                return predictedMonths !== undefined
                  ? predictedMonths.toString() + " Months"
                  : "";
              },
            },
          },
        },
      },
      fill: {
        type: "solid",
        color: "#6B5FEC", // Adjust color as needed
      },
      stroke: {
        dashArray: 4,
      },
      labels: ["Predicted Time"],
    };

    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    // Cleanup
    return () => chart.destroy();
  }, [predictedMonths]);

  return <div id="chart" />;
};

export default DaysProgressBar;
