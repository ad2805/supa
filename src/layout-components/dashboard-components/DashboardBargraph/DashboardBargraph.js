// import React, { useState, useEffect } from 'react';
// import ReactApexChart from 'react-apexcharts';
// // Import statement in Bargraph.js
// import chargingTimeData from "./../../../data/DashboardBargraphData/DashboardBargraphData.json";

// const DashboardBargraph = ({ selectedRegion, selectedModel }) => {
//   const [chartData, setChartData] = useState(null);

//   useEffect(() => {
//     if (selectedRegion && selectedModel) {
//       const regionData = chargingTimeData[selectedRegion];
//       if (regionData && regionData[selectedModel]) {
//         setChartData(regionData[selectedModel]);
//       }
//     }
//   }, [selectedRegion, selectedModel]);

//   if (!chartData) {
//     return <div>Loading...</div>; // or a loading spinner, etc.
//   }

//   const options = {
//     chart: {
//       type: 'bar',
//       height: 290,
//     },
//     plotOptions: {
//       bar: {
//         horizontal: false,
//         columnWidth: '55%',
//         endingShape: 'rounded',
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       show: true,
//       width: 2,
//       colors: ['transparent'],
//     },
//     xaxis: {
//       categories: ['2015', '2016'],
//     },
//     yaxis: {
//       title: {
//         text: 'Avg Users %',
//       },
//     },
//     fill: {
//       opacity: 1,
//       colors: ['#E0B92C', '#47A1E2'], // Specify colors for each series (Rural, Urban)
//     },
//     tooltip: {
//       y: {
//         formatter: function (val) {
//           return val + '%';
//         },
//       },
//     },
//     legend: {
//       position: 'bottom', // Set the legend position to bottom
//       floating: false, // Keep the legend in the default position
//       markers: {
//         fillColors: ['#E0B92C', '#47A1E2'], // Specify legend marker colors
//       },
//       formatter: function (seriesName, opts) {
//         const color = opts && opts.w && opts.w.globals && opts.w.globals.markers && opts.w.globals.markers.fillColors && opts.w.globals.markers.fillColors[opts.seriesIndex];
//         return `<div style="color: ${color || 'black'}">${seriesName}</div>`;
//       },
//     },
//   };

//   return (
//     <div id="chart">
//       <ReactApexChart options={options} series={chartData.series} type="bar" height={options.chart.height} />
//     </div>
//   );
// };

// export default DashboardBargraph;

// import React, { useEffect } from 'react';
// import ApexCharts from 'apexcharts';
// const DashboardBargraph = () => {
//   useEffect(() => {
//     const options = {
//       series: [{
//         data: [21, 22]
//       }],
//       chart: {
//         height: 350,
//         type: 'bar',
//         events: {
//           click: function(chart, w, e) {
//             // console.log(chart, w, e)
//           }
//         }
//       },
//       colors: ['#6ab04c'],
//       plotOptions: {
//         bar: {
//           columnWidth: '45%',
//           distributed: true,
//         }
//       },
//       dataLabels: {
//         enabled: false
//       },
//       legend: {
//         show: false
//       },
//       xaxis: {
//         categories: [
//           ['John', 'Doe'],
//           ['Joe', 'Smith'],
//           ['Jake', 'Williams'],
//           'Amber',
//           ['Peter', 'Brown'],
//           ['Mary', 'Evans'],
//           ['David', 'Wilson'],
//           ['Lily', 'Roberts'],
//         ],
//         labels: {
//           style: {
//             colors: ['#6ab04c'],
//             fontSize: '12px'
//           }
//         }
//       }
//     };

//     const chart = new ApexCharts(document.querySelector("#chart"), options);
//     chart.render();

//     // Clean up function to destroy the chart when component unmounts
//     return () => chart.destroy();
//   }, []); // Empty dependency array ensures useEffect runs only once on component mount

//   return <div id="chart" height="10vh"></div>;
// }

// export default DashboardBargraph;
// import React, { useEffect } from "react";
// import Highcharts from "highcharts";
// import chargingTImeData from "./../../../data/DashboardBargraphData/DashboardBargraphData.json";
// const DashboardBargraph = ({ selectedRegion, selectedModel }) => {
//   const [chartData, setChartData] = useState(null);

//   useEffect(() => {
//     if (selectedRegion && selectedModel) {
//       const regionData = DashboardBargraph[selectedRegion];
//       if (regionData && regionData[selectedModel]) {
//         setChartData(regionData[selectedModel]);
//       }
//     }
//   }, [selectedRegion, selectedModel]);
//   useEffect(() => {
//     // Define the chart options
//     const options = {
//       chart: {
//         type: "column",
//       },
//       title: {
//         text: null, // Set title to null to remove it
//       },
//       credits: {
//         enabled: false, // Disable credits
//       },
//       yAxis: {
//         min: 0,
//         title: {
//           text: "Time",
//         },
//       },
//       tooltip: {
//         valueSuffix: "Hours",
//       },
//       plotOptions: {
//         column: {
//           pointPadding: 0.2,
//           borderWidth: 0,
//         },
//       },
//       series: [
//         {
//           name: "Fast Charger",
//           data: [1.5],
//         },
//         {
//           name: "Normal Charger",
//           data: [3.5],
//         },
//       ],
//     };

//     // Render the chart
//     Highcharts.chart("containe", options);
//   }, []); // Empty dependency array ensures useEffect runs only once

//   return <div id="containe" style={{ height: "220px" }} />;
// };

// export default DashboardBargraph;



import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import chargingTimeData from "./../../../data/DashboardBargraphData/DashboardBargraphData.json";

const DashboardBargraph = ({ selectedRegion, selectedModel }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (selectedRegion && selectedModel) {
      const regionData = chargingTimeData[selectedRegion];
      if (regionData && regionData[selectedModel]) {
        setChartData(regionData[selectedModel]);
      }
    }
  }, [selectedRegion, selectedModel]);

  useEffect(() => {
    if (chartData) {
      // Format data for Highcharts series
      const formattedData = [
        { name: 'Fast Charger', data: chartData[0].fastcharger , color:  "#71B6B2"},
        { name: 'Normal Charger', data: chartData[1].normalcharger , color: "#E0B92C"}
      ];

      // Define the chart options with custom colors
      const options = {
        chart: {
          type: "column",
        },
        title: {
          text: null, // Set title to null to remove it
        },
        credits: {
          enabled: false, // Disable credits
        },
        yAxis: {
          min: 0,
          title: {
            text: "Time",
          },
        },
        tooltip: {
          valueSuffix: "Hours",
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0,
          },
        },
        series: formattedData,
      };

      // Render the chart
      Highcharts.chart("bar-container", options);
    }
  }, [chartData]);

  return <div id="bar-container" style={{ height: "215px" }} />;
};

export default DashboardBargraph;
