// Reports.js
import React, { useState } from "react";
import { Box, Paper, Flex, Text, Group } from "@mantine/core";
import Ring from "../../../layout-components/Insights-components/Overview-components/Ring-progress-Battery/Ring";
import Burndown from "../../../layout-components/Insights-components/Overview-components/Burn-down-chart/Burndown";
import "./Overview.css";
import Bargraph from "../../../layout-components/Insights-components/Overview-components/Bar-graph/Bargraph";
import Donut from "../../../layout-components/Insights-components/Overview-components/Donut-graph/Donut";
import SelectBurn from "../../../layout-components/Insights-components/Overview-components/Burndown-select/SelectBurn";
import DashboardRegionSelect from "../../../layout-components/dashboard-components/DashboardRegionSelect/DashboardRegionSelect";
import DashboardModelSelect from "../../../layout-components/dashboard-components/DashboardModelSelect/DashboardModelSelect";
import batteryData from "../../../data/ReportsBatteryHealthData/ReportsBatteryHealthData.json";
import distanceData from "../../../data/ReportDistanceData/ReportDiastanceData.json";

const Overview = () => {
  const [selectedOption, setSelectedOption] = useState("batteryVsDistance");
  const [selectedRegion, setSelectedRegion] = useState("India");
  const [selectedModel, setSelectedModel] = useState("AllModels");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const handleModelChange = (selectedModel) => {
    setSelectedModel(selectedModel);
  };

  return (
    <Paper m="5px" bg="#EBEBEB">
      <Flex
        justify="space-between"
        gap="sm"
        m="20px"
        pt="sm"
        className="reportSelectBar"
      >
        <Text size="24px">Overview</Text>
        <Flex>
          <Box>
            <DashboardRegionSelect onChange={handleRegionChange} />
          </Box>
          <Box>
            <DashboardModelSelect onChange={handleModelChange} />
          </Box>
        </Flex>
      </Flex>
      <Paper bg="#FFFFFF80" p="20px" style={{ borderRadius: "5px" }} mt="md">
        <Flex justify="space-between" className="reportFlex">
          <Box
            m="10px"
            p="5px"
            w="60%"
            bg="#EBEBEB"
            style={{ borderRadius: "5px" }}
            className="reportBox"
          >
            <Flex justify="space-between" mr="sm">
              <Text size="24px" mt="10px" ml="15px" mb="sm">
                Range
              </Text>
              <Text size="24px" mr="5px" className="selectBurnText">
                <SelectBurn
                  selectedOption={selectedOption}
                  handleOptionChange={handleOptionChange}
                />
              </Text>
            </Flex>
            <Box
              ml="10px"
              mr="10px"
              bg="#ffffff"
              style={{ borderRadius: "5px" }}
            >
              <Burndown
                selectedOption={selectedOption}
                selectedRegion={selectedRegion}
                selectedModel={selectedModel}
              />
            </Box>
          </Box>
          <Box
            m="10px"
            p="5px"
            w="40%"
            bg="#EBEBEB"
            style={{ borderRadius: "5px" }}
            className="reportBox"
          >
            <Text size="24px" mt="10px" ml="15px">
              Battery Health
            </Text>

            <Box bg="#FFFFFF" m="10px" style={{ borderRadius: "5px" }}>
              <Ring
                regionData={batteryData[selectedRegion][selectedModel]}
                selectedModel={selectedModel}
              />
            </Box>
          </Box>
        </Flex>
        <Flex mt="10px" justify="space-between" className="reportFlex">
          <Box
            m="10px"
            p="5px"
            w="60%"
            bg="#EBEBEB"
            style={{ borderRadius: "5px" }}
            className="reportBox"
          >
            <Text size="24px" mt="10px" ml="15px">
              Bluetooth
            </Text>

            <Box m="10px" style={{ borderRadius: "5px" }} bg="#FFFFFF">
              <Bargraph
                selectedRegion={selectedRegion}
                selectedModel={selectedModel}
              />
            </Box>
          </Box>
          <Box
            m="10px"
            p="5px"
            w="40%"
            bg="#EBEBEB"
            style={{ borderRadius: "5px" }}
            className="reportBox"
          >
            <Text size="24px" mt="10px" ml="15px">
              Distance
            </Text>

            <Box m="10px" bg="#FFFFFF" style={{ borderRadius: "5px" }}>
              <center>
                <Donut
                  regionData={distanceData[selectedRegion]}
                  selectedModel={selectedModel}
                />
              </center>
            </Box>
          </Box>
        </Flex>
      </Paper>
    </Paper>
  );
};

export default Overview;

// import React from 'react'

// export default function Overview() {
//   return (
//     <div>Overview</div>
//   )
// }
