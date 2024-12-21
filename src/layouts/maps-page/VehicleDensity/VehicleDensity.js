import { useState } from "react";
import Bubble from "../../../layout-components/Maps-component/BubbleMap/Bubble";
import { Paper, Text, Flex, Group, Image } from "@mantine/core";
import RegionSelect from "./../../../layout-components/Maps-component/Maps-Selectbar/MapSelect";
import IconBike from "./../../../assets/icons/bike.png";
import IconService from "./../../../assets/icons/IconService.png";
import "./VehicleDensity.css";
export default function VehicleDensity() {
  const [selectedState, setSelectedState] = useState("India");

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  return (
    <Paper m="5px">
      <Paper px="lg" bg="#FFFFFF80" m="5px">
        <Flex align="center" justify="space-between" mx="xs">
          <Text size="24px" py="lg" className="MapsTitle">
            Vehicle Density
          </Text>
          <RegionSelect
            selectedOption={selectedState}
            onChange={handleStateChange}
          />
        </Flex>
        <Bubble selectedState={selectedState} />
        <Group gap="50px" ml="lg" mt="md">
          <Flex align="center" gap="md">
            <Text>Bike:</Text>
            <Image src={IconBike} h="35px" />
          </Flex>
          <Flex align="center" gap="md">
            <Text>Service Centre:</Text>
            <Image src={IconService} h="25px" />
          </Flex>
        </Group>
      </Paper>
    </Paper>
  );
}
