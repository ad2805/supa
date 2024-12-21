// Dashboard.js
import React, { useState } from "react";
import "./Dashboard.css";
import { Paper, Box, Flex, Group, Text } from "@mantine/core";
import DashboardTopSection from "../../layout-components/dashboard-components/DashboardTopSection/DashboardTopSection";
import DashboardHeatMap from "../../layout-components/dashboard-components/DashboardHeatMap/DashboardHeatMap";
import DashboardGoogleMap from "../../layout-components/dashboard-components/DashboardGoogleMap/DashboardGoogleMap";
import DashboardPopCity from "../../layout-components/dashboard-components/DashboardPopularCities/DashboardPopCity";
import DashboardRegionSelect from "../../layout-components/dashboard-components/DashboardRegionSelect/DashboardRegionSelect";
import DashboardModelSelect from "../../layout-components/dashboard-components/DashboardModelSelect/DashboardModelSelect";
import DashboardService from "../../layout-components/dashboard-components/DashboardService/DashboardService";
import serviceData from "./../../data/dashboard-service/DashboardService.json";
import DashboardBargraph from "../../layout-components/dashboard-components/DashboardBargraph/DashboardBargraph";

export default function Dashboard() {
  const [selectedRegion, setSelectedRegion] = useState("India");
  const [selectedModel, setSelectedModel] = useState("AllModels");

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const handleModelChange = (selectedModel) => {
    setSelectedModel(selectedModel);
  };

  return (
    <Paper bg="#EBEBEB" className="dashboard-header" pt="lg">
      <Flex
        justify="space-between"
        pl="md"
        pr="sm"
        className="dashboardSelectBar"
      >
        <Text>Dashboard</Text>
        <Flex gap="sm">
          <Box bg="#EBEBEB">
            <DashboardRegionSelect
              // selectedRegion={selectedRegion}
              onChange={handleRegionChange}
            />
          </Box>
          <Box bg="#EBEBEB">
            <DashboardModelSelect onChange={handleModelChange} />
          </Box>
        </Flex>
      </Flex>
      <Paper
        bg="#FFFFFF80"
        m="5px"
        p="lg"
        className="dashboard-container"
        radius="5px"
      >
        <Group mb="sm">
          <DashboardTopSection
            selectedRegion={selectedRegion}
            selectedModel={selectedModel}
          />
        </Group>
        <div className="maps-widget-container">
          <div className="map-temp-container">
            <Box className="google-map">
              <p>SOS</p>
              <DashboardGoogleMap />
            </Box>
            <Box className="calendar">
              <Box className="clendar-box">
                <Text mt="xs" ml="md" pb="sm">
                  Charging Time
                </Text>
                <DashboardBargraph
                  selectedRegion={selectedRegion}
                  selectedModel={selectedModel}
                />
                {/* <DashboardCalendar /> */}
              </Box>
            </Box>
          </div>
          <Box className="heat-map-container">
            <p>Temperature</p>
            <DashboardHeatMap
              selectedRegion={selectedRegion}
              selectedModel={selectedModel}
            />
          </Box>
        </div>
        <div className="city-service-container">
          <Box className="Pop-city" bg="#ffffff">
            <Text h={"10%"}>Popular Cities</Text>

            <Box
              h={"90%"}
              justify="center"
              style={{ alignItems: "center", display: "flex" }}
              // bg={"red"}
            >
              <DashboardPopCity />
            </Box>
          </Box>

          <DashboardService
            serviceData={serviceData}
            selectedRegion={selectedRegion}
            selectedModel={selectedModel}
          />
        </div>
      </Paper>
    </Paper>
  );
}
