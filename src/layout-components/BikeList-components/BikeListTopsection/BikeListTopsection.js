import { Flex, Group, Image, Text } from "@mantine/core";
import React from "react";
import bikeIcon from "../../../assets/icons/iconbike.png";
import milageIcon from "./../../../assets/icons/Milage.svg";
import speedIcon from "./../../../assets/icons/Speed.svg";
import bluetoothIcon from "./../../../assets/icons/Bluetooth.svg";

const BikeListTopsection = ({ vehicle }) => {
  const topSectionData = [
    {
      title: "Odo Meter",
      value: vehicle ? (vehicle.odometer) : "------",
      color: "#9C68C5",
      image: bikeIcon,
    },
    {
      title: "Average Range",
      value:  vehicle ? (vehicle.avgrange) : "------", 
      color: "#489CDA",
      image: milageIcon,
    },
    {
      title: "Average Speed",
      value:  vehicle ? (vehicle.avgspeed) : "------",
      color: "#71B6B2",
      image: speedIcon
    },
    {
      title: "Bluetooth Usage",
      value: vehicle ? (vehicle.bluetoothusage ) : "------",
      color: "#E0B92C",
      image: bluetoothIcon
    },
  ] ;

  const topSectionCard = topSectionData.map((data, index) => {
    return (
      <Group
        key={index}
        bg="#FFFFFF"
        justify="space-evenly"
        px="md"
        py="xl"
        style={{
          borderRadius: "5px",
        }}
        w="100%"
      >
        <Image src={data.image} />
        <Flex direction="column" align="center" gap="sm">
          <Text size="24px">{data.title}</Text>
          <Text size="24px" c={data.color}>
            {data.value}
          </Text>
        </Flex>
      </Group>
    );
  });

  return (
    <Flex className="topsection" w="100%" justify="space-between" gap="10px">
      {topSectionCard}
    </Flex>
  );
};

export default BikeListTopsection;
