// import React, { useState } from 'react';
// import ReactApexChart from 'react-apexcharts';

// const Bargraph = () => {
//   const [chartData] = useState({
//     series: [{
//       name: 'Rural',
//       data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
//     }, {
//       name: 'Urban',
//       data: [76, 85, 56, 90, 87, 27, 91, 84, 94]
//     }],
//     options: {
//       chart: {
//         type: 'bar',
//         height: 280 // Change the height to your desired value
//       },
//       plotOptions: {
//         bar: {
//           horizontal: false,
//           columnWidth: '55%',
//           endingShape: 'rounded'
//         },
//       },
//       dataLabels: {
//         enabled: false
//       },
//       stroke: {
//         show: true,
//         width: 2,
//         colors: ['transparent']
//       },
//       xaxis: {
//         categories: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
//       },
//       yaxis: {
//         title: {
//           text: 'Avg Users %'
//         }
//       },
//       fill: {
//         opacity: 1,
//         colors: ['#E0B92C', '#47A1E2'], // Specify colors for each series (Rural, Urban)
//       },
//       tooltip: {
//         y: {
//           formatter: function (val) {
//             return val + '%';
//           }
//         }
//       },
//       legend: {
//         position: 'bottom', // Set the legend position to bottom
//         floating: false, // Keep the legend in the default position
//         markers: {
//           fillColors: ['#E0B92C', '#47A1E2'] // Specify legend marker colors
//         },
//         formatter: function (seriesName, opts) {
//           const color = opts && opts.w && opts.w.globals && opts.w.globals.markers && opts.w.globals.markers.fillColors && opts.w.globals.markers.fillColors[opts.seriesIndex];
//           return `<div style="color: ${color || 'black'}">${seriesName}</div>`;
//         },
//       }
//     }
//   });

//   return (
//     <div id="chart">
//       <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={chartData.options.chart.height} />
//     </div>
//   );
// };

import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
// Import statement in Bargraph.js
import bluetoothData from '../../../../data/ReportsBluetoothData/ReportsBluetoothData.json';


const Bargraph = ({ selectedRegion, selectedModel }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (selectedRegion && selectedModel) {
      const regionData = bluetoothData[selectedRegion];
      if (regionData && regionData[selectedModel]) {
        setChartData(regionData[selectedModel]);
      }
    }
  }, [selectedRegion, selectedModel]);

  if (!chartData) {
    return <div>Loading...</div>; // or a loading spinner, etc.
  }

  const options = {
    chart: {
      type: 'bar',
      height: 290,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
    },
    yaxis: {
      title: {
        text: 'Avg Users %',
      },
    },
    fill: {
      opacity: 1,
      colors: ['#E0B92C', '#47A1E2'], // Specify colors for each series (Rural, Urban)
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + '%';
        },
      },
    },
    legend: {
      position: 'bottom', // Set the legend position to bottom
      floating: false, // Keep the legend in the default position
      markers: {
        fillColors: ['#E0B92C', '#47A1E2'], // Specify legend marker colors
      },
      formatter: function (seriesName, opts) {
        const color = opts && opts.w && opts.w.globals && opts.w.globals.markers && opts.w.globals.markers.fillColors && opts.w.globals.markers.fillColors[opts.seriesIndex];
        return `<div style="color: ${color || 'black'}">${seriesName}</div>`;
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={chartData.series} type="bar" height={options.chart.height} />
    </div>
  );
};

export default Bargraph;
