import React, { useState } from "react";
import Heat from "../../../layout-components/Maps-component/Heatmap/Heat";
import { Paper, Text, Flex } from "@mantine/core";
import DashboardRegionSelect from "./../../../layout-components/dashboard-components/DashboardRegionSelect/DashboardRegionSelect"; // Replace with the correct path

export default function SignalStrength() {
  const [selectedState, setSelectedState] = useState("India");

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  return (
    <div>
      <Paper px="lg" bg="#FFFFFF80" m="5px">
        <Flex align="center" justify="space-between" mx="xs">
          <Text size="24px" py="lg" className="MapsTitle">
            Singnal Strength Density
          </Text>
          <DashboardRegionSelect
            selectedOption={selectedState}
            onChange={handleStateChange}
          />
        </Flex>
        <Heat selectedState={selectedState} />
      </Paper>
    </div>
  );
}
