// // Pie.js
// import { useEffect } from "react";
// import Highcharts from "highcharts";

// const Pie = ({ serviced, dueForService }) => {
//   useEffect(() => {
//     // Replace the colors with your desired color values
//     const colors = ["#6D6BCB", "#838383"];

//     const options = {
//       chart: {
//         plotBackgroundColor: null,
//         plotBorderWidth: null,
//         plotShadow: false,
//         type: "pie",
//         width: 200,
//         height: 250,
//       },
//       title: {
//         text: "",
//       },
//       tooltip: {
//         pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
//       },
//       accessibility: {
//         point: {
//           valueSuffix: "%",
//         },
//       },
//       plotOptions: {
//         pie: {
//           allowPointSelect: true,
//           cursor: "pointer",
//           colors,
//           borderRadius: 5,
//           dataLabels: {
//             enabled: true,
//             format: "{point.percentage:.1f}%",
//             distance: -50,
//             filter: {
//               property: "percentage",
//               operator: ">",
//               value: 4,
//             },
//           },
//         },
//       },
//       credits: {
//         enabled: false,
//       },
//       series: [
//         {
//           name: "Vehicles",
//           data: [
//             { name: "Serviced", y: serviced },
//             { name: "Due for service", y: dueForService },
//           ],
//         },
//       ],
//     };

//     Highcharts.chart("container", options);
//   }, [serviced, dueForService]);

//   return <div id="container"></div>;
// };

// export default Pie;

import { useEffect } from "react";
import Highcharts from "highcharts";

const Pie = ({ serviced, dueForService }) => {
  useEffect(() => {
    // Replace the colors with your desired color values
    const colors = ["#6D6BCB", "#838383"];

    const options = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
        // Default width and height
        width: 200,
        height: 250,
      },
      title: {
        text: "",
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      },
      accessibility: {
        point: {
          valueSuffix: "%",
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          colors,
          borderRadius: 5,
          dataLabels: {
            enabled: true,
            format: "{point.percentage:.1f}%",
            distance: -50,
            filter: {
              property: "percentage",
              operator: ">",
              value: 4,
            },
          },
        },
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: "Vehicles",
          data: [
            { name: "Serviced", y: serviced },
            { name: "Due for service", y: dueForService },
          ],
        },
      ],
    };

    // Apply media queries to adjust chart size based on screen size
    if (window.innerWidth < 768) {
      options.chart.width = 100;
      options.chart.height = 170;
    } else if (window.innerWidth < 992) {
      options.chart.width = 180;
      options.chart.height = 220;
    } else if (window.innerWidth > 1572) {
      options.chart.width = 250;
      options.chart.height = 250;
    }

    Highcharts.chart("container", options);
  }, [serviced, dueForService]);

  return <div id="container"></div>;
};

export default Pie;
