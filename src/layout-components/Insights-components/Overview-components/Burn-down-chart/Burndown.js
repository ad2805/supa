// import React, { useEffect } from 'react';
// import ReactHighcharts from 'react-highcharts';

// const Burndown = () => {
//   useEffect(() => {
//     const options = {
//       title: {
//         text: 'Burn Down Chart',
//         x: -20,
//       },
//       xAxis: {
//         title: {
//           text: 'Kilometer',
//         },
//         min: 0,
//       },
//       yAxis: {
//         title: {
//           text: 'Battery %',
//         },
//         min: 0,
//         max: 100, // Set the maximum value for the y-axis
//       },
//       series: [
//         {
//           name: 'Line 1',
//           color: 'rgba(255, 0, 0, 0.25)',
//           lineWidth: 2,
//           marker: {
//             radius: 6,
//           },
//           data: [
//             { x: 0, y: 100 },
//             { x: 90, y: 0 },
//           ],
//         },
//         {
//           name: 'Line 2',
//           color: 'grey',
//           lineWidth: 2,
//           marker: {
//             radius: 6,
//           },
//           data: [
//             { x: 0, y: 100 },
//             { x: 80, y: 0 },
//           ],
//         },
//         {
//           name: 'Line 3',
//           color: 'yellow',
//           lineWidth: 2,
//           marker: {
//             radius: 6,
//           },
//           data: [
//             { x: 0, y: 100 },
//             { x: 30, y: 0 },
//           ],
//         },
//         // Additional series...
//       ],
//     };

//     // Render the chart using ReactHighcharts
//     ReactHighcharts.Highcharts.chart('container', options);
//   }, []);

//   return(
//     <>

//         <div id="container" />

//     </>);
// };

// export default Burndown;

// // Burndown.jsx
// import React, { useEffect } from "react";
// import ReactHighcharts from "react-highcharts";


// const Burndown = ({ selectedOption }) => {
//   useEffect(() => {
//     let xAxisTitle, line1Data, line2Data, line3Data;

//     if (selectedOption === "batteryVsDistance") {
//       xAxisTitle = "Kilometer";
//       line1Data = [
//         { x: 0, y: 100 },
//         { x: 90, y: 0 },
//       ];
//       line2Data = [
//         { x: 0, y: 100 },
//         { x: 75, y: 0 },
//       ];
//       line3Data = [
//         { x: 0, y: 100 },
//         { x: 60, y: 0 },
//       ];
//     } else if (selectedOption === "batteryVsTime") {
//       xAxisTitle = "Days";
//       line1Data = [
//         { x: 0, y: 100 },
//         { x: 9, y: 0 },
//       ];
//       line2Data = [
//         { x: 0, y: 100 },
//         { x: 8, y: 0 },
//       ];
//       line3Data = [
//         { x: 0, y: 100 },
//         { x: 6, y: 0 },
//       ];
//     }

//     const options = {
//       title: {
//         text: "",
//         x: -20,
//       },
//       xAxis: {
//         title: {
//           text: xAxisTitle,
//         },
//         min: 0,
//       },
//       yAxis: {
//         title: {
//           text: "Battery %",
//         },
//         min: 0,
//         max: 100,
//       },
//       chart: {
//         height: 300, // Set the desired height here
//       },
//       credits: {
//         enabled: false, // Disable Highcharts credits
//       },
//       series: [
//         {
//           name: "Highest Range",
//           color: "#9E3535",
//           lineWidth: 2,
//           marker: {
//             radius: 6,
//           },
//           data: line1Data,
//         },
//         {
//           name: "Average Range",
//           color: "#3B8157",
//           lineWidth: 2,
//           marker: {
//             radius: 6,
//           },
//           data: line2Data,
//         },
//         {
//           name: "Lowest Range",
//           color: "#47A1E2",
//           lineWidth: 2,
//           marker: {
//             radius: 6,
//           },
//           data: line3Data,
//         },
//         // Additional series...
//       ],
//     };

//     ReactHighcharts.Highcharts.chart("container", options);
//   }, [selectedOption]);

//   return <div id="container" />;
// };



// export default Burndown;



// import React, { useEffect, useState } from "react";
// import ReactHighcharts from "react-highcharts";
// import burndownData from "./../../data/Reports-bunrdown-data/ReportsBurnDownData.json"; // Adjust the path

// const Burndown = ({ selectedOption }) => {
//   const [selectedData, setSelectedData] = useState(null);

//   useEffect(() => {
//     // Assuming the initial region is hardcoded or obtained from elsewhere
//     const initialRegion = "India";
//     setSelectedData(burndownData[initialRegion][selectedOption]);
//   }, [selectedOption]);

//   useEffect(() => {
//     if (!selectedData) {
//       return;
//     }

//     console.log("Selected Data:", selectedData); // Add this log to check selectedData

//     const { xAxisTitle, highestrange, averagerange, lowestrange } = selectedData;

//     // Dynamically set x value from JSON, and completely remove y value
//     const modifiedHighestRange = [
//       { x: 0, y: 100 },
//       { x: highestrange.point.x, y: 0 },
//     ];

//     const modifiedAverageRange = [
//       { x: 0, y: 100 },
//       { x: averagerange.point.x, y: 0 },
//     ];

//     const modifiedLowestRange = [
//       { x: 0, y: 100 },
//       { x: lowestrange.point.x, y: 0 },
//     ];

//     const options = {
//       title: {
//         text: "",
//         x: -20,
//       },
//       xAxis: {
//         title: {
//           text: xAxisTitle,
//         },
//         min: 0,
//       },
//       yAxis: {
//         title: {
//           text: "Battery %",
//         },
//         min: 0,
//         max: 100,
//       },
//       chart: {
//         height: 300, // Set the desired height here
//       },
//       credits: {
//         enabled: false, // Disable Highcharts credits
//       },
//       series: [
//         {
//           name: "Highest Range",
//           color: "#9E3535",
//           lineWidth: 2,
//           marker: {
//             radius: 6,
//           },
//           data: modifiedHighestRange,
//         },
//         {
//           name: "Average Range",
//           color: "#3B8157",
//           lineWidth: 2,
//           marker: {
//             radius: 6,
//           },
//           data: modifiedAverageRange,
//         },
//         {
//           name: "Lowest Range",
//           color: "#47A1E2",
//           lineWidth: 2,
//           marker: {
//             radius: 6,
//           },
//           data: modifiedLowestRange,
//         },
//         // Additional series...
//       ],
//     };

//     ReactHighcharts.Highcharts.chart("container", options);
//   }, [selectedData]);

//   return <div id="container" />;
// };

// export default Burndown;


// Burndown.js
import React, { useEffect, useState } from "react";
import ReactHighcharts from "react-highcharts";
import burndownData from "../../../../data/Reports-bunrdown-data/ReportsBurnDownData.json";

const Burndown = ({ selectedOption, selectedRegion, selectedModel }) => {
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    if (selectedRegion && burndownData[selectedRegion]) {
      const regionData = burndownData[selectedRegion];
      
      if (selectedModel === "AllModels") {
        // Use the first model's data as the default if AllModels is selected
        setSelectedData(regionData.Models[0][selectedOption]);
      } else {
        const modelData = regionData.Models.find(
          (model) => model.Model === selectedModel
        );

        if (modelData) {
          setSelectedData(modelData[selectedOption]);
        }
      }
    }
  }, [selectedOption, selectedRegion, selectedModel]);

  useEffect(() => {
    if (!selectedData) {
      return;
    }

    const { xAxisTitle, highestrange, averagerange, lowestrange } = selectedData;

    const modifiedHighestRange = [
      { x: 0, y: 100 },
      { x: highestrange.point.x, y: 0 },
    ];

    const modifiedAverageRange = [
      { x: 0, y: 100 },
      { x: averagerange.point.x, y: 0 },
    ];

    const modifiedLowestRange = [
      { x: 0, y: 100 },
      { x: lowestrange.point.x, y: 0 },
    ];

    const options = {
      title: {
        text: "",
        x: -20,
      },
      xAxis: {
        title: {
          text: xAxisTitle,
        },
        min: 0,
      },
      yAxis: {
        title: {
          text: "Battery %",
        },
        min: 0,
        max: 100,
      },
      chart: {
        height: 300,
        style: {
          borderRadius: "5px" ,
        },
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: "Highest Range",
          color: "#9E3535",
          lineWidth: 2,
          marker: {
            radius: 6,
          },
          data: modifiedHighestRange,
        },
        {
          name: "Average Range",
          color: "#3B8157",
          lineWidth: 2,
          marker: {
            radius: 6,
          },
          data: modifiedAverageRange,
        },
        {
          name: "Lowest Range",
          color: "#47A1E2",
          lineWidth: 2,
          marker: {
            radius: 6,
          },
          data: modifiedLowestRange,
        },
      ],
    };

    ReactHighcharts.Highcharts.chart("container", options);
  }, [selectedData]);

  return <div id="container" />;
};

export default Burndown;
