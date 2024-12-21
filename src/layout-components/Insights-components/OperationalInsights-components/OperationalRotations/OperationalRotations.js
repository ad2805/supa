// import React, { useEffect, useMemo, useRef } from "react";
// import * as d3 from "d3";
// import  VerticalViolinShape  from "./VerticalViolinShape";
// import { data } from "./data"; // Import the data directly within the component

// const MARGIN = { top: 30, right: 30, bottom: 30, left: 30 };

// const Violin = ({ width = 700, height = 400 }) => {
//   const axesRef = useRef(null);
//   const boundsWidth = width - MARGIN.right - MARGIN.left;
//   const boundsHeight = height - MARGIN.top - MARGIN.bottom;

//   const { min, max, groups } = useMemo(() => {
//     const [min, max] = d3.extent(data.map((d) => d.value));
//     const groups = data.map((d) => d.name).filter((x, i, a) => a.indexOf(x) === i);
//     return { min, max, groups };
//   }, []);

//   const yScale = d3.scaleLinear().domain([min, max]).range([boundsHeight, 0]).nice();

//   const xScale = d3.scaleBand().range([0, boundsWidth]).domain(groups).padding(0.25);

//   useEffect(() => {
//     const svgElement = d3.select(axesRef.current);
//     svgElement.selectAll("*").remove();
//     const xAxisGenerator = d3.axisBottom(xScale);
//     svgElement
//       .append("g")
//       .attr("transform", `translate(0, ${boundsHeight})`)
//       .call(xAxisGenerator);

//     const yAxisGenerator = d3.axisLeft(yScale);
//     svgElement.append("g").call(yAxisGenerator);
//   }, [xScale, yScale, boundsHeight]);

//   const allShapes = groups.map((group, i) => {
//     const groupData = data.filter((d) => d.name === group).map((d) => d.value);
//     return (
//       <g key={i} transform={`translate(${xScale(group)},0)`}>
//         <VerticalViolinShape data={groupData} yScale={yScale} width={xScale.bandwidth()} binNumber={20} />
//       </g>
//     );
//   });

//   return (
//     <div>
//       <svg width={width} height={height} style={{ display: "inline-block" }}>
//         <g width={boundsWidth} height={boundsHeight} transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}>
//           {allShapes}
//         </g>
//         <g width={boundsWidth} height={boundsHeight} ref={axesRef} transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`} />
//       </svg>
//     </div>
//   );
// };
// import React, { useEffect, useMemo, useRef } from "react";
// import * as d3 from "d3";
// import  VerticalViolinShape  from "./VerticalViolinShape";
// import { data } from "./data"; // Import the data directly within the component

// const MARGIN = { top: 30, right: 30, bottom: 30, left: 30 };

// const Violin = ({ width = 700, height = 400 }) => {
//   const axesRef = useRef(null);
//   const boundsWidth = width - MARGIN.right - MARGIN.left;
//   const boundsHeight = height - MARGIN.top - MARGIN.bottom;

//   const { min, max, groups } = useMemo(() => {
//     const [min, max] = d3.extent(data.map((d) => d.value));
//     const groups = data.map((d) => d.name).filter((x, i, a) => a.indexOf(x) === i);
//     return { min, max, groups };
//   }, []);

//   const yScale = d3.scaleLinear().domain([min, max]).range([boundsHeight, 0]).nice();

//   const xScale = d3.scaleBand().range([0, boundsWidth]).domain(groups).padding(0.25);

//   useEffect(() => {
//     const svgElement = d3.select(axesRef.current);
//     svgElement.selectAll("*").remove();
//     const xAxisGenerator = d3.axisBottom(xScale);
//     svgElement
//       .append("g")
//       .attr("transform", `translate(0, ${boundsHeight})`)
//       .call(xAxisGenerator);

//     const yAxisGenerator = d3.axisLeft(yScale);
//     svgElement.append("g").call(yAxisGenerator);
//   }, [xScale, yScale, boundsHeight]);

//   const allShapes = groups.map((group, i) => {
//     const groupData = data.filter((d) => d.name === group).map((d) => d.value);
//     return (
//       <g key={i} transform={`translate(${xScale(group)},0)`}>
//         <VerticalViolinShape data={groupData} yScale={yScale} width={xScale.bandwidth()} binNumber={20} />
//       </g>
//     );
//   });

//   return (
//     <div>
//       <svg width={width} height={height} style={{ display: "inline-block" }}>
//         <g width={boundsWidth} height={boundsHeight} transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}>
//           {allShapes}
//         </g>
//         <g width={boundsWidth} height={boundsHeight} ref={axesRef} transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`} />
//       </svg>
//     </div>
//   );
// };

import { Paper } from "@mantine/core";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

function OperationalRotations() {
  const [series] = useState([
    {
      name: "RPM",
      data: [
        { x: 30, y: 16.4, power: 5 },
        { x: 28, y: 21.7, power: 2 },
        { x: 28, y: 21.7, power: 2 },
        { x: 32, y: 25.4, power: 3 },
        { x: 29, y: 19, power: 4 },
        { x: 31, y: 10.9, power: 5 },
        { x: 30, y: 16.4, power: 1 },
        { x: 28, y: 21.7, power: 2 },
        { x: 32, y: 25.4, power: 3 },
        { x: 29, y: 19, power: 4 },
        { x: 31, y: 10.9, power: 5 },
        { x: 35, y: 18.3, power: 1 },
        { x: 27, y: 22.9, power: 2 },
        { x: 33, y: 27.1, power: 3 },
        { x: 30, y: 20.5, power: 4 },
        { x: 36, y: 12.6, power: 5 },
        { x: 38, y: 17.8, power: 1 },
        { x: 25, y: 23.4, power: 2 },
        { x: 29, y: 29.8, power: 3 },
        { x: 31, y: 24.3, power: 4 },
        { x: 34, y: 14.7, power: 5 },
        { x: 40, y: 19.2, power: 1 },
        { x: 26, y: 26.5, power: 2 },
        { x: 30, y: 30.1, power: 3 },
        { x: 32, y: 28.6, power: 4 },
        { x: 37, y: 15.9, power: 5 },
        { x: 33, y: 21.4, power: 1 },
        { x: 29, y: 25.7, power: 2 },
        { x: 31, y: 29.4, power: 3 },
        { x: 28, y: 22, power: 4 },
        { x: 35, y: 13.9, power: 5 },
        { x: 32, y: 20.4, power: 1 },
        { x: 26, y: 25.7, power: 2 },
        { x: 30, y: 28.4, power: 3 },
        { x: 27, y: 21, power: 4 },
        { x: 34, y: 12.9, power: 5 },
        { x: 31, y: 19.3, power: 1 },
        { x: 35, y: 23.6, power: 2 },
        { x: 27, y: 27.1, power: 3 },
        { x: 33, y: 20.5, power: 4 },
        { x: 29, y: 11.6, power: 5 },
        { x: 38, y: 15.8, power: 1 },
        { x: 24, y: 22.4, power: 2 },
        { x: 28, y: 28.8, power: 3 },
        { x: 30, y: 23.3, power: 4 },
        { x: 35, y: 14.7, power: 5 },
        { x: 28, y: 16.8, power: 2 },
        { x: 31, y: 21.3, power: 3 },
        { x: 33, y: 25.9, power: 4 },
        { x: 27, y: 19.6, power: 5 },
        { x: 29, y: 11.2, power: 1 },
        { x: 36, y: 17.4, power: 2 },
        { x: 38, y: 22.8, power: 3 },
        { x: 35, y: 27.1, power: 4 },
        { x: 30, y: 20.5, power: 5 },
        { x: 32, y: 10.9, power: 1 },
        { x: 28, y: 18.3, power: 2 },
        { x: 30, y: 23.4, power: 3 },
        { x: 29, y: 27.8, power: 4 },
        { x: 31, y: 15.7, power: 5 },
        { x: 36, y: 19.2, power: 1 },
        { x: 38, y: 26.5, power: 2 },
        { x: 35, y: 31.1, power: 3 },
        { x: 33, y: 28.6, power: 4 },
        { x: 29, y: 17.9, power: 5 },
        { x: 31, y: 13.2, power: 1 },
        { x: 28, y: 18.9, power: 2 },
        { x: 30, y: 22.1, power: 3 },
        { x: 32, y: 27.4, power: 4 },
        { x: 37, y: 16.8, power: 5 },
        { x: 39, y: 11.4, power: 1 },
        { x: 34, y: 17.3, power: 2 },
        { x: 31, y: 22.9, power: 3 },
        { x: 33, y: 26.5, power: 4 },
        { x: 30, y: 19.8, power: 5 },
        { x: 32, y: 25.4, power: 3 },
        { x: 29, y: 19, power: 4 },
        { x: 31, y: 10.9, power: 5 },
        { x: 30, y: 16.4, power: 1 },
        { x: 28, y: 21.7, power: 2 },
        { x: 32, y: 25.4, power: 3 },
        { x: 29, y: 19, power: 4 },
        { x: 31, y: 10.9, power: 5 },
        { x: 35, y: 18.3, power: 1 },
        { x: 27, y: 22.9, power: 2 },
        { x: 33, y: 27.1, power: 3 },
        { x: 30, y: 20.5, power: 4 },
        { x: 36, y: 12.6, power: 5 },
        { x: 38, y: 17.8, power: 1 },
        { x: 25, y: 23.4, power: 2 },
        { x: 29, y: 29.8, power: 3 },
        { x: 31, y: 24.3, power: 4 },
        { x: 34, y: 14.7, power: 5 },
        { x: 40, y: 19.2, power: 1 },
        { x: 26, y: 26.5, power: 2 },
        { x: 30, y: 30.1, power: 3 },
        { x: 32, y: 28.6, power: 4 },
        { x: 37, y: 15.9, power: 5 },
        { x: 33, y: 21.4, power: 1 },
        { x: 29, y: 25.7, power: 2 },
        { x: 31, y: 29.4, power: 3 },
        { x: 28, y: 22, power: 4 },
        { x: 35, y: 13.9, power: 5 },
        { x: 32, y: 20.4, power: 1 },
        { x: 26, y: 25.7, power: 2 },
        { x: 30, y: 28.4, power: 3 },
        { x: 27, y: 21, power: 4 },
        { x: 34, y: 12.9, power: 5 },
        { x: 31, y: 19.3, power: 1 },
        { x: 35, y: 23.6, power: 2 },
        { x: 27, y: 27.1, power: 3 },
        { x: 33, y: 20.5, power: 4 },
        { x: 29, y: 11.6, power: 5 },
        { x: 38, y: 15.8, power: 1 },
        { x: 24, y: 22.4, power: 2 },
        { x: 28, y: 28.8, power: 3 },
        { x: 30, y: 23.3, power: 4 },
        { x: 35, y: 14.7, power: 5 },
        { x: 28, y: 16.8, power: 2 },
        { x: 31, y: 21.3, power: 3 },
        { x: 33, y: 25.9, power: 4 },
        { x: 27, y: 19.6, power: 5 },
        { x: 29, y: 11.2, power: 1 },
        { x: 36, y: 17.4, power: 2 },
        { x: 38, y: 22.8, power: 3 },
        { x: 35, y: 27.1, power: 4 },
        { x: 30, y: 20.5, power: 5 },
        { x: 32, y: 10.9, power: 1 },
        { x: 28, y: 18.3, power: 2 },
        { x: 30, y: 23.4, power: 3 },
        { x: 29, y: 27.8, power: 4 },
        { x: 31, y: 15.7, power: 5 },
        { x: 36, y: 19.2, power: 1 },
        { x: 38, y: 26.5, power: 2 },
        { x: 35, y: 31.1, power: 3 },
        { x: 33, y: 28.6, power: 4 },
        { x: 29, y: 17.9, power: 5 },
        { x: 31, y: 13.2, power: 1 },
        { x: 28, y: 18.9, power: 2 },
        { x: 30, y: 22.1, power: 3 },
        { x: 32, y: 27.4, power: 4 },
        { x: 37, y: 16.8, power: 5 },
        { x: 39, y: 11.4, power: 1 },
        { x: 34, y: 17.3, power: 2 },
        { x: 31, y: 22.9, power: 3 },
        { x: 33, y: 26.5, power: 4 },
        { x: 30, y: 19.8, power: 5 },
        // Add more data points here
      ],
    },
  ]);

  const [options] = useState({
    chart: {
      height: 350,
      type: "scatter",
      zoom: {
        enabled: true,
        type: "xy",
      },
    },
    xaxis: {
      tickAmount: 10,
      title: {
        text: "Speed",
      },
    },
    yaxis: {
      tickAmount: 7,
      title: {
        text: "RPM",
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      borderColor: "#f1f1f1",
    },
    legend: {
      show: true,
      position: "top",
      formatter: function (seriesName, opts) {
        return (
          '<span style="color: ' +
          opts.dataSeries.color +
          '">' +
          seriesName +
          "</span>"
        );
      },
    },
  });

  const mapPowerToColor = (power) => {
    switch (power) {
      case 1:
        return "#FFFF00";
      case 2:
        return "#ADFF2F";
      case 3:
        return "#7FFF00";
      case 4:
        return "#00FF00";
      case 5:
        return "#1A4718";
      default:
        return "#FFFFFF";
    }
  };

  // Map data points to include color
  const mappedSeries = series.map((item) => ({
    ...item,
    data: item.data.map(({ x, y, power }) => ({
      x,
      y,
      power,
      fillColor: mapPowerToColor(power),
    })),
  }));

  return (
    <Paper>
      <div id="legend" style={{ textAlign: "center", paddingTop: "5px" }}>
        <span style={{ marginRight: "10px" }}>Power:</span>
        <span style={{ color: "#FFFF00", marginRight: "10px" }}>1 kW</span>{" "}
        <span style={{ color: "#7FFF00", marginRight: "10px" }}>2 kW</span>{" "}
        <span style={{ color: "#7FFF00", marginRight: "10px" }}>3 kW</span>{" "}
        <span style={{ color: "#7FFF00", marginRight: "10px" }}>4 kW</span>{" "}
        <span style={{ color: "#1A4718" }}>5 kW</span>
      </div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={mappedSeries}
          type="scatter"
          height={320}
        />
      </div>
      <div id="html-dist"></div>
    </Paper>
  );
}

export default OperationalRotations;
