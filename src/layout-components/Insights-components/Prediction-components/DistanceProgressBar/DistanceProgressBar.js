// import React, { useEffect } from "react";
// import ApexCharts from "apexcharts";

// const DistanceProgressBar = () => {
//   useEffect(() => {
//     const maxValue = 80000; // Maximum value for the gauge
//     const value = 18000; // Value for the gauge (adjust as needed)

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
//                 return value.toString() + " Km";
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
//       labels: ["Predicted Distance"],
//     };

//     const chart = new ApexCharts(document.querySelector("#chart1"), options);
//     chart.render();

//     // Cleanup
//     return () => chart.destroy();
//   }, []); // Empty dependency array to run effect only once

//   return <div id="chart1" />;
// };

// export default DistanceProgressBar;
import React, { useEffect, useState } from "react";
import ApexCharts from "apexcharts";

const DistanceProgressBar = ({ batteryHealth }) => {
  const [predictedDistance, setPredictedDistance] = useState(18000); // Default value for predicted distance

  useEffect(() => {
    // Map slider values to corresponding data values
    const valueMap = {
      0: 15000,
      20: 90000,
      40: 160000,
      60: 380000,
      80: 650000,
      100: 750000,
    };

    // Set predicted distance based on batteryHealth
    const newPredictedDistance = valueMap[batteryHealth] || 18000; // Default value of 18000 if lookup fails
    // console.log("New Predicted Distance:", newPredictedDistance);
    setPredictedDistance(newPredictedDistance);
  }, [batteryHealth]);

  useEffect(() => {
    const maxValue = 800000; // Maximum value for the gauge

    const options = {
      series: [(predictedDistance / maxValue) * 100],
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
                return predictedDistance.toString() + " Km";
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
      labels: ["Predicted Distance"],
    };

    const chart = new ApexCharts(document.querySelector("#chart1"), options);
    chart.render();

    // Cleanup
    return () => chart.destroy();
  }, [predictedDistance]);

  return <div id="chart1" />;
};

export default DistanceProgressBar;
