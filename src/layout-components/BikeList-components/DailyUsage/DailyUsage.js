import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { Box, Button, Flex, Text } from "@mantine/core";

const DailyUsage = ({ vehicle, selectedOption }) => {
  const [weekIndex, setWeekIndex] = useState(0);
  const [series, setSeries] = useState([]);
  const [average, setAverage] = useState(0);

  const weeksData = vehicle && vehicle.dailyUsage ? vehicle.dailyUsage[selectedOption] : [];
  const totalWeeks = weeksData.length;

  const options = {
    chart: {
      id: "basic-bar",
      height: 270
    },
    xaxis: {
      categories: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      labels: {
        style: {
          fontSize: "14px"
        }
      },
      title: {
        text: "Days",
        style: {
          fontSize: "16px"
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "14px"
        }
      },
      title: {
        text: selectedOption === "Kilometers" ? "kms" : "time",
        style: {
          fontSize: "16px"
        }
      }
    }
  };

  useEffect(() => {
    if (weeksData.length > 0) {
      const data = weeksData[weekIndex];
      const averageValue = calculateAverage(data);
      setAverage(averageValue.toFixed(2));

      setSeries([
        {
          name: `Week ${weekIndex + 1}`,
          data: data
        }
      ]);
    }
  }, [weekIndex, weeksData]);

  const handlePrevWeek = () => {
    if (weekIndex > 0) {
      setWeekIndex(weekIndex - 1);
    }
  };

  const handleNextWeek = () => {
    if (weekIndex < totalWeeks - 1) {
      setWeekIndex(weekIndex + 1);
    }
  };

  const calculateAverage = (data) => {
    const sum = data.reduce((acc, curr) => acc + curr, 0);
    return sum / data.length;
  };
  return (
    <Box w="auto" style={{ backgroundColor: "#ffffff" }}>
      <Chart options={options} series={series} type="bar" height={options.chart.height} />
      <Flex direction='row' justify='space-between'>
        <Flex direction="row" style={{ marginLeft: "10px" }}>
          <Button onClick={handlePrevWeek} disabled={weekIndex === 0}>
            Previous Week
          </Button>
          <Button onClick={handleNextWeek} disabled={weekIndex === totalWeeks - 1}>
            This Week
          </Button>
        </Flex>
        <Box p='10px'>
          <p>Average: {average}</p>
        </Box>
      </Flex>

    </Box>
  );
  };

export default DailyUsage;