// import React from 'react';
// import ReactApexChart from 'react-apexcharts';

// const Donut = () => {
//   const chartData = {
//     series: [44456, 15005, 4041],
//     options: {
//       chart: {
//         type: 'donut',
//        // Change the height to your desired value
//       },
//       responsive: [{
//         breakpoint: 480,
//         options: {
//           chart: {
//             width: 300
//           },
//           legend: {
//             position: 'bottom'
//           }
//         }
//       }],
//       legend: {
//         position: 'bottom',
//       },
//       labels: ['120k-80 km', '80k-40k km', '<40k'], // Custom labels for each data point
//     }
//   };

//   return (
//     <div id="chart">
//       <ReactApexChart options={chartData.options} series={chartData.series} type="donut" />
//     </div>
//   );
// };

// export default Donut;

// Donut.js
import React from 'react';
import ReactApexChart from 'react-apexcharts';


const Donut = ({ regionData, selectedModel }) => {
  const chartSeries = regionData[selectedModel].series;

  const chartOptions = {
    chart: {
      type: 'donut',
    },
    labels: ['120k-80 km', '80k-40k km', '<40k'],
    legend: {
      position: 'bottom',
    },
    colors: ['#9E3535', '#578357', '#E0B92C'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
        },
      },
    ],
  };

  return (
    <div id="chart">
      <ReactApexChart options={chartOptions} series={chartSeries} type="donut" width={405} />
    </div>
  );
};

export default Donut;
