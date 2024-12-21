// DashboardService.js

import React, { useState, useEffect, useCallback } from "react";
import { Box, Flex, Group, Text, Button } from "@mantine/core";
import Pie from "../../dashboard-components/Pie-chart/Pie";
import "./DashboardService.css";
import { IconChevronRight } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const DashboardService = ({ serviceData, selectedRegion, selectedModel }) => {
  const [filteredServiceData, setFilteredServiceData] = useState(null);
  const navigate = useNavigate();

  const filterServiceData = useCallback(
    (region, model) => {
      const filteredData = serviceData.find((item) => item.Region === region);
      if (filteredData) {
        const modelData =
          model === "AllModels"
            ? filteredData.Models.find((m) => m.Model === "AllModels")
            : filteredData.Models.find((m) => m.Model === model);
        setFilteredServiceData(modelData);
      }
    },
    [serviceData]
  );

  const handleServiceList = () => {
    navigate(`/main-page/dashboard/DashboardServiceDueList`);
  };
  useEffect(() => {
    filterServiceData(selectedRegion, selectedModel);
  }, [filterServiceData, selectedRegion, selectedModel]);

  return (
    <Box className="service" bg="#ffffff">
      <Text id="service-title">Service Due</Text>
      <Flex
        align="center"
        justify="space-evenly"
        gap="xl"
        className="service-section"
      >
        <Pie
          serviced={filteredServiceData?.vehiclesServiced || 0}
          dueForService={filteredServiceData?.vehiclesDueForService || 0}
        />
        <Flex
          direction="column"
          align="flex-start"
          className="service-data"
          gap="sm"
        >
          <Text fw="500" size="14px" c="#000000" className="vehicleServiceText">
            Total Vehicles - {filteredServiceData?.totalVehicles || 0}
          </Text>
          <Group mt="md">
            <Box h="19px" w="19px" bg="#6D6BCB"></Box>
            <Text
              c="#00000091"
              fw="400"
              size="12px"
              className="vehicleServiceText"
            >
              Vehicles Serviced - {filteredServiceData?.vehiclesServiced || 0}
            </Text>
          </Group>
          <Group mt="xs">
            <Box h="19px" w="19px" bg="#838383"></Box>
            <Text
              c="#00000091"
              size="12px"
              fw="400"
              className="vehicleServiceText"
            >
              Vehicles due for service -
              {filteredServiceData?.vehiclesDueForService || 0}
            </Text>
          </Group>
          <Group mt="md">
            <Text
              c="#00000091"
              size="14px"
              fw="400"
              className="vehicleServiceText"
            >
              Service Reminder List
              <Button
                ml="sm"
                onClick={() => handleServiceList()}
                size="xs"
                bg="#182452"
              >
                VIEW
              </Button>
            </Text>
          </Group>
        </Flex>
      </Flex>
      {/* <Box ml="88%">
        <Button
          onClick={() => handleServiceList()}
          size="xs"
          bg="#838383"
        >
          <IconChevronRight />
        </Button>
      </Box> */}
    </Box>
  );
};

export default DashboardService;
