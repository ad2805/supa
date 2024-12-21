import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { Button, Box, Text, Flex } from "@mantine/core";

const UserInsightChargingStatus = () => {
  const [series, setSeries] = useState([]);
  const [options] = useState({
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    },
    yaxis: {
      title: {
        text: "Bikes Count",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return +val + " Bikes";
        },
      },
    },
    colors: ["#489CDA", "#DC8585"],
  });

  const thisWeekData = [
    {
      name: "Charged",
      data: [56235, 36423, 54245, 64562, 45621, 49424, 55642],
    },
    {
      name: "Not Charged",
      data: [37576, 47851, 65314, 36212, 54567, 60562, 48645],
    },
  ];

  const previousWeekData = [
    {
      name: "Charged",
      data: [40000, 30000, 35000, 42000, 38000, 41000, 39000],
    },
    {
      name: "Not Charged",
      data: [30000, 25000, 28000, 31000, 27000, 29000, 26000],
    },
  ];

  useEffect(() => {
    setSeries(thisWeekData); // Set default series data to "This Week" data
  }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

  const handleThisWeekClick = () => {
    setSeries(thisWeekData);
  };

  const handlePreviousWeekClick = () => {
    setSeries(previousWeekData);
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={350}
          width="99%"
        />
      </div>
      <div id="html-dist">
        <Flex justify="Space-around" align="center" ml="md" pb="md" gap="xl">
          <Flex gap="md">
            <Button
              onClick={handleThisWeekClick}
              variant={
                JSON.stringify(series) === JSON.stringify(thisWeekData)
                  ? "filled"
                  : "light"
              }
              bg={
                JSON.stringify(series) === JSON.stringify(thisWeekData)
                  ? "#489CDA"
                  : undefined // set to undefined for default background color
              }
            >
              This Week
            </Button>
            <Button
              onClick={handlePreviousWeekClick}
              variant={
                JSON.stringify(series) === JSON.stringify(previousWeekData)
                  ? "filled"
                  : "light"
              }
              bg={
                JSON.stringify(series) === JSON.stringify(previousWeekData)
                  ? "#489CDA"
                  : undefined // set to undefined for default background color
              }
              // c={
              //   JSON.stringify(series) === JSON.stringify(previousWeekData)
              //     ? undefined
              //     : "#182452" // set to undefined for default background color
              // }
            >
              Previous Week
            </Button>
          </Flex>
          <Box>
            <Text>Charged-Up Bikes Total: 54625</Text>
            <Text>Uncharged Bikes Total: 54625</Text>
          </Box>
        </Flex>
      </div>
    </div>
  );
};

export default UserInsightChargingStatus;
